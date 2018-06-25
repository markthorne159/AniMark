# Html For Loop

A for loop in html consists of 3 main parts, an integer, a value that the loop tracks and an end statement that adds 1 to the integer from the beginning of the loop.

Example: 

Number = 10;
Write = "";

for (i = 0; i < Number; i++) {
  Write += i + "<br>";
  document.getElementById("Example").innerHTML = Write;
}

The example for loop above shows all 3 of the parts mentioned previously.

It starts by creating an integer:

i =0;

Then takes the "Number" variable which has been delcared before the for loop and checks to see whether or not the "i" integer is less than it:

i < Number;

Once it has run through these two parts it adds 1 to the "i" integer:

i++;

This code will continue to run until the "i" integer is equal to the variable that was declared at the beginning which in this case is the "Number" variable. 

Using this style of loop removes the need to write the same line of code multiple times over with maybe one or two things changed which at the same time reduces the amount of work the computer needs to do making things run smoother.
