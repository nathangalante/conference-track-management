import { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("component did mount", this.state);
        fetch("/")
            .then((resp) => resp.json())
            .then((data) => {
                console.log({ nathan: data.talk });
                this.setState({ user: data.talk });
            })
            .catch((err) => {
                console.log("Error", err);
            });
    }
}
