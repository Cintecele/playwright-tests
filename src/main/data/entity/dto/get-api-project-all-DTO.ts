export class getApiProjectAllDTO {
    static ProjectAll(username: string, password: string, projectId: string) {
        return {
            username,
            password,
            projectId,
        };
    }
}