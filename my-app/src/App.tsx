import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Todo from "./components/Todo";
import { v4 } from "uuid";
export interface IProps {
  name: string;
  id: number | string;
}
const App = () => {
  const [todoName, setTodoName] = useState<string>("");
  const [todoList, setTodoList] = useState<IProps[]>([]);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodoName(e.target.value);
  };
  const handleCreate = () => {
    const todo = { name: todoName, id: v4() };
    setTodoList([...todoList, todo]);
    setTodoName("");
  };
  const handleDelete = (selected: number): void => {
    setTodoList(
      todoList.filter((item) => {
        return item.id !== selected;
      })
    );
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter Todo"
          variant="outlined"
          onChange={handleChange}
          sx={{
            width: "50%",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          value={todoName}
        />
        <Box>
          <Button
            variant="contained"
            onClick={handleCreate}
            size="large"
            sx={{ height: "55px", marginLeft: "20%" }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginTop: "4%" }}>
        {todoList.map((item: IProps) => {
          return (
            <Todo todoList={item} key={v4()} handleDelete={handleDelete} />
          );
        })}
      </Box>
    </Box>
  );
};

export default App;
