import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';

const LoadingIndicator = (props: any) =>{
    const {spinnerType, extraStyling, text} = props;

    return(
        <>
            {[
                ((spinnerType === "lds-ring") &&
                    <>
                        {text}
                         <div className="lds-ring" style={extraStyling}><div></div><div></div><div></div><div></div></div>
                    </>
                ),
                ((spinnerType === "lds-spinner") &&
                    <>
                        {text}
                        <div className="lds-spinner" style={extraStyling}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </>
                )
            ]}
        </>
    );
}

export default LoadingIndicator;


/*        <>
            {[
                ((spinnerType === "lds-dual-ring") && <Box>{text} <span className='lds-dual-ring'></span></Box>),
                ((spinnerType === "lds-ring") &&
                    {text} <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                ),
                ((spinnerType === "lds-facebook") && <Box>{text} <span className='lds-facebook'></span></Box>),
                ((spinnerType === "lds-spinner") && <Box>{text} <span className='lds-spinner'></span></Box>)
            ]}
        </>
        */