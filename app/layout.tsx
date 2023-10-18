import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.module.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/auth';
import { AuthProvider } from './context/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: process.env.APP_NAME,
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	getServerSession(authOptions);

	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<AuthProvider>
					<header></header>
					<main>{children}</main>
					<footer></footer>
				</AuthProvider>
			</body>
		</html>
	);
}
