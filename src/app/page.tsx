import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between min-h-screen p-24">
			<div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
				<ul className="flex flex-col gap-4">
					<li>
						<Link className="text-blue" href="/todo/1">
							TODO詳細ページ
						</Link>
					</li>
					<li>
						<Link className="text-blue" href="/google">
							googleログイン
						</Link>
					</li>
					<li>
						<Link className="text-blue" href="/line">
							lineログイン
						</Link>
					</li>
					<li>
						<Link className="text-blue" href="/line/connect">
							line連携
						</Link>
					</li>
				</ul>
			</div>
		</main>
	);
}
