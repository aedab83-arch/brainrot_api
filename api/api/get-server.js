export default function handler(req, res) {
  const secret = req.headers['x-api-secret'];
  if (secret !== 'moj-secret-123456') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Rotiraj servere (dodaj svoje JobId-ove ovdje)
  const servers = [
    'f8e4b2a1-1234-5678-9abc-def012345678',  // Primjer 1
    'a1b2c3d4-5678-90ab-cdef-1234567890ef',  // Primjer 2
    '12345678-90ab-cdef-1234-567890abcdef'   // Dodaj više
  ];
  const randomServer = servers[Math.floor(Math.random() * servers.length)];
  console.log('🎯 VPS traži server:', randomServer);
  res.json({ job_id: randomServer });
}
