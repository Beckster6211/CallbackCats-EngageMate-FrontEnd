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
// speakerThumbSession("Question", 100);
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
// participantRaiseHandSession("topic test?");
// backButton();
// // logOut();
// logOutLightMode();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// checkingForHandFeature();
// speakerRaiseHandAfterHand("topic test?");
// backButton();
// // logOut();
// // endTest();

// // /////quiz test
// // openingScreen();
// // logIn("speakerview@gmail.com", "(callbackCats)");
// // darkMode();
// // // lightMode();
// // // darkMode();
// checkingForQuizFeature();
// speakerLiveQuizSession(
//   "Question",
//   "Answer Option 1",
//   "Answer Option 2",
//   "Answer Option 3"
// );
// // // backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// // darkMode();
// // // lightMode();
// // // darkMode();
// checkingForQuizFeature();
// participantQuizSession(
//   "Question",
//   "Answer Option 1",
//   "Answer Option 2",
//   "Answer Option 3"
// );
// backButton();
// // logOut();
// logOutLightMode();
// // endTest()

///// dj deck test
openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
// lightMode();
// darkMode();
checkingForDjDeck();
speakerDjDeck();
backButton();
logOut();
endTest();

// ///admin test
// openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// // lightMode();
// // darkMode();
// speakerAdmin();
// logOut();
// endTest();
