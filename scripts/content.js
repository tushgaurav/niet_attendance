// NIET Attendance: Content Script

// set display:none to display:block
try {
  let attendance_link = document.querySelector(
    "#js-page-content > div:nth-child(6) > div.col-xl-12"
  );
  attendance_link.style.display = "block";
} catch {}

// Get student name for later use
try {
  let studentName = document.querySelector(
    "body > div.page-wrapper > div > div > header > div.ml-auto.d-flex > div.proifle-detail.mt-3 > div:nth-child(1)"
  ).innerText;

  function captilizeName(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  }

  studentName = captilizeName(studentName);

  chrome.storage.local.set({ name: studentName }).then(() => {
    console.log("Value is set to " + studentName);
  });
} catch {}

// attendance link in the dashboard
if (attendance_link) {
  attendance_link.style.display = "block";
  console.log("NIET Attendance: Attendance link is visible");
}

// changing the NIET cover image
try {
  const cover_image = document.querySelector(
    "#js-primary-nav > div.info-card > img.cover"
  );

  cover_image.src = chrome.runtime.getURL("/assets/images/background.gif");
  cover_image.classList.add("img-thumbnail");
} catch {}
