import {expect, test} from "@playwright/test";
import {project} from "../../src/main/data/entity/endpoints/project";
import {putApiProjectDTO} from "../../src/main/data/entity/dto/put-api-project-DTO";
import {postApiProjectDTO} from "../../src/main/data/entity/dto/post-api-project-DTO";
import {postApiAccountSigninDTO} from "../../src/main/data/entity/dto/post-api-Account-signin-DTO";
import {account} from "../../src/main/data/entity/endpoints/account";

test(`Переименовать проект`, {tag: '@API'}, async ({request}) => {

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
    const newName = new Date().getTime().toString();
    const newProjectDTO = putApiProjectDTO.ProjectDTO(projectId, newName);

    newForm.append('id', newProjectDTO.id);
    newForm.append('newName', newProjectDTO.newName);

    const requestPutProject = await request.put(`${project.project}`, {
        params: {   //Использовать params или multipart зависит от запроса, params конкатенирует параметры в URL запроса, multipart передает их в теле с этим типом
            id: projectId,
            newName: newName
        },
        headers: {
            Authorization: `Bearer ${responseWithToken.Jwt}`
        }
    });
    expect(requestPutProject.status()).toBe(200);

// Проверка, что переименованный проект в списке

    const requestProjectAll = await request.get(project.all);
    expect(requestProjectAll.status()).toBe(200);
    const responseBody2 = await requestProjectAll.json();
    const responseProjectAll = JSON.stringify(responseBody2);
    expect(responseProjectAll.includes(newName)).toBe(true);
});
