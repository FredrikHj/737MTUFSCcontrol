/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, styled, Table, TableHead, TableBody, TableContainer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import generalTexts from './GeneralTexts';

// Import external files 
//import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView, ExtStyleHeader } from '../data/PathForFilesFolder';

//import { muiLayot, muiComponents, muiFeedback } from '../data/muiHandler';

var CheckServiceConnectionSpinner = ()=>{
    var getStoreServiceFSUIPCData: any = useSelector((state: any) => state["serviceFSUIPCS"]);

    return(     
        <>    
            {(getStoreServiceFSUIPCData["connected"] === false)
                ?   <Box>{generalTexts.conStates.state["notStarted"]}</Box>
                :   <Box>{generalTexts.conStates.state["started"]}</Box>
            }
        </>
    );
}
export default CheckServiceConnectionSpinner;