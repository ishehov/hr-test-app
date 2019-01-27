import React, { Component } from 'react';
import { fetchPeople } from '../api';
import { COLUMNS } from '../constants';
import Filters from './Filters';
import Column from './Column';


class Row extends Component {
    state = {
        people: null,
        filterValue: '',
        ...Object.assign({}, ...COLUMNS.map(el => ({ [el]: [] }))),
    }

    componentDidMount() {
        fetchPeople()
            .then(people => ({
                people,
                [COLUMNS[0]]: people.map(el => el.id.value),
            }))
            .then(state => this.setState(state));
    }

    movePersonId = (id, from, to) => {
        if (this.state[from].includes(id)) {
            this.setState(prevState => ({
                [from]: prevState[from].filter(el => (id !== el)),
                [to]: prevState[to].concat(id),
            }));
        }
    }

    handleFilterChange = filterValue => {
        this.setState({ filterValue });
    }

    filterIdArray = idArray => {
        const { filterValue } = this.state;

        // Filtering people array by first and last name and city
        const resolvedPeopleArray = this.state.people.filter(person => (
            idArray.includes(person.id.value))
            && (
                `${person.name.first} ${person.name.last}`.includes(filterValue)
                || person.location.city.includes(filterValue)
            ));

        return resolvedPeopleArray.map(el => el.id.value);
    };

    render() {
        if (!this.state.people) {
            return (
                <h1>Waiting for data</h1>
            );
        }

        return (
            <div className="row">
                <Filters handleChange={this.handleFilterChange} />
                {COLUMNS.map((colKey, columnNumber) => (
                    <div className="column" key={colKey}>
                        <Column
                            name={colKey}
                            people={this.state.people}
                            columnArray={this.filterIdArray(this.state[colKey])}
                            handleClick={this.movePersonId}
                            columnNumber={columnNumber}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Row;
