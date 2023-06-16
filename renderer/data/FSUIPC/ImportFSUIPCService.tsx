/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import FSUIPCInfoContainer from './FSUIPCInfoContainer';
 
import generalTexts from '../GeneralTexts';
import { startServiceConnections } from '../RunServiceConState';

// Import external files 
//import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView, ExtStyleHeader } from '../data/PathForFilesFolder';

//import { muiLayot, muiComponents, muiFeedback } from '../data/muiHandler';
import { setTimeout } from 'timers';
import { log } from 'console';

var ImportFSUIPCService = ()=>{
    var getStoreServiceData: any = useSelector((state: any) => state["serviceFSUIPC"]);
    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);

    useEffect(() => {

    },[]);
    var triggerConState = (e: any) => {
        var targetButton = e.target.id;
        console.log('targetButton :', targetButton);
        if(targetButton === generalTexts.conButton["connect"]) {
            startServiceConnections(generalTexts.service["fsuipc"], targetButton);
            updateConButton(generalTexts.conButton["disconnect"]);
        }
        if(targetButton === generalTexts.conButton["disconnect"]) {
            startServiceConnections(generalTexts.service["fsuipc"], targetButton);            
            updateConButton(generalTexts.conButton["connect"]);
        }
    }
    return(     
        <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>              
            {
                <Box sx={{width: "900px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{width: "300px"}}>{generalTexts.service["fsuipc"].toUpperCase()}</Box>
                    <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                        <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", color: "white", backgroundColor: getStoreServiceData["connected"] === true ? "green" : "red"}} key={"3r2r"}>
                            {[
                                ((getStoreServiceData["connected"] === false && getStoreServiceData["connectionLoading"] === false) && 
                                    <Box>Web {generalTexts.conStates.fsuipc.webService["notStarted"]}</Box>),
                                        
                                ((getStoreServiceData["connected"] === false && getStoreServiceData["connectionLoading"] === true) &&
                                    <Box>Web {generalTexts.conStates.fsuipc.webService["serviceLoading"]}</Box>),
                        
                                ((getStoreServiceData["connected"] === true && getStoreServiceData["connectionLoading"] === false) &&
                                    <Box>Web {generalTexts.conStates.fsuipc.webService["started"]}</Box>)
                            ]}               
                        </Box>
                        <Button sx={{width: "200px", marginTop: "12px", display: "flex", flexDirection: "row", justifyContent: "center"}} onClick={triggerConState} variant="contained" id={conButton}>
                            {(getStoreServiceData["connectionLoading"] === true)
                                ? <><span className="spinner-border spinner-border-sm"></span><span className="marginLeft: 10px" onClick={triggerConState} id={conButton}>Loading...</span></>          
                                : conButton
                            }
                        </Button>


                        <FSUIPCInfoContainer/>  
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