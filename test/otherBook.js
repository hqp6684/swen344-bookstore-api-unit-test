let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect();

let hostName = 'http://vm344a.se.rit.edu:80';
let apiFile = '/htdocs/SWEN-344-API/API/API.php';
let baseGetUrl = apiFile.concat('?team=book_store');

chai.use(chaiHttp);

describe('GET toggle book', () =>{
	it('it should return an empty json object', (done)=>{
		let query = baseGetUrl.concat('&function=toggleBook&isbn=4&available=1');
			chai.request(hostName)
			.get(query)
				.end((err, res) => {
			res.body.should.be.a('Object');
			res.body.should.be.empty;
					done();
				});
	});
});

describe('/GET order book', () =>{
	it('it should return a number to indicate new amount', (done)=>{
		let query = baseGetUrl.concat('&function=orderBook&isbn=4&amount=1');
			chai.request(hostName)
			.get(query)
				.end((err, res) => {			
			res.body.should.be.a('string');
			res.body.should.be.least(0);
					done();
				});
	});
});

describe('/POST create review', () =>{
	it('it should return an empty json object', (done)=>{
		let getFunction = '&function=createReview';
		let id = '&id=1';
		let review = '&review=My test review';
		let rating = '&rating=4';
		let book_isbn = '&book_isbn=4';
		let user_id = '&user_id=1';
		
		let params = [getFunction, id, review, rating, book_isbn,
			user_id].join('');
			
		let url = baseGetUrl.concat(params);
			chai.request(hostName)
			.get(url)
				.end((err, res) => {			
			res.body.should.be.a('Object');
			res.body.should.be.empty;
					done();
				});
	});
});
