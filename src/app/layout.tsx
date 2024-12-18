import "./globals.css";
import { Inter } from "next/font/google";

import { Header } from "@/components/Header";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next.js Playground",
	description: "Next.js Playground",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
