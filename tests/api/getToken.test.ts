import {expect, test} from "@playwright/test";
import {postApiAccountSignin} from "../../src/main/data/entity/dto/post-api-Account-signin";
import {client} from "../../src/main/data/entity/client";

test(`@API getUsersToken`, async ({request}) => {
    const form = new FormData();
    const name = "0195fad4-bd60-78ca-b2c4-c09c9b5d49bd";

    const postApiAccountSigninDTO = postApiAccountSignin.postApiAccountSigninDTO("1", "1", name);

    form.append('login', postApiAccountSigninDTO.username);
    form.append('password', postApiAccountSigninDTO.password);
    form.append('projectId', postApiAccountSigninDTO.projectId);

    const requestPostProject = await request.post(client.signin, {
        multipart: form
    });

    expect(requestPostProject.status()).toBe(200);
    const responseBody = await requestPostProject.json();
    const jwtToken = responseBody.Jwt;
    console.log('JWT Token:', jwtToken);
});