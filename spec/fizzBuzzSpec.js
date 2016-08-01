describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe('.play', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('fizz');
    });
    it('buzzes for 5', function(){
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
    it('buzzes for 10', function(){
      expect(fizzBuzz.play(10)).toEqual('buzz');
    });
    it('fizzbuzzes for 15', function(){
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });
    it('fizzbuzzes for 30', function(){
      expect(fizzBuzz.play(30)).toEqual('fizzbuzz');
    });
    it('returns the number in other cases', function(){
      expect(fizzBuzz.play(4)).toEqual(4);
    });
  });
});
