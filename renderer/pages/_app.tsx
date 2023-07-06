import React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';

import theme from '../lib/theme';
import type {EmotionCache} from "@emotion/cache";
import createEmotionCache from '../lib/create-emotion-cache';
import {CacheProvider} from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();
//Redux Store
import { Provider } from "react-redux";
//import withReduxStore from '../../renderer/lib/ReduxNextron';
import {initializeStore} from '../store';
//import LayoutPage from '../Layout';
type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;
    console.log('MyApp :', initializeStore);

    return (
        <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                </Head>
                <Provider store={ initializeStore }>
                    <Component {...pageProps} /> 
                </Provider>
            </CacheProvider>
    )
}
export default MyApp;