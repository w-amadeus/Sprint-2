const $ = (element) => document.querySelector(element);

const lista = $("#lista-pvtas");
const nombre = $("#nombre");
const monto = $("#monto");
const button = $("button");
const total = $("#total");
const prom = $("#promedio")

const amount = [];

const createListItem = (item) => {
  const li = document.createElement("li");
  li.className="border-solid border-2 m-2 w-60 rounded-sm";
  li.appendChild(document.createTextNode(`${item.nombre} : $${item.monto}`));
  lista.appendChild(li);
};

const sum = () => {
    let total = 0;
    amount.forEach(element => {
        total += parseFloat(element.monto); 
    });
    
    return {promedio: total/amount.length, total}
}

button.addEventListener("click", (e) => {
    if (isNaN(monto.value) && nombre.value === undefined) {
            alert("La recontra perra que te re mil pario");
            return
           }
    const data = { nombre: nombre.value, monto: monto.value };
  createListItem(data);
  amount.push(data);
  const {promedio, total: suma} = sum();
  total.textContent = `$${suma}`;
  prom.textContent = `$${promedio}`;

});