import React from 'react'
import { COLUMNS } from '../constants'

class Card extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.id}</p>
                {(this.props.columnNumber !== 0) && (
                                <button onClick={() => this.props.handleClick(this.props.id, 'left')}>Move to Left</button>
                            )}

                            {(this.props.columnNumber !== COLUMNS.length - 1) && (
                                <button onClick={() => this.props.handleClick(this.props.id, 'right')}>Move to Right</button>
                            )}
            </div>
        )
    }
}

export default Card