##Simple Unity Pause

Pause menus are a feature in all games and act as something that enables you to pause the action to take a quick break, change in game settings or quit the game altogether. This tutorial will cover the simplest way I've found to program a very simple pause system into your own games using C# in Unity. 

To start off create a new C# script or open up an already existing script that you want to use to control whether or not the game is paused. With your chosen script opened up set a "float" variable at the top of the script. Make sure you make the name of it something you will remember and set the value of the variable to "0.0f". This variable will be used to make the game pause when a button is pressed. Underneath this variable create a second variable, which will be a boolean variable, and set the value of the variable to false.

![Variables](http://puu.sh/uv5Uf/2d55cf0c3b.png)

Underneath the line that says "void Update ()" write time.timeScale = Pause . This will make sure that each frame the games time will be set to the same number as the float variable you set up at the beginning.

After writing the code which checks the timeScale each frame move down a couple of lines and use "Input.GetKeyDown" to create a button press that will enable you to pause and un-pause the game. After the GetKeyDown add a set of brackets, () , and then inside of those brackets write "" and then inside of those two marks write the button you want to use to pause and un-pause your game, for example I used the "p" key. After declaring which button you want to use you will need to a second part of this if statement. Before the bracket that closes this if statement add the code shown below:

&& Paused == false

This extra code makes it so that now each time the "p" key is pressed the game will check the boolean variable you declared at the beginning and only carry out the code in the brackets if the boolean is set to "false". 

![Input](http://puu.sh/uv9Cr/6cedcfcf61.png)

In the space underneath the previous line add the following piece of code:

Pause = 0.0f;
Paused = true;

This code will change the current time of the game to 0 which effectively pauses the game, the next line of code sets the boolean value you set at the start of the script to true. This boolean will be checked in the next line of code to un pause the game and let gameplay resume. 

Instead of rewriting the code copy the first "if" Statement that you wrote and then paste it underneath. Change the word "false" to true and then copy the bits of code you wrote in between the brackets of the previous "if" statement, Pause = 0.0f; and Paused = true, and paste it in between the brackets of this if statement. Change 0.0f to 1.0f and Paused = true to Paused = false;.

![If Statement 2](http://puu.sh/uv9Em/3d0d450e9f.png)

This if statement works very much the same as the previous one you wrote but this time the game will only carry out the code in the brackets if the boolean is set to true. If this is the case it will set Pause back to 1.0f causing gameplay to resume after the game has been paused and then set the boolean back to false  



