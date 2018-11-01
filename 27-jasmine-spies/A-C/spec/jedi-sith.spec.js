var { Jedi } = require("../starwars.js");
var { Sith } = require("../starwars.js");

describe("Jedi Class", function () {
    let sith;
    let jedi;

    beforeEach(function () {
        jedi = new Jedi("Jedi Master", 200, 200);
        sith = new Sith("Sith Lord", 200, 200);

        spyOn(sith, "injure").and.callFake((damage) => {
            expect(damage).toBeLessThan(jedi.power);
        });
    });

    it('should have its own attributes', () => {
        expect(jedi.name).toEqual('Jedi Master');
        expect(jedi.power).toEqual(200);
        expect(jedi.health).toEqual(200);
    });

    it('should be able to attack other based on its power',()=>{
        jedi.attack(sith);
        expect(sith.injure).toHaveBeenCalledTimes(1);
    })

    it('should deduct health when injured',()=>{
        jedi.injure(50);
        expect(jedi.health).toEqual(150);
    })

    it('should not dead when health is not 0',()=>{
        jedi.injure(50);
        expect(jedi.dead()).toBeFalsy;
    })

    it('should be when health is less or equal to 0',()=>{
        jedi.injure(9999);
        expect(jedi.dead()).toBeTruthy;
    })
});


describe("Sith Class", function () {
    let sith;
    let jedi;

    beforeEach(function () {
        jedi = new Jedi("Jedi Master", 200, 200);
        sith = new Sith("Sith Lord", 200, 200);

        spyOn(jedi, "injure").and.callFake((damage) => {
            expect(damage).toBeLessThan(sith.power);
        });
    });

    it('should have its own attributes', () => {
        expect(sith.name).toEqual('Sith Lord');
        expect(sith.power).toEqual(200);
        expect(sith.health).toEqual(200);
    });

    it('should be able to attack other based on its power',()=>{
        sith.attack(jedi);
        expect(jedi.injure).toHaveBeenCalledTimes(1);
    })

    it('should deduct health when injured',()=>{
        sith.injure(50);
        expect(sith.health).toEqual(150);
    })

    it('should not dead when health is not 0',()=>{
        sith.injure(50);
        expect(sith.dead()).toBeFalsy;
    })

    it('should be when health is less or equal to 0',()=>{
        sith.injure(9999);
        expect(sith.dead()).toBeTruthy;
    })
});
