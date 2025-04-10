export class getApiProjectAll {
    static getApiProjectAll(username: string, password: string, projectId: string) {
        return {
            username,
            password,
            projectId,
        };
    }
}