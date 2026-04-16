# Примеры

### async await

```js
import axios from "axios";

const API_URL = 'https://gateway.marvel.com/v1/public/characters';
const API_KEY = 'a5837db97d72016c81a7a776f4240db9';

const getDataAxios = async (url) => {
	const response = await axios.get(url, {
		params: {
			apikey: API_KEY
		}
	});
	return response.data.data.results;
}

const getDataResult = async () => {
	const data = await getDataAxios(API_URL);
	console.log(data);
}

getDataResult();
```
