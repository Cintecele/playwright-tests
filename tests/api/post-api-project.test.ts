import {expect, test} from '@playwright/test';
import {project} from "../../src/main/data/entity/endpoints/project";
import {postApiProjectDTO} from "src/main/data/entity/dto/post-api-project-DTO";


test(`Создать новый проект (без авторизации)`, {tag: '@API'}, async ({request}) => {

    const form = new FormData();

    const name = new Date().getTime().toString();
    const projectDTO = postApiProjectDTO.ProjectDTO(name, ["01961436-2693-7f7a-84dd-b124ba703e42"]); //Добавить обработку множества linkedPackages. нужно передавать каждый элемент массива в отдельный form.append('linkedPackages'

    form.append('name', projectDTO.name);
    form.append('linkedPackages', projectDTO.linkedPackages.toString());

    const requestPostProject = await request.post(project.project, {
        multipart: form
    });

    expect(requestPostProject.status()).toBe(200);
    const responseBody = await requestPostProject.json();
    console.log('Проекту присвоен ID: ', responseBody);

    const requestProjectAll = await request.get(project.all);

    expect(requestProjectAll.status()).toBe(200);

    const responseBody2 = await requestProjectAll.json();
    console.log('Тело ответа', responseBody2);

    const responseProjectAll = JSON.stringify(responseBody2);

    expect(responseProjectAll.includes(responseBody)).toBe(true);
    expect(responseProjectAll.includes(name)).toBe(true);
});


