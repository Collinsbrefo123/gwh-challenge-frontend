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
import { addTodo } from "../../redux/reducer/slices/createRead.slice";



function ToDoComponent() {
  const [myTodo, setMyTodo] = useState('');
  const allTodos = useSelector((state) => state.todo.todo)
  const dispatch = useDispatch()

  const addNewTodo = () => {
    console.log(myTodo)
    dispatch(addTodo(myTodo))

  }
    const handleChange = (e) => {
      setMyTodo(e.target.value);
    };
  useEffect(() => {
  console.log(allTodos)
  }, [allTodos, myTodo])
  
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
              onChange={handleChange}
              type="text"
              className="my-4"
            />
            <Button onClick={addNewTodo} className="">
              add todo
            </Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <div>
          <p>All Todos (Refresh to Reset)</p>
          <ul>
            {allTodos.map((eachTodo, index) => {
              return <li key={index}>{eachTodo}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoComponent;
