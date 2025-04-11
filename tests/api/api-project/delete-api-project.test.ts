import {expect, test} from "@playwright/test";
import {project} from "../../../src/main/data/entity/endpoints/project";
import {putApiProjectDTO} from "../../../src/main/data/entity/dto/api-project/put-api-project-DTO";
import {postApiProjectDTO} from "../../../src/main/data/entity/dto/api-project/post-api-project-DTO";
import {postApiAccountSigninDTO} from "../../../src/main/data/entity/dto/api-account/post-api-Account-signin-DTO";
import {account} from "../../../src/main/data/entity/endpoints/account";

test(`Удалить проект`, {tag: '@API'}, async ({request}) => {

//создаем проект для переименования
    const form = new FormData();
    const name = new Date().getTime().toString();
    const projectDTO = postApiProjectDTO.ProjectDTO(name, ["01961436-2693-7f7a-84dd-b124ba703e42"]);
    form.append('name', projectDTO.name);
    form.append('linkedPackages', projectDTO.linkedPackages.toString());

     const requestPostProject = await request.post(project.project, {
        multipart: form
    });
    const projectId = await requestPostProject.json();


//Получаем токен
    const authForm = new FormData();
    const accountSigninDTO = postApiAccountSigninDTO.AccountSigninDTO("1", "1", projectId);
    authForm.append('login', accountSigninDTO.username);
    authForm.append('password', accountSigninDTO.password);
    authForm.append('projectId', accountSigninDTO.projectId);
    const requestToken = await request.post(account.signin, {
        multipart: authForm
    });
    expect(requestToken.status()).toBe(200);
    const responseWithToken = await requestToken.json();

//Переименовываем созданный проект
    const newForm = new FormData();
    const newProjectDTO = putApiProjectDTO.ProjectDTO(projectId, name);
    newForm.append('id', newProjectDTO.id);

    const requestPutProject = await request.delete(`${project.project}/${projectId}`, {
        multipart: newForm,
        headers: {
            accept: "*/*",
            Authorization: `Bearer ${responseWithToken.Jwt}`
        }
    });
    expect(requestPutProject.status()).toBe(200);

// Проверка, что проекта нет в списке

    const requestProjectAll = await request.get(project.all);
    expect(requestProjectAll.status()).toBe(200);
    const responseBody2 = await requestProjectAll.json();
    const responseProjectAll = JSON.stringify(responseBody2);
    expect(responseProjectAll.includes(name)).toBe(false);
});
