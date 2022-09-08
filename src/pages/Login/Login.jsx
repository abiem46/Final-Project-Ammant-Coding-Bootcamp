import React from "react";

function Login() {
    return (
        <div>
             <form>
         <div>
           
                    <label htmlFor="">Email</label>
                    <input type="email"
                        className="form-control"
                        placeholder="masukkan Email anda"
                        onChange={(event)=> setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="masukkan Password anda"
                        onChange={(event)=> setPassword(event.target.value)}
                    />
                </div>
                </form>
        </div>
    )
}

export default Login