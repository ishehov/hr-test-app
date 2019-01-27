import React, { Component } from 'react';

class Filters extends Component {
    onFilterChange = ({ target: { value } }) => {
        this.props.handleChange(value);
    };

    render() {
        return (
            <div>
                <input placeholder="Name & City filter" onChange={this.onFilterChange} />
            </div>
        );
    }
}

export default Filters;
