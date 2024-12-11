export class CommandParser {
    static parse(cliArguments) {
        const parsedCommand = {};
        let currentCommand = '';
        for (const argument of cliArguments) {
            if (argument.startsWith('--')) {
                parsedCommand[argument] = [];
                currentCommand = argument;
            }
            else if (currentCommand && argument) {
                parsedCommand[currentCommand].push(argument);
            }
        }
        return parsedCommand;
    }
}
//# sourceMappingURL=command-parser.js.map