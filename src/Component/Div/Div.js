import React from 'react';

const Div = (props) => {
    let styles = {
        width: props.width, 
        height: props.height, 
        backgroundColor: props.backgroundColor, 
        borderRadius: "10px",
        border: "1px solid gray",
        margin: "2px"
    }
    return (
        <div style={styles}></div>
    )
}

export default Div;