import React, { Component } from 'react';
import { Input } from 'antd';

class Filters extends Component {
    onFilterChange = ({ target: { value } }) => {
        this.props.handleChange(value.toLowerCase());
    };

    render() {
        return (
            <div>
                <Input addonBefore="Filter:" placeholder="Name & City filter" onChange={this.onFilterChange} />
            </div>
        );
    }
}

export default Filters;
