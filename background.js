const studentAttendance = "https://niet.instituteoncloud.com/";

// execute on every tab change
chrome.tabs.onActivated.addListener(async function (activeInfo) {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tab) {
      console.log(tab);
      // check if the tab is the NIET ERP page
      if (tab[0].url.startsWith(studentAttendance)) {
        // set the title and badge
        chrome.action.setTitle({ title: "NIET ERP Page: Attendance Visible" });
        chrome.action.setBadgeText({
          text: "ERP",
        });
        chrome.action.setBadgeBackgroundColor({ color: "#ffde59" });
      } else {
        // reset the title and badge
        chrome.action.setBadgeText({
          text: "",
        });
        chrome.action.setTitle({ title: "NIET Attendance: Not ERP Page" });
      }
    }
  );
});

// setup on install
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.action.setBadgeText({
      text: "NIET",
    });
    chrome.tabs.create({
      url: "onboarding.html",
    });
  }
});
