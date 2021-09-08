let assert=require("assert");
let findItemsOver20=require("../findItemsOver20");


describe('The findItemsOver20 function' , function(){
    it('should return items with a quantity over 20 when an object is inputed.' , function(){
        assert.deepEqual([
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ], findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
    });

    it('should return items with a quantity over 20 when an object is inputed.' , function(){
        assert.deepEqual([
        ], findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ]));
    });

    it('should return items with a quantity over 20 when an object is inputed.' , function(){
        assert.deepEqual([
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ], findItemsOver20([
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ]));
    });

    

});