let assert = require("assert");
let isWeekday = require("../isWeekday")

describe('The isWeekday function' , function(){
    it('should return "true" when Monday is entered' , function(){
        assert.equal(isWeekday("Monday"), true);
    });

    it('should return "false" when Sunday is entered' , function(){
        assert.equal(isWeekday("Sunday"), false);
    });

    it('should return "true" when Wednesday is entered' , function(){
        assert.equal(isWeekday("Wednesdat"), true);
    });

    it('should return "false" when Saturday is entered' , function(){
        assert.equal(isWeekday("Saturday"), false);
    });

});