import React, { useState } from "react";

function Login() {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");
    const [Flagelog, setFlagelog] = useState(false);
    const [Home, setHome] = useState(true);
    return (
        <div>
            <h1>Login</h1>
             <form>
         <div>
           
                    <label htmlFor="">Email</label>
                    <input type="email"
                        className="form-control"
                        placeholder="masukkan Email anda"
                        onChange={(event)=> setEmaillog(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="masukkan Password anda"
                        onChange={(event)=> setPasswordlog(event.target.value)}
                    />
                </div><br /><br />
                <button type="submit" className="btn btn-dark btn-lg btn-block" >Login Boss</button>
                </form>
        </div>
    )
}

export default Login