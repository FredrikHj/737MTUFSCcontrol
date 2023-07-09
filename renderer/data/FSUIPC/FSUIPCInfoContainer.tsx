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

    }, [storeListenerServiceFSUIPC]);
    console.log(storeListenerServiceFSUIPC); 
    
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true ? "Yes" : "No"
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["FSUIPCWebSocketServerVersion"]
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["flightSim"] === null ? "No Info" : storeListenerServiceFSUIPC.connectionInfo.receivedData.data["flightSim"]
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["FSUIPCVersion"] === null ? "No Info" : storeListenerServiceFSUIPC.connectionInfo.receivedData.data["FSUIPCVersion"]
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["flightSimVersionCode"]
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["newServerVersionAvailable"] === true ? "yes" : "No"
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["flightSimVersionText"] === null ? "No Info" : storeListenerServiceFSUIPC.connectionInfo.receivedData.data["flightSimVersionText"]
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
                                    storeListenerServiceFSUIPC["FSUIPCConnected"] === true && storeListenerServiceFSUIPC.connectionInfo["dataReceived"] === true
                                        ?   storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectionOpen"] === true && storeListenerServiceFSUIPC.connectionInfo.receivedData.data["isConnectedToWideClient"] === true ? "yes" : "No"
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