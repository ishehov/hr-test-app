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
    componentDidMount() {
        this.props.fetchPeople();
    }

    filterIdArray = idArray => {
        const { filterValue, people } = this.props;

        // Filtering people array by first and last name and city
        return Object.keys(people).filter(personId => (
            idArray.includes(people[personId].id.value))
            && (
                `${people[personId].name.first} ${people[personId].name.last}`.includes(filterValue)
                || people[personId].location.city.includes(filterValue)
            ));
    };

    render() {
        if (this.props.fetchError) {
            return (
                <CenteringWrapper paddingTop="50px">
                    <Alert
                        message="There's some problem with getting the data :("
                        description={this.props.fetchError.message}
                        type="error"
                    />
                </CenteringWrapper>
            );
        }

        if (!Object.keys(this.props.people).length) {
            return <CenteringWrapper><Spin size="large" /></CenteringWrapper>;
        }

        return (
            <Fragment>
                <PaddingBlock paddingRight="57px">
                    <Filters />
                </PaddingBlock>
                <PaddingBlock paddingTop="50px">
                    <Row gutter={16}>
                        {COLUMNS.map((colKey, columnNumber) => (
                            // ANTD grid has 24 units. Computing Col width
                            <Col md={Math.round(24 / COLUMNS.length)} key={colKey}>
                                <Column
                                    name={colKey}
                                    columnArray={this.filterIdArray(this.props.columns[colKey])}
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

const mapStateToProps = ({
    dashboard: {
        people, loading, fetchError, filterValue, columns,
    },
}) => ({
    people,
    loading,
    fetchError,
    columns,
    filterValue,
});

const mapDispatchToProps = ({
    fetchPeople,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
