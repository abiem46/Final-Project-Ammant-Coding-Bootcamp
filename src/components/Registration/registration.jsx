import { Alert } from "bootstrap";
import React from "react";
import { useState } from "react";


function Registration() {

    const [ Name, setName ] = useState ("");
    const [ Email, setEmail ] = useState ("");
    const [ Password, setPassword ] = useState ("");
    const [ Phone, setPhone ] = useState ("");
    const [ Flage, setFlage ] = useState (false);
    const [ Login, setLogin ] = useState (true);

   function handleSubmit(e) {
    e.preventDefault();
    if(!Name ||!Email ||!Password || !Phone){
        setFlage(true);

    }else{
        setFlage(false);
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem("Password", JSON.stringify(Password));

        console.log("save in local storage")
        console.log(!Login);
    }
   }

    return (
        <div>
            <form>
                <h1>Registration</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="masukkan nama anda"
                        onChange={(event)=> setName(event.target.value)}
                    />
                </div>
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
                <div>
                    <label htmlFor="">phone</label>
                    <input type="phone"
                        className="form-control"
                        placeholder="masukkan telepon anda"
                        onChange={(event)=> setPhone(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">REgistration</button>
                <p>Already Registration {" "} login in?</p>


                {Flage && (
                    <Alert color="primary" variant='danfer'>

                        please fill Every field
                    </Alert>
                )}
            </form>

        </div>
    );
}

export default Registration;