
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const handler = async (req, res) => {
  // Favicon 요청 처리
  if (req.method === 'GET' && (req.url === '/favicon.ico' || req.url === '/favicon.png')) {
    const filePath = path.join(__dirname, 'public', req.url); // favicon 파일 경로
    if (fs.existsSync(filePath)) {
      res.status(200).sendFile(filePath);
    } else {
      res.status(404).json({ message: 'Favicon not found' });
    }
    return;
  }

  // POST 메서드만 허용
  if (req.method === 'POST') {
    try {
      const data = req.body; // Body 데이터를 처리

      // 예시: 알리고 API로 데이터를 전송
      // 필요한 API 호출을 여기에 추가

      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    // POST가 아닌 다른 메서드에 대해 405 상태 코드 반환
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
