var generalTexts: { 
    conStates: { 
        headline: string,
        state: {
            notStarted: string,
            started: string, 
            closed: string,
            serverError: {
                name: string, 
                type: Array<string>,
            }
        },
    },
    conButton: {
        connect: string, 
        disconnect: string,
    },
} = {
    conStates: {
        headline: "Connenction Status",
        state: {
            notStarted: "Service Not Started",
            started: "Service Started",
            closed: "Connection Closed",
            serverError: {
                name: "Connection Error",
                type: ["WebSocket Error", "Network Error"],
            },
        },
    },
    conButton: {
        connect: "Connect", 
        disconnect: "Disconnect",
    },
};

export default generalTexts;