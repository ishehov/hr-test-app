import React, { Component } from 'react';
import {
    Card, Avatar, Button,
} from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { movePersonId } from '../actions';
import { COLUMNS } from '../constants';

const CardWrapper = styled.div`
    text-transform: capitalize;
    margin-bottom: 14px !important;
`;

class PersonCard extends Component {
    handleClick = (id, direction) => {
        const { columnNumber, movePersonId } = this.props;

        return movePersonId(
            id,
            COLUMNS[columnNumber],
            COLUMNS[(direction === 'left') ? columnNumber - 1 : columnNumber + 1],
        );
    }

    render() {
        const {
            columnNumber, id, person: {
                name, picture, cell, location,
            },
        } = this.props;

        return (
            // Here I've used Wrapper to not mix up AntD classes with styled-components generated classes
            <CardWrapper>
                <Card
                    actions={[
                        (columnNumber !== 0)
                            && <Button size="small" icon="left" onClick={() => this.handleClick(id, 'left')} />,
                        <Button size="small" icon="phone" href={`tel:${cell}`} />,
                        (columnNumber !== COLUMNS.length - 1)
                            && <Button size="small" icon="right" onClick={() => this.handleClick(id, 'right')} />,
                    ]}
                >
                    <Card.Meta
                        avatar={<Avatar size="large" src={picture.large} />}
                        title={`${name.first} ${name.last}`}
                        description={location.city}
                    />
                </Card>
            </CardWrapper>
        );
    }
}

const mapStateToProps = ({
    dashboard: { people },
}, { id }) => ({
    person: people[id],
});

const mapDispatchToProps = ({
    movePersonId,
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
