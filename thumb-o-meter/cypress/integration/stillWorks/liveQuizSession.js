import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import darkMode from "./darkMode/darkMode";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import speakerLiveQuizSession from "./speaker/speakerQuiz/liveQuizSpeakerSession";
import participantQuizSession from "./participant/participantQuiz/participantQuizSession";
//import speakerStopQuizSession from "./speaker/speakerQuiz/liveQuizSpeakerSessionStop"; issues as leaves speaker page
import logOut from "./logOut/logOut";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForQuizFeature();
speakerLiveQuizSession("Testing?", "Option 1", "Option 2", "Option 3");
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
darkMode();
checkingForQuizFeature();
participantQuizSession("Testing?", "Option 1");
logOut();
