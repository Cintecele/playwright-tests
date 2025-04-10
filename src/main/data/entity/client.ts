import {testConfig} from "../../../../testConfig";

export const client = {
    createUser: `${testConfig.qaApi}api/Account/createUser`,
    signin: `${testConfig.qaApi}/api/Account/signin`,
    updateToken: `${testConfig.qaApi}/api/Account/updateToken`,
}