const $ = (element) => document.querySelector(element);

const list = $("#list");
const personName = $("#name");
const personAmount = $("#amount");
const button = $("button");
const total = $("#total");
const toPay = $("#mean");

const amounts = [];

const createListItem = (item) => {
  const li = document.createElement("li");
  li.className = "border-solid border-2 m-2 w-60 rounded-sm";
  li.appendChild(document.createTextNode(`${item.name} : $${item.amount}`));
  list.appendChild(li);
};

const getTotalMean = () => {
  let total = 0;
  amounts.forEach((element) => {
    total += parseFloat(element.amount);
  });

  return { mean: (total / amounts.length).toFixed(2), total };
};

button.addEventListener("click", (e) => {
  if (personAmount.value > 0 && personName.value !== "") {
    const data = { name: personName.value, amount: personAmount.value };
    createListItem(data);
    amounts.push(data);
    const { mean, total: add } = getTotalMean();
    total.textContent = `$${add}`;
    toPay.textContent = `$${mean}`;
  } else {
    alert("Ingrese datos correctos!");
  }
});
