const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect, it} = chai;
const {describe} = mocha;

chai.use(chaiHttp);
// We will have one testing suite for the GET request
describe('COVID API', () => {
    it('should return 200 success code', function () {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                // Assert request is successful
                expect(response).to.have.status(200);
                // Everything in the body.message happens to be a string
                // We want cases which is not; this assures the right result
                expect(response.body.message).to.not.be.a('string')
                expect(response.body.message).to.be.an('object')
                done();
            })
    });

})
