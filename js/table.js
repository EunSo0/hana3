const users = [
  { id: 1, name: "홍길동", tel: "01088889991", addr: "서울" },
  { id: 2, name: "김길동", tel: "01088889992", addr: "부산" },
  { id: 3, name: "이길동", tel: "01088889993", addr: "서울" },
  { id: 4, name: "박길동", tel: "01088889994", addr: "서울" },
];

const COL_IDX = { id: 0, name: 1, tel: 2, addr: 3 };
const table = document.getElementById("user");
const addRow = (id) => {
  users.forEach((item, idx) => {
    const row = id.insertRow();

    // Object.values(item).map((v) => {
    //   const cell = row.insertCell();
    //   const text = document.createTextNode(v);
    //   cell.appendChild(text);
    // });
    for (const [k, v] of Object.entries(item)) {
      row.insertCell(COL_IDX[k]).innerText = v;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    document.body.append(deleteBtn);
    const lastCell = row.insertCell();
    lastCell.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
      // table.deleteRow(idx + 1);
      e.currentTarget.parentNode.parentElement.remove();
    });
  });
};
addRow(table);
