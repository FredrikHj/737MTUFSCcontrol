import { initializeStore } from "../../store";
import axios from 'axios';

import generalTexts from '../GeneralTexts'; 
import { setConnected, setPhidgetsConnectionLoading  } from '../../redux/PhidgetsSlicer';

var LoadPhidgetsService = (runMode: string) =>{
    if(runMode === "connect"){
        axios.get("/api/RunPhidgetsConnection", {params: {mode: "connect"}}).then(response => {
            console.log(response);

            if(response.status === 200){
                initializeStore.dispatch(setConnected(true));
                initializeStore.dispatch(setPhidgetsConnectionLoading(false));

            }
        }).
        catch(error => {});
    }
}
export default LoadPhidgetsService;