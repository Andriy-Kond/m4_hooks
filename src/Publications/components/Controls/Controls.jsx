function Controls({ changeIndex, prevBtnDisabled, nextBtnDisabled }) {
  return (
    <section>
      <button
        // disabled={prevBtnDisabled}
        type="button"
        onClick={() => {
          changeIndex(-1);
        }}>
        Back
      </button>

      <button
        type="button"
        // disabled={nextBtnDisabled}
        onClick={() => {
          changeIndex(1);
        }}>
        Next
      </button>
    </section>
  );
}

export default Controls;
