
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // Body 데이터를 처리

      // 예시: 알리고 API로 데이터를 전송
      const response = await axios.post('https://apis.aligo.in/send/', data, {
        params: {
          key: 'YOUR_API_KEY',
          user_id: 'YOUR_USER_ID',
          sender: 'YOUR_SENDER_NUMBER',
          receiver: data.phone,  // 예시로 받아온 데이터 사용
          msg: data.message,  // 예시로 받아온 메시지 사용
        }
      });

      res.status(200).json({ message: 'Success', data: response.data });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
