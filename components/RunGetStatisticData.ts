import { LegendToggleSharp } from '@mui/icons-material';
import functionsKeyNames from './FunctionsKeyNames';
import { log } from 'console';

//Import types
import { GetStatisticDataTypes } from '../schemas/GetStatisticDataSchema';

// AutostorePickData functions
var functionInCommon: object;
functionInCommon = {
    [functionsKeyNames.statisticParts["headAutostorePick"]]: {
        [functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]: (header: GetStatisticDataTypes["header"], data: GetStatisticDataTypes["data"]) => {
            var keyObj = {
                [functionsKeyNames.statisticParts.subAutostorePick["readyToPick"]]: [],
                [functionsKeyNames.statisticParts.subAutostorePick["unPickedPicked"]]: [],
            };
            if(header === functionsKeyNames.statisticParts.subAutostorePick["readyToPick"] || header === functionsKeyNames.statisticParts.subAutostorePick["unPickedPicked"]) {
                data.forEach(element => {
                    if(element["title"] !== "Varubrev" && element["title"] !== "Totalt" && element["title"] !== "Färdigplockat"){

                        // Add headertext for an element key
                        if(element["title"] === "Minfot NO") element["title"] = "Minfot NO/DK" 

                        keyObj[functionsKeyNames.statisticParts.subAutostorePick["readyToPick"]].push(element["title"]);
                    }
                });
            }
            // Add two elements
            keyObj[functionsKeyNames.statisticParts.subAutostorePick["unPickedPicked"]].push("Ordrar", "Rader");
            
            if(header === functionsKeyNames.statisticParts.subAutostorePick["readyToPick"]) return keyObj[ functionsKeyNames.statisticParts.subAutostorePick["readyToPick"]];
            if(header === functionsKeyNames.statisticParts.subAutostorePick["unPickedPicked"]) return keyObj[functionsKeyNames.statisticParts.subAutostorePick["unPickedPicked"]];
        },   
        [functionsKeyNames.noCommonFunctionsNames["funcCalcNotInQueue"]]: (data: GetStatisticDataTypes["data"], queueType) => {
            var sum: number;
            sum = 0;
            var diff: number;
            diff = 0;
            var dataObjMaxValue: number;
            dataObjMaxValue = data[data.length-2][queueType];
            
            data.forEach(element => {
                if(element["title"] !== "Totalt" && element["title"] !== "Färdigplockat") sum+= element[queueType];
            });
            diff = dataObjMaxValue-sum;
            return diff;
        },
        [functionsKeyNames.commonFunctionsNames["funcDataValues"]]: (layout:  GetStatisticDataTypes["layout"], data: GetStatisticDataTypes["data"]) => {
            if(layout === "stationary"){
                console.log("stationary", data);

 
                var newDataArr: Array<object>;
                
                newDataArr = [{}, {}];
                var currentTitle: string;
                var currentOrderValue: number;
                var currentLinesValue: number;
            
                data.forEach(element => {
                    currentTitle = element["title"];  
                    currentOrderValue = element["order"];  
                    currentLinesValue = element["rader"];     
                    
                    if(currentTitle !== "Varubrev" && currentTitle !== "Totalt" && currentTitle !== "Färdigplockat"){
                        // Add for PickQueue
                        newDataArr[0]["queueName"] = "Autostore - Ordrar";
                        newDataArr[0][currentTitle] = currentOrderValue;
                        newDataArr[1]["queueName"] = "Autostore - Rader";
                        newDataArr[1][currentTitle] = currentLinesValue;
                        
                        /* Add for Elos
                        newDataArr[2]["queueName"] = "Elos - Ordrar";
                        newDataArr[2]["Open"] = 31;
                        newDataArr[2]["Closed"] = 46
                        newDataArr[2]["In pool"] = 31;
        
                        newDataArr[3]["queueName"] = "Elos - Rader";
                        newDataArr[3]["Open"] = 87;
                        newDataArr[3]["Closed"] = 32
                        newDataArr[3]["In pool"] = 12;
                        */
                    }
                });
 
                return newDataArr;
            }
            if(layout === "tabelData"){
                var keyValues: object;
                
                
                keyValues = {
                    [functionsKeyNames.noCommonFunctionsNames["headlineOrder"]]: [], 
                    [functionsKeyNames.noCommonFunctionsNames["headlineRow"]]: []
                };
                
                data.forEach((item: any, index: number) => {
                    currentTitle = item["title"];  
                    currentOrderValue = item["order"];  
                    currentLinesValue = item["rader"];  
                    
                    console.log("forEach", item, currentTitle, keyValues);
                    
                    if(currentTitle !== "Varubrev" && currentTitle !== "Totalt" && currentTitle !== "Färdigplockat"){
                        keyValues[functionsKeyNames.noCommonFunctionsNames["headlineOrder"]].push(item["order"]);
                        keyValues[functionsKeyNames.noCommonFunctionsNames["headlineRow"]].push(item["rader"]);
                    }
                }) 
                return keyValues;
            }    
        }
    },
    [functionsKeyNames.statisticParts["headAutostoreDateNotDate"]]: {
        [functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]: (header: GetStatisticDataTypes["header"], data: GetStatisticDataTypes["data"]) => {
            var keyObj = {
                [functionsKeyNames.statisticParts.subAutostoreDateNotDate["date"]]: [],
                [functionsKeyNames.statisticParts.subAutostoreDateNotDate["notDate"]]: [],
            };
            
            if (header === functionsKeyNames.statisticParts.subAutostoreDateNotDate["date"]) {
                data.forEach(element => keyObj[header].push(element["extpickdate"]));
                
                return keyObj[header];
            }
            if (header === functionsKeyNames.statisticParts.subAutostoreDateNotDate["notDate"]) {
                data.forEach(element => keyObj[header].push(element["extpickdate"]));
                return keyObj[header];
            }
        },
        [functionsKeyNames.commonFunctionsNames["funcDataValues"]]: (show: GetStatisticDataTypes["show"], data: GetStatisticDataTypes["data"]) => {
            var newDataArr: Array<object>
            newDataArr = [];
            
            data.forEach(element => {
                // Grab the specific string and remove the timespamp except from the date in the string. Insert the remaining date into the same key again 
                    if(show === "Not Date") {
                        var formatDateString: string = element["dateTimeStamp"].split("T")[0];
                        element["dateTimeStamp"] = formatDateString;
                    }
               
                newDataArr.push({
                    date: element[
                        show === "Date" && "extpickdate" ||
                        show === "Not Date" && "dateTimeStamp"
                    ],
                    val: element["qty"], 
                });
            });    
            console.log('newDataArr :', newDataArr);
            
            return newDataArr;
        },
    },
    [functionsKeyNames.statisticParts["headReceivedUnits"]]: {
        [functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]: (data: GetStatisticDataTypes["data"]) => {},
        [functionsKeyNames.commonFunctionsNames["funcDataValues"]]: (data: GetStatisticDataTypes["data"]) => {
            
            return data;
        },
    },
    [functionsKeyNames.statisticParts["headBinsDoughnut"]]: {
        [functionsKeyNames.statisticParts.subBinsDoughnut["table"]]: {
            [functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]: (data: GetStatisticDataTypes["data"]) => {     
 
                
                type headlinesArr = Array<string>;
                var headlinesArr = [];

                data.forEach(element => headlinesArr.push(element["sizeText"]));
                return headlinesArr;
            },
            [functionsKeyNames.commonFunctionsNames["funcDataValues"]]: (data: GetStatisticDataTypes["data"]) => {
                var binsTablesValueArr: Array<Array<any>>;
 
                binsTablesValueArr = [
                    ["Använda Lokationer:"], 
                    ["Lediga Lokationer:"], 
                    ["Totalt antal:"], 
                    ["Användning:"]
                ];

                // Save data into the above created Array                   
                data.forEach((element: any, index: number) => {
                    binsTablesValueArr[0].push(element["usedLoc"]);
                    binsTablesValueArr[1].push(element["freeLoc"]);
                    binsTablesValueArr[2].push(element["totalLoc"]);
                    binsTablesValueArr[3].push(`${(element["usedLoc"] / element["totalLoc"]*100).toFixed(2)}%`);
                });    
                return binsTablesValueArr;
            },
        },
        [functionsKeyNames.statisticParts.subBinsDoughnut["chart"]]: {
            [functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]: () => {},
            [functionsKeyNames.commonFunctionsNames["funcDataValues"]]: (data: GetStatisticDataTypes["data"]) => {
 
                var keyValues: Array<object>;
                var pickCorrValuesArr: object;
                keyValues = [];
                
                data.forEach((item: any, index: number) => {
                    var binArr: Array<object>;
                    binArr = [];
                    var binsChartsValueArr: Array<number>;
                    binsChartsValueArr = [];
                    
                    var countBinFreeToUse: number; 
                    countBinFreeToUse = 0;
                    var countTotalUsage: string; 
                    countTotalUsage = "";

                    countBinFreeToUse = 1 - (item["usedLoc"] / item["totalLoc"]);
                    countTotalUsage = (item["usedLoc"] / item["totalLoc"]).toFixed(2);

                    binArr.push({sizeText: item["sizeText"], totalUsage: countTotalUsage});
                    binArr.push({ totalUsage: countBinFreeToUse.toFixed(2), sizeText: 'Ledigt' });
                    keyValues.push(binArr);
                    
                    keyValues.forEach((element: any) => {
                        console.log("keyValues", element);
                        
                        element.forEach(elementItem => {
                            binsChartsValueArr.push(elementItem["totalUsage"]*100);
                            
                        });
                        
                    });
                    
                   pickCorrValuesArr = [keyValues, binsChartsValueArr];
                })
                return pickCorrValuesArr;
            },            
        },
    },
};
export var builAutostorePickDataObj = (dataObj: GetStatisticDataTypes["dataObj"]) => {
 console.log("--------------------------- builAutostorePickDataObj", dataObj);
 
    var autostorePickDataObj: object = {
        [functionsKeyNames["headHeadline"]]: {
            [functionsKeyNames.subHeadline["name"]]: "Autostore - Plockköer",
            [functionsKeyNames.subHeadline["hdFont"]]: {
                width: "100%",
                height: "8vh",
                fontStyle: "italic",
                letterSpacing: "10px",
                textAlign: "center",
                color: 'red',
                fontSize: '40px',
                weight: 600
            },
            [functionsKeyNames.subHeadline["mFont"]]: {
                color: 'red',
                fontStyle: "italic",
                fontSize: '18px',
                textAlign: "center",
                weight: 400
            },
        },
        [functionsKeyNames.statisticParts.subAutostorePick["readyToPick"]]: {
            [functionsKeyNames.commonFunctionsNames["chartType"]]: "stackedBar",
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: functionInCommon[functionsKeyNames.statisticParts["headAutostorePick"]][functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]("readyToPick",  dataObj), // Index 0 = Left side and Index 1 = Right side,
            [functionsKeyNames.noCommonFunctionsNames["headlineOrder"]]: "Ordrar",
            [functionsKeyNames.noCommonFunctionsNames["headlineRow"]]: "Rader",
            [functionsKeyNames.commonFunctionsNames["minValue"]]: 0,
            [functionsKeyNames.commonFunctionsNames["maxValue"]]: dataObj[7]["rader"],
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: functionInCommon[functionsKeyNames.statisticParts["headAutostorePick"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]]("stationary", dataObj),
            [functionsKeyNames.noCommonFunctionsNames["seriesValuesArr"]]: functionInCommon[functionsKeyNames.statisticParts["headAutostorePick"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]]("tabelData", dataObj),
            },
            [functionsKeyNames.statisticParts.subAutostorePick["unPickedPicked"]]: {
            [functionsKeyNames.commonFunctionsNames["chartType"]]: "stackedBar",
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: functionInCommon[functionsKeyNames.statisticParts["headAutostorePick"]][functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]]("unPickedPicked", dataObj), // Index 0 = Left side and Index 1 = Right side,
            [functionsKeyNames.noCommonFunctionsNames["unPicked"]] : "Oplockat",
            [functionsKeyNames.noCommonFunctionsNames["endPicked"]]: "Plockat",
            [functionsKeyNames.commonFunctionsNames["minValue"]]: 0,
            [functionsKeyNames.commonFunctionsNames["maxValue"]]: dataObj[8]["rader"],
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: [{
                queueName: "Oplockat",
                ["Ordrar"]: functionInCommon[functionsKeyNames.statisticParts["headAutostorePick"]][functionsKeyNames.noCommonFunctionsNames["funcCalcNotInQueue"]](dataObj, "order"),
                ["Rader"]: functionInCommon[functionsKeyNames.statisticParts["headAutostorePick"]][functionsKeyNames.noCommonFunctionsNames["funcCalcNotInQueue"]](dataObj, "rader"),
                
            }, {  
                queueName: "Plockat",
                ["Ordrar"]: dataObj[8]["order"],
                ["Rader"]: dataObj[8]["rader"],                
            }],
            [functionsKeyNames.noCommonFunctionsNames["seriesValuesArr"]]: "",
        },
    };
    console.log("autostorePickDataObj", autostorePickDataObj);
    
    return autostorePickDataObj;    
};

export var builAutostoreDateNotDateObj = (dataObj: GetStatisticDataTypes["dataObj"]) => {  
    var autostoreDateNotDateObj = {
        [functionsKeyNames["headHeadline"]]: {
            [functionsKeyNames.subHeadline["name"]]: "Autostore - Datum / Not Autostore Datum",
            [functionsKeyNames.subHeadline["hdFont"]]: {
                width: "100%",
                height: "8vh",
                fontStyle: "italic",
                letterSpacing: "5px",
                color: 'red',
                fontSize: '30px',
                weight: 600,
                textAlign: "center"
            },
            [functionsKeyNames.subHeadline["mFont"]]: {
                color: 'red',
                fontSize: '18px',
                weight: 400
            },
        },
        [functionsKeyNames.statisticParts.subAutostoreDateNotDate["date"]]: {
            [functionsKeyNames.commonFunctionsNames["chartType"]]: "doughnut",
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: "", //commonFunctionsNames["autostoreDateNotDate"]["seriesHeadlines"]("date", dataObj["autostoreDatum"]),
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: functionInCommon[functionsKeyNames.statisticParts["headAutostoreDateNotDate"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]]("Date", dataObj["autostoreDatum"]),
        },
        [functionsKeyNames.statisticParts.subAutostoreDateNotDate["notDate"]]: {
            [functionsKeyNames.commonFunctionsNames["chartType"]]: "doughnut",
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: "", //commonFunctionsNames["autostoreDateNotDate"]["seriesHeadlines"]("notDate", dataObj["notAutostoreDatum"]),
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: functionInCommon[functionsKeyNames.statisticParts["headAutostoreDateNotDate"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]]("Not Date", dataObj["notAutostoreDatum"]),
        },
    };
    return autostoreDateNotDateObj;    
};
export var buildReceivedUnits = (dataObj: any) => {
    var receivedUnits = {
        [functionsKeyNames["headHeadline"]]: {
            [functionsKeyNames.subHeadline["name"]]: "Received Units",
            [functionsKeyNames.subHeadline["hdFont"]]: {
                width: "100%",
                height: "8vh",
                fontStyle: "italic",
                letterSpacing: "5px",
                color: 'red',
                fontSize: '30px',
                weight: 600,
                textAlign: "center"
            },
            [functionsKeyNames.subHeadline["mFont"]]: {
                color: 'red',
                fontSize: '18px',
                weight: 400
            },
        },
        [functionsKeyNames.statisticParts.subReceivedUnits["receivedUnitsChart"]]: {
            [functionsKeyNames.commonFunctionsNames["chartType"]]: "doughnut",
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: "", //commonFunctionsNames["receivedUnits"]["seriesHeadlines"](dataObj),
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: functionInCommon[functionsKeyNames.statisticParts["headReceivedUnits"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]](dataObj),
        },
    };
    return receivedUnits;
};
export var buildBinsTableObj = (dataObj: GetStatisticDataTypes["dataObj"]) => {   
    var runIncommingSortAddBinsDataArr = (keyValues: Array<object>) => {
        var sortedDataArr: Array<object>;
        sortedDataArr = [
            keyValues[0],
            keyValues[2],
            keyValues[3],
            keyValues[1],
        ];
        return sortedDataArr;
    };
    var newDataObj: Array<object>;
    newDataObj = runIncommingSortAddBinsDataArr(dataObj);
    var binsDoughnutObj = {
        [functionsKeyNames["headHeadline"]]: {
            [functionsKeyNames.subHeadline["name"]]: "Bins / Charts",
            [functionsKeyNames.subHeadline["hdFont"]]: {
                width: "100%",
                fontStyle: "italic",
                letterSpacing: "5px",
                color: 'red',
                fontSize: '30px',
                weight: 600,
                textAlign: "center",
            },
            [functionsKeyNames.subHeadline["mFont"]]: {
                color: 'red',
                fontSize: '18px',
                weight: 300
            },
        },
        [functionsKeyNames.statisticParts.subBinsDoughnut["table"]]: {
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: functionInCommon[functionsKeyNames.statisticParts["headBinsDoughnut"]][functionsKeyNames.statisticParts.subBinsDoughnut["table"]][functionsKeyNames.commonFunctionsNames["funcHeadlinesArr"]](newDataObj),
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: functionInCommon[functionsKeyNames.statisticParts["headBinsDoughnut"]][functionsKeyNames.statisticParts.subBinsDoughnut["table"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]](newDataObj),
        },
        [functionsKeyNames.statisticParts.subBinsDoughnut["chart"]]: {
            [functionsKeyNames.commonFunctionsNames["chartType"]]: "doughnut",
            font: {
                size: 24,
            },
            [functionsKeyNames.commonFunctionsNames["seriesHeadlines"]]: [],
            [functionsKeyNames.commonFunctionsNames["seriesValueFields"]]: functionInCommon[functionsKeyNames.statisticParts["headBinsDoughnut"]][functionsKeyNames.statisticParts.subBinsDoughnut["chart"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]](newDataObj)[0],
            [functionsKeyNames.noCommonFunctionsNames["seriesValuesArr"]]: functionInCommon[functionsKeyNames.statisticParts["headBinsDoughnut"]][functionsKeyNames.statisticParts.subBinsDoughnut["chart"]][functionsKeyNames.commonFunctionsNames["funcDataValues"]](newDataObj)[1],
        },
    };
 
    
    return binsDoughnutObj;
}
 