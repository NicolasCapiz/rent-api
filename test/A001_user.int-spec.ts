// user.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UserController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (POST)', async () => {
    const userToCreate = {
      firstName: 'John Doe',
      email: 'john@example.com',
      accessToken: 'aSDAOFMEAdaDASD32412rASD1',
    };

    const response = await request(app.getHttpServer())
      .post('/users')
      .send(userToCreate)
      .expect(201);

    expect(response.body).toEqual(expect.objectContaining(userToCreate));
  });

  it('/users (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(response.body).toHaveLength(1); // Assuming two users are created in the UserController
  });

  it('/users/:id (GET)', async () => {
    const userId = 1;

    const response = await request(app.getHttpServer())
      .get(`/users/${userId}`)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining({ id: userId }));
  });

  it('/users/:id (PUT)', async () => {
    const userId = 1;
    const updatedUserData = {
      firstName: 'Updated User',
    };

    const response = await request(app.getHttpServer())
      .put(`/users/${userId}`)
      .send(updatedUserData)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({ id: userId, ...updatedUserData }),
    );
  });

  it('/users/:id (DELETE)', async () => {
    const userId = 1;

    await request(app.getHttpServer()).delete(`/users/${userId}`).expect(200);
  });

  it('/users (POST)', async () => {
    const userToCreate = {
      firstName: 'Nicolas Capiz',
      email: 'nicolascapiz98@gmail.com',
      accessToken: 'aSDAOFMEAdaDASD32412rASD1',
    };

    const response = await request(app.getHttpServer())
      .post('/users')
      .send(userToCreate)
      .expect(201);

    expect(response.body).toEqual(expect.objectContaining(userToCreate));
  });
  afterAll(async () => {
    await app.close();
  });
});
