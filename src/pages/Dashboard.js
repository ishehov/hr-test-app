import React, { Component, Fragment } from 'react';
import { Row, Col, Spin } from 'antd';
import styled from 'styled-components';
import { fetchPeople } from '../api';
import { COLUMNS } from '../constants';
import { Filters, Column } from '../components';

const PaddingBlock = styled.div`
    padding: ${props => props.paddingTop || '0'} ${props => props.paddingRight || '50px'};
`;

const SpinnerWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

class Dashboard extends Component {
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
            return <SpinnerWrapper><Spin /></SpinnerWrapper>;
        }

        return (
            <Fragment>
                <PaddingBlock paddingRight="57px">
                    <Filters handleChange={this.handleFilterChange} />
                </PaddingBlock>
                <PaddingBlock paddingTop="50px">
                    <Row gutter={16}>
                        {COLUMNS.map((colKey, columnNumber) => (
                            // ANTD grid has 24 units. Computing Col width
                            <Col md={Math.round(24 / COLUMNS.length)} key={colKey}>
                                <Column
                                    name={colKey}
                                    people={this.state.people}
                                    columnArray={this.filterIdArray(this.state[colKey])}
                                    handleClick={this.movePersonId}
                                    columnNumber={columnNumber}
                                />
                            </Col>
                        ))}
                    </Row>
                </PaddingBlock>
            </Fragment>
        );
    }
}

export default Dashboard;
