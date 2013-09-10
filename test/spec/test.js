/*global describe, it */
'use strict';
// (function () {
//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {

//             });
//         });
//     });
// })();
(function() {
	describe('Conversion App', function () {
		describe('should have set default values of inputs to zero', function() {
			var input = new MeasurementLength ();
	
			it("such as the value for inches", function (){
				expect(input.inches).equals(0)
			})
			it("such as the value for feet", function (){
				expect(input.feet).equals(0)
			})
			it("such as the value for yards", function (){
				expect(input.yards).equals(0)
			})
			it("such as the value for centimeters", function (){
				expect(input.centimeters).equals(0)
			})
			it("such as the value for meters", function (){
				expect(input.meters).equals(0)
			})
		})

		describe ('should allow for the alteration of values when offered', function(){
			var input = new MeasurementLength ();
			it('such as setting inches to 10', function(){
				input.inches=10;
				expect(input.inches).equals(10)
			})
			it('such as setting feet to 5', function(){
				input.feet=5;
				expect(input.feet).equals(5)
			})
			it('such as setting yards to 20', function(){
				input.yards=20;
				expect(input.yards).equals(20)
			})
			it('such as setting centimeters to 2', function(){
				input.centimeters=2;
				expect(input.centimeters).equals(2)
			})
			it('such as setting meters to 8', function(){
				input.meters=8;
				expect(input.meters).equals(8)
			})

		})

		describe ('when given a value of 36 for inches it should convert it to', function(){
			var input = new MeasurementLength ();
			input.inches = 36;
			fillObject(input);
			it('3 feet', function(){
				expect(input.feet).equals(3)
			})
			it('1 yard', function(){
				expect(input.yards).equals(1)
			})
			it('91.44 centimeters', function(){
				expect(input.centimeters).equals(91.44)
			})
			it('0.9144 yards', function(){
				expect(input.meters).equals(0.9144)
			})
		})
		describe ('when given a value of 3 for feet it should convert it to', function(){
			var input = new MeasurementLength ();
			input.feet = 3;
			fillObject(input);
			it('36 inches', function(){
				expect(input.inches).equals(36)
			})
			it('1 yard', function(){
				expect(input.yards).equals(1)
			})
			it('91.44 centimeters', function(){
				expect(input.centimeters).equals(91.44)
			})
			it('0.9144 meters', function(){
				expect(input.meters).equals(0.9144)
			})
		})
		describe ('when given a value of 1 for yards it should convert it to', function(){
			var input = new MeasurementLength ();
			input.yards = 1;
			fillObject(input);
			it('36 inches', function(){
				expect(input.inches).equals(36)
			})
			it('3 feet', function(){
				expect(input.feet).equals(3)
			})
			it('91.44 centimeters', function(){
				expect(input.centimeters).equals(91.44)
			})
			it('0.9144 meters', function(){
				expect(input.meters).equals(0.9144)
			})
		})
		describe ('when given a value of 91.44 for centimeters it should convert it to', function(){
			var input = new MeasurementLength ();
			input.centimeters = 91.44;
			fillObject(input);
			it('36 inches', function(){
				expect(input.inches).equals(36)
			})
			it('3 feet', function(){
				expect(input.feet).equals(3)
			})
			it('1 yard', function(){
				expect(input.yards).equals(1)
			})
			it('0.9144 meters', function(){
				expect(input.meters).equals(0.9144)
			})
		})

		describe ('when given a value of .9144 for meters it should convert it to', function(){
			var input = new MeasurementLength ();
			input.meters = 0.9144;
			fillObject(input);
			it('36 inches', function(){
				expect(input.inches).equals(36)
			})
			it('3 feet', function(){
				expect(input.feet).equals(3)
			})
			it('1 yard', function(){
				expect(input.yards).equals(1)
			})
			it('91.44 centimeters', function(){
				expect(input.centimeters).equals(91.44)
			})
		})



	})

}) ();