import { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
interface ResponseData {
  revalidated?: boolean;
  error?: string;
  message?: string;
  slugToRevalidate?: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  // check for the POST request
  if (req.method !== 'POST') {
    return res
      .status(400)
      .json({ error: 'Invalid HTTP method. Only POST requests are allowed.' });
  }

  // check for the secret token
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }

  try {
    // check that body is not empty
    const body = req.body;
    if (!body) {
      res.status(400).send({ error: 'Bad request (no body)' });
      return;
    }

    // get the slug to revalidate from body
    const slugToRevalidate = body.slugToRevalidate;
    if (slugToRevalidate) {
      await res.revalidate(`/detailing/${slugToRevalidate}`);
      return res.json({ revalidated: true, slugToRevalidate });
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ error: 'Error revalidating' });
  }
};

export default withSentry(handler);
