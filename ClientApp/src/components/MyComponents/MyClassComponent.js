import React, { Component, useEffect } from 'react'

export class MyClassComponent extends Component {
    render() {
        return (
            <div>
                <h2>
                    My Class Component
                </h2>
                <h3>
                    Hello there, { this.props.name ? this.props.name : "John" } !
                    </h3>
            </div>
        )
    }
}