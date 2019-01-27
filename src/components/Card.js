import React, { Component } from 'react';
import {
    Card, Avatar, Button, Spin,
} from 'antd';
import { COLUMNS } from '../constants';

class PersonCard extends Component {
    state = {
        person: null,
    }

    componentDidMount() {
        const person = this.props.people.find(el => el.id.value === this.props.id);

        this.setState({ person });
    }

    render() {
        if (!this.state.person) {
            return (
                <Spin />
            );
        }

        const {
            name, picture, cell, location,
        } = this.state.person;

        return (
            <Card
                style={{ textTransform: 'capitalize', marginBottom: 14 }}
                actions={[
                    (this.props.columnNumber !== 0) && <Button size="small" icon="left" onClick={() => this.props.handleClick(this.props.id, 'left')} />,
                    <Button size="small" icon="phone" href={`tel:${cell}`} />,
                    (this.props.columnNumber !== COLUMNS.length - 1) && <Button size="small" icon="right" onClick={() => this.props.handleClick(this.props.id, 'right')} />,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar size="large" src={picture.large} />}
                    title={`${name.first} ${name.last}`}
                    description={location.city}
                />
            </Card>
        );
    }
}

export default PersonCard;
