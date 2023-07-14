/* ================================================== Phidgets Servie Info Container ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import checkReduxStoreTree from "../CheckStoreState";
import generalTexts from '../GeneralTexts';
import LoadingIndicator from "../LoadingIndicator/LoadingIndicators";

import { log } from 'console';

var PhidgetsInfoContainer = () => {
    var storeListenerService: any = checkReduxStoreTree("servicePHIDGETS");
    const [ updatedAppState, updateAppState ] = useState<any>(null);

    useEffect(() => {
        //Check the stor state tree. if change load the stater over again
            setTimeout(() => { 
                updatedAppState !== checkReduxStoreTree("servicePHIDGETS") && 
                    updateAppState(storeListenerService); 
            }, 2000);
    }, [updatedAppState]);
 
    
    return( 
        <>
            {updatedAppState !== null &&
            <Table>
                <TableHead> 
                    <TableRow>
                        <TableCell sx={{textAlign: "center"}} colSpan={5}>
                            Phidgets Server Info
                        </TableCell>
                    </TableRow>     
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{textAlign: "center"}} colSpan={2}> 
                            Server Messegnes   
                        </TableCell>

                        <TableCell sx={{textAlign: "center"}} colSpan={3}>
                            { 
                                updatedAppState["connected"] === true && updatedAppState.connectionInfo["dataReceived"] === true
                                    ?   updatedAppState.connectionInfo.receivedData.data["messegnes"]
                                    :   generalTexts.mixedTexts["noData"]
                            }
                        </TableCell> 
                        <TableCell>
                        </TableCell>
                        <TableCell>
                            
                        </TableCell>
                        <TableCell>
                    
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Server Name
                        </TableCell>
                        <TableCell>
                            {                                        
                                updatedAppState["connected"] === true && updatedAppState.connectionInfo["dataReceived"] === true
                                    ?   updatedAppState.connectionInfo.receivedData.data["hostname"]
                                    :   generalTexts.mixedTexts["noData"]
                            }
                        </TableCell>
                        <TableCell>
                        </TableCell>
                        <TableCell>
                            Port Nr
                        </TableCell>
                        <TableCell>
                            {                                        
                                updatedAppState["connected"] === true && updatedAppState.connectionInfo["dataReceived"] === true
                                    ?   updatedAppState.connectionInfo.receivedData.data["port"]
                                    :   generalTexts.mixedTexts["noData"]
                            }                            
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            }
        </>    
    );
}
export default PhidgetsInfoContainer;