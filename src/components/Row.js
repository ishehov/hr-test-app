import React from 'react'
import fetchArray from '../api/fetchArray'
import Column from './Column'


class Row extends React.Component {
    state = {
        people: null,
        toDo: [],
        inProgress: [],
        done: [],
        id: null
    }

    componentDidMount() {
        fetchArray()
        .then(people => ({ people, toDo: people.map(el => el.id.value)}))
        .then(state => this.setState(state))
    }

    // updateData = (value) => {
    //         this.setState( { id:value } )
    //     }

    render(){

        if (!this.state.people) {
            return (
                <h1>Waiting for data</h1>
                );
        }

        // function move(from, to, id) {
        //     if  (this.state[from].includes(id)) {
        //         this.setState[from] = this
        //     }
        // }

        //Move id to id array of rowNum
        // function moveToRow(rowFrom, rowTo, element) {

        //     let temp = rowFrom.splice(element, 1)
        //     rowTo.push(temp[0])
        // }

        // moveToRow(row1, row2, 2)
        // moveToRow(row2, row3, 0)
        // moveToRow(row1, row2, 1)

        return (
            <div className="row">
                <div className="column">
                    <p>APPLIED</p>
                    <Column people={this.state.toDo} />
                </div>

                <div className="column">
                    <p>INTERVIEWING</p>
                    <Column people={this.state.inProgress} />
                </div>

                <div className="column">
                    <p>HIRED</p>
                    <Column people={this.state.done} />
                </div>
            </div>
            )
    }


}

export default Row