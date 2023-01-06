import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth, db } from "../../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email: string | undefined = credentials?.username;
        const pwd = credentials?.password;
        if (!email && !pwd) return null;
        try {
          const { user } = await signInWithEmailAndPassword(auth, email!, pwd!);

          //Getting data from firestore
          const docRef = doc(db, "users", user.uid!);
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()) {
            return null;
          }
          const data = docSnap.data();

          return {
            id: user.uid,
            name: data.name,
            email: user.email,
          };
        } catch (error) {
          console.error(error);

          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
    newUser: "/register", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export default NextAuth(authOptions);
