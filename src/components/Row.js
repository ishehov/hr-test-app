import React, { Component } from 'react'
import { fetchPeople } from '../api'
import { COLUMNS } from '../constants';
import Column from './Column'


class Row extends Component {
    state = {
        people: null,
        ...Object.assign({}, ...COLUMNS.map(el => ({ [el]: [] })))
    }

    componentDidMount() {
        fetchPeople()
            .then(people => ({
                people,
                [COLUMNS[0]]: people.map(el => el.id.value)
            }))
            .then(state => this.setState(state))
    }

    updateData = (id, from, to) => {
        if  (this.state[from].includes(id)) {

            this.setState({
                [from]: this.state[from].filter(el => (id !== el)),
                [to]: this.state[to].concat(id)
            })
        }
    }

    render() {
        if (!this.state.people) {
            return (
                <h1>Waiting for data</h1>
            );
        }

        return (
            <div className="row">
                {COLUMNS.map((colKey, columnNumber) => (
                    <div className="column" key={colKey}>
                        <Column
                            name={colKey}
                            people={this.state.people}
                            columnArray={this.state[colKey]}
                            handleClick={this.updateData}
                            columnNumber={columnNumber}
                        />
                    </div>
                ))}
            </div>
        );
    }


}

export default Row