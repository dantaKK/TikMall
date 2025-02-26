import axios from 'axios';

const url = 'https://api.coze.cn/open_api/v2/chat';
const apiKey = 'pat_UDbfUujxA7jPBvfdojBBi8U3SKFzy9njL1jM0QVHglm7Ri0xDoZBr2oWhZtqntwP';
const botId = '7471917446459539468';

import type { FetchDataRequest } from '../types/cozeConfig';

async function getCozeData(content: string): Promise<any> {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    const data: FetchDataRequest = {
        "bot_id": botId,
        "conversation_id": "123456",
        "user": "user_1",
        "query": content,
        "stream": false,
        "chat_history": [
            { "role": "user" },
            { "role": "assistant", "type": "answer" }
        ]
    };

    try {
        const response: any = await axios.post(url, data, { headers });

        console.log(response);

        return response;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default getCozeData