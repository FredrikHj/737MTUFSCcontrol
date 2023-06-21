var generalTexts: {
    services: {
        fsuipc: string,
        phidgets: string,
    },
    conStates: { 
        headline: string,
        fsuipc: {
            webService: {
                notStarted: string,
                serviceLoading: string,
                started: string, 
                closed: string,
            },
            serverError: {
                name: string, 
                type: Array<string>,
            }
        },
        phidgets: {
            webService: {
                notStarted: string,
                serviceLoading: string,
                started: string, 
                closed: string,
            },
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
        phidgets: "phidgets",
    },
    conStates: {
        headline: "Connenction Status",
        fsuipc: {
            webService: {
                notStarted: "service Not Started",
                serviceLoading: "service Is Loading...",
                started: "service Started",
                closed: "Connection Closed",
            },
            serverError: {
                name: "Connection Error",
                type: ["Program / Server Closed", "WebSocket Error", "Network Error"],
            },
        },
        phidgets: {
            webService: {
                notStarted: "service Not Started",
                serviceLoading: "service Is Loading...",
                started: "service Started",
                closed: "Connection Closed",
            },
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