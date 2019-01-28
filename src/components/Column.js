import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { COLUMNS } from '../constants';

const ColumnName = styled.h2`
    text-align: center;
`;

class Column extends Component {
    handleClick = (id, direction) => {
        const { handleClick, columnNumber } = this.props;

        handleClick(
            id,
            COLUMNS[columnNumber],
            COLUMNS[(direction === 'left') ? columnNumber - 1 : columnNumber + 1],
        );
    }


    render() {
        return (
            <Fragment>
                <ColumnName>{this.props.name}</ColumnName>
                {this.props.columnArray.map(id => (
                    <Card
                        id={id}
                        columnNumber={this.props.columnNumber}
                        handleClick={this.handleClick}
                        key={id}
                        people={this.props.people}
                    />
                ))}
            </Fragment>
        );
    }
}

export default Column;
