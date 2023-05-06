// fixing the attendance table header widht
let table_container = document.querySelector(
  "#tblDetails1_wrapper > div:nth-child(2) > div > div > div.dataTables_scrollHead > div"
);

table_container.style.width = "100%";

let table_head = document.querySelector(
  "#tblDetails1_wrapper > div:nth-child(2) > div > div > div.dataTables_scrollHead > div > table"
);

table_head.style.width = "100%";
