
import axios from 'axios';

const handler = async (req, res) => {
  // POST 메서드 처리
  if (req.method === 'POST') {
    try {
      const data = req.body; // 여기서 body 데이터를 처리

      // 예시: 알리고 API로 데이터를 전송
      // 예시로 다른 API 호출이 필요하면 여기에 코드 추가

      res.status(200).json({ message: 'Success', data });
    } catch (error) {
      // 오류 발생 시 500 상태 코드와 오류 메시지 반환
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    // POST가 아닌 다른 메서드에 대해 405 상태 코드 반환
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
