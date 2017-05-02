import React, { Component } from "react";
import Select from "./elements/Select";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

class Form extends Component {
  render() {
    const { photos, filterType, onChange, options, sort, onClick } = this.props;

    return (
      <form>
        <InputGroup name="filterType" labelText="Type of instagram Filter">
          <Select
            name="filterType"
            value={filterType}
            options={options}
            onChange={onChange}
          />
        </InputGroup>
        <InputGroup name="sortType">
          <Button
            name="created_time"
            buttonText="Sort by Created Time"
            onClick={onClick}
          />
        </InputGroup>
        <p>{photos.length} Results</p>
      </form>
    );
  }
}

export default Form;
