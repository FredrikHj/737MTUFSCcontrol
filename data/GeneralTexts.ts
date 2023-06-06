var generalTexts: {
    services: {
        fsuipc: string,
    },
    conStates: { 
        headline: string,
        state: {
            serviceString: string,
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
    services: {
        fsuipc: "fsuipc",
    },
    conStates: {
        headline: "Connenction Status",
        state: {
            serviceString: "Service",
            notStarted: "Service Not Started",
            started: "Service Started",
            closed: "Connection Closed",
            serverError: {
                name: "Connection Error",
                type: ["Program / Server Closed", "WebSocket Error", "Network Error"],
            },
        },
    },
    conButton: {
        connect: "Connect", 
        disconnect: "Disconnect",
    },
};

export default generalTexts;