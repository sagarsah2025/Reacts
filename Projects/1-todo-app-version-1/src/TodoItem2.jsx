function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "12/12/2024";
  return (
    <div classNameName="Container">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
