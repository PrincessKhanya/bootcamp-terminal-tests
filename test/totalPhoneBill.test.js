let assert = require("assert");
let totalPhoneBill=require("../totalPhoneBill");

describe('The totalPhoneBill function' , function(){
    it('should return the cost of all the calls and sms "call, sms, call, sms, sms" sent when inputted. The result should be R7.45' , function(){
        assert.equal("R"+7.45, totalPhoneBill('call, sms, call, sms, sms'))
    });

    it('should return the cost of all the calls and sms "call, sms" sent when inputted. The result should be R3.40' , function(){
        assert.equal("R"+3.40.toFixed(2), totalPhoneBill('call, sms'))
    });

    it('should return the cost of all the calls and sms "sms, sms" sent when inputted. The result should be R3.40' , function(){
        assert.equal("R"+1.30.toFixed(2), totalPhoneBill('sms, sms'))
    });

});