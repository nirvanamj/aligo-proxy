
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 대체 for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (req, res) => {
  // Favicon 요청 처리
  if (req.method === 'GET' && (req.url === '/favicon.ico' || req.url === '/favicon.png')) {
    const filePath = path.join(__dirname, '..', 'public', req.url); // favicon 파일 경로
    if (fs.existsSync(filePath)) {
      const icon = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'image/x-icon');
      res.status(200).end(icon);
    } else {
      res.status(404).json({ message: 'Favicon not found' });
    }
    return;
  }

  // POST 메서드만 허용
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // 여기에 알리고 API 연동 등 실제 로직 추가

      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
