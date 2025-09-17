// Example: Google Sheets endpoint (replace with your web app URL)
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; 

document.getElementById("registrationForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const cnic = document.getElementById("cnic").value.trim();
  const email = document.getElementById("email").value.trim();

  // Basic validation
  if (cnic.length !== 13 || isNaN(cnic)) {
    alert("❌ CNIC must be 13 digits!");
    return;
  }
  if (gcnic.length !== 13 || isNaN(gcnic)) {
    alert("❌ Guardian CNIC must be 13 digits!");
    return;
  }
  if (email && !email.includes("@")) {
    alert("❌ Please enter a valid email address!");
    return;
  }

  // Collecting all form data
  const formData = {
    name,
    fname: document.getElementById("fname").value.trim(),
    cnic,
    gcnic,
    bform: document.getElementById("bform").value.trim(),
    present: document.getElementById("present").value.trim(),
    permanent: document.getElementById("permanent").value.trim(),
    contact: document.getElementById("contact").value.trim(),
    gcontact: document.getElementById("gcontact").value.trim(),
    email,
    dob: document.getElementById("dob").value,
    grade: document.getElementById("grade").value.trim()
  };

  // Show success message
  const msg = document.getElementById("successMessage");
  msg.innerText = `✅ Thanks ${name}! Your form was submitted successfully.`;
  msg.style.opacity = 0;
  setTimeout(() => {
    msg.style.opacity = 1;
  }, 100);

  // Reset form
  document.getElementById("registrationForm").reset();

  // Optional: Send to Google Sheets
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    // you may check response if needed
  } catch (err) {
    console.error("Error sending data:", err);
  }
});

