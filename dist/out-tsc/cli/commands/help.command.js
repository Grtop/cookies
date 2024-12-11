export class HelpCommand {
    getName() {
        return '-- help';
    }
    async execute(..._parameters) {
        console.info(`
    Программа для подготовки данных для REST API сервера.
    Пример:
        cli.js --<command> [--arguments]
    Команды:
        --version:                   # выводит номер версии
        --help:                      # печатает этот текст
        --import <path>:             # импортирует данные из TSV
        --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
`);
    }
}
//# sourceMappingURL=help.command.js.map