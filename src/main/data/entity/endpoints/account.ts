import {testConfig} from "../../../../../testConfig";

export const account = {
    createUser: `${testConfig.qaApi}api/Account/createUser`,
    signin: `${testConfig.qaApi}/api/Account/signin`,
    updateToken: `${testConfig.qaApi}/api/Account/updateToken`,
    logout: `${testConfig.qaApi}/api/Account/logout`,
    userId: `${testConfig.qaApi}/api/Account/{userId}`,
    all: `${testConfig.qaApi}/api/Account/all`,
}