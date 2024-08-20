function FilterTodo({ value, onChange }) {
  return (
    <div>
      <label>
        Фільтрувати тут:
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default FilterTodo;
