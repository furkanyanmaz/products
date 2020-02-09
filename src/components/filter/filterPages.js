import React from "react";
import {connect} from "react-redux";

class FilterPages extends React.Component{
    constructor(props) {
        super(props);

        this.onChange   = this.onChange.bind(this);

        this.state = {
            price:0
        }
    }


    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input type="number" name={"price"} value={this.state.price} onChange={this.onChange} />
                </form>
            </div>
        )
    }
};

export default connect(null)(FilterPages);