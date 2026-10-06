
function formatTime(num) {
  return num.toString().padStart(2, "0");
}
function displayTime() {
  const now = new Date();

  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  process.stdout.write(`\rCurrent Time: ${hours}:${minutes}:${seconds}`);
}

console.log("Displaying current time (Press Ctrl+C to stop):");
displayTime();
setInterval(displayTime, 1000);
