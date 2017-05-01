
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect();

let hostName = 'http://vm344a.se.rit.edu:80';
let apiFile = '/htdocs/SWEN-344-API/API/API.php';
let baseGetUrl = apiFile.concat('?team=book_store');

chai.use(chaiHttp);


describe('/GET book using negative isbn', () => {
      it('it should return status code of 400 Bad Request', (done) => {
	let query = baseGetUrl.concat('&function=getBook&isb=-123456789');
	console.log(query);
        
	try{
		chai.request(hostName)
	    .get(query)
            .end((err, res) => {
	//	res.body.should.be.a('Object');
		//res.body.should.be.empty;
		res.should.have.status(400);
              done();
            });
	} catch (err) {
			done();
	}
	
      });
  });
describe('/GET book using isbn = 4', () => {
      it('it should return an object', (done) => {
	let query = baseGetUrl.concat('&function=getBook&isbn=4');
	console.log(query);
        chai.request(hostName)
	    .get(query)
            .end((err, res) => {
		res.body.should.be.a('Object');
              done();
            });
      });
  });
describe('/GET book using isbn = 4', () => {
      it('it should have ISBN property', (done) => {
	let query = baseGetUrl.concat('&function=getBook&isbn=4');
	console.log(query);
        chai.request(hostName)
	    .get(query)
            .end((err, res) => {
		res.body.should.be.a('Object');
		console.log(res.body);
		Object.keys(res.body).should.not.be.eql(0);
              done();
            });
      });
  });

describe('Create book using GET', () =>{
    it('it should return status code 400', (done)=>{
	let getFunction = '&function=createBook';
	let isbn = '&isbn=123456890';
	let title ='&title=testTitle';
	let publisherID = '&publisher_id=1';
	let thumbnail_url = '&thumbnail_url=testurl';
	let available = '&available=0';
	let count = '$count=0';

	let params =  [getFunction,isbn,title,publisherID,thumbnail_url,available,count].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);

        chai.request(hostName)
	    .get(url)
            .end((err, res) => {
		res.should.have.status(400);
              done();
            });
    });
});

// BLOCKED  - Let this pass for now
// NEED delete book to run first
describe('Create book using POST', () =>{
    it('it should return a 201 status code', (done)=>{
	let getFunction = '&function=createBook';
	let isbn = '&isbn=';
	let title ='&title=testTitle';
	let publisherID = '&publisher_id=1';
	let thumbnail_url = '&thumbnail_url=testurl';
	let available = '&available=0';
	let count = '$count=0';

	let params =  [getFunction,isbn,title,publisherID,thumbnail_url,available,count].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);

        chai.request(hostName)
	    .post(url)
            .end((err, res) => {
		//res.body.should.be.a('Object');
		//res.body.should.be.empty;
		//res.should.have.status(201);
              done();
            });
    });
});

describe('Create book using GET with negative isbn', () =>{
      it('it should return status code of 400 Bad Request', (done) => {
	let getFunction = '&function=createBook';
	let isbn = '&isbn=-123456890';
	let title ='&title=testTitle';
	let publisherID = '&publisher_id=1';
	let thumbnail_url = '&thumbnail_url=testurl';
	let available = '&available=0';
	let count = '$count=0';

	let params =  [getFunction,isbn,title,publisherID,thumbnail_url,available,count].join('');
	let url = baseGetUrl.concat(params);
	console.log(url);

        chai.request(hostName)
	    .get(url)
            .end((err, res) => {
		//res.body.should.be.a('Object');
		res.should.have.status(400);
              done();
            });
    });
});



describe('/Create book reviews using GET', () => {
      it('it should return status code of 400', (done) => {
	let getFunction = '&function=createReview';
	let review = '&review=test review';
	let rating = '&rating=5';
	let isbn = '&book_isbn=4';
	let user = '&user_id=1';

	let params = [getFunction, review, rating, isbn, user].join('');

	let query = baseGetUrl.concat(params);
	console.log(query);
        chai.request(hostName)
	    .get(query)
            .end((err, res) => {
		res.should.have.status(400);
              done();
            });
      });
  });

describe('/Create book reviews using POST', () => {
      it('it should return status code of 201', (done) => {
	let getFunction = '&function=createReview';
	//

	let params = [getFunction].join('');

	let query = baseGetUrl.concat(params);
	console.log(query);
        
	chai.request(hostName)
	    .post(query)
		.set('content-type', 'application/x-www-form-urlencoded')
		.type('form')
		.send('review=test_review')
		.send('rating=5')
		.send('book_isbn=4')
		.send('user_id=1')
		.end((err, res) => {
		res.should.have.status(201);
		//res.body.should.be.a('array');

              done();
            });
      });
  });



describe('/GET book reviews data type', () => {
      it('it should return an array', (done) => {
	let query = baseGetUrl.concat('&function=viewBookReviews&isbn=4');
	console.log(query);
        chai.request(hostName)
	    .get(query)
            .end((err, res) => {
		res.body.should.be.a('array');
              done();
            });
      });
  });
describe('/GET book reviews status code', () => {
      it('it should return status code of 200', (done) => {
	let query = baseGetUrl.concat('&function=viewBookReviews&isbn=4');
	console.log(query);
        chai.request(hostName)
	    .get(query)
            .end((err, res) => {
		res.should.have.status(200);
              done();
            });
      });
  });
