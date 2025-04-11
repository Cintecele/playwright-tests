import {expect, test} from "@playwright/test";
import {postApiAccountSigninDTO} from "../../../src/main/data/entity/dto/api-account/post-api-Account-signin-DTO";
import {account} from "../../../src/main/data/entity/endpoints/account";

test(`@API getUsersToken`, async ({request}) => {
    const form = new FormData();
    const name = "0195fad4-bd60-78ca-b2c4-c09c9b5d49bd";

    const accountSigninDTO = postApiAccountSigninDTO.AccountSigninDTO("1", "1", name);

    form.append('login', accountSigninDTO.username);
    form.append('password', accountSigninDTO.password);
    form.append('projectId', accountSigninDTO.projectId);

    const requestPostProject = await request.post(account.signin, {
        multipart: form
    });

    expect(requestPostProject.status()).toBe(200);
    const responseBody = await requestPostProject.json();
    const jwtToken = responseBody.Jwt;
    console.log('JWT Token:', jwtToken);
});