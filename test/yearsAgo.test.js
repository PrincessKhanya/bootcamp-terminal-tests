let assert=require("assert");
let yearsAgo=require("../yearsAgo")

describe('The yearsAgo function' , function(){
    it('should return the difference between the current year and 2021 which is 1 year ago' , function(){
        assert.equal(1, yearsAgo(2020))
    });

    it('should return the difference between the current year and 1800 which is 221 year ago' , function(){
        assert.equal(221, yearsAgo(1800))
    });

    it('should return the difference between the current year and 2000 which is 21 year ago' , function(){
        assert.equal(21, yearsAgo(2000))
    });

    it('should return the difference between the current year and 1976 which is 45 year ago' , function(){
        assert.equal(45, yearsAgo(1976))
    });

});