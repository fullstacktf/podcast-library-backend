import supertest from 'supertest'
import app from '../server.js'
import express from 'express'
const router = express.Router()

const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {
    it('GET /user/:id should show a user', async () => {
        const res = await requestWithSupertest.get('/users/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('user3')
    });

    it("DELETE user/:id", async () => {
        const post = await Post.create({
            username: "Usuario",
            password: "Ee",
            
        })
        await supertest(app)
            .delete("/podcasts/" + post.id)
            .expect(204)
            .then(async () => {
                expect(await Post.findOne({ _id: post.id })).toBeFalsy()
        })
    });  



});