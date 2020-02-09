import React from "react";

class ProductItem extends React.Component{
    render(){
        const {product} = this.props;
        return(
            <div className={"card"}>
                <div className="header"></div>
                <div className="product"> Product name : {product.product} </div>
                <div className="price"> Product price : {product.price}</div>
                <div className="size"> Product size : {product.size}</div>
            </div>
        )
    }
}

export default ProductItem;