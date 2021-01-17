import React, { Component } from 'react';
import Spaceman from '../../assets/img/Group 667.png';
import axios from 'axios';

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        sent: false
    }

    //handle inputs
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
        })

        setTimeout(() => {
            this.setState({ sent: false })
        }, 3000)
    }

    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(err => {
                console.log('Poruka nije poslata');
            })
    }


    render() {
        return (
            <form className="form" onSubmit={this.formSubmit}>
                <div className="form__wrap">
                    <div className={this.state.sent ? 'form__modal' : 'hide'} >
                        <p className="form__p">Hvala što ste nas kontaktirali!</p></div>
                    <div className="form__box">
                        <img src={Spaceman} alt="spaceman" className="form__spaceman" />
                        <div className="form__leftbox">
                            <h2 className="form__h2">Pišite nam</h2>
                            <div className="form__inputbox">
                                <input className="form__input"
                                    name="name"
                                    type="text"
                                    placeholder="Ime i prezime"
                                    value={this.state.name}
                                    onChange={this.handleName} />
                                <label htmlFor="name" className="form__label">Ime i prezime</label>
                            </div>
                            <div className="form__inputbox">
                                <input className="form__input"
                                    name="email"
                                    type="email"
                                    placeholder="E-mail Adresa"
                                    onChange={this.handleEmail}
                                    value={this.state.email} />
                                <label htmlFor="email" className="form__label" >E-mail adresa</label>
                            </div>
                        </div>
                        <div className="form__rightbox">
                            <div className="form__messagebox">
                                <label htmlFor="text" className="form__message">Vaša poruka</label>
                                <textarea className="form__textarea"
                                    name="message"
                                    placeholder="Unesite Vašu poruku ovde..."
                                    value={this.state.message}
                                    onChange={this.handleMessage}></textarea>
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