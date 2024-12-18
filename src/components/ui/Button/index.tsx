import type { ComponentPropsWithRef, FC } from "react";

type Props = ComponentPropsWithRef<"button">;

export const Button: FC<Props> = (props) => {
	return (
		<button
			className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-400"
			{...props}
		>
			{props.children}
		</button>
	);
};
