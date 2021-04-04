import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Employees by Name:</span>
        </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="ids"
          type="text"
          id="header-search"
          placeholder="employee name"
        />
        {/* <datalist id="breeds">
          {props.breeds.map((breed) => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
        <h4 className="remove-employee">
          {" "}
          Please click on the ✅ to remove employee
        </h4>
      </div>
    </form>
  );
}

export default SearchForm;
