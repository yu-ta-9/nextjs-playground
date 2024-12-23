import Link from "next/link";

export default async function NotFound() {
	return (
		<div className="flex flex-col gap-4 p-12">
			<h1 className="text-2xl font-bold text-red-500">Not Found</h1>
			<p>
				<Link className="underline" href="/">
					Home
				</Link>
			</p>
		</div>
	);
}
