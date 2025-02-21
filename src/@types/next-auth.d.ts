import NextAuth from 'next-auth';

declare module 'next-auth' {
  export interface User {
    id: string;
    fullName: string;
    email: string;
    username: string;
    avatar_url: string;
  }

  interface Session {
    user: User;
  }
}
