/* ================================================== FSUIPC Servie Info Container ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import checkReduxStoreTree from "../CheckStoreState";

import { log } from 'console';

var FSUIPCInfoContainer = () => {
    var storeListenerServiceFSUIPC: any = checkReduxStoreTree("serviceFSUIPC");
    
    var getStoreService: any = useSelector((state: any) => state["serviceFSUIPC"]);
    const [ receivedData, updateReceivedData ] = useState<any>(false);
    

    
    useEffect(() => {

        var consumerWaiter = new Promise((resolve, reject) => {
            if (getStoreService.testObj["received"] === true) {
                resolve(getStoreService.testObj.data["isConnectionOpen"]);
            }
            else {
                reject(Error("Promise rejected"));
            }
        });
        
        consumerWaiter.then(function(result) {
            console.log(result); // “Promise resolved successfully”
            result !== true ? updateReceivedData(result) : updateReceivedData("No data");
            }, err => {
            console.log(err); // Error: “Promise rejected”
        });

    }, [getStoreService, receivedData]);
    console.log(receivedData); 
    
    return(
        <>
            {(storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true) &&
                <>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{textAlign: "center"}} colSpan={2}>
                                        FlightSim Info
                                    </TableCell>
                                     
                                    <TableCell>
                                        
                                    </TableCell>

                                    <TableCell colSpan={2}>
                                        Service Info
                                    </TableCell>
                                </TableRow>     
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> 
                                        Connected to FlightSim?    
                                    </TableCell>

                                    <TableCell>
                                        <>
                                            {storeListenerServiceFSUIPC["isConnectionOpen"] === true ? "yes" : "No"}
                                        </>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        FSUIPC WebSocket Server Version
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["FSUIPCWebSocketServerVersion"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        FlightSim
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["flightSim"] === null ? "No Info" : storeListenerServiceFSUIPC["flightSim"]}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        FSUIPCVersion
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["FSUIPCVersion"] === null ? "No Info" : storeListenerServiceFSUIPC["FSUIPCVersion"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        FlightSimVersion Code
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["flightSimVersionCode"]}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        Update is Available?
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["newServerVersionAvailable"] === true ? "yes" : "No"}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        FlightSim Version
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["flightSimVersionText"]  === null ? "No Info" : storeListenerServiceFSUIPC["flightSimVersionText"]}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        WideClient Connection?
                                    </TableCell>
                                    <TableCell>
                                        {storeListenerServiceFSUIPC["isConnectedToWideClient"] === true ? "yes" : "No"}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>    
            }
        </>
    );
}
export default FSUIPCInfoContainer;