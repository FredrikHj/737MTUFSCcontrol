import { store } from "../../store";
import { setTestObj} from '../../redux/FSUIPCSlicer';

import fsuipcWs from '../RunServiceConState';
export var testCommand = (instance: any) => {
    console.log('fsuipcWs :', instance);

    var request = {
        command: 'about.read',
        name: 'about'
    };

    instance.send(JSON.stringify(request));
    instance.onmessage = (msg: any) => {
        // parse the JCON string to a Javascript object
        var response = JSON.parse(msg.data);
        console.log(response);
        if(response.success === true){
            setTimeout(() => {
                store.dispatch(setTestObj({
                    received: true,
                    data: response.data
                })); 
            }, 2000);
        }      
    };
} 
