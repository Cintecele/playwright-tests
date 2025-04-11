import {expect, test} from '@playwright/test';
import {project} from "../../../src/main/data/entity/endpoints/project";
import {postApiProjectDTO} from "../../../src/main/data/entity/dto/api-project/post-api-project-DTO";
import {
    postApiProjectAddFromSnapshotDTO
} from "../../../src/main/data/entity/dto/api-project/post-api-project-addFromSnapshot-DTO";
import fs from "fs";


test(`Создать новый проект из снэпшота(без авторизации)`, {tag: '@API'}, async ({request}) => {

    const form = new FormData();

    const name = new Date().getTime().toString();
    const fileData = fs.readFileSync('src/main/utils/Files/new.project');
    const file = new File([fileData], 'new.project', { type: 'application/octet-stream' });
    const projectDTO = postApiProjectAddFromSnapshotDTO.ProjectDTO(name, file);

    form.append('name', projectDTO.name);
    form.append('snapshot', projectDTO.snapshot);

    const requestPostProject = await request.post(project.addFromSnapshot, {
        multipart: form
    });

    expect(requestPostProject.status()).toBe(200);
    const responseBody = await requestPostProject.json();
    console.log('Проекту присвоен ID: ', responseBody);

    const requestProjectAll = await request.get(project.all);

    expect(requestProjectAll.status()).toBe(200);

    const responseBody2 = await requestProjectAll.json();
    const responseProjectAll = JSON.stringify(responseBody2);

    expect(responseProjectAll.includes(responseBody.ProjectId)).toBe(true);
});


