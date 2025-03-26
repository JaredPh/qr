import { serve } from "@hono/node-server";
import { Hono } from "hono";

import config from "./config";
import { getQrCode } from "./utils/qr";
import { isUrl } from "./utils/validation";

const { port } = config;
const app = new Hono();

app.get("/qr", async (c) => {
  const url = c.req.query("url");
  if (!url) {
    return c.json({ error: "URL parameter is required" }, 400);
  }

  if (!isUrl(url)) return c.json({ error: "INVALID_URL" }, 400);

  const base64Url = Buffer.from(url).toString("base64").replace(/=+$/, "");

  return c.redirect(`/qr/${base64Url}`);
});

app.get("/qr/:base64Url", async (c) => {
  try {
    const base64Url = c.req.param("base64Url");
    const url = Buffer.from(base64Url, "base64").toString("utf-8");

    if (!isUrl(url)) return c.json({ error: "INVALID_URL" }, 400);

    const qrCode = await getQrCode(url);

    return new Response(qrCode, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    return c.json({ error: "Failed to generate QR code" }, 400);
  }
});

console.log(`Server is running on port ${port}`);

const server = serve({
  fetch: app.fetch,
  port: port,
});

export default server;
