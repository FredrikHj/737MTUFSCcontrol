/* ================================================== Service Container ==================================================
Import  modules */
import { initializeStore } from "../store";

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import checkReduxStoreTree, {
  handleStateChange,
} from "../data/CheckStoreState";
import loadMTUServices from '../data/LoadMTUServices';
import LoadingIndicator from "../data/LoadingIndicator/LoadingIndicators";

import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import ImportFSUIPCService from '../data/FSUIPC/ImportFSUIPCService';
import ImportPhidgetsService from '../data/Phidgets/ImportPhidgetsService';

// Begin to listen for Store state´s changes 
    initializeStore.subscribe(handleStateChange)
    //checkReduxStoreTree();

var LoadServiceContainer = (props: any)=>{
    const { serviceName, MTUService } = props;

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
    }, [serviceName, storeListenerAppStart, storeListenerServiceFSUIPC, updatedAppStartState, getStoreAppStartData, appStarted, isServicesLoading, conButton]);

    console.log("props :", props);
      
    return( 
        <Box sx={{border: "1px solid red", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignContent: "center"}}>
                <Box sx={{marginTop: "10px", fontWeight: "bold", fontSize: "25px", letterSpacing: "20px", textDecoration: "underline"}}>
                    {serviceName}
                </Box>
                <Box sx={{
                        marginTop: "10px", 
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                    <Button sx={{
                                height: "40px",
                                borderRadius: "20px",
                    }}
                        id="fsuipc" onClick={loadMTUServices} variant="contained"> 
                        {conButton}
                    </Button>
                        <Box
                            sx={{
                                width: "180px",
                                height: "40px",
                                borderRadius: "20px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: "center",
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
                            <Box sx={{
                                    width: "160px",
                                    height: "20px",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                            }}>
                                <Box>Web {generalTexts.conStates.fsuipc.webService["serviceLoading"]}</Box>
                                <Box>
                                    <LoadingIndicator
                                        spinnerType="lds-ring"
                                        extraStyling={{marginBottom: "10px"}} 
                                        text=""
                                    />
                                </Box>
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
                    <Box>
                        
                        {(storeListenerAppStart["connectionLoading"] === false && storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === false) && 
                            <LoadingIndicator
                                spinnerType="lds-spinner"
                                extraStyling={{marginTop: "-20px"}}
                                text=""
                            />
                        }

                    </Box>
            </Box>
            {[
                MTUService === generalTexts.services["fsuipc"] && <ImportFSUIPCService/>,
                MTUService === generalTexts.services["phidgets"] && <ImportPhidgetsService/>
           ]}
        </Box>
    </Box> 
    );
}
export default LoadServiceContainer;
