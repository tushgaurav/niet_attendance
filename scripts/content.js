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

// add attendance display to the dashboard
const attendance_data = document.querySelector(
  "#getSection_1 > tr:nth-child(13) > td:nth-child(6)"
).innerHTML;

let attendance_text = "";
let color = "";
if (attendance_data > 75) {
  attendance_text = "Perfect Attendance";
  color = "bg-info-200";
} else if (attendance_data > 70) {
  attendance_text = "Good Attendance";
  color = "bg-primary-200";
} else if (attendance_data > 60) {
  attendance_text = "Average Attendance";
  color = "bg-warning-400";
} else {
  attendance_text = "Poor Attendance";
  color = "bg-danger-200";
}

const html = `
      <div class='col-sm-4 col-xl-3'>
        <div class='p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g'>
          <div class=''>
            <h5 class='' style='font-size:large'>
              Attendance: ${attendance_data}%
              <br>
            </h5>
          </div>
        </div>
      </div>

      <div class='col-sm-4 col-xl-2'>
        <div class='p-3 ${color} rounded overflow-hidden position-relative text-white mb-g'>
          <div class=''>
            <h5 class='' style='font-size:large'>
              ${attendance_text}
              <br>
            </h5>
          </div>
        </div>
      </div>`;

document.querySelector("#js-page-content > div:nth-child(5)").innerHTML = html;

// changing the NIET cover image
const cover_image = document.querySelector(
  "#js-primary-nav > div.info-card > img.cover"
);

cover_image.src = chrome.runtime.getURL("/assets/images/background.gif");
cover_image.classList.add("img-thumbnail");

// fixing the attendance table header widht
let table_container = document.querySelector(
  "#tblDetails1_wrapper > div:nth-child(2) > div > div > div.dataTables_scrollHead > div"
);

table_container.style.width = "100%";

let table_head = document.querySelector(
  "#tblDetails1_wrapper > div:nth-child(2) > div > div > div.dataTables_scrollHead > div > table"
);

table_head.style.width = "100%";
