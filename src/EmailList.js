import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Icon, IconButton, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./emailList.css";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import Section from "./Section";
import { collection, addDoc, serverTimestamp, getDocs, onSnapshot } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);
  const userRef = collection(db, "emails");
  useEffect(() => {
    const getEmails = async () => {
        const data = await getDocs(userRef);
        setEmails(data.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        })))
    };
    getEmails();
   }, [])

//    useEffect(() => {
//     const getEmails = async() => {
//         const unsub = await getDocs(userRef);
//         console.log(unsub);
//         const my = onSnapshot(unsub);
//         console.log(my);
//     };
//     getEmails();
//    }, [])
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList-settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList-sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" selected />
        <Section Icon={LocalOffer} title="Promotions" color="green" selected />
      </div>

      <div className="emailList-list">
        {emails.map(({id, data: { to, subject, message, timestamp }}) => (
            <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
        ))}

        
      </div>
    </div>
  );
}

export default EmailList;
