//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let podcast = require('../app/models/podcasts');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('podcasts', () => {
    beforeEach((done) => { //Before each test we empty the database
        podcast.remove({}, (err) => {
           done();
        });
    });
/*
  * Test the /GET route
  */
  describe('/GET podcast', () => {
      it('it should GET all the podcasts', (done) => {
        chai.request(server)
            .get('/podcast')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});
/*
  * Test the /POST route
  */
describe('/POST podcast', () => {
    it('it should not POST a podcast without title field', (done) => {
        let  = {
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
      chai.request(server)
          .post('/podcast/id')
          .send(podcast)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
            done();
        });
    });
    it('it should POST a podcast ', (done) => {
        let podcast = {
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
          chai.request(server)
          .post('/podcast/id')
          .send(podcast/id)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Podcast successfully added!');
                res.body.podcast.should.have.property('title');
                res.body.podcast.should.have.property('author');
                res.body.podcast.should.have.property('genre');
            done();
          });
    });
});
describe('/GET/:id podcast', () => {
    it('it should GET a podcast by the given id', (done) => {
        let podcast = new podcast({  author: "Entiende",episode: 784, description: "Podcast sobre como ",image: "http://i3.ytimg.com/vi/6ZQ1pIZeTXg/hqdefault.jpg",language: "español",url: "https://www.youtube.com/watch?v=6ZQ1pIZeTXg",genre: "Psicología",provider: "YouTube" });
        podcast.save((err, podcast) => {
            chai.request(server)
          .get('/podcast/' + podcast.id)
          .send(podcast)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('author');
                res.body.should.have.property('title');
                res.body.should.have.property('episode');
                res.body.should.have.property('description');
                res.body.should.have.property('image');
                res.body.should.have.property('lenguage');
                res.body.should.have.property('url');
                res.body.should.have.property('genre');
                res.body.should.have.property('_id').eql(podcast.id);
            done();
          });
        });

    });
});

/*
* Test the /DELETE/:id route
*/
describe('/DELETE/:id podcast', () => {
    it('it should DELETE a podcast given the id', (done) => {
        let podcast = new podcast({"title": "Space: What is dark matter","author": "BBC", "episode": 1,"description": "Podcast sobre la materia oscura","image": "http://i3.ytimg.com/vi/jgjiMixh_nE/hqdefault.jpg","language": "english","url": "https://www.youtube.com/watch?v=mG0P0-cwfd0","genre": "Física","provider": "YouTube"})
        podcast.save((err, podcast) => {
              chai.request(server)
              .delete('/podcast/' + podcast.id)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Podcast successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                done();
              });
        });
    });
});