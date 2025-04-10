export class postApiProject {
    static postApiProjectDTO(name: string, linkedPackages: string[]) {
        return {
            name,
            linkedPackages,
        };
    }
}