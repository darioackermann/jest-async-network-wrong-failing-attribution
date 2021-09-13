const axios = require('axios');
const sleep = require("sleep-promise");

const Test =
{
    doRequest() {
        axios.get('http://example.com')
    },
}

describe('a failing test', function () {

    it('should do a request which fails when no network', async function () {
        let requestSpy = jest.spyOn(Test, "doRequest")
        Test.doRequest();
        // passes in any case
        expect(requestSpy).toBeCalledTimes(1)
    });

    it('should do something else', async function () {
        // fails if test is run without network
        await sleep(3000)
    });

});