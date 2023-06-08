/* ================================================== Input Form ==================================================
Import  modules */
import { store } from "../store";
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';

import generalTexts from '../data/GeneralTexts';
import { startServiceConnections } from '../data/RunServiceConState';
import ImportServices from '../data/ImportServices';
import { setConnectionLoading } from '../redux/FSUIPCSlicer';

// Import external files 
//import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView, ExtStyleHeader } from '../data/PathForFilesFolder';

//import { muiLayot, muiComponents, muiFeedback } from '../data/muiHandler';

var MTUControlLanding = ()=>{
    var getStoreAppStartData: any = useSelector((state: any) => state["appStart"]);
    var getStoreServiceFSUIPCData: any = useSelector((state: any) => state["serviceFSUIPCS"]);
    console.log('getStoreAppStartData :', getStoreAppStartData);

    const [ appStarted, updateAppStarted] = useState<boolean>(false);
    const [ appName, updateAppName] = useState<string>("");
    /*
    const [ serviceFSUIPCS, upateServiceFSUIPCS ] = useState<object>({
        connected: false,
        conName: generalTexts.conStates.state["notStarted"]
    });
    */
    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);
    
    useEffect(() => {
        if(appStarted === false){   
            updateAppName(getStoreAppStartData["appName"]);
            updateAppStarted(true);
        }
    }, [getStoreAppStartData, getStoreServiceFSUIPCData, appStarted, appName, conButton]);
    
    let triggerConState = (e: any) => {
        var targetButton = e.target.id;
        console.log('targetButton :', targetButton);
        if(targetButton === generalTexts.conButton["connect"]) {
            startServiceConnections(targetButton);
            updateConButton(generalTexts.conButton["disconnect"]);
        }
        if(targetButton === generalTexts.conButton["disconnect"]) {
            startServiceConnections(targetButton);            
            updateConButton(generalTexts.conButton["connect"]);
        }
    }

    return(
        <>
            {appName}
            <Box sx={{width: "100%", display: "flex", flexDirection: "column", textAlign: "center"}}>
                <Box>{getStoreAppStartData["conState"]}</Box>
                <Box sx={{border: "1px solid red", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    {(appStarted !== false) 
                        ?
                            <Box sx={{border: "1px solid red", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} key={getStoreServiceFSUIPCData["name"]}>                                    
                             <ImportServices service={"fsuipc"}/>
                                <Button sx={{width: "200px", marginTop: "12px", display: "flex", flexDirection: "row", justifyContent: "center"}} onClick={triggerConState} variant="contained" id={conButton}>
                                    {(getStoreServiceFSUIPCData["connectionLoading"] === true)
                                        ? <><span className="spinner-border spinner-border-sm"></span><span className="marginLeft: 10px" onClick={triggerConState} id={conButton}>Loading...</span></>          
                                        : conButton
                                    }
                                </Button>
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