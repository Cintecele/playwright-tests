export class putApiProjectDTO {
    static ProjectDTO(id: string, newName: string) {
        return {
            id,
            newName,
        };
    }
}