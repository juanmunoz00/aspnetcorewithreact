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

    return (
        <div>
            {/*PROPS*/}
            <h2>Hello there, {props.name ? props.name : "John"} !!</h2>

            {/*STATE*/}
            <hr />
            <h3>State</h3>
            <span>
                <b>Age: </b>{age}
                <button onClick={() => setAge(age + 1)}> + </button>
                <button onClick={() => setAge(age - 1)}> - </button>                
            </span>
        </div>
    );
}