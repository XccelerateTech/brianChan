var { Jedi } = require("../starwars.js");
var { Sith } = require("../starwars.js");
var { duel } = require("../starwars.js");

describe("duel",function(){
    beforeEach(()=>{
        fakeAnakin = new Sith("Anakin Skywalker", 100, 1000);
        fakeObiwan = new Jedi("Obiwan Kenobi", 70, 700);

        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
      });

    it('Anakind health and power should be changed after rescue',()=>{
       

        duel(fakeObiwan, fakeAnakin);

        jasmine.clock().tick(5000);

        expect(fakeAnakin.health).toBe(800);
        expect(fakeAnakin.power).toBe(90);


    })
}

)