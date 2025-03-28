describe('API Testing', () => {
    const baseUrl = 'https://echo-serv.tbxnet.com';
    
    it('should validate GET /qa/test1', () => {
        cy.request('GET', `${baseUrl}/v1/qa/test1`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('ok', true);
            expect(response.body).to.have.property('date').that.is.a('string');
            expect(response.headers).to.have.property('content-type').that.includes('application/json');
            expect(response.duration).to.be.lessThan(3000); 
        });
    });

    describe('GET /qa/echo with text parameter', () => {
        it('should return a response with provided text', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/v1/echo`,
                qs: { text: 'Hello World' }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('text', 'Hello World');
            });
        });

        it('should return an error when text is empty', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/v1/echo`,
                qs: { text: '' },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.be.within(400, 500);
            });
        });
    });
});