// eslint-disable-next-line no-unused-vars
const BASE_URL = "https://api.tvmaze.com";

const apiGet = async(queryString) => {
    // eslint-disable-next-line no-template-curly-in-string
    const response =  await fetch('${BASE_URL}${queryString}');
    const body = await response.json(); 

    return body;
};

// eslint-disable-next-line no-template-curly-in-string
export const searchForShows = (query) => apiGet('/search/show?q=${query}')

