import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import NavBar from "../../components/navBar";
import AddUserForm from "../../components/addUserForm";
import UserTable from "../../components/userTable";
import SessionTable from "../../components/sessionTable";
import BackToHome from "../back-home";
import { createStandaloneToast } from "@chakra-ui/react";
import useRoleContext from "../../context/roleContext";
import Excel from "../../components/excel/excel";
import { config } from "../../config";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import MassAlert from "../../components/massAlert";

const Admin = () => {
  const [userTableData, setUserTableData] = useState([]);
  const [sessionTableData, setSessionTableData] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);
  const result = useRoleContext();
  const role = result[0];
  const { url } = config;

  useEffect(() => {
    fetch(`${url}/users`)
      .then((response) => response.json())
      .then((payload) => setUserTableData(payload.data))
      .catch((error) => burntToast(error));
  }, [updatePage]);

  useEffect(() => {
    fetch(`${url}/session`)
      .then((response) => response.json())
      .then((payload) => setSessionTableData(payload.data))
      .catch((error) => burntToast(error));
  }, [updatePage]);

  function deleteUser(email) {
    if (window.confirm("Are you sure?")) {
      fetch(`${url}/users/${email}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            successToast({
              name: "User Delete Success",
              message: "Successfully deleted user from the database.",
            });

            setUpdatePage(!updatePage);
          } else {
            burntToast({
              name: "Delete User Fail",
              message: "Failed to delete user.",
            });
          }
        });
    }
  }

  function deleteSession(uuid) {
    if (window.confirm("Are you sure?")) {
      fetch(`${url}/session/${uuid}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            successToast({
              name: "Session Delete Success",
              message: "Successfully deleted session from the database.",
            });

            setUpdatePage(!updatePage);
          } else {
            burntToast({
              name: "Delete Session Fail",
              message: "Failed to delete session",
            });
          }
        });
    }
  }
  function successToast(successObject) {
    const toast = createStandaloneToast();
    toast({
      title: successObject.name,
      description: successObject.message,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function burntToast(error) {
    const toast = createStandaloneToast();
    toast({
      title: error.name,
      description: error.message,
      status: "error",
      duration: 10000,
      isClosable: true,
    });
  }

  return (
    <>
      <NavBar />
      {role === "coach" ? (
        <main className={style.main}>
          <Accordion className={style.accordion} allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Add User Form
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <AddUserForm
                  updatePage={updatePage}
                  setUpdatePage={setUpdatePage}
                />
              </AccordionPanel>
            </AccordionItem>

            {/* Once functionality to add excel file has been fixed this can be uncommented
             <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Add Multiple Users
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Excel />
              </AccordionPanel>
            </AccordionItem> */}

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Send App Message
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <MassAlert />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Tabs className={style.tab}>
            <TabList>
              <Tab>Users</Tab>
              <Tab>Sessions</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className={style.userTable}>
                  <UserTable
                    tableData={userTableData}
                    deleteUser={deleteUser}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div className={style.sessionTable}>
                  <SessionTable
                    tableData={sessionTableData}
                    deleteSession={deleteSession}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
      ) : (
        <BackToHome />
      )}
    </>
  );
};
export default Admin;
