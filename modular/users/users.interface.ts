interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    role: string;
    photo: string;
}

interface ILogin {
    email: string;
    password: string;
}

export { IUser, ILogin };  
