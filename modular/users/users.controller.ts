import { Request, Response } from "express";
import {
  getUsersService,
  loginUsersService,
  updateRoleService,
  usersService,
} from "./users.sevice";
import bcrypt from "bcryptjs";
import { Users } from "./users.model";
import { deleteProductsService } from "../products/products.service";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const usersController = async (req: Request, res: Response) => {
  try {
    const users = req.body;
    const { email } = users;
    const isExiting = await Users.findOne({ email });
    if (isExiting) {
      res.status(400).json({
        message: "User already exists",
        status: "error",
      });
    }
    const result = await usersService(users);
    res.status(200).json({
      message: "Successfully created user",
      status: "success",
      data: result,
    });
  } catch (err) {
    throw new Error("Error");
  }
};

export const loginUsersController = async (req: Request, res: Response) => {
  try {
    // Ensure email and password are strings
    const email = req.body.email as string;
    const password = req.body.password as string;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        status: "error",
      });
    }

    // Fetch user from DB
    const user = await loginUsersService(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: "error",
      });
    }

    // Ensure user has a password before comparing
    if (!user.password) {
      return res.status(500).json({
        message: "User password is missing",
        status: "error",
      });
    }

    // Compare hashed password
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
        status: "error",
      });
    }
    // create jwt token
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    return res.status(200).json({
      message: "Successfully logged in",
      status: "success",
      data: user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await getUsersService();
    res.status(200).json({
      message: "Successfully get users",
      status: "success",
      data: result,
    });
  } catch (err) {
    throw new Error("Error");
  }
};

// delete user controller

export const deleteUsersController = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const result = await deleteProductsService(email);
    res.status(200).json({
      message: "Successfully deleted user",
      status: "success",
      data: result,
    });
  } catch (err) {
    throw new Error("Error");
  }
};

// update the role of a user

export const updateRoleController = async (req: Request, res: Response) => {
  try {
    const { email, role } = req.body;
    const result = await updateRoleService(email, role);
    res.status(200).json({
      message: "Successfully updated user role",
      status: "success",
      data: result,
    });
  } catch (err) {
    throw new Error("Error");
  }
};
