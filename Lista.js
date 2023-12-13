import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Profile from './Profile'; // Add this import statement

const peoples = [
  {
    "nev": "Kiss József",
    "email": "kissjozsef@gmail.com",
    "kep": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    "nev": "Nagy Anita",
    "email": "nagyanita@gmail.com",
    "kep": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    "nev": "Óriás Bianka",
    "email": "oriasbianka@gmail.com",
    "kep": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

function Lista() {
  return (
    <div className="row">
      {peoples.map((person, index) => (
        <Profile nev={person.nev} email={person.email} kep={person.kep} key={index} />
      ))}
    </div>
  );
}

export default Lista;
