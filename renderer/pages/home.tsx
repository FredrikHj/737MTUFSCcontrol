import React from 'react';
import Head from 'next/head';
import electron from 'electron';
import { useSelector } from 'react-redux';

import MTUControlLanding from './MTUControlLanding';

import {styled} from '@mui/material';

const Root = styled('div')(({theme}) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(4),
    };
})


function Home() {
    var getStoreAppStartData: any = useSelector((state: any) => state.appStart["appName"]);

    return (
        <React.Fragment>
            <Head>
                <title>{getStoreAppStartData}</title>
            </Head>
            <Root>
                <MTUControlLanding/>
            </Root>
        </React.Fragment>
    );
};

export default Home;
