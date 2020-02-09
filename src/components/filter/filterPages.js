import React from "react";
import {connect} from "react-redux";
import {filterPrice} from "../../actions";


class FilterPages extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

        this.state = {
            price:2000
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    render(){
        this.props.filterPrice({price:this.state.price})
        return(
            <div>
                <form>
                    <input type="number" value={this.state.price} name={"price"} onChange={this.onChange} />
                </form>
            </div>
        )
    }
};

export default connect(null,{filterPrice})(FilterPages);
