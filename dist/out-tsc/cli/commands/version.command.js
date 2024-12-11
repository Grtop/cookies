//import { catchError } from "rxjs";
//import { ResolveEnd } from "@angular/router";
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
function isPackageJSONConfig(value) {
    return (typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        Object.hasOwn(value, 'version'));
}
export class VersionCommand {
    constructor(filePath = './package.json') {
        this.filePath = filePath;
    }
    getName() {
        return '-- version';
    }
    readVersion() {
        const jsonContent = readFileSync(resolve(this.filePath), 'utf-8');
        const importedContent = JSON.parse(jsonContent);
        if (!isPackageJSONConfig(importedContent)) {
            throw new Error('Filed to parse json content.');
        }
        return importedContent.version;
    }
    async execute(..._parameters) {
        try {
            const version = this.readVersion();
            console.info(version);
        }
        catch (error) {
            console.error('Filed to read version from ${this.filePath}');
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}
//# sourceMappingURL=version.command.js.map