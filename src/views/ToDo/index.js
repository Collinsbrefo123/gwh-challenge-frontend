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
  Alert,
} from "reactstrap";
import { getTodos, setTodo } from "../../services/todos";
import * as yup from "yup";

function ToDoComponent() {
  const [myTodo, setMyTodo] = useState("");
  const [myDescription, setMyDescription] = useState("");
  const [error, setError] = useState(false);
  const allTodos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const getAllTodos = () => {
    dispatch(getTodos());
  };

  // Define validation schema using yup
  const validationSchema = yup.object().shape({
    myTodo: yup.string().required("Todo title is required"),
    myDescription: yup.string().required("Description is required"),
  });

  const addNewTodo = async () => {
    try {
      // Validate input values against the schema
      await validationSchema.validate(
        { myTodo, myDescription },
        { abortEarly: false }
      );

      // Validation successful, proceed to add todo
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
      setError(false);
    } catch (error) {
      // Validation failed, handle errors
      console.error("Validation Error:", error);
      setError(true);
      // You can handle errors here, for example, display error messages to the user
    }
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
            {error && (
              <Alert className="d-flex justify-content-center" color="danger">
                All input must be filled
              </Alert>
            )}

            <CardTitle tag="h5">Input Todo</CardTitle>
            <Input
              value={myTodo}
              onChange={handleTodoChange}
              type="text"
              className="my-4"
              placeholder="Enter todo title"
            />
            <Input
              value={myDescription}
              onChange={handleDescriptionChange}
              type="textarea"
              className="my-4"
              placeholder="Enter todo description"
            />
            <Button onClick={addNewTodo} className="">
              Add Todo
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
