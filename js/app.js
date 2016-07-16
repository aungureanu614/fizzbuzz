function fizzbuzz(){
	for(i=1; i<=100; i++){
		//check if i is divisible by both 3 and 5
		if((i%3 === 0) && (i%5 === 0)){
			$('body').append('FizzBuzz <br>');
		}
		//check if i is divisible by 3
		else if (i%3 === 0) {
			$('body').append('Fizz <br>');
		}
		//check if i is divisible by 5
		else if (i%5 === 0) {
			$('body').append('Buzz <br>');
		}
		//print i
		else{
			$('body').append(i + '<br>');
		}
	};
};

$(document).ready(function(){
	fizzbuzz();
});