import React, { Component } from 'react'
import Card from './Card'
import { COLUMNS } from '../constants'

class Column extends Component {
    handleClick = id => {
        const { handleClick } = this.props;
        handleClick(id, COLUMNS[0], COLUMNS[1]);
    }

    render() {
        console.log(this.props)

        return(
            <div>
                <h2>{this.props.name}</h2>
                {/* <div>{(() => console.log(this.props.people))}</div> */}
                {this.props.columnArray.map(id => (
                    <div key={id}>
                        <Card id={id} />

                        <button onClick={() => this.handleClick(id)}>Move to Left</button>

                        <button onClick={() => this.handleClick(id)}>Move to Right</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Column

// {{this.props.people.map(el => (
//                         <div key={el.id.value}>

//                             <p>{el.id.value}</p>
//                             <button onClick={() => this.handleClick(el)}>click me</button>

//                             {/*<p>{Object.keys(el.name).map(key => el.name[key]).join(' ')}</p>
//                             <p>{`${el.name.title} ${el.name.first} ${el.name.last}`}</p>
//                             <p>{el.email}</p>
//                             <p>{el.cell}</p>

//                         </div>
//                     ))}}