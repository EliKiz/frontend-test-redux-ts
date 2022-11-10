
const FILTERS_URL = "http://localhost:3001/filters";
const CARDS_URL = "http://localhost:3001/cards";



export const requestFilters = async () => { 
    const response = await fetch(FILTERS_URL);
    return response.json();
};
export const requestCards = async() => { 
    const response = await fetch(CARDS_URL);
    return response.json();
};

  


