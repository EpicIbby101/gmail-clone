import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "./features/mailSlice";
import "./mail.css";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return <div className="mail">
    <div className="mail-tools">
      <div className="mail-toolsLeft">
        <IconButton onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>

        <IconButton>
          <MoveToInbox />
        </IconButton>

        <IconButton>
          <Error />
        </IconButton>

        <IconButton>
          <Delete />
        </IconButton>

        <IconButton>
          <Email />
        </IconButton>

        <IconButton>
          <WatchLater />
        </IconButton>

        <IconButton>
          <CheckCircle />
        </IconButton>

        <IconButton>
          <LabelImportant />
        </IconButton>

        <IconButton>
          <MoreVert />
        </IconButton>

      </div>
      <div className="mail-toolsRight">
      <IconButton>
          <UnfoldMore />
        </IconButton>

        <IconButton>
          <Print />
        </IconButton>

        <IconButton>
          <ExitToApp />
        </IconButton>

      </div>
    </div>
    <div className="mail-body">
      <div className="mail-bodyHeader">
        <h2>{selectedMail?.subject}</h2>
        <LabelImportant className="mail-important " />
        <p>{selectedMail?.title}</p>
        <p className="mail-time">{selectedMail?.time}</p>
      </div>

      <div className="mail-message">
        <p>{selectedMail?.description}</p>
      </div>
    </div>
  </div>;
}

export default Mail;
