import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    placeholder: 'your-username',
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: 'your-password',
                }
            },
            async authorize(credentials: any) {
                if (!credentials) {
                    throw new Error('No credentials.');
                }

                const { username, password } = credentials;

                const user = {
                    id: '1',
                    name: 'Admin',
                    email: 'admin@admin.com',
                };
                
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.role = user.role;
    //         }

    //         return token;
    //     },
    //     session({ session, token }) {
    //         if (token && session.user) {
    //             session.user.role = token.role;
    //         }

    //         return session;
    //     }
    // }
};
