import React, { Component } from 'react';
import {
    Card, Avatar, Button,
} from 'antd';
import styled from 'styled-components';
import { COLUMNS } from '../constants';

const CardWrapper = styled.div`
    text-transform: capitalize;
    margin-bottom: 14px !important;
`;

class PersonCard extends Component {
    state = {
        person: this.props.people.find(el => el.id.value === this.props.id),
    };

    render() {
        const { columnNumber, handleClick, id } = this.props;
        const {
            name, picture, cell, location,
        } = this.state.person;

        return (
            // Here I've used Wrapper to not mix up AntD classes with styled-components generated classes
            <CardWrapper>
                <Card
                    actions={[
                        (columnNumber !== 0)
                            && <Button size="small" icon="left" onClick={() => handleClick(id, 'left')} />,
                        <Button size="small" icon="phone" href={`tel:${cell}`} />,
                        (columnNumber !== COLUMNS.length - 1)
                            && <Button size="small" icon="right" onClick={() => handleClick(id, 'right')} />,
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

export default PersonCard;
