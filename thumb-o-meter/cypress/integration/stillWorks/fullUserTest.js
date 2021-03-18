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
//quiz
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
//dj deck
import checkingForDjDeck from "./featureMenu/checkingDj/checkDj";
//admin

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
// lightMode();
// darkMode();
checkingForThumbOMeterFeature();
// backButton();
speakerThumbSession("Question", 100);
// backButton();
// logOut();
// logIn("participantview@gmail.com", "(callbackCats)");
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
//////
// checkingForHandFeature();
// backButton();
// checkingForQuizFeature();
// backButton();
// checkingForDjDeck();
// backButton();
// logOut();
