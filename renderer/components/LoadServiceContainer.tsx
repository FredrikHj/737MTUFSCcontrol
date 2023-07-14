/* ================================================== Service Container ==================================================
Import  modules */
import { initializeStore } from "../store";

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import checkReduxStoreTree, {
  handleStateChange,
} from "../data/CheckStoreState";
import {loadFsuipcService, loadPhidgetsService } from '../data/LoadMTUServices';
import LoadingIndicator from "../data/LoadingIndicator/LoadingIndicators";

import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import FSUIPCInfoContainer from "../data/FSUIPC/FSUIPCInfoContainer";
import PhidgetsInfoContainer from "../data/Phidgets/PhidgetsInfoContainer";

import { red } from "@mui/material/colors";
import serve from 'electron-serve';

// Begin to listen for Store state´s changes 
    initializeStore.subscribe(handleStateChange)
 
var LoadServiceContainer = (props: any) =>{
    const { MTUService } = props;

    // Get updated Store state
        var storeListener: any = checkReduxStoreTree("everyOne");

    // Get updated Store state
        const [ reduxStoreServiceObjKey]  = useState(`service${MTUService.toUpperCase()}`);
        const [ updatedAppState, updateAppState ] = useState<any>(null);
    
        const [ fsuipcStarted, updateFsuipcStarted ] = useState<boolean>(false);
        const [ phidgetsStarted, updatePhidgetsStarted ] = useState<boolean>(false); 
        const [ currentService, updateCurrentService ] = useState<string>(""); 
   
    useEffect(() => {       
        //Check the stor state tree. if change load the stater over again
            setTimeout(() => { 
                updatedAppState !== checkReduxStoreTree("everyOne") && 
                    updateAppState(storeListener);
                    updateFsuipcStarted(MTUService === "fsuipc" && storeListener[reduxStoreServiceObjKey]["connected"]);
                    updatePhidgetsStarted(MTUService === "phidgets" && storeListener[reduxStoreServiceObjKey]["connected"]);
            }, 2000); 
            currentService === "" && updateCurrentService(MTUService);
    }, [storeListener, currentService, reduxStoreServiceObjKey, fsuipcStarted, phidgetsStarted]);
    console.log('fsuipcStarted & phidgetsStarted :', fsuipcStarted, phidgetsStarted);

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
                    {[
                        MTUService === generalTexts.services["fsuipc"] && (
                            <Button sx={{ 
                                height: "40px",
                                borderRadius: "20px",
                            }} id={generalTexts.services["fsuipc"]} key={generalTexts.services["fsuipc"]} onClick={loadFsuipcService} variant="contained"> 
                                {storeListener[reduxStoreServiceObjKey]["labelConButton"]}
                            </Button>),
                        MTUService === generalTexts.services["phidgets"] && (
                            <Button sx={{
                                height: "40px",
                                borderRadius: "20px",
                            }} id={generalTexts.services["phidgets"]} key={generalTexts.services["phidgets"]} onClick={loadPhidgetsService} variant="contained"> 
                                {storeListener[reduxStoreServiceObjKey]["labelConButton"]}
                            </Button>)
                    ]}
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
                            storeListener[reduxStoreServiceObjKey]["connected"] === true ? "green" : "red",
                        }}
                        key={"3r2r"}
                        >
                        
                        {[ 
                            storeListener[reduxStoreServiceObjKey]["connected"] === false && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === false && (
                                <Box key={ MTUService }>
                                    Web{" "}
                                    {[
                                        MTUService === "fsuipc" && generalTexts.conStates["fsuipc"].webService["notStarted"],
                                        MTUService === "phidgets" && generalTexts.conStates["phidgets"].webService["notStarted"]
                                     ]}
                                </Box>
                            ),
                            storeListener[reduxStoreServiceObjKey]["connected"] === false && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === true && (
                                <Box sx={{
                                        width: "160px",
                                        height: "20px",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                }} key={ MTUService }>
                                    <Box key={ MTUService }>
                                        Web {[
                                            MTUService === "fsuipc" && generalTexts.conStates["fsuipc"].webService["serviceLoading"],
                                            MTUService === "phidgets" && generalTexts.conStates["phidgets"].webService["serviceLoading"]
                                        ]}
                                    </Box>
                                    <Box> 
                                        <LoadingIndicator
                                            keyStr={ MTUService }
                                            spinnerType="lds-ring"
                                            extraStyling={{marginBottom: "10px"}} 
                                            text=""
                                        />
                                    </Box> 
                                </Box> 
                            ),
                            storeListener[reduxStoreServiceObjKey]["connected"] === true && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === false && (
                                <Box key={ MTUService }>
                                    Web{" "}
                                    {[
                                        MTUService === "fsuipc" && generalTexts.conStates["fsuipc"].webService["started"],
                                        MTUService === "phidgets" && generalTexts.conStates["phidgets"].webService["started"]
                                    ]}
                                </Box>
                            ),
                        ]}
                    </Box>
                    <Box key={ MTUService }>
                        {(storeListener[reduxStoreServiceObjKey]["connected"] === true && storeListener[reduxStoreServiceObjKey][`${MTUService}ConnectionLoading`] === false && storeListener[reduxStoreServiceObjKey].connectionInfo["dataReceived"] === false) && 
                            <LoadingIndicator
                                keyStr={[
                                    MTUService === "fsuipc" && generalTexts.services["fsuipc"],
                                    MTUService === "phidgets" && generalTexts.services["phidgets"]
                                ]}
                                spinnerType="lds-spinner"
                                extraStyling={{marginTop: "-20px"}}
                                text=""
                            />
                        }
                    </Box>
                </Box>
                 <Box
                    sx={{
                    marginTop: "15px",
                    border: "1px solid red",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50px",
                    backgroundColor: "grey",
                }}
                    key={MTUService}>
                    <Box
                        sx={{ 
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Box sx={{
                           width: "300px"
                        }}> 
                        </Box>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            {[
                                MTUService === generalTexts.services["fsuipc"] &&
                                    <TableContainer key={generalTexts.services["fsuipc"]}>
                                        <FSUIPCInfoContainer/>    
                                    </TableContainer>,
                                MTUService === generalTexts.services["phidgets"] &&
                                    <TableContainer key={generalTexts.services["phidgets"]}>
                                        <PhidgetsInfoContainer/>
                                    </TableContainer>
                            ]}
                        
                        </Box>
                    </Box>
                </Box> 
            </Box>
        </Box> 
    );
}
export default LoadServiceContainer;
