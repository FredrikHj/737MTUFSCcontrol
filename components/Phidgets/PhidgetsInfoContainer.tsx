/* ================================================== FSUIPC Servie Info Container ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { log } from 'console';

var PhidgetsInfoContainer = () => {
    var getStoreServiceFSUIPC: any = useSelector((state: any) => state["serviceFSUIPCS"]);
    var getConnectionInfoData: any = getStoreServiceFSUIPC.connectionInfo["data"];
    const [ receivedData, updateReceivedData ] = useState<any>(false);
    

    
    useEffect(() => {

        var consumerWaiter = new Promise((resolve, reject) => {
            if (getStoreServiceFSUIPC.testObj["received"] === true) {
                resolve(getStoreServiceFSUIPC.testObj.data["isConnectionOpen"]);
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
        
        /*
        const consumerWaiter = new Promise((result: any, error: any) =>{
            if(getStoreServiceFSUIPC.testObj["received"] === true ){
            console.log('getStoreServiceFSUIPC.testObj["received"] :', getStoreServiceFSUIPC.testObj["received"]);
                result("true");
            }
        }) 
        consumerWaiter.then(value => {
            console.log('value :', value);
            value === "true" ? updateReceivedData(value) : updateReceivedData("No data")
        })
        */ 
    }, [getStoreServiceFSUIPC, getConnectionInfoData, receivedData]);
    console.log(receivedData); 
    
    return(
        <>
            {(getStoreServiceFSUIPC["connected"] === true) &&
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
                                            {getConnectionInfoData["isConnectionOpen"] === true ? "yes" : "No"}
                                        </>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        FSUIPC WebSocket Server Version
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["FSUIPCWebSocketServerVersion"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        FlightSim
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["flightSim"] === null ? "No Info" : getConnectionInfoData["flightSim"]}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        FSUIPCVersion
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["FSUIPCVersion"] === null ? "No Info" : getConnectionInfoData["FSUIPCVersion"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        FlightSimVersion Code
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["flightSimVersionCode"]}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        Update is Available?
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["newServerVersionAvailable"] === true ? "yes" : "No"}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        FlightSim Version
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["flightSimVersionText"]  === null ? "No Info" : getConnectionInfoData["flightSimVersionText"]}
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        WideClient Connection?
                                    </TableCell>
                                    <TableCell>
                                        {getConnectionInfoData["isConnectedToWideClient"] === true ? "yes" : "No"}
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