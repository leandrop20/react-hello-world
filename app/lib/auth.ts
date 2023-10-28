import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { IUser } from '../interfaces/IUser';
import { ICredentials } from '../interfaces/ICredentials';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,//24 * 60 * 60 = 24 hours
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
            async authorize(credentials: ICredentials | any): Promise<IUser | any> {
                if (!credentials) {
                    throw new Error('No credentials.');
                }

                const { username, password } = credentials;

                if (username != 'usertest' || password != '123123') {
                    throw new Error('Usuário ou senha inválido!');
                }

                // const res = await fetch('url_here', {
                //     method: 'POST',
                //     body: JSON.stringify({ username, password }),
                //     headers: {
                //         'Content-Type': 'application/json',
                //     }
                // });

                const user: IUser = {
                    id: 1,
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
    callbacks: {
        // async jwt({ token, user }) {
        //     if (user) {
        //         token.role = user.role;
        //     }

        //     return token;
        // },
        // session({ session, token }) {
        //     if (token && session.user) {
        //         session.user.role = token.role;
        //     }

        //     return session;
        // }
    }
};