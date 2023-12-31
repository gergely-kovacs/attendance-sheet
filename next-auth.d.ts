import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: number;
      email: string;
      name: string;
      role: "ADMIN" | "USER";
    } & DefaultSession["user"];
  }
  interface User {
    id: number;
    email: string;
    name: string;
    role: "ADMIN" | "USER";
  }
}
