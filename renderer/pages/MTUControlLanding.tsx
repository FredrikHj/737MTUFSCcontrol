/* ================================================== Input Form ==================================================
Import  modules */
import { initializeStore } from "../store";

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import checkReduxStoreTree, {
  handleStateChange,
} from "../data/HandleStoreUpdate";

import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import ImportFSUIPCService from '../data/FSUIPC/ImportFSUIPCService';
import ImportPhidgetsService from '../data/Phidgets/ImportPhidgetsService';

import loadMTUServices from '../data/LoadServices';
import checkServicesConnection from "../data/CheckServicesConnection";

// Begin to listen for Store state´s changes 
    initializeStore.subscribe(handleStateChange)
    checkReduxStoreTree();

var MTUControlLanding = ()=>{
    const [ updatedStateTree, updateUpdatedStateTree ] = useState<any>(null);

    var getStoreAppStartData: any = useSelector((state: any) => state["appStart"]);
    const [appStarted, updateAppStarted] = useState<boolean>(false);
    const [isServicesLoading, updateIsServicesLoading ] = useState<boolean>(false);

    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);
    
    useEffect(() => {
        // Load if app is not started
            if (appStarted === false) {
                updateIsServicesLoading(getStoreAppStartData["connectionLoading"]);
                updateAppStarted(true);
            }

        // Check the services connection
            checkServicesConnection();
        
        //Check the stor state tree. if change load the stater over again
            setTimeout(() => {
                updatedStateTree !== checkReduxStoreTree() &&
                    updateUpdatedStateTree(checkReduxStoreTree());
                    updatedStateTree !== null && updateConButton(updatedStateTree.appStart["labelConButton"]);
        }, 2000);
    }, [updatedStateTree, getStoreAppStartData, appStarted, isServicesLoading, conButton]);

    console.log("updatedStateTree :", updatedStateTree);
    
    return(
        <>
            <Button sx={{width: "200px", marginTop: "-35px", display: "flex", flexDirection: "row", justifyContent: "center"}} onClick={loadMTUServices} variant="contained" id={conButton}>
                {(getStoreAppStartData["connectionLoading"] === true)
                    ? <><span className="spinner-border spinner-border-sm"></span><span className="marginLeft: 10px" onClick={loadMTUServices} id={conButton}>Loading...</span></>          
                    : conButton
                }
            </Button>
            <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignContent: "center"}}>
                <Box>{getStoreAppStartData["conState"]}</Box>
                <Box sx={{border: "1px solid red", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    {(appStarted !== false) 
                        ?
                            <Box sx={{width: "100%", border: "1px solid red", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>                                    
                             <ImportFSUIPCService/>
                             <ImportPhidgetsService/>
                            </Box>
                        : "wdqa"                        
                    }
                    </Box>
                </Box>
                <Box>
            </Box>
            
        </>
    );
}
export default MTUControlLanding;