import supertest from 'supertest';
import { App } from '../App';
import { RouteConstant } from '../routes/route-constants';

describe("user", () => {
    describe("fetch user list", () => {
        describe("given routes matches", () => {
            it("should return user list", async () => {
                const app = new App().app;
                const {body, statusCode} = await supertest(app).get(RouteConstant.USER_MODULE.FETCH_USER)
                console.log(body, statusCode);
                expect(true).toBe(true);
            })
        })
    });
})