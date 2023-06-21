/* ================================================== Load MTU Services ==================================================
Import  modules */
import axios from 'axios';

import { initializeStore } from "../store";

import {runServiceFsuipcConnect} from './FSUIPC/RunFSUIPCWebSocketConnect';
import generalTexts from './GeneralTexts';
import { setConnectionLoading, setConnected, setLabelConButton } from '../redux/appStartSlicer';
import { setFSUIPCConnected } from '../redux/FSUIPCSlicer';;
import { log } from 'console';

var loadMTUServices = (e: any) => {
    var targetButton = e.target.id;
    console.log('targetButton :', targetButton);
    if(targetButton === generalTexts.conButton["connect"]) {
        //Common values for the app
        initializeStore.dispatch(setConnectionLoading(true));
        // FSUIPC
            // Just give the loading proccess time to show
            setTimeout(() => {runServiceFsuipcConnect("opened");}, 3000);

        

            
            /* Phidgets Boards
            axios.get("/api/RunPhidgetsConnection", {params: {mode: targetButton}}).then(response => {
                console.log(response);
            }).
            catch(error => {});
            */
               
    }
    if(targetButton === generalTexts.conButton["disconnect"]) {
        //Common values for the app
            initializeStore.dispatch(setConnected(false)); 
            initializeStore.dispatch(setLabelConButton(generalTexts.conButton["connect"]));
            
        // FSUIPC
            //runServiceFsuipcConnection("closed");            
        
        // Phidgets Boards
            /*
            axios.get("/api/RunPhidgetsConnection", {params: {mode: targetButton}}).then(response => {
                console.log(response);
            }).
            catch(error => {});
            */
    }
}

export default loadMTUServices;