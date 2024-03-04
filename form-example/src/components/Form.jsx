import React from "react";

class Form extends React.Component {
    state = {
        firstName: "",
        email: "",
        message: "",
        select: "",
        subscription: false,
        gender: "",
        isAgreeWithTerms: false,
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleCheckboxChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked });

    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert("Введите больше смиволов")
        }
    }
    
    handleSubmit = () => {
        const isValidEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email.toLocaleLowerCase());
        if (!isValidEmail) {
            alert("You have entered an invalid email address!");
            return
        }

        if (!this.state.isAgreeWithTerms) {
            alert("You need accept all!");
            return
        }

        this.setState(
            {
                email: "",
                isAgreeWithTerms: false
            }
        )
        alert("Thank you!");
    }

    validateEmail = () => {
        if (!(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
            alert("You have entered an invalid email address!")
        }
    }

    render() {
        const { firstName, email, message, select, subscription, gender,
            isAgreeWithTerms } = this.state;

        return <div>
            <input type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
            />
            <br />
            <textarea
                name="message"
                value={message}
                onChange={this.handleChange}>

            </textarea>
            <br />
            <select name="select"
                value={select}
                onChange={this.handleChange}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>
                <input type="checkbox"
                    name="subscription"
                    checked={subscription}
                    onChange={this.handleCheckboxChange} />
                Subscription</label>
            <input type="radio"
                name="gender"
                value="male"
                onChange={this.handleCheckboxChange}
                checked={gender === "male"} /> Male
            <input type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={gender === "female"} /> Female
            <br />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="isAgreeWithTerms"
                    checked={isAgreeWithTerms}
                    onChange={this.handleCheckboxChange}
                />
                I agree with terms and conditions
            </label>
            <br />
            <button 
            onClick={this.handleSubmit}
            >Send</button>
        </div>

    }
}

export { Form };