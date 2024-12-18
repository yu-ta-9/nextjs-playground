"use client";

import type { FC } from "react";

type Props = {
	todo: any;
};

export const Todo: FC<Props> = ({ todo }) => {
	return (
		<div className="p-12">
			<h1>Todo</h1>
			<p>{todo.name}</p>
		</div>
	);
};
