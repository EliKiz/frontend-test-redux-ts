export interface Card { 
    id: string,
    type: string,
    name: string,
    product: string,
    description: string,
    seller: string,
    location: string,
    price: string,
    amount: string,
    costPerPiece: string,
    filter: string,
    favorite: boolean,
    addedDeals: boolean,
    payment: boolean,
    isButton: boolean | undefined
}


export interface FiltersData { 
    id: string,
    active: boolean,
    colored: string,
    label: string,
    value: string;
}

export interface InitialStateTypes { 
    filtersList: FiltersData[],
    activeFilter: "all" 
    status: "idle" | "loading" | "error",
    inputSearch: ""
}