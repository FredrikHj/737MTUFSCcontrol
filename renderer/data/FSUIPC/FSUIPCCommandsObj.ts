var VariousFSUIPCCommands: {
    startUp: {
        read: {
            about: {
                command: string,
                name: string,
            },
            listVars: {
                command: string,
                name: string,
                notify: string,
            },
        },
        write: {},
    },
} = {
    startUp: {
        read: {
            about: {
                command: 'about.read',
                name: 'about'
            },
            listVars: {
                command: 'vars.list',
                name: 'list',
                notify: 'auto',
            }
        },
        write: {},
    },

};

export default VariousFSUIPCCommands;