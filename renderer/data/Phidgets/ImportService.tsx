/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import FSUIPCInfoContainer from './FSUIPC/FSUIPCInfoContainer';
 
import generalTexts from './GeneralTexts';

// Import external files 
//import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView, ExtStyleHeader } from '../data/PathForFilesFolder';

//import { muiLayot, muiComponents, muiFeedback } from '../data/muiHandler';
import { setTimeout } from 'timers';
import { log } from 'console';

var ImportService = (props: any)=>{
    var getStoreServiceFSUIPCData: any = useSelector((state: any) => state["serviceFSUIPCS"]);
    const [ receivedData, updateReceivedData ] = useState<boolean>(false);

    var { service} = props;
    useEffect(() => {
        getStoreServiceFSUIPCData.testObj.received === true && updateReceivedData(getStoreServiceFSUIPCData.testObj.received);
    }, [getStoreServiceFSUIPCData, receivedData]);
    console.log(receivedData, getStoreServiceFSUIPCData.testObj.data["isConnectionOpen"]);
    
    return(     
        <>              
            {(service === generalTexts.services["fsuipc"] ) && 
                <Box sx={{width: "900px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{width: "300px"}}>{service.toUpperCase()}</Box>
                    <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", color: "white", backgroundColor: getStoreServiceFSUIPCData["connected"] === true ? "green" : "red"}} key={"3r2r"}>
                            {[
                                ((getStoreServiceFSUIPCData["connected"] === false && getStoreServiceFSUIPCData["connectionLoading"] === false) && 
                                    <Box>Web {generalTexts.conStates.fsuipc.webService["notStarted"]}</Box>),
                                        
                                ((getStoreServiceFSUIPCData["connected"] === false && getStoreServiceFSUIPCData["connectionLoading"] === true) &&
                                    <Box>Web {generalTexts.conStates.fsuipc.webService["serviceLoading"]}</Box>),
                        
                                ((getStoreServiceFSUIPCData["connected"] === true && getStoreServiceFSUIPCData["connectionLoading"] === false) &&
                                    <Box>Web {generalTexts.conStates.fsuipc.webService["started"]}</Box>)
                            ]}               
                        </Box> 
                        <FSUIPCInfoContainer/>  
                    </Box>
                </Box>
            }
        </>
    );
}
export default ImportService;

/*data	An object containing the information requested. See below for details.
errorCode	A short string to tell you what error occurred. null if success is true. See below for possible errors.
errorMessage	A longer description of the error. null if success is true*/