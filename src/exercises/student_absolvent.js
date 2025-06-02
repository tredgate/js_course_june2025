const actualPoints = 76;
const minPoints = 75;
const studentName = "Lucie Drahotná";

if (actualPoints >= minPoints) {
  console.log(`Student/ka prospěl/a s ${actualPoints} body`);
} else {
  const diffPoints = minPoints - actualPoints;
  console.log(
    `Student/ka neprospěl/a s ${actualPoints} body, chybělo mu/jí ${diffPoints} bodů.`
  );
}
