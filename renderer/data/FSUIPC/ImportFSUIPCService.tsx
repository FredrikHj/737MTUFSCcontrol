/* ================================================== Import FSUIPCService ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import checkReduxStoreTree from "../CheckStoreState";
import FSUIPCInfoContainer from './FSUIPCInfoContainer';
import { loadFsuipcService } from "./LoadFsuipcService";

import generalTexts from '../GeneralTexts';
import { log } from 'console';


var ImportFSUIPCService = ()=>{
    var storeListenerAppStart: any = checkReduxStoreTree("appStart");
    var storeListenerServiceFSUIPC: any = checkReduxStoreTree("serviceFSUIPC");

    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);

    useEffect(() => {

    },[storeListenerServiceFSUIPC]);
    var triggerConState = (e: any) => { 
        var targetButton = e.target.id;
        console.log('targetButton :', targetButton);
        if(targetButton === generalTexts.conButton["connect"]) {
            loadFsuipcService("connect");
            updateConButton(generalTexts.conButton["disconnect"]);
        }
        if(targetButton === generalTexts.conButton["disconnect"]) {
            loadFsuipcService("disconnect");            
            updateConButton(generalTexts.conButton["connect"]);
        }
    }
    console.log(storeListenerServiceFSUIPC);
    
    return (
      <Box
        sx={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Box sx={{
              width: "300px"
            }}>
              
            </Box>




            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
             >

              {(storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true) 
                ? <FSUIPCInfoContainer />
                : "Connection Data is Loading ..."
              }
            </Box>
          </Box>
        
      </Box>
    );
}
export default ImportFSUIPCService;

/*data	An object containing the information requested. See below for details.
errorCode	A short string to tell you what error occurred. null if success is true. See below for possible errors.
errorMessage	A longer description of the error. null if success is true*/