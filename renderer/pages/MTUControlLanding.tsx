/* ================================================== Input Form ==================================================
Import  modules */
import { initializeStore } from "../store";

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import checkReduxStoreTree, {
  handleStateChange,
} from "../data/CheckStoreState";
import loadMTUServices from '../data/LoadMTUServices';
import LoadingIndicator from "../data/LoadingIndicator";

import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import ImportFSUIPCService from '../data/FSUIPC/ImportFSUIPCService';
import ImportPhidgetsService from '../data/Phidgets/ImportPhidgetsService';

// Begin to listen for Store state´s changes 
    initializeStore.subscribe(handleStateChange)
    //checkReduxStoreTree();

var MTUControlLanding = ()=>{
    var storeListenerAppStart: any = checkReduxStoreTree("appStart");
    var storeListenerServiceFSUIPC: any = checkReduxStoreTree("serviceFSUIPC");
    var storeListenerServicePhidgets: any = checkReduxStoreTree("servicePhidgets");

    const [ updatedAppStartState, updateAppStartState ] = useState<any>(null);
 
    var getStoreAppStartData: any = useSelector((state: any) => state["appStart"]);
    const [appStarted, updateAppStarted] = useState<boolean>(false);
    const [isServicesLoading, updateIsServicesLoading ] = useState<boolean>(false);

    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);
    
    useEffect(() => {
            console.log('storeListenerAppStart :', storeListenerAppStart);

        // Load if app is not started
            if (appStarted === false && updatedAppStartState !==  null) { 
                updateIsServicesLoading(storeListenerAppStart["connectionLoading"]);
                updateAppStarted(true);
            }
       
        //Check the stor state tree. if change load the stater over again
            setTimeout(() => {
                updatedAppStartState !== checkReduxStoreTree("appStart") && 
                    updateAppStartState(storeListenerAppStart);
                updatedAppStartState !== null && updateConButton(updatedAppStartState["labelConButton"]);
            }, 2000);
    }, [storeListenerAppStart, storeListenerServiceFSUIPC, updatedAppStartState, getStoreAppStartData, appStarted, isServicesLoading, conButton]);

    console.log("storeListenerServiceFSUIPC :", storeListenerServiceFSUIPC);
      
    return( 
        <Box sx={{border: "1px solid red", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
           
            <Box sx={{width: "50%", display: "flex", flexDirection: "column", alignContent: "center"}}>
                <Box sx={{marginBottom: "10px", fontWeight: "bold", fontSize: "25px", letterSpacing: "20px", textDecoration: "underline"}}>
                    {generalTexts.services["fsuipc"].toUpperCase()}
                </Box>
                <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                    <Button sx={{width: "150px"}}id="fsuipc" onClick={loadMTUServices} variant="contained">
                        {(storeListenerAppStart["connectionLoading"] === true)
                            ? <>
                                <span className="spinner-border spinner-border-sm"></span><span className="marginLeft: 10px" onClick={loadMTUServices} id={conButton}>
                                    <Box sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-around"
                                            }}>
                                        Loading <LoadingIndicator/>
                                    </Box>
                                </span></>          
                            : conButton
                        }
                    </Button>
                        <Box
                            sx={{
                                width: "200px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                backgroundColor:
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true
                                    ? "green"
                                    : "red",
                            }}
                            key={"3r2r"}
                        >
                        {[
                        storeListenerServiceFSUIPC["FSUIPCConnected"] === false && storeListenerAppStart["connectionLoading"] === false && (
                            <Box>
                                Web{" "}
                                {generalTexts.conStates.fsuipc.webService["notStarted"]}
                            </Box>
                        ),
                        storeListenerServiceFSUIPC["FSUIPCConnected"] === false && storeListenerAppStart["connectionLoading"] === true && (
                            <Box>
                            Web{" "}
                            {
                                generalTexts.conStates.fsuipc.webService[
                                "serviceLoading"
                                ]
                            }
                            </Box>
                            ),
                        storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerAppStart["connectionLoading"] === false && (
                            <Box>
                            Web{" "}
                            {generalTexts.conStates.fsuipc.webService["started"]}
                            </Box>
                        ),
                        ]}
                    </Box>
            </Box>
            <ImportFSUIPCService/>
            
  
        </Box>
            <Box>                                        
                <ImportPhidgetsService/>
            </Box>
    </Box>
    );
}
export default MTUControlLanding;
    //<Box>{updatedAppStartState["conState"]}</Box>