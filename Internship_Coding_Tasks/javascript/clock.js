// Task 7: Display current time in HH:MM:SS and update every second

// Function to format a number to always show 2 digits (e.g., 9 -> "09")
function formatTime(num) {
  return num.toString().padStart(2, "0");
}

// Function to get and display current time
function displayTime() {
  const now = new Date();

  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  // Clear the current line and show updated time
  process.stdout.write(`\rCurrent Time: ${hours}:${minutes}:${seconds}`);
}

console.log("Displaying current time (Press Ctrl+C to stop):");

// Display time immediately
displayTime();

// Update every 1000 milliseconds (1 second)
setInterval(displayTime, 1000);
