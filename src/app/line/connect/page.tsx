import { generateSecureRandomBase64 } from "@/lib/encryption";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: "LINE 連携",
};

async function Page() {
	const linkTokenRes = await fetch(
		`https://api.line.me/v2/bot/user/${process.env.NEXT_PUBLIC_LINE_USER_ID}/linkToken`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
			},
		},
	);
	console.log(linkTokenRes);
	const linkToken = (await linkTokenRes.json()).linkToken as string;

	if (!linkToken) {
		throw new Error("fetching linkToken is failed");
	}

	const user = await prisma.user.findUnique({
		where: {
			id: 1,
		},
	});

	if (!user) {
		notFound();
	}

	const nonce = generateSecureRandomBase64(user.id);
	const url = `https://access.line.me/dialog/bot/accountLink?linkToken=${linkToken}&nonce=${nonce}`;

	return (
		<div className="flex flex-col gap-4 p-12">
			<h1>LINE 連携</h1>

			<p>LINE 連携ページです。</p>

			<p className="flex gap-2">
				連携URL:
				<a href={url} target="_blank" rel="noopener noreferrer">
					{url}
				</a>
			</p>

			<p>linkToken: {linkToken}</p>
			<p>user</p>
			<ul>
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{Object.entries(user as any).map(([key, value]) => (
					<li key={key}>
						{key}: {String(value)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Page;
