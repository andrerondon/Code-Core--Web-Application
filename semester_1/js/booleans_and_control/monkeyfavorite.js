const food = process.argv[2];

if (food === "banana") {
  console.log("Yummy! " + food);
} else {
  console.log(`Ewww... I'm not going to eat ${food} again`)
}