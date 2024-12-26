function AddTodo() {
  return (
    <div
      classNameName="container 
    text-center"
    >
      <div classNameName="row kg-row">
        <div classNameName="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div classNameName="col-4">
          <input type="Date" />
        </div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
