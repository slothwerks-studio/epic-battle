// Initial values
const hero = {
  name: "",
  health: 0,
  power: 0
};

const villain = {
  name: "",
  health: 0,
  power: 0
};

let roundNum = 0;

const introContent = document.getElementById("introContent");
const battleContent = document.getElementById("battleContent");

// Build a function that will process user input from the build battle form,
// then initiate the battle
// This function will be a submission handler and will therefore
// take an event object as an argument
function buildBattle(event) {
  // Prevent default refresh of app
  event.preventDefault();
  // Acquire user input from form
  const heroName = document.getElementById("heroName").value.trim();
  const heroHealth = document.getElementById("heroHealth").value;
  const heroPower = document.getElementById("heroPower").value;
  const villainName = document.getElementById("villainName").value.trim();
  const villainHealth = document.getElementById("villainHealth").value;
  const villainPower = document.getElementById("villainPower").value;
  // Add values to hero and villain objects
  hero.name = heroName.value.trim();
  hero.health = parseInt(heroHealth.value); // Convert to integer
  hero.power = parseInt(heroPower.value); // Convert to integer
  villain.name = villainName.value.trim();
  villain.health = parseInt(villainHealth.value); // Convert to integer
  villain.power = parseInt(villainPower.value); // Convert to integer
  // Clear the form
  heroName.value = "";
  // Determine the title
  document.getElementById("battleTitle").innerText = `${hero.name} vs. ${villain.name}`;
  // Set the initial round
  roundNum = 1;
  // Hide intro content and show battle content
  introContent.classList.add("hidden");
  battleContent.classList.remove("hidden");
  // Clear the form
  buildBattleForm.reset();
  // TODO: Need to build battle round processor function
}

// Add handler to form
const buildBattleForm = document.getElementById("buildBattleForm");
buildBattleForm.onsubmit = buildBattle;

// Build a function that will process a round of battle
function battleRound() {
  // Add round to the UI
  document.getElementById("roundNumber").innerText = `Round ${roundNum}`;
  // Build round description
  const roundDescription = document.getElementById("roundDescription");
  const introParagraph = document.createElement('p');
  let introText = "";
  if (roundNum === 1) {
    introText = "The battle is joined!";
  } else {
    introText = "The battle continues!";
  }
  roundDescription.appendChild(introParagraph);
  // Determine damage
  // The damage will be a random number between 0 and the total power of the character
  const heroDamage = determineDamage(hero.power);
  const villainDamage = determineDamage(villain.power);
  hero.health = hero.health - villainDamage;
  villain.health = villain.health - heroDamage;
  if (hero.health < 0) {
    hero.health = 0; // Health cannot be negative
  }
  if (villain.health < 0) {
    villain.health = 0; // Health cannot be negative
  }
  // Build text
  const descText1 = `${hero.name} does ${heroDamage} damage to ${villain.name}.  ${villain.name} does ${villainDamage} damage to ${hero.name}.`;
  const descText2 = `${hero.name} has ${hero.health} health.  ${villain.name} has ${villain.health}.`;
  let finalText = "";
  if (hero.health === 0 && villain.health > 0) {
    finalText = `Oh, no!  ${villian.name} has defeated ${hero.name} in locked battle.  How can this be?`;
  } else if (hero.health > 0 && villian.health === 0) {
    finalText = `HAH!  ${hero.name} has defeated ${villian.name} in fair combat.  Let THAT be a lesson for you, evil!`;
  } else if (hero.health === 0 && villian.health === 0) {
    finalText = `SO. EPIC.  ${hero.name} and ${villian.name} collapse in the throes of combat.  That's the end!`;
  }
  // Dump paragraphs to battle description
  const descParagraph1 = document.createElement('p');
  const descParagraph2 = document.createElement('p');
  descParagraph1.innerText = descText1;
  descParagraph2.innerText = descText2;
  roundDescription.appendChild(descParagraph1);
  roundDescription.appendChild(descParagraph2);
  // If there is no final text, the battle will continue
  // Otherwise, that's the end!
  const battleButton = document.getElementById("battleButton");
  if (!finalText) {
    // The battle continues...
    roundNum = roundNum + 1; // Update round number
    battleButton.innerText = "Continue";
    battleButton.onclick = battleRound; // Do it again!
  } else {
    // We're done!
    // Add the final paragraph
    const finalParagraph = document.createElement('p');
    finalParagraph.innerText = finalText;
    roundDescription.appendChild(finalParagraph);
    // Hide the cancel button
    const cancelButton = document.getElementById("cancelButton");
    cancelButton.classList.add("hidden");
    // Update battle button
    battleButton.innerText = "Done";
    battleButton.onclick = reset;
  }
}

// Build a helper function that returns a random integer between zero
// and a number passed in as an argument
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function determineDamage(maxDamage) {
  return Math.floor(Math.random() * maxDamage);
}

// Build a handler for the cancel battle button
function handleCancel() {
  // TODO: Write this function
}

// Build a function that will reset the battle app
function reset() {
  // TODO: Write this function
}