export default async function handler(req, res) {
  const secret = req.headers['x-api-secret'];
  if (secret !== 'moj-secret-123456') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method === 'POST') {
    const data = req.body;
    console.log('🧠 Brainrots:', data.brainrots?.length || 0, 'VPS:', data.vps_name || 'unknown', 'Job:', data.jobId);
    // Discord webhook (opciono - stavi svoj)
    // await fetch('https://discord.com/api/webhooks/TVOJ_WEBHOOK', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:`🧠 ${data.brainrots?.length} brainrots! Job: ${data.jobId}`})});
    res.json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
