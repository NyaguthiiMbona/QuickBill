
function unlockFullExport() {
  const proceed = confirm("This feature is for premium users. Would you like to unlock?");
  if (proceed) {
    alert("Redirecting to payment page...");
    window.open("https://payhip.com/b/hU9v0", "_blank");
    setTimeout(() => {
      alert("Once you complete payment, reload this page to export your full file.");
    }, 3000);
  }
}
