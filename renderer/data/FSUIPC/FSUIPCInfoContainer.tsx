/* ================================================== FSUIPC Servie Info Container ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import checkReduxStoreTree from "../CheckStoreState";
import generalTexts from '../GeneralTexts';
import LoadingIndicator from "../LoadingIndicator/LoadingIndicators";

import { log } from 'console';

var FSUIPCInfoContainer = () => {
    var storeListenerService: any = checkReduxStoreTree("serviceFSUIPC");
    
    useEffect(() => {
    }, [storeListenerService]);
    console.log(storeListenerService); 
    
    return( 
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
                                {
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true ? "Yes" : "No"
                                        :   generalTexts.mixedTexts["noData"]
                                }
                            </TableCell> 
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                FSUIPC WebSocket Server Version
                            </TableCell>
                            <TableCell>
                                { 
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["FSUIPCWebSocketServerVersion"]
                                        :   generalTexts.mixedTexts["noData"]
                                        }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                FlightSim
                            </TableCell>
                            <TableCell>
                                {                                        
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["flightSim"] === null ? "No Info" : storeListenerService.connectionInfo.receivedData.data["flightSim"]
                                        :   generalTexts.mixedTexts["noData"]
                                }
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                FSUIPCVersion
                            </TableCell>
                            <TableCell>
                                {
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["FSUIPCVersion"] === null ? "No Info" : storeListenerService.connectionInfo.receivedData.data["FSUIPCVersion"]
                                        :   generalTexts.mixedTexts["noData"]
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                FlightSimVersion Code
                            </TableCell>
                            <TableCell>
                                {
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["flightSimVersionCode"]
                                        :   generalTexts.mixedTexts["noData"]
                                }                                        
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                Update is Available?
                            </TableCell>
                            <TableCell>
                                {   
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["newServerVersionAvailable"] === true ? "yes" : "No"
                                        :   generalTexts.mixedTexts["noData"]
                                }                             
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                FlightSim Version
                            </TableCell>
                            <TableCell>
                                {
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["flightSimVersionText"] === null ? "No Info" : storeListenerService.connectionInfo.receivedData.data["flightSimVersionText"]
                                        :   generalTexts.mixedTexts["noData"]
                                }
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                WideClient Connection?
                            </TableCell>
                            <TableCell>
                                {
                                    storeListenerService["connected"] === true && storeListenerService.connectionInfo["dataReceived"] === true
                                        ?   storeListenerService.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerService.connectionInfo.receivedData.data["isConnectedToWideClient"] === true ? "yes" : "No"
                                        :   generalTexts.mixedTexts["noData"]
                                }                                           
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>    
    );
}
export default FSUIPCInfoContainer;