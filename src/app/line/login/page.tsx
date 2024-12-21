import { Form } from "@/app/line/login/_components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "LINE 連携",
};

async function Page() {
	return (
		<div className="flex flex-col gap-4 p-12">
			<h1>LINE 連携</h1>

			<p>LINE 連携ページです。</p>

			<Form />
		</div>
	);
}

export default Page;
