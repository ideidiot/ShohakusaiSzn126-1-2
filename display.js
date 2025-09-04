const firebaseConfig = {
  
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 呼び出し中の整理券番号を表示する
const calledTicketsRef = database.ref("calledTickets");
calledTicketsRef.on("value", (snapshot) => {
  const tickets = snapshot.val();
  const ticketsList = document.getElementById("called-tickets-list");
  const noTicketsDisplay = document.getElementById("no-tickets-display");
  ticketsList.innerHTML = "";
  if (tickets) {
    noTicketsDisplay.style.display = "none";
    // 取得したデータをリストに変換し、for..ofでループする
    Object.values(tickets).forEach((ticketNumber) => {
      const li = document.createElement("li");
      li.className = "called-ticket-number";
      li.textContent = ticketNumber;
      ticketsList.appendChild(li);
    });
  } else {
    noTicketsDisplay.style.display = "block";
  }
});
