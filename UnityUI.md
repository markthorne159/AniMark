## Accessing Unitys UI Elements In Script

You're probably well aware of Unitys new Canvas GameObject which makes it easier to create, edit and position different UI elements, something that you may not now about is exactly how you access these elements in a script. Believe it or not It's easier than you may think in fact you only have to add a single line of code to the start of your script and you're done!

![UIExample](http://puu.sh/txezZ/b290381290.png)

At the start of any script you should always see the two lines of code shown in the picture above. Add the code below underneath the "using System.Collections" line:

using UnityEngine.UI;

That's it, that's all you need. Now you should be able to easily declare any UI GameObjects as variables in your script. Please note that you will need to add this line of code at the start of EVERY script that you write or it won't work. 

