const request = require('supertest');
const server = require('../server');
const db = require('../models');

describe('Pruebas para la función create', () => {

    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await db.sequelize.close();
        await new Promise((resolve) => server.close(resolve));
    });

    afterEach(async () => {
        await db.User.destroy({ where: {} });
    });

    it('debería crear un nuevo usuario y devolver un token de acceso', async () => {
        const userData = {
            name: 'Test User',
            email: 'test@example.com',
            discriminator: 'profesor',
            password: 'password123',
        };

        try {
            const response = await request(server)
                .post('/api/users/')
                .send(userData);

            
            expect(response.status).toBeGreaterThanOrEqual(200);
            expect(response.status).toBeLessThan(300);

            
            expect(response.body).toHaveProperty('user');
            expect(response.body.user).toHaveProperty('name', userData.name);
            expect(response.body.user).toHaveProperty('email', userData.email);
            expect(response.body.user).toHaveProperty('discriminator', userData.discriminator);
            expect(response.body.user).not.toHaveProperty('password', userData.password);
            expect(response.body).toHaveProperty('access_token');

            
            const createdUser = await db.User.findOne({
                where: { email: userData.email },
            });
            expect(createdUser).not.toBeNull();
        } catch (error) {
            console.error('Error en la prueba:', error);
            throw error; 
        }
    });

    it('debería devolver un error 400 si falta información', async () => {
        try {
            const response = await request(server)
                .post('/api/users/')
                .send({
                    name: 'Test User',
                    email: 'test@example.com',
                    discriminator: 'profesor',
                });

            expect(response.status).toBe(400);

            expect(response.body).toHaveProperty('message', 'Content can not be empty!');
        } catch (error) {
            console.error('Error en la prueba:', error);
            throw error; 
        }
    });
});

