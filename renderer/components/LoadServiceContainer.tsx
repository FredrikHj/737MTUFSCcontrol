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
import { red } from "@mui/material/colors";

// Begin to listen for Store state´s changes 
    initializeStore.subscribe(handleStateChange)
 
var LoadServiceContainer = (props: any) =>{
    const {MTUService } = props;

    // Get updated Store state
        var storeListener: any = checkReduxStoreTree("everyOne");

    // Get updated Store state
    const [ reduxStoreServiceObjKey]  = useState(`service${MTUService.toUpperCase()}`);
    const [ updatedAppStartState, updateAppStartState ] = useState<any>(null);
 
    const [appStarted, updateAppStarted] = useState<boolean>(false);
    const [isServicesLoading, updateIsServicesLoading ] = useState<boolean>(false);
   
    useEffect(() => {
            console.log('storeListener.appStart :', storeListener);

        // Load if app is not started
            if (appStarted === false && updatedAppStartState !==  null) { 
                updateIsServicesLoading(storeListener.appStart["connectionLoading"]);
                updateAppStarted(true);
            }
        
        //Check the stor state tree. if change load the stater over again
            setTimeout(() => {
                updatedAppStartState !== checkReduxStoreTree("everyOne") && 
                    updateAppStartState(storeListener);
            }, 2000);
    }, [storeListener, MTUService]);

    console.log("props :", props);
      
    return( 
        <Box sx={{border: "1px solid red", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignContent: "center"}}>
                <Box sx={{marginTop: "10px", fontWeight: "bold", fontSize: "25px", letterSpacing: "20px", textDecoration: "underline"}}>
                    {MTUService.toUpperCase()}
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
                        id={MTUService} onClick={loadMTUServices} variant="contained"> 
                        {storeListener[reduxStoreServiceObjKey]["labelConButton"]}
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
                            storeListener[reduxStoreServiceObjKey]["connected"] === true
                            ? "green"
                            : "red",
                        }}
                        key={"3r2r"}
                    >
                        {[
                            storeListener[reduxStoreServiceObjKey]["connected"] === false && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === false && (
                                <Box>
                                    Web{" "}
                                    {generalTexts.conStates[MTUService].webService["notStarted"]}
                                </Box>
                            ),
                            storeListener[reduxStoreServiceObjKey]["connected"] === false && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === true && (
                                <Box sx={{
                                        width: "160px",
                                        height: "20px",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                }}>
                                    <Box>Web {generalTexts.conStates[MTUService].webService["serviceLoading"]}</Box>
                                    <Box>
                                        <LoadingIndicator
                                            spinnerType="lds-ring"
                                            extraStyling={{marginBottom: "10px"}} 
                                            text=""
                                        />
                                    </Box>
                                </Box> 
                            ),
                            storeListener[reduxStoreServiceObjKey]["connected"] === true && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === false && (
                                <Box>
                                    Web{" "}
                                    {generalTexts.conStates[MTUService].webService["started"]}
                                </Box>
                            ),
                        ]}
                    </Box>
                    <Box>
                        
                            {(storeListener[reduxStoreServiceObjKey]["connected"] === true && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === false && storeListener[reduxStoreServiceObjKey].connectionInfo["dataReceived"] === false) && 
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
