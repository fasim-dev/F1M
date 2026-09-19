export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      service: "FASIM 1M SIGNAL API",
      status: "ONLINE",
      version: "1.0.0"
    });
  }

  if (req.method === "POST") {
    return res.status(200).json({
      ok: true,
      message: "Signal diterima",
      data: req.body || null
    });
  }

  return res.status(405).json({
    ok: false,
    error: "Method Not Allowed"
  });
}
