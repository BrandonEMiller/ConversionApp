function MeasurementLength (option) {
	option = option || {}
	this.inches = option.inches || 0
	this.feet = option.feet || 0
	this.yards = option.yards || 0
	this.centimeters = option.centimeters || 0
	this.meters = option.meters || 0


}


  $('.btn-success').click(function(){
    getFormValues()
    fillObject (input)
    conversionListUpdate (input)
  })



function getFormValues () {
  var inches = $('.inches-input').val();
  var feet  = $('.feet-input').val();
  var yards  = $('.yards-input').val();
  var centimeters = $('.centimeters-input').val();
  var meters = $('.meters-input').val();
  input  = new MeasurementLength 
    input.inches = inches
    input.feet = feet
    input.yards = yards
    input.centimeters = centimeters
    input.meters= meters

  return input
}


function fillObject (object) {

	if (object.inches > 0){
		object.feet= object.inches/12
		object.yards=object.inches/36
		object.centimeters= object.inches*2.54
		object.meters = object.centimeters/100
		
	}

	else  if (object.feet > 0){
		object.inches = object.feet*12
		object.yards = object.feet/3
		object.centimeters = object.inches * 2.54
		object.meters = object.centimeters/100
	}

	else if (object.yards > 0 ){
		object.inches = object.yards * 36
		object.feet = object.yards * 3
		object.centimeters = object.inches * 2.54
		object.meters = object.centimeters/100
	}

	else if (object.centimeters > 0) {
		object.inches = object.centimeters/2.54
		object.feet= object.inches/12
		object.yards=object.inches/36
		object.meters = object.centimeters/100
		
	}

	else if (object.meters > 0) {
		object.centimeters= object.meters * 100
		object.inches = object.centimeters/2.54
		object.feet= object.inches/12
		object.yards=object.inches/36
	}
	return object



}

function conversionListUpdate (object) {
  var ul = $('.conversion-list ul');
  ul.html('');

  
    var text = "<li>"+ object.inches + " inches </li> <li>" + object.feet + " feet </li> <li> " + object.yards + " yards </li> <li> " + object.centimeters + " centimeters </li> <li>" + object.meters + " meters </li>";
    ul.append(text);
  
}

