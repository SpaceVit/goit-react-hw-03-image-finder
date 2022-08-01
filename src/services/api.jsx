// const response = await fetch(
//   `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&${PARAMS}&per_page=${PER_PAGE}`
// );
// const data = await response.json();
// const images = data.hits;

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27870956-21998cd572eb995cd3177eee7';
const PARAMS = 'image_type=photo&orientation=horizontal';

const fetchedImages = async (query, page, perPage) => {
  const { data } = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&${PARAMS}&per_page=${perPage}`
  );
  return data;
};

export { fetchedImages };
