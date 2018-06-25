## Camera Switching In Blender

More often than not in animations or just general 3d visualizations you want to include multiple different camera angles to show different sections of the visualization or to show the action from a different view point. This tutorial will show you how to quickly and easily achieve exactly that in Blender.

Before going any further you need to make sure you have all of the cameras you want to use set up in your scene. For the purpose of this tutorial I'm using the default cube and have set the cameras up around that. 

I've also put a different coloured material on each of the faces that has a camera facing it in order to easily show that the camera has changed. 

![Camera Setup](http://puu.sh/tYlqp/38fc5db79e.png)

Once you have the cameras set up you need to setup something called "Markers". Markers are used as a way to track when something significant is going to happen on the timeline. Setting up a marker is easy, all you need to do is set the current frame to the frame that you want the marker to be on, place your mouse over that position on the timeline and press "m". 

![Marker Setup](http://puu.sh/tYoQ0/7a7f2af66e.gif)

You can also use the "Marker" menu at the bottom of the screen to add markers to the timeline. 
![Marker Menu](http://puu.sh/tYxn8/1206b0fde0.png)

With the markers set up you need to bind each camera to its own marker. Binding markers to different cameras makes the active camera change when each marker in the timeline is hit. Select one of the cameras in your scene and then select the marker at which is on the frame that you want the camera to be active on. With both things selected keep the mouse cursor on the "Timeline" and press "Ctrl + b" to bind the camera you selected to the marker you selected. 



