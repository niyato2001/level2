import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const todo = await prisma.todo.update({
        data: req.body,
        where: { id: req.body.id },
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const todo = await prisma.todo.delete({
        where: { id: req.body.id },
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['PATCH', 'DELETE']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
};

export default handler;
