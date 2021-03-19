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
//dj deck
import checkingForDjDeck from "./featureMenu/checkingDj/checkDj";
//admin

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

/////quiz test
openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
// lightMode();
// darkMode();
checkingForQuizFeature();

///////
// backButton();
// checkingForDjDeck();
// backButton();
// logOut();
