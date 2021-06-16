// Deciding where to go

var objectIHeadFor = prompt(`You glance at a tree, and then notice a bucket to the left of it, which do you head for?`);

// You trip
//Could turn the following into a throw error statement

alert(`Neither! You trip as you start to move and decide “what the heck!”. You throw your arms in the air and just roll with it, roly-polying down a steep hill. ‘Cos you’re a panda.`);

// Rolling for fun

var rollSomeMore = prompt(`You lose momentum. Momentarily stunned with your head spinning, you ponder if you should roll some more? "Yes" or "No"`).toUpperCase();
    if (rollSomeMore === `YES`) {
      alert(`Damn straight! You keep rolling, ‘cos you Panda`);
    };

// Discover the slide
 
var dizzyPanda = prompt(`You roll to a stop. It takes a few seconds for your eyes to focus, but when they do, you find yourself wide eyed staring up at the most delightful sunflower yellow slide. On a scale of one to PANDA, how much do you love the slide?`).toUpperCase();
    if (dizzyPanda >= 1 || dizzyPanda == 'PANDA') {
      alert (`It’s everything you’ve ever wanted. YOU WANT, SO BAD! You suddenly hear rustling and gnawing sounds, they grow rapidly louder and closer. You turn to see what the commotion is, a blur of black and white descending towards you. You now find yourself in a fumbling race with your siblings to get to the slide.`);
      raceToSlide();
    }

    else if (dizzyPanda < 1) {
      alert (`You notice in the corner of your eye a blur of black and white tumbling towards you. Distracted by the delicious bamboo you're gnawing on and content just rolling around in a ball with it, you shift out of the way of your siblings who are racing towards the slide.`);
      doNotRaceToSlide();
    }

// Race to the slide

function raceToSlide() {
    var playDirty = prompt (`The slide has now become your whole world, but it looks as though it has for them too. Your mission is to be best Panda. Do you play dirty? "Yes" or "No"`).toUpperCase();
      //play dirty
      if (playDirty == `YES`){
      alert(`You make a dive for your nearest brother, and one by one, like panda dominos, limbs begin flailing and wobbly butts propel through the air. You all crash into a mound of fur. Your chaotic meddling cost you your sliding dreams. But as hastily as the infatuation came about, so too was its abandon. You begin to chew on a random ear as your leg is being tugged on, then someone sits on your face. The fury mound erupts into a wrestling match, ‘cos you’re all Pandas`);
      }
      //don't play dirty
      else if (playDirty == `NO`){
      alert(`You hear a deafening thud, by way of virtue you have avoided getting tangled up in what became an avalanche of pandas. Unhindered, you have conquered the slide! But, hang on. Just as you're about to make your first step up, someone tugs on your paw from behind and you tumble onto them. Your victory was fleeting`);  
      }
}

// Don't race to the slide
function doNotRaceToSlide() {
  alert(`You still eating away being best panda, undisturbed by the events that unfolded behind you. Not a care in the world, or interest in looking over.`);
}
    
