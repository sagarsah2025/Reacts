function TodoItem({ todoName, todoDate }) {
  return (
    <div classNameNameName="container">
      <div classNameNameName="row kg-row">
        <div classNameNameName="col-6">{todoName}</div>
        <div classNameNameName="col-4">{todoDate}</div>
        <div classNameNameName="col-2">
          <button type="button" classNameNameName="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
