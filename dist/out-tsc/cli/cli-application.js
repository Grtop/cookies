import { CommandParser } from "./command-parser";
export class CLIApplication {
    constructor(defaultCommand = '--help') {
        this.defaultCommand = defaultCommand;
        this.commands = {};
    }
    registerCommands(commadList) {
        commadList.forEach((command) => {
            if (Object.hasOwn(this.commands, command.getName())) {
                throw new Error(`Command ${command.getName()} is already registered`);
            }
            this.commands[command.getName()] = command;
        });
    }
    getCommand(commandName) {
        return this.commands[commandName] ?? this.getDefaultCommand();
    }
    getDefaultCommand() {
        if (!this.commands[this.defaultCommand]) {
            throw new Error(`The default command (${this.defaultCommand}) is not registered.`);
        }
        return this.commands[this.defaultCommand];
    }
    processCommand(argv) {
        const parsedCommand = CommandParser.parse(argv);
        const [commandName] = Object.keys(parsedCommand);
        const command = this.getCommand(commandName);
        const commandArguments = parsedCommand[commandName] ?? [];
        command.execute(...commandArguments);
    }
}
//# sourceMappingURL=cli-application.js.map