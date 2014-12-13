var emailController = require('../routes/emailController');
var htmlCreator = require('../htmlCreator/htmlCreator');
var commonJsonCreator = require('../htmlCreator/commonJsonCreator');
var fs = require('fs');


describe("json to html", function () {
    it("should transform a json to a html", function () {
        var stringToTransform = fs.readFileSync('emailJSON/AgencyLookToBook.json', 'utf8');
        var jsonToTransform = JSON.parse(stringToTransform);
        var commonJson = commonJsonCreator.getCommonJson(jsonToTransform);
        var actualResultHtml = htmlCreator.getHtml(commonJson.tableHeader, commonJson.tableContent);
        var expectedResultHtml = fs.readFileSync('emailJSON/htmlResult_AgencyLookToBook_json.html', 'utf8');
        expect(actualResultHtml).toBe(expectedResultHtml);
    });
}); 