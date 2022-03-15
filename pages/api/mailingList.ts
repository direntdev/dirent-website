import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    message: string;
  }>
) {
  if (req.method === "PUT") {
    const email = JSON.parse(req.body).email;

    try {
      await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
        method: "PUT",
        body: JSON.stringify({
          contacts: [{ email }],
          list_ids: [process.env.SENDGRID_MAILING_ID],
        }),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
        },
      });

      res.status(200).send({
        message: "You will get notified when the app is ready!",
      });
    } catch {
      res.status(500).send({
        message: "Oups, something went wrong...",
      });
    }
  }
}
