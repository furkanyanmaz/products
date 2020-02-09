import React from "react";
import {connect} from "react-redux";
import ProductItem from "./productItem";


class ProductList  extends React.Component{
    render(){
        const {products} = this.props;
        return(
            <div className={"product-list"}>
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return{
        products:state.productReducer
    }
}


export default connect(mapStateToProps)(ProductList);