export interface Card { 
    id: string,
    type: string,
    name: string,
    description: string,
    seller: string,
    location: string
}

export interface FiltersData { 
    id: string,
    active: boolean,
    colored: string,
    label: string,
    value: string;
}