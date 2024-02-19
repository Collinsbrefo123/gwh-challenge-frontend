import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Input,
  Button,
  CardFooter,
} from "reactstrap";
import { getTodos, setTodo } from "../../services/todos";

function ToDoComponent() {
  const [myTodo, setMyTodo] = useState("");
  const [myDescription, setMyDescription] = useState("");
  const allTodos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const getAllTodos = () => {
    dispatch(getTodos());
  };
  const addNewTodo = async() => {
    console.log(myTodo);
    console.log(myDescription);
    const currentTimestamp = Date.now();
    const now = new Date(currentTimestamp);

    const newTodo = {
      title: myTodo,
      description: myDescription,
      status: "New",
      due_date: now.toISOString(),
    };
    dispatch(setTodo(newTodo));
    setMyDescription("");
    setMyTodo("");
  };
  const handleTodoChange = (e) => {
    setMyTodo(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setMyDescription(e.target.value);
  };
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="container row">
      <div
        className="col-md-6 offset-md-6 mt-4"
        style={{
          width: "28rem",
        }}
      >
        <Card className="my-2 mx-4">
          <CardHeader>Create and Read</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Input Todo</CardTitle>
            <Input
              value={myTodo}
              onChange={handleTodoChange}
              type="text"
              className="my-4"
            />
            <Input
              value={myDescription}
              onChange={handleDescriptionChange}
              type="textarea"
              className="my-4"
            />
            <Button onClick={addNewTodo} className="">
              add todo
            </Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <div className="w-100">
          <p>All Todos (Refresh to Reset)</p>
          <ul>
            {allTodos.length > 0 ? (
              allTodos.map((eachTodo, index) => {
                return (
                  <li key={index}>
                    <div className="w-100 d-flex justify-content-between mx-4">
                      <p className="">{eachTodo.title}</p>{" "}
                      <span className="">
                        <Button className="btn-sm btn-success">
                          {eachTodo.status}
                        </Button>
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>No todos</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoComponent;
