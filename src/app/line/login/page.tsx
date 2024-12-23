import { Form } from "@/app/line/login/_components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "LINE ログイン",
};

async function Page() {
	return (
		<div className="flex flex-col gap-4 p-12">
			<h1>LINE ログイン</h1>

			<p>LINE ログインページです。</p>

			<Form />
		</div>
	);
}

export default Page;
