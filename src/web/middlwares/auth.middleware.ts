import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret = process.env.SECRET;
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded: any = jwt.verify(token, secret);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Not Authenticated");
  }
};
