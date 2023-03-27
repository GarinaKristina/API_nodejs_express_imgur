import UrlData from './UrlData.js';
import { token } from './token.js';
import FormData from 'form-data';
let data = new FormData();
data.append('title', 'My dank meme album');
data.append('description', 'This album contains a lot of dank memes. Be prepared.');

class PutConfig {
  get putConfig() {
    return {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${UrlData.baseUrl}${UrlData.updateImage}`,
      headers: {
        Authorization: token,
        ...data.getHeaders(),
      },

      data: data,
    };
  }
}

export default new PutConfig();
