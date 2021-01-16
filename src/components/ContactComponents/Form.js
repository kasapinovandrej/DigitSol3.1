import React, { Component } from 'react';
import Spaceman from '../../assets/img/Group 667.png';

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        formModal: false
    }

    nameHandler = e => {
        this.setState({
            name: e.target.value,
        })
    }
    emailHandler = e => {
        this.setState({
            email: e.target.value,
        })
    }
    messageHandler = e => {
        this.setState({
            message: e.target.value,
        })
    }

    formResetInitialData = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
        })
        setTimeout(() => {
            this.setState({
                formModal: false
            })
        }, 3000)
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ formModal: true })
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        const request = new XMLHttpRequest();
        request.open("post", "contact-form.php");
        request.onload = () => {
            console.log(request.responseText);
        }
        request.send(data)

        this.formResetInitialData()
    }
    render() {
        return (
            <form className="form"
                onSubmit={this.submitHandler}
                action="contact-form.php"
                method="POST">
                <div className="form__wrap">
                    <div className={this.state.formModal ? 'form__modal' : 'hide'}>
                        <p className="form__p">Hvala što ste nas kontaktirali!</p></div>
                    <div className="form__box">
                        <img src={Spaceman} alt="spaceman" className="form__spaceman" />
                        <div className="form__leftbox">
                            <h2 className="form__h2">Pišite nam</h2>
                            <div className="form__inputbox">
                                <input className="form__input"
                                    onChange={this.nameHandler}
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Ime i prezime" />
                                <label htmlFor="name" className="form__label">Ime i prezime</label>
                            </div>
                            <div className="form__inputbox">
                                <input className="form__input"
                                    onChange={this.emailHandler}
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    placeholder="E-mail Adresa" />
                                <label htmlFor="email" className="form__label" >E-mail adresa</label>
                            </div>
                        </div>
                        <div className="form__rightbox">
                            <div className="form__messagebox">
                                <label htmlFor="text" className="form__message">Vaša poruka</label>
                                <textarea className="form__textarea"
                                    onChange={this.messageHandler}
                                    name="message"
                                    value={this.state.message}
                                    placeholder="Unesite Vašu poruku ovde..."></textarea>
                            </div>
                            <button className="form__button" type="submit">pošaljite poruku</button>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}

export default Form;