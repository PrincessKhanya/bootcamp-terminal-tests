let assert=require("assert");
let findItemsOver=require("../findItemsOver")


describe('The findItemsOver function' , function(){
    it('should return items with a quantity over a treshold inputted when an object is inputed.' , function(){
        assert.deepEqual([
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ], findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ],20));
    });

    it('should return items with a quantity over a treshold inputted when an object is inputed.' , function(){
        assert.deepEqual([
        ], findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ],20));
    });

    it('should return items with a quantity over a treshold inputted when an object is inputed.' , function(){
        assert.deepEqual([
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ], findItemsOver([
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ],20));
    });

});