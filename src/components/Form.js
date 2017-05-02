import React, { Component } from "react";
import Select from "./elements/Select";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import Input from './elements/Input'

class Form extends Component {
  render() {
    const { photos, filterType, onChange, options, sort, onClick, inputValue, onChangeSearch } = this.props;

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
        <InputGroup name="searchType">
          <Input
            name="searchValue"
            value={inputValue}
            onChange={onChangeSearch}
          />
        </InputGroup>
        <InputGroup name="sortType">
          <Button
            name="created_time"
            buttonText="Sort by Created Time"
            onClick={onClick}
          />
        </InputGroup>
        <InputGroup name="sortType">
          <Button
            name="likes count"
            buttonText="Sort by Likes"
            onClick={onClick}
          />
        </InputGroup>
        <InputGroup name="sortType">
          <Button
            name="comments count"
            buttonText="Sort by Comments"
            onClick={onClick}
          />
        </InputGroup>
        <p>{photos.length} Results</p>
      </form>
    );
  }
}

export default Form;
