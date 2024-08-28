function Filter({ filter, handleFilter }) {
  return (
    <label>
      Filter contacts here
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  );
}

export default Filter;
