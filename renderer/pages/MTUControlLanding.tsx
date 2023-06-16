/* ================================================== Input Form ==================================================
Import  modules */
//import {connect} from 'react-redux'
//import { store } from "../store";
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import ImportFSUIPCService from '../data/FSUIPC/ImportFSUIPCService';
import ImportPhidgetsService from '../data/Phidgets/ImportPhidgetsService';
import { setConnectionLoading } from '../redux/FSUIPCSlicer';

// Import external files 

var MTUControlLanding = ()=>{
    var getStoreAppStartData: any = useSelector((state: any) => state["appStart"]);
    var getStoreServiceFSUIPCData: any = useSelector((state: any) => state["serviceFSUIPCS"]);

    const [ appStarted, updateAppStarted] = useState<boolean>(false);
    const [ appName, updateAppName] = useState<string>("");
    
    
    const [ serviceFSUIPCS, upateServiceFSUIPCS ] = useState<object>({
        connected: false,
        conName: generalTexts.conStates.fsuipc.webService["notStarted"]
    });
    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);
    
    
    useEffect(() => {
        if(appStarted === false){   
            updateAppName(getStoreAppStartData["appName"]);
            updateAppStarted(true);
        }
    }, [getStoreAppStartData, appStarted, appName]);
    
    return(
        <>
            {appName}
            <Box sx={{width: "100%", display: "flex", flexDirection: "column", textAlign: "center"}}>
                <Box>{getStoreAppStartData["conState"]}</Box>
                <Box sx={{border: "1px solid red", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    {(appStarted !== false) 
                        ?
                            <Box sx={{border: "1px solid red", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>                                    
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