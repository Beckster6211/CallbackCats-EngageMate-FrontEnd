import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import logOut from "./logOut/logOut";
import darkMode from "./darkMode/darkMode";
import lightMode from "./lightMode/lightMode";
import backButton from "./backButton/backButton";

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
//admin
import speakerDjDeck from "./speaker/speakerDj/speakerDjDeck";

////////Thumbometer test
// openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// lightMode();
// darkMode();
// checkingForThumbOMeterFeature();
// backButton();
// speakerThumbSession("Question", 100);
// backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// darkMode();
// lightMode();
// darkMode();
// checkingForThumbOMeterFeature();
// participantThumbSession();
// backButton();
// logOut();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// checkingForThumbOMeterFeature();
// speakerStopThumbSession();
// backButton();
// logOut();

//////hand test
// openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// // lightMode();
// // darkMode();
// speakerRaiseHandPreHand();
// // checkingForHandFeature();
// // backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// darkMode();
// // lightMode();
// // darkMode();
// checkingForHandFeature();
// participantRaiseHandSession("topic test?");
// backButton();
// logOut();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// checkingForHandFeature();
// speakerRaiseHandAfterHand("topic test?");
// backButton();
// logOut();

// /////quiz test
// openingScreen();
// logIn("speakerview@gmail.com", "(callbackCats)");
// darkMode();
// // lightMode();
// // darkMode();
// checkingForQuizFeature();
// speakerLiveQuizSession(
//   "Question",
//   "Answer Option 1",
//   "Answer Option 2",
//   "Answer Option 3",
//   "Answer Option 4"
// );
// // backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
// darkMode();
// // lightMode();
// // darkMode();
// checkingForQuizFeature();
// participantQuizSession(
//   "Question",
//   "Answer Option 1",
//   "Answer Option 2",
//   "Answer Option 3"
// );
// backButton();
// logOut();

/////// dj deck test
openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
// lightMode();
// darkMode();
checkingForDjDeck();
speakerDjDeck();
backButton();
logOut();
