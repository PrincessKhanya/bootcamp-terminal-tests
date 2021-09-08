let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function' , function(){

    it('should return "true" when the number plate DC 55 YU GP  maches the letters entered GP from the place ' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('should return "fase" when the number plate DC 55 YU GP  does not maches the letters entered GP from the place ' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('should return "true" when the number plate 5566 L  maches the letters entered L from the place ' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('should return "false" when the number plate 5566 L  does not maches the letters entered L from the place ' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('should return "true" when the number plate ERT 123 EC  maches the letters entered EC from the place ' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('should return "false" when the number plate ERT 123 EC  does not maches the letters entered EC from the place ' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('should return "true" when the number plate FGT 123 MP  maches the letters entered MP from the place ' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('should return "false" when the number plate FGT 123 MM  does not maches the letters entered MP from the place ' , function(){
        assert.equal(regCheck('FGT 123 MP', 'GP'), false);
    });

    it('should return "false" when the number plate ND 123-456 starts with the letters from the place ND' , function(){
        assert.equal(regCheck('ND 123-456', 'ND'), false);
    });

    it('should return "false" when the number plate CY 678-453 starts with the letters from the place CY' , function(){
        assert.equal(regCheck('CY 678-453', 'CY'), false);
    });

    it('should return "false" when the number plate CA 1234-123 starts with the letters from the place CA' , function(){
        assert.equal(regCheck('CA 1234-123', 'CA'), false);
    });

});