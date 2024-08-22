function FilterTodo({ value, onChange, inputRef }) {
  return (
    <div>
      <label>
        Фільтрувати тут:
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={inputRef}
          autoFocus
        />
      </label>
    </div>
  );
}

export default FilterTodo;
