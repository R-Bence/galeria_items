import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from './Lista';

function Profile({ nev, email, kep }) {
  return (
    <div className='col-xl-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'>
      <div className="card">
        <img src={kep} alt={nev} className='card-img-top profileImg mx-auto' />
        <div className="card-body text-center">
          <h1 className="card-title">{nev}</h1>
          <p className="card-text">{email}</p>
          <button className="btn btn-primary">Önéletrajz</button>
        </div>
      </div>
    </div>

  );
}

export default Profile;
