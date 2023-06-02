import React, { useEffect, useState } from 'react';

export default function Hello(props) {

    /* COMPONENT LYFECYCLE */
    //function componentMount() {
    //    alert("Component rendered");
    //}

    //function componentUnmount() {
    //    alert("Leaving the component");
    //}

    //useEffect(() => {
    //    componentMount();
    //    return () => {
    //        componentUnmount();
    //    }

    //}, [])

    /* STATE */
    /* `age` is the state
     * `setAge` is the method of the state
     * `useState initilizes the state`
     * */

    const [age, setAge] = useState(20);

    /* EVENT HANDLING */
    /* The event handling is a method that will be executed when `something` hapens on the displayed page like a click.
     *  
     * */

    const onChangeAgeInput = (event) => {
        alert("Age has changed");
        setAge(parseInt(event.target.value));
    }

    const showDetails = (prTelephone) => {
        let name = props.name ? props.name : "John";
        alert('Name: ' + name + ' | Age:' + age + ' | Telephone: ' + prTelephone);
    }

    return (
        <div>
            {/* PROPS */}
            <h2>Hello there, {props.name ? props.name : "John"} !!</h2>

            {/* STATE */}
            <hr />
            <h3>State</h3>
            <span>
                <b>Age: </b><input type="number" value={age} onChange={ onChangeAgeInput}/>
                <button onClick={() => setAge(age + 1)}> + </button>
                <button onClick={() => setAge(age - 1)}> - </button>                
            </span>

            { /* EVENT HANDLING */}
            <hr />
            <h3>Event Handling</h3>
            <span>
                <b>Age: </b>{age}
                <button onClick={showDetails.bind(this, 123456) }> Show Details </button>
                
            </span>

        </div>
    );
}