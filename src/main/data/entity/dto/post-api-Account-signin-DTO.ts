export class postApiAccountSigninDTO {
    static postApiAccountSigninDTO(username: string, password: string, projectId: string) {
        return {
            username,
            password,
            projectId,
        };
    }
}