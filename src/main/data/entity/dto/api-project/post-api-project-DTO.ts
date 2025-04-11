export class postApiProjectDTO {
    static ProjectDTO(name: string, linkedPackages: string[]) {
        return {
            name,
            linkedPackages,
        };
    }
}