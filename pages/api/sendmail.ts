// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/aws-ses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  const result = await sendEmail(req.body);
    res.status(200).json(result);
}
