import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import logOut from "./logOut/logOut";
import logOutLightMode from "./logOut/logOutLightMode";
import darkMode from "./darkMode/darkMode";
import lightMode from "./lightMode/lightMode";
import backButton from "./backButton/backButton";
import endTest from "./endTest/endTest";

//thumb
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";
import speakerThumbSession from "./speaker/speakerThumb/speakerThumb";
import participantThumbSession from "./participant/participantThumb/participantThumb";
import speakerStopThumbSession from "./speaker/speakerThumb/speakerThumbSessionStop";

//hand
import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import speakerRaiseHandPreHand from "./speaker/speakerHand/raiseAHandSessionPreHand";
import participantRaiseHandSession from "./participant/participantHand/raiseAHandSession";
import speakerRaiseHandAfterHand from "./speaker/speakerHand/raiseAHandSessionAfterHand";

//quiz
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import speakerLiveQuizSession from "./speaker/speakerQuiz/liveQuizSpeakerSession";
import participantQuizSession from "./participant/participantQuiz/participantQuizSession";
//dj deck
import checkingForDjDeck from "./featureMenu/checkingDj/checkDj";
import speakerDjDeck from "./speaker/speakerDj/speakerDjDeck";
//admin
import speakerAdmin from "./speaker/speakerAdmin/speakerAdmin";

// ////////Thumbometer test
// openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// lightMode();
// darkMode();
// checkingForThumbOMeterFeature();
// // // backButton();
// speakerThumbSession("Am I going at a good speed?", 100);
// backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// darkMode();
// lightMode();
// // // darkMode();
// checkingForThumbOMeterFeature();
// participantThumbSession();
// backButton();
// // // logOut();
// logOutLightMode();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// checkingForThumbOMeterFeature();
// speakerStopThumbSession();
// backButton();
// // logOut();
// // endTest();

// //////hand test
// // openingScreen();
// // logIn("speakerview@gmail.com", "(callbackCats)");
// // darkMode();
// // // lightMode();
// // // darkMode();
// speakerRaiseHandPreHand();
// checkingForHandFeature();
// backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// // darkMode();
// // lightMode(); //already in light mode
// // // darkMode();
// checkingForHandFeature();
// participantRaiseHandSession("array mutability");
// backButton();
// // logOut();
// logOutLightMode();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// checkingForHandFeature();
// speakerRaiseHandAfterHand("array mutability");
// backButton();
// // logOut();
// // endTest();

// /////quiz test
// // openingScreen();
// // logIn("speakerview@gmail.com", "(callbackCats)");
// // darkMode();
// // // lightMode();
// // // darkMode();
// checkingForQuizFeature();
// speakerLiveQuizSession(
//   "Declaring a un-reassignable variable?",
//   "Const",
//   "Let",
//   "Var"
// );
// // // backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// // darkMode();
// // // lightMode();
// // // darkMode();
// checkingForQuizFeature();
// participantQuizSession(
//   "Declaring a un-reassignable variable?",
//   "Const",
//   "Let",
//   "Var"
// );
// backButton();
// // logOut();
// logOutLightMode();
// // endTest();

// ///// dj deck test
// // openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// // lightMode();
// // darkMode();
// checkingForDjDeck();
// speakerDjDeck();
// backButton();
// // logOut();
// // endTest();

//admin test
// openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// lightMode();
// darkMode();
// speakerAdmin();
// logOut();
// endTest();

//full user flow
openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
lightMode();
darkMode();
checkingForThumbOMeterFeature();
speakerThumbSession("Am I going at a good speed?", 100);
backButton();
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
darkMode();
lightMode();
checkingForThumbOMeterFeature();
participantThumbSession();
backButton();
logOutLightMode();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForThumbOMeterFeature();
speakerStopThumbSession();
backButton();
speakerRaiseHandPreHand();
checkingForHandFeature();
backButton();
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
checkingForHandFeature();
participantRaiseHandSession("array mutability");
backButton();
logOutLightMode();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForHandFeature();
speakerRaiseHandAfterHand("array mutability");
backButton();
checkingForQuizFeature();
speakerLiveQuizSession(
  "Which declares a variable that can't be reassigned?",
  "Const",
  "Let",
  "Var"
);
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
checkingForQuizFeature();
participantQuizSession(
  "Which declares a variable that can't be reassigned?",
  "Const",
  "Let",
  "Var"
);
backButton();
logOutLightMode();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForDjDeck();
speakerDjDeck();
backButton();
// speakerAdmin(); peoples details
logOut();
endTest();
