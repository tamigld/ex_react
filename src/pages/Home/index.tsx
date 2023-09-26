import './style.css'
import loginIMG from "../../assets/img/loginImg.png"

import logo from "../../assets/img/homepage/logo.png"


export default function Login(){
    return(
        <main id='login'>
            <section id='left-side'>
                <div>
                    <img src={loginIMG} alt="" />
                </div>
            </section>
            {/* <div className='efect'></div> */}

            <section id='rigth-side'>
                <div>
                    <img src={logo} alt="" />
                    <form className='formLogin' action="post">
                        <label htmlFor="name">
                            <input type="text" placeholder='Username' />
                        </label>
                        <label htmlFor="password">
                            <input type="password" placeholder='Password' />
                        </label>
                    <a href="#">Esqueceu a senha?</a>
                    <button>Login</button>
                    </form>
                </div>
            </section>
        </main>
    )
}