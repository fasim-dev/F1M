export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // TEST GET
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      service: "FASIM 1M Signal API",
      status: "online",
      message: "Vercel API aktif"
    });
  }

  // WEBHOOK POST
  if (req.method === "POST") {
    try {
      const body = req.body;

      console.log("TRADINGVIEW SIGNAL:", body);

      return res.status(200).json({
        ok: true,
        received: body
      });

    } catch (error) {
      return res.status(400).json({
        ok: false,
        error: error.message
      });
    }
  }

  return res.status(405).json({
    ok: false,
    error: "Method not allowed"
  });
}
