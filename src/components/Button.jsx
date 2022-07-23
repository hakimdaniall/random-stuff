
// Import React (Mandatory Step).
import React from "react";

// Create a functional component
const Button = (props) => {
    return (
        <button className='align-center' onClick={props.callApi}> Click Here!</button>
    );
}

// Export Button Component
export default Button;