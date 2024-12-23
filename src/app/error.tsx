"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col gap-4 p-12">
			<h2>Something went wrong!</h2>
			<p>
				<Link className="underline" href="/">
					Home
				</Link>
			</p>
		</div>
	);
}
