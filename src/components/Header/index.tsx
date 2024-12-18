import Link from "next/link";
import type { FC } from "react";

export const Header: FC = () => {
	return (
		<header className="sticky top-0 left-0 flex items-center justify-between w-full p-4 text-white border-b-2">
			<Link href="/">Nextjs-Playground</Link>
		</header>
	);
};
