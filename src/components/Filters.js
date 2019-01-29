import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { handleFilterChange } from '../actions';

class Filters extends Component {
    onFilterChange = ({ target: { value } }) => {
        this.props.handleFilterChange(value.toLowerCase());
    };

    render() {
        return (
            <div>
                <Input addonBefore="Filter:" placeholder="Name & City filter" onChange={this.onFilterChange} />
            </div>
        );
    }
}


const mapDispatchToProps = ({
    handleFilterChange,
});


export default connect(null, mapDispatchToProps)(Filters);
