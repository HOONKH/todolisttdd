import { useState } from "react";

const CreateTodo = () => {
  const [createTodo, setCreateTodo] = useState("");

  onClickSubmitTodo = (e) => {
    e.preventDefault();

    if (!createTodo) return;

    setCreateTodo("");
  };

  return (
    <form onSubmit={onClickSubmitTodo}>
      <input
        type="text"
        placeholder="할일입력!"
        value={createTodo}
        onChange={(e) => setCreateTodo(e.target.value)}
      />
      <input type="submit" value="투두생성!" />
    </form>
  );
};

export default CreateTodo;
