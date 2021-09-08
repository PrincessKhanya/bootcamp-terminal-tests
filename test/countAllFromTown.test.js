let assert=require("assert");
let countAllFromTown=require("../countAllFromTown")


describe('The countAllFromTown function' , function(){

    it('should return 3 the number of registation from Stellenbosch if registration number inputed  is "CL 124,CY 567,CL 345, CJ 456,CL 341" and the regPlace is "CL"' , function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });

    it('should return 1 the number of registation from Kuilsriver if registration number inputed  is "CJ 124,CY 567,CL 345, CF 456, CL 341" and the regPlace is "CF"' , function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });
  
});