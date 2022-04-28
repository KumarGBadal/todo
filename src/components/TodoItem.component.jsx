import React from "react";


const TodoItem = ({ todo }) => {
  return (
    <React.Fragment>
      <div className="todo flex align-items-center gap-small">
        <input type="checkbox" />
        {todo}
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
