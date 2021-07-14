import React from "react";
import { TextField, withStyles } from "@material-ui/core";

export const SearchTextField = withStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      padding: 0,
      paddingLeft: 15,
      "&.Mui-focused": {
        backgroundColor: "#fff",
        "& fieldset": {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
      "&:hover": {
        "& fieldset": { borderColor: "transparent" },
      },
      "& fieldset": {
        borderColor: "transparent",
        borderWidth: 1,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 14px 14px 5px",
    },
  },
}))(TextField);
