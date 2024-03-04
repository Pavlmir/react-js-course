import React from "react";

class FormWithRef extends React.Component {
    constructor() {
        super();
        this.state = {
            card: "",
            email: ""

        };
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();

    }

    handleChange = (event) => {
        this.setState(() => ({ [event.target.name]: event.target.value }), () => {
            if (this.state.card.length === 16) {
                this.emailRef.current.focus();
            }

        });
    }

    componentDidMount() {
        console.log(this.cardRef);
        this.cardRef.current.focus();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.cardRef.current.value.length < 16) {
            alert("Введите больше смиволов для карты");
            return;
        }

        this.cardRef.current.value = "";

    }

    render() {
        const { card, email } = this.state;

        return <div>
            <input type="text"
                name="card"
                placeholder="card"
                value={card}
                onChange={this.handleChange}
                ref={this.cardRef}
            />
            <input type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                ref={this.emailRef}
            />
            <br />
            <button
                onClick={this.handleSubmit}
            >Send</button>
        </div>

    }
}

export { FormWithRef };