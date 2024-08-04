import React, { Component } from "react";
import style from "./style.module.css";

class Login extends Component {
    state = {
        email: '',
    };

    login = () => {
        alert("login...")
    }

    render() {
        return (
            <div id={style.container}>
            <form class={style.signup__form}>
                <div class={style.sign_up_row}>
                    <p>НЭВТРЭХ</p>
                </div>
                <div class={style.input__wrapper}>
                    <input type="email" id="email" name="email" class={style.input__field} placeholder="Your Email" required/>
                    <label for="email" class={style.input__label}>И-майл:</label>
                </div>
                <div class={style.input__wrapper}>
                    <input type="password" id="password" class={style.input__field} placeholder="Your password" required/>
                    <label for="password" class={style.input__label}>Нууц үг:</label>
                </div>
                <div className={style.forgetPass}>Нууц үгээ мартсан?</div>
                <button class={style.login_btn} type="submit">
                    <a class={style.login_link} href="#">Нэвтрэх</a>
                </button>
                <button class={style.signup_btn} type="submit">
                    <a class={style.signup_link} href="/index.html">Бүртгүүлэх</a>
                </button>
            </form>
        </div>
        )
    }
}
export default Login