import React from "react";

function Results(props) {
  return(
    <tbody>
      <tr>
        <td><img src={props.image} alt={props.first}{props.last}></img></td>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
    );
}

export default Results;