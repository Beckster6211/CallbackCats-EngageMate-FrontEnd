/*
opening screen 
log in 
dark mode
light mode
check for thumb feature
thumbometer session 
speaker 
participant 

*/

import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import darkMode from "./darkMode/darkMode";
import lightMode from "./lightMode/lightMode";
import backButton from "./backButton/backButton";
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";
import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import checkingForDjDeck from "./featureMenu/checkingDj/checkDj";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
// lightMode();
// darkMode();
checkingForThumbOMeterFeature();
backButton();
checkingForHandFeature();
backButton();
checkingForQuizFeature();
backButton();
checkingForDjDeck();
backButton();
