import React, { Component } from "react";
import Select from "./elements/Select";
import InputGroup from "./elements/InputGroup";

class Form extends Component {
  render() {
    const { photos, filterType, onChange, options } = this.props;

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
        <p>{photos.length} Results</p>
      </form>
    );
  }
}

export default Form;
