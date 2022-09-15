


import { Alert } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
// import Login from "../Login/Login";




function Registration() {

    const [ Name, setName ] = useState ("");
    const [ Email, setEmail ] = useState ("");
    const [ Password, setPassword ] = useState ("");
    const [ Phone, setPhone ] = useState ("");
    const [ Flage, setFlage ] = useState (false);
    const [ Login, setLogin ] = useState (true);

   
    function handleSubmit(e) {
        console.log("ini kepanggil")
    e.preventDefault();
    if(!Name ||!Email ||!Password || !Phone){
        setFlage(true);

    }else{
        setFlage(false);

        let registerUser = {
            name: Name,
           email: Email, 
           password: Password,
           phone: Phone
        }
        localStorage.setItem("registerUser", JSON.stringify(registerUser));
      

        console.log("save in local storage")
        setLogin(!Login);
    }
   }




   function handleClick() {
    setLogin(!Login);
   }
   useEffect (()=>{
    console.log(Email, Password, Phone, Name)
   },[Email, Password, Phone, Name])
   
    return (
<>

        
        <div>

            <div className="container">


    
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
                </div><br /><br />
                <button onClick={(e)=>handleSubmit(e)}type="submit" className="btn btn-dark btn-lg btn-block nt-5" >Registration</button>
             <br /><br />

                    <p>Already registration?<a href="/login"><span>Login</span></a></p>

                {Flage && (
                    <Alert color="primary" variant='danfer'>

                        please fill Every field
                    </Alert>
                )}
            </form>
            </div>

        </div>

        </>
    );
}

export default Registration;