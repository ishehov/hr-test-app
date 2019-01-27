import React, { Component } from 'react'
import { COLUMNS } from '../constants'

class Card extends Component {
    state = {
        person: null
    }

    componentDidMount() {
        const person = this.props.people.find(el => el.id.value === this.props.id)

        this.setState({ person })
    }

    render() {
        if (!this.state.person) {
            return (
                <h1>Waiting for data</h1>
            );
        }

        const { name, picture, cell, email, location } = this.state.person;

        return(
            <div>
                <div><img src={picture.thumbnail} alt="" /></div>
                <h3>{name.first} {name.last}</h3>
                <p>
                    {location.city}<br />
                    <a href={`mailto:${email}`}>Email</a> <a href={`tel:${cell}`}>Phone</a>
                </p>

                {(this.props.columnNumber !== 0) && (
                    <button onClick={() => this.props.handleClick(this.props.id, 'left')}>Move to Left</button>
                )}

                {(this.props.columnNumber !== COLUMNS.length - 1) && (
                    <button onClick={() => this.props.handleClick(this.props.id, 'right')}>Move to Right</button>
                )}
            </div>
        )
    }
}

export default Card