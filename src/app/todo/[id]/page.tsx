import { cache } from "react";

import { Todo } from "@/components/pages/Todo";
import { prisma } from "@/lib/prisma";

import type { Metadata } from "next";

type Props = {
	params: {
		id: string;
	};
};

// export const metadata: Metadata = {
//   title: 'Todo',
//   description: 'Todo description.',
// };

const getTodo = cache(async (id: number) => {
	const todo = await prisma.todo.findUniqueOrThrow({ where: { id } });
	return todo;
});

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const todo = await getTodo(Number(params.id));
	return { title: todo.name };
}

const TodoPage = async (props: Props) => {
	const params = await props.params;
	const todo = await getTodo(Number(params.id));
	return <Todo todo={todo} />;
};

export default TodoPage;
