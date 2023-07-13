import { Todo } from '@/components/pages/Todo';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import { cache } from 'react';

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

// TODO: Zennに書く！！
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const todo = await getTodo(Number(params.id));
  return { title: todo.name };
}

const TodoPage = async ({ params }: Props) => {
  const todo = await getTodo(Number(params.id));
  return <Todo todo={todo} />;
};

export default TodoPage;
