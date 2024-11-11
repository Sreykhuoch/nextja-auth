import CredentialProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { loginService } from "./service/auth.service";

export const authOption = {
    providers: [
        // Login by email and password
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(userInfo) {

                //defined object structure 
                 const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password
                 };

                 const login = await loginService(newUserInfo);
                 return login.payload;
            },
        }),
    ],


    //use to set token to cookies
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user};
        },

        async session({session, token}){
            session.user = token;
            return session;
        }
    }
    // Add other NextAuth options here if needed
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
