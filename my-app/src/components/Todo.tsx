import { Checkbox, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IProps } from "../App";
import CancelIcon from "@mui/icons-material/Cancel";

interface ITodo {
  todoList: IProps;
  handleDelete(selected: string | number): void;
}
const Todo: React.FC<ITodo> = ({ todoList, handleDelete }) => {
  const handleClick = () => {
    handleDelete(todoList.id);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "50%" }}>
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            marginTop: "2%",
            border: "1px solid black",
          }}
        >
          <Grid item xs={4}>
            <Checkbox />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            {todoList.name}
          </Grid>
          <Grid item xs={6}>
            <CancelIcon
              onClick={handleClick}
              sx={{
                cursor: "pointer",
                "&:hover": { color: "red", transition: "color 0.5s" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Todo;
