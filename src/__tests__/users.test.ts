import supertest from 'supertest';
import { App } from '../App';
import { RouteConstant } from '../routes/route-constants';

const app = new App().app;
const request = supertest(app);

describe('User Routes', () => {
  it('GET /users should fetch all users', async () => {
    const response = await request.get(RouteConstant.USER_MODULE.FETCH_USER);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toBeInstanceOf(Array);
  
    if (response.body.data.length > 0) {
      const user = response.body.data[0];
      expect(user).toHaveProperty('user_id');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('age');
    }
  });

  it('GET /users/:id should fetch a specific user', async () => {
    const userId = '';
    const response = await request.get(`/users/${userId}`);
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  
    const user = response.body.data;
    expect(user).toHaveProperty('user_id');
    expect(user).toHaveProperty('first_name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('age');
  });

  it('POST /users should return 400 if required fields are missing', async () => {
    const invalidUserRequestBody = {
      // Missing required fields: first_name, username, password, age
    };
    const response = await request.post(RouteConstant.USER_MODULE.POST_USER).send(invalidUserRequestBody);
    expect(response.status).toBe(400);
  });
  
  it('POST /users should return 400 if age is not a positive integer', async () => {
    const invalidUserRequestBody = {
      first_name: 'John',
      username: 'john_doe',
      password: 'securePassword',
      age: -5, // Invalid age
    };
    const response = await request.post(RouteConstant.USER_MODULE.POST_USER).send(invalidUserRequestBody);
    expect(response.status).toBe(400);
  });
  

  it('PUT /users should update an existing user', async () => {
    const userId = 'replace-with-an-existing-user-id';
    const updatedUser = {
      user_id: userId,
      first_name: 'UpdatedJohn',
      username: 'updated_john_doe',
      password: 'updatedSecurePassword',
      age: 26,
    };
    const response = await request.put(RouteConstant.USER_MODULE.UPDATE_USER).send(updatedUser);
    expect(response.status).toBe(200);
  });

  it('DELETE /users/:id should delete an existing user', async () => {
    const userId = 'replace-with-an-existing-user-id';
    const response = await request.delete(`/users/${userId}`);
    expect(response.status).toBe(200);
  });
});
