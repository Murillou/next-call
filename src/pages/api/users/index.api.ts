// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { fullName, username } = req.body;

  const userExists = await prisma.user.findUnique({ where: { username } });

  if (userExists) {
    return res.status(400).json({ message: 'Username already exists.' });
  }

  const user = await prisma.user.create({
    data: {
      fullName,
      username,
    },
  });

  return res.status(201).json(user);
}
