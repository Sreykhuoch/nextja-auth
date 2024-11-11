# Create nextjs : npx create-next-app@latest [project-name]

# push code to existing repository : 
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/Sreykhuoch/nextja-auth.git
    git push -u origin main

# folder : 

    1. create folder src/app/(auth)   {(auth) = route group, easy for managing folder }
    2. create src/app/(auth)/login  and  create src/(auth)/register


# flow : 

- sign in : should be happen in the client first, so we need to use 'use client' because we use onChange to handle input which is a client component ('use client' is a need)

# Add API route for Next Auth

- to use NextAuth , we have to install : yarn add next-auth (in case use yarn)  / npm install next-auth

- to add NextAuth.js to a project create a file in app/api/auth/[...nextAuth]/route.js  (this contain the dynamiic route handler for NextAuth.js)

- we also need to give providers (mean that we can log in thorugh github, gitlab, facebook, google, etc..)

- provider is an category  of how we are login 

- gmail and password are called : credentails provider

# In this practice, we are using credentail provider : 

- so we have to call CredentialProvider({})

# import 
       import CredentialProvider from "next-auth/providers/credentials"
       import signIn from "next-auth/react"

-  code : export const authOption = {
                providers: [
                    CredentialProvider({})
                ]
            };

            const handler = nextAuth(authOption);
            export {handler as GET, handler as POST};


# signIn function  , request 2 parameters : 

    1. providers (log in tam na)
    2. function to handle input 

# use to set token to cookies
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user};
        },

        async session({session, token}){
            session.user = token;
            return session;
        }
    } 

<!-- 32:18  > set token in cookies -->