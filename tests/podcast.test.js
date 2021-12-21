process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url = 'http://localhost:3001';




describe('get all podcasts: ', () => {
    it('should get all podcasts', (done) => {
        chai.request(url)
            .get('/podcasts/all')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('get the podcast with id 61a9165f8d0f9374b766bff8: ', () => {
    it('should get the podcast with id 61a9165f8d0f9374b766bff8', (done) => {
        chai.request(url)
            .get('/podcasts/61a9165f8d0f9374b766bff8')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('get the podcast with title Xenofobia: ', () => {
    it('should get the podcast with title Xenofobia', (done) => {
        chai.request(url)
            .get('/podcasts/title/Xenofobia')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('get the podcast with genre Física: ', () => {
    it('should get the podcast with genre Física', (done) => {
        chai.request(url)
            .get('/podcasts/genre/Fisica')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('get the podcast with author Entiende tu mente: ', () => {
    it('should get the podcast with author Entiende tu mente', (done) => {
        chai.request(url)
            .get('/podcasts/author/Entiende tu mente')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('Insert a podcast: ', () => {
    it('should insert a podcast', (done) => {
        chai.request(url)
            .post('/podcasts/insert/')
            .send({
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
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('delete the podcast with id 61a9165f8d0f9374b766bffe : ', () => {
    it('should delete the podcast with id 61a9165f8d0f9374b766bffe', (done) => {
        chai.request(url)
            .get('/podcasts/61a9288e53b21efc57665134')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                chai.request(url)
                    .del('/podcasts/61a9288e53b21efc57665134')
                    .end(function (err, res) {
                        console.log(res.body)
                        expect(res).to.have.status(200);
                        chai.request(url)
                            .get('/podcasts/all')
                            .end(function (err, res) {
                                console.log(res.body)
                                expect(res).to.have.status(200);
                                done();
                            });
                    });
            });
    });
});

