/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import PhidgetsInfoContainer from '../Phidgets/PhidgetsInfoContainer';
 
import generalTexts from '../GeneralTexts';

// Import external files 
//import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView, ExtStyleHeader } from '../data/PathForFilesFolder';

//import { muiLayot, muiComponents, muiFeedback } from '../data/muiHandler';
import { setTimeout } from 'timers';
import { log } from 'console';

var ImportPhidgetsService = () =>{
    var getStoreAppStart: any = useSelector((state: any) => state["appStart"]);
    var getStoreServiceData: any = useSelector((state: any) => state["servicePhidgets"]);
    const [ conButton, updateConButton] = useState<string>(generalTexts.conButton["connect"]);

    var triggerConState = (e: any) => {
        var targetButton = e.target.id;
        console.log('targetButton :', targetButton);
        if(targetButton === generalTexts.conButton["connect"]) {

            axios.get("/api/RunPhidgetsConnection", {params: {mode: targetButton}}).then(response => {
                console.log(response);
            }).
            catch(error => {});
            //startServiceConnections(generalTexts.services["phidgets"], targetButton);
            updateConButton(generalTexts.conButton["disconnect"]);
        }
        if(targetButton === generalTexts.conButton["disconnect"]) {
            axios.get("/api/RunPhidgetsConnection", {params: {mode: targetButton}}).then(response => {
                console.log(response);
            }).
            catch(error => {});
            //startServiceConnections(generalTexts.services["phidgets"], targetButton);            
            updateConButton(generalTexts.conButton["connect"]);
        }
    }
    
    return(     
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>              
            {
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{width: "300px"}}>{generalTexts.services["phidgets"].toUpperCase()}</Box>
                   
                    <Box sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                        <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", color: "white", backgroundColor: getStoreServiceData["phidgetsConnected"] === true ? "green" : "red"}} key={"3r2r"}>
                            {[
                                ((getStoreServiceData["phidgetsConnected"] === false && getStoreAppStart["connectionLoading"] === false) && 
                                    <Box>Web {generalTexts.conStates.phidgets.webService["notStarted"]}</Box>),
                                        
                                ((getStoreServiceData["phidgetsConnected"] === false && getStoreAppStart["connectionLoading"] === true) &&
                                    <Box>Web {generalTexts.conStates.phidgets.webService["serviceLoading"]}</Box>),
                        
                                ((getStoreServiceData["phidgetsConnected"] === true && getStoreAppStart["connectionLoading"] === false) &&
                                    <Box>Web {generalTexts.conStates.phidgets.webService["started"]}</Box>)
                            ]}               
                        </Box>
                        <PhidgetsInfoContainer/>  
                    </Box>
                </Box>
            }
        </Box>
    );
}
export default ImportPhidgetsService;

/*data	An object containing the information requested. See below for details.
errorCode	A short string to tell you what error occurred. null if success is true. See below for possible errors.
errorMessage	A longer description of the error. null if success is true*/