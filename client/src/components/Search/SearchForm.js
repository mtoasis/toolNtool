import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "../../actions/dataAction"
import { Link, Redirect } from "react-router-dom";



let mapStateToProps = (store) => {
    return {
        data: store.data.data
    }
}

class SearchForm extends Component {

    constructor() {
        super()
        this.state = {
            term: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        // console.log(name, value)
        this.setState({
            [name]: value
        });
    };

    fetchData() {
        this.props.dispatch(fetchData(this.state.term))     
    }


    render() {
        const { data } = this.props;
        return (
            <div >
                <input name="term" onChange={this.handleInputChange} type="text" />
                <button onClick={this.fetchData.bind(this)}><Link to ="/findTool">Submit</Link></button>

            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchForm);
