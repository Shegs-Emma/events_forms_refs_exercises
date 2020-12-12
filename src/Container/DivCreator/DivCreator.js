import React, { Component } from 'react';
import Div from '../../Component/Div/Div';
import classes from './DivCreator.module.css';

export default class DivCreator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            divs: [],
            sn: "",
            width: "",
            height: "",
            backgroundColor: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const myDivs = [...this.state.divs];
        myDivs.push({sn: this.state.sn, width: this.state.width, height: this.state.height, backgroundColor: this.state.backgroundColor});

        this.setState({divs: myDivs})
    }
    render() {
        let myDiv = this.state.divs.map(myDiv => (
            <Div
                width={myDiv.width}
                height={myDiv.height}
                backgroundColor={myDiv.backgroundColor}
                key={myDiv.sn}
            />
        ))
        return (
            <div>
                <h2>Part 1</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3>Create a Div</h3>
                    <div>
                        <label>
                            Serial No
                            <input
                                placeholder="Serial"
                                name="sn"
                                onChange={this.handleChange}
                                value={this.state.sn}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Width
                            <input
                                placeholder="Preferred Width (px, %, em).."
                                name="width"
                                onChange={this.handleChange}
                                value={this.state.width}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Height
                            <input
                                placeholder="Preferred Height (px, %, em).."
                                name="height"
                                onChange={this.handleChange}
                                value={this.state.height}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Background Color
                            <input
                                placeholder="Prefered Color"
                                name="backgroundColor"
                                onChange={this.handleChange}
                                value={this.state.backgroundColor}
                            />
                        </label>
                    </div>

                    <input type="submit" value="Create Div" />
                </form>

                <div className={classes.DivCreator}>
                    {myDiv}
                </div>
            </div>
        )
    }
}