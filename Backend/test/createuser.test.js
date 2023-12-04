const request = require('supertest');
const app = require('../server');
const db = require('../models');

describe('Pruebas para la función create', () => {

    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await db.sequelize.close();
    });

    it('debería crear un nuevo usuario y devolver un token de acceso', async () => {
        const userData = {
            name: 'Test User',
            email: 'test@example.com',
            discriminator: 'profesor',
            password: 'password123',
        };

        const response = await request(app)
            .post('/api/users/')
            .send(userData);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('user');
        expect(response.body.user).toHaveProperty('name', userData.name);
        expect(response.body).toHaveProperty('access_token');


        const createdUser = await db.User.findOne({
            where: { email: userData.email },
        });
        expect(createdUser).not.toBeNull();

        await createdUser.destroy();
    });

    it('debería devolver un error 400 si falta información', async () => {
        
        const response = await request(app)
            .post('/api/users/')
            .send({
                name: 'Test User',
                email: 'test@example.com',
                discriminator: 'profesor',
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Content can not be empty!');

    });

});

