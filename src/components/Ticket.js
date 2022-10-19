import React from "react";
import { PropTypes } from "prop-types";

function Ticket(props){

  return(
  <React.Fragment>
    <h3>({props.key}).{props.location} - {props.names}</h3>
    <p><em>{props.issue}</em></p>
    {/* This is a JSX comment. */}
    <hr/>
  </React.Fragment>);
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  key: PropTypes.string
};





export default Ticket;