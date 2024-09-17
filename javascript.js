function add() {
  var img = document.querySelector("#img").value;
  var pn = document.querySelector("#pn").value;
  var code = document.querySelector("#code").value;
  var np = document.querySelector("#np").value;
  var op = document.querySelector("#op").value;
  var card = `
      <div class="card">
        <img src="${img}">
        <div class="card-body">
          <h5 class="card-title">${pn} - ${code}</h5>
          <div class="card-price">
              <p class="card-new-price">${np} vnd</p>
              <p class="card-old-price">${op} vnd</p>
          </div>
          <button class="buy-button">Đặt Mua</button>
        </div>
      </div>
    `;
  document.querySelector(".container2").innerHTML += card;
}
