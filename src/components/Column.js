import React, { Component } from 'react'
import Card from './Card'
import { COLUMNS } from '../constants'

class Column extends Component {
    handleClick = (id, direction) => {
        const { handleClick } = this.props;
        handleClick(
            id,
            COLUMNS[this.props.columnNumber],
            COLUMNS[('left' === direction) ? this.props.columnNumber - 1 : this.props.columnNumber + 1]
        );
    }



    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                {this.props.columnArray.map(id => (
                    <div key={id}>
                        <Card id={id} />

                            {(this.props.columnNumber !== 0) && (
                                <button onClick={() => this.handleClick(id, 'left')}>Move to Left</button>
                            )}

                            {(this.props.columnNumber !== COLUMNS.length - 1) && (
                                <button onClick={() => this.handleClick(id, 'right')}>Move to Right</button>
                            )}
                    </div>
                ))}
            </div>
        )
    }
}

export default Column