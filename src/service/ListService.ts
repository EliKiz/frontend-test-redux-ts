
const FILTERS_URL = "http://localhost:3001/filters";

const CARDS_URLD = "http://localhost:3001/cards";

const Service = () => { 

    const requestFilters = async () => { 
        const response = await fetch(FILTERS_URL);
        return response.json();
    };

    const requestCards = async() => { 
        const response = await fetch(CARDS_URLD);
        return response.json();
    };

    return {requestFilters, requestCards};
};

export default Service;