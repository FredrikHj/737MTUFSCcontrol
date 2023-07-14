/* ================================================== Landing Page ==================================================
Import  modules */
import { initializeStore } from "../store";

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import checkReduxStoreTree, {
  handleStateChange,
} from "../data/CheckStoreState";

import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import LoadServiceContainer from "../components/LoadServiceContainer";
// Begin to listen for Store state´s changes 
    initializeStore.subscribe(handleStateChange)
    //checkReduxStoreTree();

var MTUControlLanding = ()=>{
    var storeListenerAppStart: any = checkReduxStoreTree("appStart");
    var storeListenerServiceFSUIPC: any = checkReduxStoreTree("serviceFSUIPC");

    const [ updatedAppStartState, updateAppStartState ] = useState<any>(null);
 
    var getStoreAppStartData: any = useSelector((state: any) => state["appStart"]);
    const [appStarted, updateAppStarted] = useState<boolean>(false);
    const [isServicesLoading, updateIsServicesLoading ] = useState<boolean>(false);

    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);
    
    useEffect(() => {
 

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

 
      
    return( 
        <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <LoadServiceContainer
                MTUService={generalTexts.services["fsuipc"]}
            />
            <LoadServiceContainer
                MTUService={generalTexts.services["phidgets"]}
            />
        </Box>
    );
}
export default MTUControlLanding;
    //<Box>{updatedAppStartState["conState"]}</Box>