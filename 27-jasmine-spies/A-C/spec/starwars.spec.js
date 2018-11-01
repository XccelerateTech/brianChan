describe("duel", function () {
    var { Jedi } = require("../starwars.js");
    var { Sith } = require("../starwars.js");
    var { duel } = require("../starwars.js");

    beforeEach(function () {
        fakeAnakin = new Sith("Anakin Skywalker", 100, 1000);
        fakeObiwan = new Jedi("Obiwan Kenobi", 70, 700);
        spyOn(fakeObiwan, 'attack');
        spyOn(fakeAnakin, 'attack');
        spyOn(fakeAnakin, 'injure');
        spyOn(fakeAnakin, 'dead');
    });

    it('testing duel function', function () {

        duel(fakeObiwan, fakeAnakin);

        expect(fakeObiwan.attack).toHaveBeenCalledTimes(6);
        expect(fakeObiwan.attack).toHaveBeenCalledWith(fakeAnakin);
        expect(fakeAnakin.attack).toHaveBeenCalledTimes(6);
        expect(fakeAnakin.attack).toHaveBeenCalledWith(fakeObiwan);
        expect(fakeAnakin.injure).toHaveBeenCalledTimes(1);

    });
});



