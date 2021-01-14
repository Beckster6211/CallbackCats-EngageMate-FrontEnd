import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { Button, Progress, Stack, LightMode } from "@chakra-ui/react";
import useRoleContext from "../../context/roleContext";
import useSocketContext from "../../context/socketContext";

function SkPollResults({ stopPoll }) {
  const result = useRoleContext();
  const role = result[0];
  const loggedUser = result[2];
  const socketdata = useSocketContext();
  const socket = socketdata[0];
  const [data, setData] = useState();
  console.log({ role });
  console.log({ data });

  function calculateProgressBar(option) {
    const totalVotes = data.options.reduce((acc, curr) => acc + curr[2], 0);
    const resultvalue = (option[2] / totalVotes) * 100;
    console.log(resultvalue);
    return resultvalue;
  }

  useEffect(() => {
    socket.on("resultsUpdate", ({ data }) => {
      console.log({ data }, "skPollResults sockets");
      setData(data);
      //question, uuid, correct answer, options
      console.log({ data }, "resultsUpdate");
    });
  }, []);

  return (
    <div className={style.resultsDiv}>
      <LightMode>
        <h1>Live Poll Results</h1>
        {/* Display set question, options & progress bar for each*/}
        <h2>
          <strong>Question:</strong> {data ? data.question : "question"}
        </h2>
        <Stack spacing={5}>
          {/* render options and progress bars here
          from data */}
          {data?.options.map((option, i) => {
            return (
              <div key={i}>
                <p>
                  <strong>Option {option[0]}</strong>: {option[1]}
                </p>
                <Progress
                  colorScheme="pink"
                  value={calculateProgressBar(option) || 0}
                />
              </div>
            );
          })}
        </Stack>

        {role !== "bootcamper" && (
          <Button colorScheme="red" onClick={stopPoll}>
            Stop Session
          </Button>
        )}
      </LightMode>
    </div>
  );
}

export default SkPollResults;
