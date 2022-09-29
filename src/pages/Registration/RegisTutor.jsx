import React from "react";

const RegisTutor = () => {
  return (
    <div>
      <div className="container-user">
        <form onSubmit={daftarUser}>
          <h1>Registration</h1>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" placeholder="Masukkan Nama Anda" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" placeholder="Masukkan Email Anda" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" placeholder="Masukkan Password Anda" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input type="phone" className="form-control" placeholder="Masukkan Nomor Telepon Anda" onChange={(event) => setPhone(event.target.value)} />
          </div>
          <div>
            <label htmlFor="">Graduate</label>
            <input type="phone" className="form-control" placeholder="Masukkan Nomor Telepon Anda" onChange={(event) => setPhone(event.target.value)} />
          </div>
          <div>
            <label htmlFor="">Experience</label>
            <input type="phone" className="form-control" placeholder="Masukkan Nomor Telepon Anda" onChange={(event) => setPhone(event.target.value)} />
          </div>

          <br />
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block nt-5">
            Registration
          </button>
          <br />
          <br />

          <p>
            Already registration?
            <a href="/login">
              <span>Login</span>
            </a>
          </p>

          {Flage && (
            <Alert color="primary" variant="danfer">
              please fill Every field
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisTutor;
