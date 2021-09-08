let assert=require("assert");
let fromWhere=require("../fromWhere");

describe('The fromWhere function' , function(){
    it('should return where a car is from given the car registration number. If CY is entered it should return Bellville "true" when a number plate starting with CY is entered' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('should return where a car is from given the car registration number. If CJ is entered it should return Paarl "true" when a number plate starting with CJ is entered' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('should return where a car is from given the car registration number. If CA is entered it should return Cape Town "true" when a number plate starting with CA is entered' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('should return where a car is from given the car registration number. If CC is entered it should return Some other place "true" when a number plate starting with CC is entered' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

});