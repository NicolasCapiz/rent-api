import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('LocationController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/locations (POST)', async () => {
    const locationToCreate = {
      name: 'Example Location',
      address: '123 Main St',
      manager: { connect: { id: 2 } },
    };

    const response = await request(app.getHttpServer())
      .post('/locations')
      .send(locationToCreate)
      .expect(201);

    expect(response.body).toEqual(
      expect.objectContaining({ address: '123 Main St', id: 1, managerId: 2 }),
    );
  });

  it('/locations (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/locations')
      .expect(200);

    expect(response.body).toHaveLength(1); // Assuming two locations are created in the LocationController
  });

  it('/locations/:id (GET)', async () => {
    const locationId = 1;

    const response = await request(app.getHttpServer())
      .get(`/locations/${locationId}`)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining({ id: locationId }));
  });

  it('/locations/:id (PUT)', async () => {
    const locationId = 1;
    const updatedLocationData = {
      name: 'Updated Location',
    };

    const response = await request(app.getHttpServer())
      .put(`/locations/${locationId}`)
      .send(updatedLocationData)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({ id: locationId, ...updatedLocationData }),
    );
  });

  it('/locations/:id (DELETE)', async () => {
    const locationId = 1;

    await request(app.getHttpServer())
      .delete(`/locations/${locationId}`)
      .expect(200);
  });

  it('/locations (POST)', async () => {
    const locationToCreate = {
      name: 'Local 32',
      address: 'Rivadavia 2767',
      manager: { connect: { id: 2 } },
    };

    const response = await request(app.getHttpServer())
      .post('/locations')
      .send(locationToCreate)
      .expect(201);

    expect(response.body).toEqual(
      expect.objectContaining({
        address: 'Rivadavia 2767',
        id: 2,
        managerId: 2,
      }),
    );
  });
  it('/locations (POST)', async () => {
    const locationToCreate = {
      name: 'Loacal 21',
      address: 'Rivadavia 2767',
      manager: { connect: { id: 2 } },
    };

    const response = await request(app.getHttpServer())
      .post('/locations')
      .send(locationToCreate)
      .expect(201);

    expect(response.body).toEqual(
      expect.objectContaining({
        address: 'Rivadavia 2767',
        id: 3,
        managerId: 2,
      }),
    );
  });

  afterAll(async () => {
    await app.close();
  });
});
