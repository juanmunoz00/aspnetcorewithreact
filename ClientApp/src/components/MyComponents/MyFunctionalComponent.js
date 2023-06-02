import React, { useEffect, useState, useRef } from 'react';

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

    const [age, setAge] = useState(25);

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

    /* CONDITIONAL RENDERING */
    /* An element of the component will be rendered depending if it fullifls a condition.
     */

    //const [aboveAge, setAboveage] = useState('John has more than 25 years');
    //const [lessOrEqualAge, setLessOrEqualage] = useState('John has 25 years or less');

    const aboveAge = "John has more than 25 years";
    const lessOrEqualAge = "John has 25 years or less";

    let JohnAge = () => {
        if (age > 25)
            return (<p>{ aboveAge }</p>)
        else
            return (<p>{ lessOrEqualAge }</p>)
    }

    /* ITERATIONS */
    /* Example 1
     * Use a mapped list
     * */

    /* Users dictionary */
    let users = [
        { name: 'Mateo', age: 35 },
        { name: 'Marcos', age: 40 },
        { name: 'Lucas', age: 45 },
        { name: 'Juan', age: 20 },
    ]

    let userList = users.map((user) =>
        <li key={user.name}>Name: {user.name} - Age: {user.age} </li>
    );

    /* USER FORM */
    /* Declare a state variable
     * Define the state change handling, in this case, user's name change
     * Define the form submit handle
     * 
    */
    
    const [userName, setUserName] = useState("David");
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
            alert("Form submitted. Value: " + userName)
    }

    /* REFS */
    /* Creates a const that holds a null value that then is referenced in a const method
     */
    const inputRefName = useRef(null);
    const inputRefTelephone = useRef(null);
    const clearReffFields = () => {
        inputRefName.current.value = "";
        inputRefTelephone.current.value = "";
        inputRefName.current.focus();
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

            { /* CONDITIONAL RENDERING */}
            <hr />
            <h3>Conditional Rendering</h3>

            {  /* EXAMPLE 1 - IF/ELSE */ }
            <span>
                {JohnAge()}
            </span>

            {  /* EXAMPLE 2 - TERNARY OPERATOR */}
            <span>
                <p>{ age > 25 ? aboveAge : lessOrEqualAge } </p>
            </span>

            {  /* EXAMPLE 3 - SHORT-CIRCUIT OPERATOR */}
            <span>
                {age > 25 && <p>{ aboveAge }</p>}
                {age <= 25 && <p>{ lessOrEqualAge }</p>}
            </span>

            {  /* EXAMPLE 4 - IMEDIATLY INVOKED FUNCTION */}
            <span>
                {
                    (() => {
                        switch (age) {
                            case 25: return (<p>{ aboveAge }</p>);
                            default: return (<p>{ lessOrEqualAge }</p>);
                        }
                    })()
                }
            </span>
            
            { /* CONDITIONAL RENDERING */}
            <hr />
            <h3>Iterations (list)</h3>
            <span>
                
                <ul>
                    {/* Example 1 - Display list loaded in a variable */}
                    {userList}
                    <br />
                    {/* Example 2 - Display list from a map in a function */ }
                    { users.map((user) =>
                        <li key={user.name}>Name: {user.name} - Age: {user.age} </li>)

                    }
                </ul>                
            </span>

            { /* FORM */}
            <hr />
            <h3>Form</h3>
            <span>
                <form onSubmit={handleSubmit}>
                    <lablel>
                        Name:
                        <input type="text" value={userName} onChange={handleUserNameChange} />
                    </lablel>
                    <input type="submit" value="submit" />
                </form>
            </span>

            { /* FORM */}
            <hr />
            <h3>Refs</h3>
            <span>
                <lablel>
                    Name:
                    <input type="text" ref={ inputRefName} placeholder="User Name" />
                </lablel>
                <lablel>
                    Telephone:
                    <input type="text" ref={inputRefTelephone}  placeholder="0123456789"/>
                </lablel>
                <button onClick={ clearReffFields.bind(this)} >Clear Fields</button>
            </span>

        </div>
    );
}