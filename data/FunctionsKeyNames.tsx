type functionsKeyNames = {
    headHeadline: string,
    subHeadline: {
        name: string,
        hDFont: string,
        mFont: string,
    },

    noCommonFunctionsNames: {
        funcCalcNotInQueue: string,
        headlineOrder: string,
        headlineRow: string,
        unPicked: string,
        endPicked: string,
        seriesValuesArr: Array<object>,
    },
    commonFunctionsNames: {
        funcHeadlinesArr: string,
        funcDataValues: string,
        chartType: string,
        seriesHeadlines: Array<string>,
        minValue: number,
        maxValue: number,
        seriesValueFields: Array<object>,
        seriesValues: Array<object>,
    },

    statisticParts: {
        headAutostorePick: string,
        subAutostorePick: {
            readyToPick: string,
            unPickedPicked: string,
        },
        headAutostoreDateNotDate: string,
        subutostoreDateNotDate: {
            date: string,
            notDate: string,
        },
        headReceivedUnits: string,
        subReceivedUnits: {
            receivedUnitsHeadline: string,
            receivedUnitsChart: string,

        },
        headBinsDoughnut: string,
        subBinsDoughnut: {
            table: string,
            chart: string,
        },
    },
};

var functionsKeyNames = {
    headHeadline: "headline",
    subHeadline: {
        name: "name",
        hdFont: "hdFont",
        mFont: "mFont",
    },
    noCommonFunctionsNames: {
        funcCalcNotInQueue: "calcNotInQueue",
        headlineOrder: "headlineOrder",
        headlineRow: "headlineRow",
        unPicked: "unPicked",
        endPicked: "endPicked",
        seriesValuesArr: "seriesValuesArr",
    },
    commonFunctionsNames: {
        funcHeadlinesArr: "headlinesArr",
        funcDataValues: "dataValues",
        chartType: "chartType",
        seriesHeadlines: "seriesHeadlines",
        minValue: "minValue",
        maxValue: "maxValue",
        seriesValueFields: "seriesValueFields",
    },
    statisticParts: {
        headAutostorePick: "autostorePic",
        subAutostorePick: {
            readyToPick: "readyToPick",
            unPickedPicked: "unPickedPicked",
            queueName: "queueName",
        },
        headAutostoreDateNotDate: "autostoreDateNotDate",
        subAutostoreDateNotDate: {
            date: "date",
            notDate: "notDate",
        },
        headReceivedUnits: "receivedUnits",
        subReceivedUnits: {
            receivedUnits: "receivedUnits",
            receivedUnitsChart: "receivedUnitsChart",

        },
        headBinsDoughnut: "binsDoughnut",
        subBinsDoughnut: {
            table: "table",
            chart: "chart",
        },
    },
}
export default functionsKeyNames;