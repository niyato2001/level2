import type { GetStaticProps, NextPage } from 'next';
import { PageHeader } from '@/component/common/template/PageHeader';
import { PageMain } from '@/component/common/template/PageMain';
import { ToDoProps } from '@/hook/useTodos';

import { prisma } from '@/lib/prisma';

const Home: NextPage<Props> = ({ count, todos }) => (
  <main className='mx-auto w-[420px]'>
    <PageHeader />
    <PageMain todos={todos} />
    {`現在のtodoの数は${count}です`}
    {/* <div> 最後のtodoのタイトルは{todos[2].description}です</div> */}
    {/* <button onClick={addHome} className='btn green-gradient'>
      追加
    </button> */}
  </main>
);

interface Props {
  count: number;
  todos: ToDoProps[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const count = await prisma.todo.count();
  const todos = await prisma.todo.findMany();
  return {
    props: {
      count,
      todos: JSON.parse(JSON.stringify(todos)),
    },
    revalidate: 60,
  };
};

export default Home;
