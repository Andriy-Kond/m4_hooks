import { Component } from "react";

class Filter extends Component {
  render() {
    const { filter, handleFilter } = this.props;
    return (
      <label>
        Filter contacts here
        <input type="text" value={filter} onChange={handleFilter} />
      </label>
    );
  }
}

export default Filter;
