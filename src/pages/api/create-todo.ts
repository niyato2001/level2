import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { title, description, isCompleted } = req.body;
      const todo = await prisma.todo.create({
        data: { title, description, isCompleted },
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
};

export default handler;
