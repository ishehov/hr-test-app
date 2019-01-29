import React, { Fragment } from 'react';
import styled from 'styled-components';
import Card from './Card';

const ColumnName = styled.h2`
    text-align: center;
`;

const Column = props => (
    <Fragment>
        <ColumnName>{props.name}</ColumnName>
        {props.columnArray.map(id => (
            <Card
                id={id}
                columnNumber={props.columnNumber}
                key={id}
            />
        ))}
    </Fragment>
);

export default Column;
