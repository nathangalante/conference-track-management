import { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log("component did mount", this.state);
    }
    
}