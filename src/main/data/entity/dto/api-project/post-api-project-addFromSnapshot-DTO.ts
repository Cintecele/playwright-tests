export class postApiProjectAddFromSnapshotDTO {
    static ProjectDTO(name: string, snapshot : File) {
        return {
            name,
            snapshot,
        };
    }
}