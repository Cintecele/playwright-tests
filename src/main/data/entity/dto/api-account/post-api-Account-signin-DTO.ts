export class postApiAccountSigninDTO {
    static AccountSigninDTO(username: string, password: string, projectId: string) {
        return {
            username,
            password,
            projectId,
        };
    }
}