let assert=require("assert");
let countRegNumber=require("../countRegNumber")


describe('The countRegNumber function' , function(){

    it('should return 3 if registration number inputed  is "CA 182736,CY 523519,CJ 812328" ' , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('should return 1 if registration number inputed is "CA 182736"' , function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
    
    it('should return "Please input registration number" if registration number inputed is " "' , function(){
        assert.equal("Please input registration number", countRegNumber(''));
    });

    
    
});