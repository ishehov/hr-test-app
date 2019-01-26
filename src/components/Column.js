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
                    <div key={id}>
                        <Card
                            id={id}
                            columnNumber={this.props.columnNumber}
                            handleClick={this.handleClick}
                        />

                    </div>
                ))}
            </div>
        )
    }
}

export default Column