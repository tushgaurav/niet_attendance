const attendance_link = document.querySelector("div.col-sm-3.col-xl-3");
const attendance_display = document.querySelector(
  "#js-page-content > div:nth-child(6) > div.col-xl-12"
);

// attendance link in the dashboard
if (attendance_link) {
  attendance_link.style.display = "block";
  console.log("NIET Attendance: Attendance link is visible");
}

// main attendance display
if (attendance_display) {
  attendance_display.style.display = "block";
  console.log("NIET Attendance: Attendance is visible");
}
