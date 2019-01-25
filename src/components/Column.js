import React from 'react'

class Column extends React.Component {

handleLeftClick = id => {console.log(id);}
handleRightClick = id => {console.log(id);}

    render() {
        return(
            <div>
                <div>{console.log(this.props.people)}</div>
                    {this.props.people.map(el => (
                        <div key={el}>
                            <p>{el}</p>
                            <button onClick={() => this.handleLeftClick(el)}>Move to</button>
                            <button onClick={() => this.handleRightClick(el)}>Move to</button>
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