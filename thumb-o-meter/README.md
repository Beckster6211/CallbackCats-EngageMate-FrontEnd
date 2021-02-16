# School Of Code Project <img src = "./public/images/readMe/logo-51c754388b198e5bbb0d08a971ebbfa2.png" width="50px" height="50px" >

## CallbackCats() :smiley_cat:

#### Remote teaching delivery? Headache no more! :rage:

### Problem :question:

Problem with remote teaching delivery is that it can be really challenging to encourage engagement and participation, as you don’t get the same live feedback and reception that would in real life, making it difficult to gauge audience understanding.

### Our Solution :bulb:

<img src = "./public/images/readMe/1.PNG"/>

### Are you EngagedMate? <img src = "./public/images/readMe/circleLogo.png" width = "50px" height = "50px"/>

BEFORE YOU BEGIN :no_entry:
<br>
You have to make sure that you are in the database of users, there are two different types of user (speaker and participant) giving access to different views, features and tools depending upon your authorisation (more about this later).
<br>
WAIT :hand:
<br>
We have enabled a way for you to access our app if you are not in the database but by default you are given the participants view, you can be added through admin (more on that later).

### Now we can begin :heavy_check_mark:

The feature menu is your paracetamol displaying tools that we have designed to help with the headache. The Thumbometer feature can help with gauging how everyone is feeling, are you going at the right speed? The right level? Etc. The Raise A Hand feature can help with being able to ask and answer questions when they arise. Live Poll/Quiz feature can help with making sure that you are digesting what is being said.
<br>
<br>

<img src = "./public/images/readMe/skfm.PNG" width = "45%" height = "250px"/> <span></span> <img src = "./public/images/readMe/ptfm.PNG" width = "45%" height = "250px"/>

### Thumbometer :thumbsup:

#### Speaker instructions

Open the thumbometer feature (either through the nav bar or by clicking on the thumb icon).
<br>
To give a question you can use the drop down to select one of the preset question options provided or if you select custom an input field is then given and you may type your own.
<br>
Similar to how you can give a timer you can select one of the preset options from the timer drop down or pick custom and an input field is given and you may type your own (numbers in seconds).
<br>
Then you can pick start and wait for the results. You will see the results displayed by the rotation of the thumb that has now appeared on the scene. Down is low, Up is high. The results are also available as a percentage below as well showing how many participants have already submitted their response. This is handy as if all the participants have already submitted their result and there is time left you can end it with the stop timer button.The time amount is displayed with a progression bar and when it gets down to 5 seconds it turns red, also displayed in digits below.
<br>
That session data is then submitted to the database for a later date (you can opt not to have this happen by clicking the throwaway toggle and that data will not be saved).
<br>
<br>
<img src = "./public/images/readMe/sktb.PNG" width = "1000px" height = "500px"/>

##### Participant instructions

Open the thumbometer feature (either through the nav bar or by clicking on the thumb icon).
<br>
When the speaker has submitted a question it appears in a heading.
<br>
The participant can then use the slider below the thumb to register their response to the question. Left is low, right is high as the participant moves the slider the thumb rotates round. Thumb down - low, thumb up - high. The percentage amount of their response is also displayed.
<br>
The time amount is displayed with a progression bar and when it gets down to 5 seconds it turns red, also displayed in digits below.
<br>
<img src = "./public/images/readMe/pttb.PNG" width = "1000px" height = "500px"/>

### Raise A Hand :raising_hand:

#### Speaker instructions

When a hand is raised a notification is sent to the speaker, the list of hands raised is viewable by opening the raise a hand feature (either through the nav bar or by clicking on the hand icon).
<br>
The hands are shown in a list along with the name of who submitted it. As well as knowing the name and the order can also know the rough idea of what the question entails (useful as the speaker can see if multiple hands have the same sort of question).
<br>
<img src = "./public/images/readMe/sknh.PNG" width = "470px" height = "500px"/> <span></span> <img src = "./public/images/readMe/skrh.PNG" width = "470px" height = "500px"/>

#### Participant instructions

If had a question to ask open the raise a hand feature (either through the nav bar or by clicking on the hand icon). Click the icon of a closed hand this will send a notification to the speaker that a hand has been raised with the name attached to it.
<br>
An added feature is that could also use the input field to put a topic. Not the whole question but just a few words showing the general idea of what want to ask. The raised hand can be put back down by clicking the hand icon again which has now changed to an open hand (or the speaker could reset the hand from their view).
<br>
<img src = "./public/images/readMe/ptnh.PNG" width = "470px" height = "500px"/> <span></span> <img src = "./public/images/readMe/ptrh.PNG" width = "470px" height = "500px"/>

### Live Quiz :mag:

#### Speaker instructions

If wanted to test your audience could give them an on the spot question, open the live quiz feature (either through the nav bar or by clicking on the face icon).
<br>
To give a question you can use the drop down to select custom an input field is then given and you may type your own.
<br>
After creating answer options for the question with the pencil icon (maximum of 4, you can remove the last option with the bin icon), select the correct answer with the buttons next to each answer(this will not be visible to the participants) and submit that question.
<br>
Speaker then shown screen which displays the options and as the participants submit answers it displays how many participants select the option with both a number and also a bar being filled.
<br>
The correct answer is shown by being green and incorrect as red.
<br>
<br>
<img src = "./public/images/readMe/sklq1.PNG" width = "470px" height = "500px"/> <span></span> <img src = "./public/images/readMe/sklq2.PNG" width = "470px" height = "500px"/>

#### Participant instructions

When a live quiz poll has been started by the speaker, open the live quiz feature (either through the nav bar or by clicking on the face icon).
<br>
The question is displayed with the answer options available. Participant selects their answer and this is submitted back to the speaker.
<br>
If the participant has the correct answer it is shown by the colour their answer turns Green for correct red for incorrect.  
<br>
<br>
<img src = "./public/images/readMe/ptlq1.PNG" width = "470px" height = "500px"/> <span></span> <img src = "./public/images/readMe/ptlq2.PNG" width = "470px" height = "500px"/>

### DJ Deck :musical_note:

#### Speaker View only

The sound sample files need to be placed in the sound folder within the public folder. To access them, create a new Audio file and place the file name into a variable.

<img src = "./public/images/readMe/djdk.PNG" width = "1000px height" height = "500px"/>

In order for the Spotify playlist to run, you will need to create an app at https://developer.spotify.com/dashboard/applications once you have created a client id and client secret place these inside of the environment variables. By default the playlist url is defined, by default to the School of Code playlist. To change this just replace the url inside of the spotify component.

### Admin :computer:

#### Speaker view only

The admin page is where you can add new users to the database (this is were you can add people in as speaker).
<br>
<br>
<img src = "./public/images/readMe/aduser.PNG" width = "1000px" height = "500px"/>
<br>
You can also check who is in the database as well.
<br>
<br>
<img src = "./public/images/readMe/adminusers.PNG" width = "1000px" height = "500px"/>
<br>
You can also look at session data for what the results you have had.
<br>
<br>
<img src = "./public/images/readMe/users.PNG" width = "1000px" height = "500px"/>

#### Example :movie_camera:

##### Do you want a laugh? :laughing:

Here is an example of how our app works. This video is actually us presenting EngageMate when it was in its infancy. When we were more like Callback Kittens.
<br>
<br>
https://www.youtube.com/watch?v=p23oB7cUReQ&t=1s
<br>
<br>
The video shows as well as how the app works, the planning and also what technologies were used in creating it, where they were implemented and how.
<br>
You can also see our app if you `npm run start` a local host version will be shown
<br>
<br>
Or the deployed version :iphone:
<br>
<br>
https://engagemate.netlify.app/
