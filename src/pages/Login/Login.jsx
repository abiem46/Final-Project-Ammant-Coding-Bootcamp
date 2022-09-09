import React, { useState } from "react";

function Login() {

    const [Emaillog, setEmaillog] = useState("");
    const [Passwordlog, setPasswordlog] = useState("");
    const [Flagelog, setFlagelog] = useState(false);
    const [Home, setHome] = useState(true);
    return (
        <div>
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
                </div>
                </form>
        </div>
    )
}

export default Login