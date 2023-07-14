import { initializeStore } from "../../store";
import axios from 'axios';

import generalTexts from '../GeneralTexts'; 
import { setConnected, setPhidgetsConnectionLoading, setLabelConButton, setConnectionInfo  } from '../../redux/PhidgetsSlicer';
import { setLazyProp } from "next/dist/server/api-utils";

var LoadPhidgetsService = (runMode: string) =>{
console.log('LoadPhidgetsService - runMode :', runMode);
    if(runMode === "connect"){
        axios.get("/api/RunPhidgetsConnection", {params: {mode: "connect"}}).then(response => {
        console.log('response :', response); 

            if(response.status === 200){
                initializeStore.dispatch(setConnected(true));
                initializeStore.dispatch(setPhidgetsConnectionLoading(false));
                initializeStore.dispatch(setLabelConButton(generalTexts.conButton["disconnect"]));  
                setTimeout(() => {
                    initializeStore.dispatch(setConnectionInfo({dataReceived: true, receivedData: response.data})); 
                }, 2000);
            }
        }).
        catch(error => {});
    }
}
export default LoadPhidgetsService;