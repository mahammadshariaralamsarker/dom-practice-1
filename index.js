// acess h3 and span text by btn
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function() {
    // get the title
    const title = card.querySelector("h3").innerText;
    // get the Price
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    // console.log(price);
    // Push the title in the result card
    const titleContainer = document.getElementById("title-container");
    // console.log(titleContainer);
    // Create the element
    const p = document.createElement("p");
    p.innerText = titleCount + "." + title;
    // apend Child
    titleContainer.appendChild(p);
    titleCount++;
    // calculate price
    totalPrice = totalPrice + price;
    // console.log(totalPrice);
    // push price in counter
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  });
}
const btn = document
  .getElementById("apply-btn")
  .addEventListener("click", function() {
    // console.log("btn clicked");
    // get the value from input
    const couponElement = document.getElementById("input-field").value;
    // console.log(typeof couponElement);
    const couponCodeElement = couponElement.split(" ").join("");
    const couponCode = couponCodeElement.toUpperCase();

    // console.log(couponCode);
    if (totalPrice >= 200) {
      // discount calculation
      if (couponCode === "SELL200") {
        discountElement = document.getElementById("discountPrice");
        discountAmount = totalPrice * 0.2;
        // console.log(typeof discountAmount);
        discountElement.innerText = discountAmount.toFixed(2);
        const restAmount = totalPrice - discountAmount.toFixed(2);

        restAmount.innerText = restAmount;
        // console.log(restAmount);
        document.getElementById("total").innerText = restAmount;
      }
    } else {
      alert("Please enter minimum service belong 200");
    }
  });
