/* ================================================== Load MTU Services ==================================================
Import  modules */
import { initializeStore } from "../store";

import LoadFsuipcService from './FSUIPC/LoadFsuipcService';
import LoadPhidgetsService from './Phidgets/LoadPhidgetsService';
import generalTexts from './GeneralTexts';
import { setFsuipcConnectionLoading  } from '../redux/FSUIPCSlicer';
import { setPhidgetsConnectionLoading, setConnectionInfo  } from '../redux/PhidgetsSlicer';

import { log } from 'console';

export var loadFsuipcService = (e: any) => {
    var targetButton = e.target.id;
    console.log('targetButton :', targetButton);
 
    // Set the connectioLoading and Connect to services
        initializeStore.dispatch(setFsuipcConnectionLoading(true));
    
    // Just give the loading proccess to show
       setTimeout(() => {LoadFsuipcService("connect");},2000);
}


export var loadPhidgetsService = (e: any) => {
    var targetButton = e.target.id;
    console.log('loadPhidgetsService - targetButton :', targetButton);

    // Set the connectioLoading and Connect to services
        initializeStore.dispatch(setPhidgetsConnectionLoading(true));
    
    //Phidgets Boards 
        LoadPhidgetsService("connect");
}