import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Generate JWT Token (Use this when signing a token)
const generateToken = (email: string, role: string): string => {
    return jwt.sign(
        { email, role },
        process.env.JWT_SECRET as string,  // Ensure JWT_SECRET exists
        { expiresIn: '1h' }
    );
};

// Middleware to Verify JWT Token
export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access Denied", status: "error" });
        }

        const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        
        req.body.user = decoded; // Attach decoded user info to request
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token", status: "error" });
    }
};

// Export the token generator for use in authentication
export { generateToken };
