import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';

const LoadingIndicator = (props: any) =>{
    const { keyStr, spinnerType, extraStyling, text} = props;

    return(
        <>
            {[
                ((spinnerType === "lds-ring") &&
                    <Box key={ keyStr }>
                        {text}
                         <div className="lds-ring" style={extraStyling}><div></div><div></div><div></div><div></div></div>
                    </Box>
                ),
                ((spinnerType === "lds-spinner") &&
                    <Box key={ keyStr }>
                        {text}
                        <div className="lds-spinner" style={extraStyling}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </Box>
                )
            ]}
        </>
    );
}

export default LoadingIndicator;