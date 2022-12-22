import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import React from "react";
import "./emailRow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ title, subject, description, time, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail")
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow-title">{title}</h3>

      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> -{description}</span>
        </h4>
      </div>

      <p className="emailRow-description">{time}</p>
    </div>
  );
}

export default EmailRow;
