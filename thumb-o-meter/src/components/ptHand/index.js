import React, { useState, useEffect } from "react";
import Hand from "../hand";
import Subheading from "../../components/subheading";
import { Input } from "@chakra-ui/react";
import style from "./ptHand.module.css";
import useSocketContext from "../../context/socketContext";
import useRoleContext from "../../context/roleContext";
import Push from "push.js";

function PtHand() {
  const [myColor, setMyColor] = useState("#2C276B");
  const [isRaised, setIsRaised] = useState(false);
  const [topic, setTopic] = useState("");
  const context = useSocketContext();
  const socket = context[0];
  const result = useRoleContext();

  const loggedUser = result[2];
  const name = loggedUser?.given_name;
  const picture = loggedUser?.picture;

  useEffect(() => {
    socket.on("participantLowerHand", ({ myUniqueNumber }) => {
      console.log(myUniqueNumber);
      console.log(socket.id);
      if (myUniqueNumber === socket.id) {
        setIsRaised(!isRaised);
        console.log(isRaised);
        console.log("hand lowered by coach");
      } else {
        console.log("is this running?");
      }
    });
  }, []);

  function raiseHand() {
    socket.emit("handRaised", { name: name, topic: topic, picture: picture });

    console.log(isRaised);
  }

  function lowerHand() {
    socket.emit("lowerhand");

    console.log("hand lowered by me");
    console.log(isRaised);
  }

  function handleChange(value) {
    setTopic(value);
    console.log(topic);
  }

  return (
    <div className={style.container} style={{ backgroundColor: myColor }}>
      <Subheading
        text={isRaised ? "Click To Lower Hand" : "Click To Raise Hand"}
      />
      <Hand
        isRaised={isRaised}
        setIsRaised={setIsRaised}
        raiseHand={raiseHand}
        lowerHand={lowerHand}
      />
      <Input onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default PtHand;
