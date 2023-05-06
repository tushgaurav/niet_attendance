// MAIN FUNCTION
// after niet has removed the link

function generateTable(rawData) {
  let data = rawData;

  data = JSON.parse(JSON.parse(data));

  let table =
    "<table>\n<tr>\n<th>Subject Code</th>\n<th>Subject Name</th>\n<th>No. of Lectures</th>\n<th>Present</th>\n<th>Absent</th>\n<th>Percentage</th>\n</tr>\n";
  data.forEach((item) => {
    table += `<tr>\n<td>${item.SCode}</td>\n<td>${item.SName}</td>\n<td>${item.NoofLecture}</td>\n<td>${item.Present}</td>\n<td>${item.Absent}</td>\n<td>${item.Percentage}%</td>\n</tr>\n`;
  });
  table += "</table>";
  return table;
}

try {
  const stringData = String(document.querySelector("body > pre").innerText);
  const body = document.querySelector("body");

  const table = generateTable(`${stringData}`);

  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value currently is " + result.name);
    let studentName = result.key;

    body.innerHTML = `
    <title>NIET Attendance Report</title>

    <h1>${result.name}'s Attendance Report</h1> 

        ${table}

    <h3>Powered by NIET Attendance Extension</h3>
    
    `;
  });
} catch (e) {
  console.log(e);
}
