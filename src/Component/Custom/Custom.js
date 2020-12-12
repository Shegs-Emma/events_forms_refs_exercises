import React from 'react';
import classes from './Custom.module.css';

const Custom = (props) => (
    <div className={classes.Custom}>
        <a href={props.href} target={props.target} onClick={props.handleClick}>{props.text}</a>
    </div>
)

export default Custom;