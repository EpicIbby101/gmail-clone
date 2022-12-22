import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import "./sendMail.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const { register, handleSubmit, watch, formState: errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail-close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To..."
          type="email"
          {...register("to", { required: true })}
        />

        <input
          name="subject"
          placeholder="Subject..."
          type="text"
          {...register("subject", { required: true })}
        />

        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail-message"
          {...register("message", { required: true })}
        />

        <div className="sendMail-options">
          <Button
            className="sendMail-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
