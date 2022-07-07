# Share via Messenger on iOS iPhone causes ionic Toolbar to move off top off screen

## Sharing on iOS ionic app causes the Toolbar to drift up and off the screen when using Messenger for sharing.  It doesn't matter if I use Capacitor Share Plugin, or Navigator.Share, or even the older Cordova Social Sharing plugin, they all have the same result when selecting Messenger as the sharing target, and you are sharing enough text that it seems to force Messenger to take up more of the screen, then we you go back into the ionic app after sharing, or cancelling the share, the app's toolbar floats off the top of the app.

## Steps to Reproduce:
1. Click any of the Share Big Text buttons.
2. Select Messenger.
3. Send Text.
4. Return to ionic app and notice how the toolbar has drifted off the screen.


<BR><BR>
# HOW IT SHOULD LOOK WITH TOOLBAR IN PLACE:
<BR><BR>
![IMG_2841 2](https://user-images.githubusercontent.com/3101108/177802735-8081cc61-c5cc-492b-8fd2-a2662b258971.PNG)


<BR><BR>
# HOW IT SHOULD NOT LOOK WITH TOOLBAR OFF THE SCREEN AFTER SENDING TEXT VIA MESSENGER:
<BR><BR>
![IMG_2840](https://user-images.githubusercontent.com/3101108/177802812-db961e9f-c653-4a41-bf61-9d5f9c18956b.PNG)

<BR><BR>

# SETUP:
  
Ionic:

   Ionic CLI                     : 6.20.1 (/usr/local/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 6.1.13
   @angular-devkit/build-angular : 14.0.5
   @angular-devkit/schematics    : 14.0.5
   @angular/cli                  : 14.0.5
   @ionic/angular-toolkit        : 6.1.0

Capacitor:

   Capacitor CLI      : 3.6.0
   @capacitor/android : not installed
   @capacitor/core    : 3.6.0
   @capacitor/ios     : 3.6.0

Utility:

   cordova-res : not installed globally
   native-run  : 1.6.0

System:

   NodeJS : v16.15.1 (/usr/local/bin/node)
   npm    : 8.11.0
   OS     : macOS Monterey
