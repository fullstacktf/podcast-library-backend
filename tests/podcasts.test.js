import supertest from 'supertest'
import app from '../src/server.js'
import express from 'express'
const router = express.Router()

const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Podcasts Endpoints', () => {

    it('GET /podcasts should show all podcasts', async () => {
        const res = await requestWithSupertest.get('/podcasts');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('podcasts')
    });

    it('GET /podcasts should show one podcast by id', async () => {
        const res = await requestWithSupertest.get('/podcasts/3');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('podcast3')
    });

    it('GET /podcasts should show one podcast by title', async () => {
        const res = await requestWithSupertest.get('/podcasts/title/Autosabotaje');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('Autosabotaje')
    });

    it('GET /podcasts should show one podcast by author', async () => {
        const res = await requestWithSupertest.get('/podcasts/author/Entiende tu mente');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('Entiende tu mente')
    });

    it("DELETE podcasts/:id", async () => {
        const post = await Post.create({
            title: "Auto",
            author: "Entiende",
            episode: 784,
            description: "Podcast sobre como ",
            image: "http://i3.ytimg.com/vi/6ZQ1pIZeTXg/hqdefault.jpg",
            language: "español",
            url: "https://www.youtube.com/watch?v=6ZQ1pIZeTXg",
            genre: "Psicología",
            provider: "YouTube"
        })
        await supertest(app)
            .delete("/podcasts/" + post.id)
            .expect(204)
            .then(async () => {
                expect(await Post.findOne({ _id: post.id })).toBeFalsy()
        })
    });  
    it("POST /podcasts/insert", async () => {
        const data = {
            title: "Auto",
            author: "Entiende",
            episode: 784,
            description: "Podcast sobre como ",
            image: "http://i3.ytimg.com/vi/6ZQ1pIZeTXg/hqdefault.jpg",
            language: "español",
            url: "https://www.youtube.com/watch?v=6ZQ1pIZeTXg",
            genre: "Psicología",
            provider: "YouTube"
        }

        await supertest(app)
            .post("/podcasts/insert")
            .send(data)
            .expect(200)
            .then(async (response) => {
			// Check the response
			expect(response.body._id).toBeTruthy()
			expect(response.body.title).toBe(data.title)
			expect(response.body.author).toBe(data.author)
            expect(response.body.episode).toBe(data.episode)
			expect(response.body.description).toBe(data.description)
            expect(response.body.image).toBe(data.image)
			expect(response.body.language).toBe(data.language)
            expect(response.body.url).toBe(data.url)
            expect(response.body.genre).toBe(data.genre)
            expect(response.body.provider).toBe(data.provider)
			// Check the data in the database
			const post = await Post.findOne({ _id: response.body._id })
			expect(post).toBeTruthy()
			expect(post.title).toBe(data.title)
			expect(post.author).toBe(data.content)
            expect(post.author).toBe(data.author)
            expect(post.episode).toBe(data.episode)
			expect(post.description).toBe(data.description)
            expect(post.image).toBe(data.image)
			expect(post.language).toBe(data.language)
            expect(post.url).toBe(data.url)
            expect(post.genre).toBe(data.genre)
            expect(post.provider).toBe(data.provider)
        });
    });  

    test("GET /user", async () => {
        const post = await Post.create({
            username: "Post 1",
            password: "Lorem ipsum",
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
