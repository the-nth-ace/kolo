class User {
  id: string;
  email: string;
  passwordHash: string;
  isStaff: boolean;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt?: Date;
  token?: string;
  expiresOn?: string;

  role: [UserRole];
}

export enum UserRole {
  USER = "user",
  STAFF = "staff",
  ADMIN = "admin",
}
