let assert=require("assert");
let transportFee=require("../transportFee");

describe('The transportFee function' , function(){
    it('should return the right price if transpotation is taken in the morning , which should be R20' , function(){
        assert.equal(transportFee("morning"), "R20");
    });

    it('should return the right price if transpotation is taken in the afternoon , which should be R10' , function(){
        assert.equal(transportFee("afternoon"), "R10");
    });

    it('should return the right price if transpotation is taken at night , which should be free' , function(){
        assert.equal(transportFee("nightshift"), "free");
    });
});