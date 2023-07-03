/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import FSUIPCInfoContainer from './FSUIPCInfoContainer';
import { runServiceFsuipcConnect } from "./RunFSUIPCWebSocketConnect";
 
import generalTexts from '../GeneralTexts';

// Import external files 
//import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView, ExtStyleHeader } from '../data/PathForFilesFolder';

//import { muiLayot, muiComponents, muiFeedback } from '../data/muiHandler';
import { setTimeout } from 'timers';
import { log } from 'console';

var ImportFSUIPCService = ()=>{
    var getStoreAppStart: any = useSelector((state: any) => state["appStart"]);
    var getStoreServiceData: any = useSelector((state: any) => state["serviceFSUIPC"]);
    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);

    useEffect(() => {

    },[]);
    var triggerConState = (e: any) => {
        var targetButton = e.target.id;
        console.log('targetButton :', targetButton);
        if(targetButton === generalTexts.conButton["connect"]) {
            runServiceFsuipcConnect("opened");
            updateConButton(generalTexts.conButton["disconnect"]);
        }
        if(targetButton === generalTexts.conButton["disconnect"]) {
            runServiceFsuipcConnect("closed");            
            updateConButton(generalTexts.conButton["connect"]);
        }
    }
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "300px" }}>
              {generalTexts.services["fsuipc"].toUpperCase()}
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  color: "white",
                  backgroundColor:
                    getStoreServiceData["FSUIPCConnected"] === true
                      ? "green"
                      : "red",
                }}
                key={"3r2r"}
              >
                {[
                  getStoreServiceData["FSUIPCConnected"] === false &&
                    getStoreAppStart["connectionLoading"] === false && (
                      <Box>
                        Web{" "}
                        {generalTexts.conStates.fsuipc.webService["notStarted"]}
                      </Box>
                    ),
                  getStoreServiceData["FSUIPCConnected"] === false &&
                    getStoreAppStart["connectionLoading"] === true && (
                      <Box>
                        Web{" "}
                        {
                          generalTexts.conStates.fsuipc.webService[
                            "serviceLoading"
                          ]
                        }
                      </Box>
                    ),
                  getStoreServiceData["FSUIPCConnected"] === true &&
                    getStoreAppStart["connectionLoading"] === false && (
                      <Box>
                        Web{" "}
                        {generalTexts.conStates.fsuipc.webService["started"]}
                      </Box>
                    ),
                ]}
              </Box>
              <FSUIPCInfoContainer />
            </Box>
          </Box>
        }
      </Box>
    );
}
export default ImportFSUIPCService;

/*data	An object containing the information requested. See below for details.
errorCode	A short string to tell you what error occurred. null if success is true. See below for possible errors.
errorMessage	A longer description of the error. null if success is true*/