import React from "react";

function Table(props) {
  return(
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={props.image} alt={props.first}{props.last}></img></td>
          <td>{props.first} {props.last}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.birthday}</td>
        </tr>
      </tbody>
    </table>
    );
}