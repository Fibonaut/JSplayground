/*setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
	alert("Stop starring and do something!");
}*/
do var name = String(prompt("Enter Your name"));
while (!name);
console.log(name);
alert("Welcome "+name.toUpperCase()+" to JSplayground");
function fac(n) {
	if ( n == 0) 
		return 1;
	else 
		return fac(n - 1)*n;
		}

//FACTORALIZE!
if (confirm("Do You want to factoralize a number?")) {
	var n = Number(prompt("Ok, then enter number", "0"));
		if (!isNaN(n)) {
			alert("Factoralized number "+n+" is "+ fac(n));
			console.log("Factoralized number "+n+ " is \n", fac(n) < 100 ? fac(n) + " and is less than 100" : fac(n) +" and is greater than 100");
		}
		else alert("That is not a valid number!");
	}

//MULTIPLIER, CLOSURE DEMO
else if (confirm("Do You want to multiply a number?")) {
	function multiplier (factor) {
		return function (number) {
			return number *= factor;
		};
	}
	var n = Number(prompt("Ok, then enter number", "0"));
	var multi = multiplier(n);	
		console.log("Multiplied by 5: " + multi(5));
		console.log("Multiplied by 10: " + multi(10));
		console.log("Multiplied by 50: " + multi(50))
	alert("Press F12 for results");
	}

//POWER UP NUMBER
else if (confirm("Do You wish to test power WHILE loop?")) {
	var n = Number(prompt("Enter number You wish to power up", "0"));
	var p = Number(prompt("Enter power of number", "0"));
	var result = 1;
	var counter = 0;
	while (counter < p) {
		result *= n;
		counter += 1;
		console.log(result);
	}
	alert("Your powered number is "+result+" Press F12 to see your loop result!");
}
else if (confirm("Do You wish to test power FOR loop?")) {
var power = function (base, exponent) {
	if (exponent == undefined)
		exponent = 2; 
	var result = 1;
	for (var count = 0; count < exponent; count++) {
		result *= base;
		}
	return result;
	}
var base = Number(prompt("Enter base number", "0"));
var exponent = Number(prompt("Enter exponent", "0"));
alert(base+" powered up "+exponent+" times is "+power(base, exponent));
console.log(power(base, exponent));
}

else if (confirm("Do You want to power up number recursevly?")) {
	function power(base, exponent) {
		if (exponent == 0)
			return 1;
		else {
			return base * power(base, exponent - 1);
		}
	}
	alert("For power up results press F12");
	console.log("2 power up for 3 is "+power(2,3));
	console.log("3 power up for 4 is "+power(3,4));
	console.log("5 power up for 6 is "+power(5,6));
}

//FIND CLOSEST DIVISIBLE (FOR LOOP)
else if (confirm("Do You wish to test FOR loop?")) {
	var n = Number(prompt("Enter target number to find closest divisible", "0"));
	var p = Number(prompt("Enter divider", "0"));
	var result = 0;
	for (var result = n; ; result++) {
		if (result % p == 0)
			break;
	}
	console.log(result);
	alert("Closest divisible number is "+result+" Press F12 to see your loop result!");
	}

//MATH OPERATIONS (SWITCH - CASE)
else if (confirm("Do You wish to test SWITCH-CASE?")) {
	switch (prompt("What is Your favourite math operation? Enter +, -, *, / or %")) {
		case "+":
		var a = Number(prompt("Enter number", "0"));
		var b = Number(prompt("Enter number You wish to add", "0"));
		var sum = a+b;
		alert("Sum of "+a+" and "+b+" is "+sum+"!");
		break;
		case "-":
		var a = Number(prompt("Enter number", "0"));
		var b = Number(prompt("Enter value You wish to take from number", "0"));
		var rest = a-b;
		alert("Result of "+a+" - "+b+" is "+rest+"!");
		break;
		case "+":
		var a = Number(prompt("Enter number", "0"));
		var b = Number(prompt("Enter number You wish to multiply with", "0"));
		var product = a*b;
		alert("Product of "+a+" and "+b+" is "+product+"!");
		break;
		case "+":
		var a = Number(prompt("Enter number", "0"));
		var b = Number(prompt("Enter number You wish to divide with", "0"));
		var result = a/b;
		alert("Result of division of "+a+" and "+b+" is "+result+"!");
		break;
		default:
		alert("You obviously don't like math!");
		break;
		}
	}

//LOOPING A TRIANGLE
else if (confirm("Exercise No 1. \"Looping a triangle\"")) {
	var breck = "";
	for (var i = 0; i < 7; i++) {
		breck += "#";
		console.log(breck);
	}
	alert("For result press F12");
}

//FIZZBUZZ
else if (confirm("Exercise No 2. \"FizzBuzz\"")) {
	var num = 0;
	for (var i = 0; i < 100; i++) {
		num += 1;
		if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
		else if (num % 3 === 0 && num %5 !==0) console.log("Fizz")
		else if(num % 3 !== 0 && num % 5 === 0) console.log("Buzz")
		else console.log(num);
	}
	alert("For result press F12");
}

//CHESSBOARD
else if (confirm("Exercise No 3. \"Chess board\"")) {
	var size = Number(prompt("Enter Chess board size", "0"));
	var chessBoard ="";
	for (var i = 1; i <= size; i++) {
		var counter = 0;
		if (i % 2 == 0) { 
			do {
				counter += 2;
				chessBoard += "# ";
				}
			while (counter<size);
				if (size%2 != 0)
					chessBoard = chessBoard.slice(0, -1);
			chessBoard += "\n";
		}
		else {
			do {
				counter += 2;
				chessBoard += " #";
				}
			while (counter<size);
				if (size%2!=0)
					chessBoard = chessBoard.slice(0, -1);
			chessBoard += "\n";
			}	
		}
	console.log(chessBoard);
	alert("For result press F12");
}	

//MIN
else if (confirm("Exercise No 4. \"Min function\"")) {
	function min (x , y) {
		if (x <= y) 
			return x;
		else
			return y;
	}
	var x = Number(prompt("Enter first number"));
	var y = Number(prompt("Enter second number"));
	alert("of "+x+" and "+y+", smaller number is " +min(x, y));
}	

//Is it even?
else if (confirm("Exercise No 5. \"Is it even? - Recursion\"")) {
	function isEven (number) {
	if (number < 0) {
		number = number - 2*number;
		return isEven(number);
	}
	else if ( number === 0) 
		return true;
	else if (number === 1) 
		return false;
	else {
		number -= 2;
	 	return isEven(number);
	 }
	}
	alert("50 is even: " + isEven(50) + " and 75 is it even? " + isEven(75) + " What about -1, is it even? " + isEven(-1));
}	
//Bean counting
else if (confirm("Exercise No 6. \"Bean counting / search for specific character\"")) {
	function countChar (string) {
		var char = String(prompt("Enter character You want to search", "0"));
		var numOfChars = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == char)
			numOfChars += 1;
	}
	return numOfChars;
	}
	alert("In text \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\" there are " + countChar("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")+ " of searched character");
}	
else if (confirm("Eueler \"3 & 5 multiples\"")) {
	var sum=0;
	for (var i = 0; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			console.log(i);
			sum+=i;
		}
		else continue;
		}
		console.log(sum);
	alert("For result press F12");
	}

else if (confirm("Eueler \"Fibonacci sum even\"")) {
var num = Number(prompt("Enter biggest number", "0"));
var a = 1;
var b = 2;
var sum = 0;
//loop while a is less than num
while( a < num) {
//if a is even, add it to the sum
    if( a % 2 === 0){
        sum += a;
    }
//create a new variable "c" that holds the sum of a and b
//then finally update a and b as they keep adding
    var c = a + b;
    a = b;
    b = c;
}
//display the sum
//console.log(sum);
document.write(sum);
alert("For result press F12");
	}

else if (confirm("Eueler \"Fibonacci sequence\"")) {
var num = Number(prompt("Enter position of Fibonacci number ", "0"));
var i;
var fib = []; //Initialize array!
fib[0] = 0;
fib[1] = 1;
console.log(fib[1]);
for (i = 2; i <= num; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
    }
alert("For result press F12");
	}

else if (confirm("Eueler \"Largest prime factor\"")) {
var num = Number(prompt("Enter a number ", "0"));
var i;
var max ;
for (i = 2; i <= num; i++) {
    if (num % i === 0) 
    console.log(i);
    }
alert("For result press F12");
	}
else if (confirm("Do You want to draw a landscape")) {
  function landscape () {
    var result = "";
    var flat = function (size) {
    for(var count = 0; count < size; count++) {
	  result += "_"
	  }
	};
    var mountain = function (size) {
  	result += "/";
  	for(var count = 0; count < size; count++) {
  	  result += "'";
  	  }
	  result += "\\";
	};
	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
  };
alert("This is Your land: "+landscape());
}
else if (confirm("Do You want to find out how numbers are built from adding 5 and multiplying by 3 using recursion")) {
  function findSolution (target) {
  	function find (start, history) {
  		if (start == target) 
  			return history;
  		else if (start > target)
  			return null;
  		else 
  			return find (start + 5, "(" + history + " + 5)") || find (start * 3, "(" + history + " * 3)");
  	  }  
  	  return find (1, "1");
  	}
  	console.log("Number 24 is built lke this "+findSolution(24));
	alert("For solutions press F12");
}
else if (confirm("Do You want to find out farm inventory")) {
  function printFarmInventory (cows, chickens) {
  	var cowString = String(cows);
  	while (cowString.length < 3)
  		cowString = "0" + cowString;
  		console.log(cowString + " Cows");
  	var chickenString = String(chickens);
  	while (chickenString.length < 3)
  		var chickenString = "0" + chickenString;
  		console.log(chickenString + " Chickens");
  		return(cowString + " Cows and "+chickenString + " Chickens");
  	  }  
	alert("Farm inventory contains "+printFarmInventory(7, 14) + "; to find out how many other animals are in inventory press F12");

	function zeroPad (number, width) {
		var string = String(number);
		while (string.length < width)
			string = "0" + string;
		return string;
	}
	function printFarm (horses, ducks, pigs) {
		console.log(zeroPad(horses, 3) + " Horses");
		console.log(zeroPad(ducks, 3) + " Ducks");
		console.log(zeroPad(pigs, 3) + " Pigs");
	}
	printFarm(5, 27, 6);
}
else if (confirm("Do You want to see lyrics of 99 bottles of beer classic")) {
    var bottles = 99;
  	while (bottles > 0) {
  		if (bottles == 1) {
  		document.write(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.<br> Take one down and pass it around, no more bottles of beer on the wall.<br>");
  			}
  		else {
  		document.write(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.<br> Take one down and pass it around, " + (bottles-1) +" bottles of beer on the wall.<br>");
  			}
  		bottles -= 1;
	};
	document.write("No more bottles of beer on the wall, no more bottles of beer. <br> Go to the store and buy some more, 99 bottles of beer on the wall.");
}
else alert("Fuck you!");