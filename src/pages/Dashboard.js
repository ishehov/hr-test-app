import React, { Component, Fragment } from 'react';
import {
    Row, Col, Spin, Alert,
} from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { COLUMNS } from '../constants';
import { Filters, Column } from '../components';
import { fetchPeople } from '../actions';

const PaddingBlock = styled.div`
    padding: ${props => props.paddingTop || '0'} ${props => props.paddingRight || '50px'};
`;

const CenteringWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

class Dashboard extends Component {
    // TODO: Use state array from redux
    state = {
        people: null,
        fetchError: null,
        filterValue: '',
        ...Object.assign({}, ...COLUMNS.map(el => ({ [el]: [] }))),
    }

    componentDidMount() {
        this.props.fetchPeople();
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
        if (this.state.fetchError) {
            return (
                <CenteringWrapper paddingTop="50px">
                    <Alert
                        message="There's some problem with getting the data :("
                        description={this.state.fetchError.message}
                        type="error"
                    />
                </CenteringWrapper>
            );
        }

        if (!this.state.people) {
            return <CenteringWrapper><Spin /></CenteringWrapper>;
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

// TODO: Use people array from redux
const mapStateToProps = state => ({
    people: state.dashboard.people
});

const mapDispatchToProps = ({
    fetchPeople: fetchPeople
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
