import React from "react";
//import "./style.css";

const styles = {
  borderStyle: {
    style: "solid",
    width: "3px",
    color: "#333333",
    padding: "10px",
  },
};

function Table(props) {
  return (
    <table className="table" style={styles.borderStyle}>
      <tbody className="tab" style={styles.borderStyle}>
        <tr className="row">
          <img alt={props.name} src={props.image} />
        </tr>
        <tr className="rowA">
          <strong>ID:</strong> {props.id}
        </tr>

        <tr className="rowB">
          <strong>Name:</strong> {props.name}
        </tr>
        <tr className="rowC">
          <strong>Occupation:</strong> {props.occupation}
        </tr>
        <tr className="rowD">
          <strong>Location:</strong> {props.location}
        </tr>
        <tr className="rowE">
          <span onClick={() => props.removeFriend(props.id)} className="remove">
            ✅
          </span>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
