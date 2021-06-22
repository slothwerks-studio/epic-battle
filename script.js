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
  hero.health = parseInt(heroHealth.value); // Convert to number
  hero.power = parseInt(heroPower.value); // Convert to number
  villain.name = villainName.value.trim();
  villain.health = parseInt(villainHealth.value); // Convert to number
  villain.power = parseInt(villainPower.value); // Convert to number
  // Clear the form
  heroName.value = "";
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

}