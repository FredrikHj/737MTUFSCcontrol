import React from 'react';
import Head from 'next/head';
import electron from 'electron';
import MTUControlLanding from './MTUControlLanding';

import {styled} from '@mui/material';

const Root = styled('div')(({theme}) => {
    return {
        textAlign: 'center',
        paddingTop: theme.spacing(4),
    };
})


function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Home - Nextron (with-typescript-material-ui)</title>
            </Head>
            <Root>
                <MTUControlLanding/>
            </Root>
        </React.Fragment>
    );
};

export default Home;