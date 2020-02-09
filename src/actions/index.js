

export const deleteProduct  = (id) => {
    return{
        type:"DELETE_PRODUCT",
        payload:id
    }
};


export const filterPrice    = (price) => {
    return{
        type:"FILTER_PRICE",
        payload:price
    }
};

    export const filterSize = (size) => {
    return{
        type:"FILTER_SIZE",
        payload:size
    }
};


