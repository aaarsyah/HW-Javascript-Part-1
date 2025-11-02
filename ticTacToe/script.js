// TODO :
// 1. Set up the players
//     - Create a players array containing 2 objects, one representing each player
//     - Each object should store the player's name and symbol (X or O)
//     - Display each player's name in the appropriate element in the page

// 2. Play!
//     - Take turns placing symbols in the board
//     - On each turn:
//         - Retrieve the square you want to play in
//         - Set the square's text to your player's symbol

const players = [
    { name: "Addinda", symbol: "O" },
    { name: "Louise", symbol: "X" }
];

document.getElementById("p1-name").textContent = players[0].name;
document.getElementById("p1-symbol").textContent = players[0].symbol;
document.getElementById("p2-name").textContent = players[1].name;
document.getElementById("p2-symbol").textContent = players[1].symbol;

const squares = document.querySelectorAll(".square");
let currentPlayer = players[0];

squares.forEach(square => {
    square.addEventListener("click", () => {

      // Kalau kotak sudah terisi, abaikan kliknya
      if (square.textContent !== "") return;

      // Isi kotak dengan simbol pemain sekarang
      square.textContent = currentPlayer.symbol;

      // Ganti giliran pemain
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
    })
})