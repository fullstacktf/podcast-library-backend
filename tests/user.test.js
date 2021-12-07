import supertest from 'supertest'
import app from '../src/server.js'
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
    test("POST /user", async () => {
        const post = await Post.create({
            username: "Post1",
            password: "Loremipsum",
        })
    
        await supertest(app)
            .get("/user")
            .expect(200)
            .then((response) => {
                // Check the response type and length
                expect(Array.isArray(response.body)).toBeTruthy()
                expect(response.body.length).toEqual(1)
    
                // Check the response data
                expect(response.body[0]._id).toBe(post.id)
                expect(response.body[0].title).toBe(post.username)
                expect(response.body[0].content).toBe(post.password)
            })
    })


});