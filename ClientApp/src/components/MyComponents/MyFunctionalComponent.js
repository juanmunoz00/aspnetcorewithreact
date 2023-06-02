import React, { useEffect } from 'react';

export default function Hello(props) {

    function componentMount() {
        alert("Component rendered");
    }

    function componentUnmount() {
        alert("Leaving the component");
    }

    useEffect(() => {
        componentMount();
        return () => {
            componentUnmount();
        }

    }, [])

    return (
        <div>
            Hello there, { props.name ? props.name : "John" } !!
        </div>
    );
}