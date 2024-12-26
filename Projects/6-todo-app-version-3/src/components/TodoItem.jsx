function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div classNameNameName="container">
      <div classNameNameName="row kg-row">
        <div classNameNameName="col-6">{todoName}</div>
        <div classNameNameName="col-4">{todoDate}</div>
        <div classNameNameName="col-2">
          <button
            type="button"
            classNameNameName="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
