//////
// set previous attendance
/////

const current_attendance_percentage = document.querySelector(
  "#getSection_1 > tr:nth-child(13) > td:nth-child(6)"
).innerText;

console.log("Current Attendance percent is ", current_attendance_percentage);

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

async function previousAttendanceView() {
  let result = await chrome.storage.local.get(["prevAttendance"]);

  if (!result.prevAttendance) {
    // set the current value as prev
    await chrome.storage.local.set({
      prevAttendance: current_attendance_percentage,
    });
  } else {
    let percent_change = current_attendance_percentage - 90;
    let color = "bg-warning-400";
    if (percent_change < 0) {
      percent_change = "Change: " + Math.round(percent_change);
    }

    let attendanceCompareDiv = `
      <div class='col-sm-4 col-xl-2'>
        <div class='p-3 ${color} rounded overflow-hidden position-relative text-white mb-g'>
          <div class=''>
            <h5 class='' style='font-size:large'>
              ${percent_change}
              <br>
            </h5>
          </div>
        </div>
      </div>`;

    // inserting the attendance difference div
    let prevHtml = document.querySelector(
      "#js-page-content > div:nth-child(5)"
    ).innerHTML;

    document.querySelector("#js-page-content > div:nth-child(5)").innerHTML =
      prevHtml + attendanceCompareDiv;
  }
}
previousAttendanceView();
