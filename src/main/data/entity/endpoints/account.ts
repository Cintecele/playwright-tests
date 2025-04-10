import {testConfig} from "../../../../../testConfig";

export const account = {
    createUser: `${testConfig.qaApi}api/Account/createUser`,
    signin: `${testConfig.qaApi}/api/Account/signin`,
    updateToken: `${testConfig.qaApi}/api/Account/updateToken`,
    logout: `${testConfig.qaApi}/api/Account/logout`,
 //   userId: `${testConfig.qaApi}/api/Account/${userId}`,
    all: `${testConfig.qaApi}/api/Account/all`,
    account: `${testConfig.qaApi}/api/Account`,
    setLocale: `${testConfig.qaApi}/api/Account/setLocale`,
    setUiSettings: `${testConfig.qaApi}/api/Account/setUiSettings`,   //"Изменить настройки интерфейса для текущего пользователя"
 //   setFullNameForUser: `${testConfig.qaApi}/api/Account/${userId}/setFullName`,  //"Изменить имя пользователя по его идентификатору
    setFullName: `${testConfig.qaApi}/api/Account/setFullName`,  //"Изменить имя текущего пользователя"
 //   setDescriptionForUser: `${testConfig.qaApi}/api/Account/${userId}/setDescription`,  //"Изменить описание пользователя по его идентификатору
    setDescription: `${testConfig.qaApi}/api/Account/setDescription`,  //"Изменить описание пользователя текущего пользователя"
    changePassword: `${testConfig.qaApi}/api/Account/changePassword`,   //"Изменить пароль текущего пользователя"
    changePasswordForUser: `${testConfig.qaApi}/api/Account/changePasswordForUser`,   //"Изменить пароль пользователя по его идентификатору
 //   requestResetPassword: `${testConfig.qaApi}/api/Account/${userId}/requestResetPassword`,   //"Запросить сброс пароля для пользователя"
 //  setActive: `${testConfig.qaApi}/api/Account/${userId}/setActive"`,
 //   delete: `${testConfig.qaApi}/api/Account/${userId}/delete/requestResetPassword`,   //Удалить пользователя по идентификатору
}