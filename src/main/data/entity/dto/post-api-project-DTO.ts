export class postApiProjectDTO {
    static postApiProjectDTO(name: string, linkedPackages: string[]) {
        return {
            name,
            linkedPackages,
        };
    }
}