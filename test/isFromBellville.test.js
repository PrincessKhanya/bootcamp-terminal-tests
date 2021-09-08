let assert = require("assert");
let isFromBellville = require("../isFromBellville.js");


describe('The isFromBellville function' , function(){
    it('should return "true" when a number plate starting with CY is entered' , function(){
        assert.equal(true, isFromBellville("CY 123"));
    });

    it('should return "false" when a number plate not starting with CY is entered' , function(){
        assert.equal(isFromBellville("FY 123"), false);
    });

    it('should return "Please enter number plate" when no number plate is entered ' , function(){
        assert.equal('Please enter number plate', isFromBellville(''));
    });

});