// QUERY BILL AMOUNT
const bill = document.getElementById("bill");
bill.addEventListener("submit", () => {
  console.log(Number);
});

// LEVEL OF SERVICE
const service = document.getElementById("Service");
const rating = document.querySelector("#Service");

service.addEventListener("submit", () => {
  const rating = rating.value;

  switch (rating) {
    case "Excellent":
      console.log(1.25);
      break;
    case "Great":
      console.log(1.2);
      break;
    case "Good":
      console.log(1.15);
      break;
    case "Not Great":
      console.log(1.1);
      break;
    case "Terrible":
      console.log(1.0);
  }
});

// NUMBER IN PARTY
const diners = document.getElementById("Party");
bill.addEventListener("submit", () => {
  console.log(Number);
});
