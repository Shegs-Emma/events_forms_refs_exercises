import React, { Component } from 'react';
import Custom from '../../Component/Custom/Custom';
import classes from './CustomLink.module.css';

export default class CustomLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    id: 1,
                    href: "https://www.google.com/",
                    text: "Google Page",
                    style: ""
                },
                {
                    id: 2,
                    href: "https://topnow.se/",
                    text: "TopNow Page",
                    style: ""
                },
                {
                    id: 3,
                    href: "https://o2tvseries.com/",
                    text: "o2tvseries Page",
                    style: ""
                }
            ],
            style: null
        }
    }

    handleClick(id) {
        const { links } = this.state;
        const myLinks = links;
        let selectedLink = myLinks.filter(mlink => mlink.id === id);
        selectedLink[0].target = "_blank";
        this.setState({ links: myLinks });
    }

    handleSwitch() {
        const myStyle = !this.state.style ? classes.CustomLink : "";
        this.setState({ style: myStyle });
    }

    render() {
        let displayLinks = this.state.links.map(link => {
            let myTarget = link.target ? link.target : null;
            return (
                <Custom
                    key={link.id}
                    href={link.href}
                    text={link.text}
                    target={myTarget}
                    handleClick={this.handleClick.bind(this, link.id)}
                />
            )
        })

        return (
            <div className={this.state.style}>
                <div>
                    <h1>Part 1</h1>
                    <h3>Links Switcher</h3>
                    {displayLinks}
                </div>

                <button onClick={this.handleSwitch.bind(this)}>Switch</button>
            </div>
        )
    }
}