import React, { Component } from 'react'
import Card from './Card'
import { COLUMNS } from '../constants'

class Column extends Component {
    handleClick = (id, direction) => {
        const { handleClick, columnNumber } = this.props;

        handleClick(
            id,
            COLUMNS[columnNumber],
            COLUMNS[('left' === direction) ? columnNumber - 1 : columnNumber + 1]
        );
    }



    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                {this.props.columnArray.map(id => (
                    <Card
                        id={id}
                        columnNumber={this.props.columnNumber}
                        handleClick={this.handleClick}
                        key={id}
                        people={this.props.people}
                    />
                ))}
            </div>
        )
    }
}

export default Column