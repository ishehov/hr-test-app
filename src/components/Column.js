import React from 'react'
import Card from './Card'

class Column extends React.Component {
//state = {name: 'its column'}
handleClick = id => {console.log(id);}

    render() {
        return(
            <div>
                <div>{console.log(this.props.people)}</div>
                    {this.props.people.map(el => (
                        <div key={el}>
                            <Card id={el} />

                            <button onClick={() => this.handleClick(el)}>Move to</button>
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