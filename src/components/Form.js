import React, {Component} from 'react'
import Select from './elements/Select'
import InputGroup from './elements/InputGroup'
import {
  getOptions
} from '../helpers/helpers'


class Form extends Component {

  render() {
    const {
      photos,
      filterType,
      onChange
    } = this.props

    return (
      <form>
          <InputGroup
            name="filter"
            labelText="Type of instagram Filter"
          >
            <Select
              name="filter"
              value={filterType}
              options={getOptions(photos)}
              onChange={onChange}
            />
          </InputGroup>


      </form>
    )
  }
}

export default Form