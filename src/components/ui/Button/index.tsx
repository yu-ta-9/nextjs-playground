import clsx from "clsx";
import type { ComponentPropsWithRef, FC } from "react";

type Props = ComponentPropsWithRef<"button">;

export const Button: FC<Props> = (props) => {
	return (
		<button
			{...props}
			className={clsx(
				"px-4 py-2 bg-green-500 rounded-md hover:bg-green-400",
				props.className,
			)}
		>
			{props.children}
		</button>
	);
};
