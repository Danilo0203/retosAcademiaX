const buttonCrear = (btnCrear, groupComponent) => {
  btnCrear.addEventListener("click", () => {
    let component = document.createElement("div");
    let span = document.createElement("span");
    let content = document.createElement("div");
    component.classList.add("component");
    content.classList.add("content");
    groupComponent.appendChild(component);
    component.appendChild(span);
    component.appendChild(content);
    content.textContent = "Componente nuevo";
    if (groupComponent.children.length === 4) btnCrear.disabled = true;
  });
};
const buttonEditar = (btnEditar) => {
  btnEditar.addEventListener("click", () => {
    const content = document.querySelector(".content");
    if (!content) return;
    content.textContent = "Este COMPONENTE fue EDITADO";
  });
};
const buttonEliminar = (btnCrear, btnEliminar, groupComponent) => {
  btnEliminar.addEventListener("click", () => {
    if (groupComponent.children.length !== 1) btnCrear.disabled = false;
    if (!groupComponent.children[0]) return;
    groupComponent.removeChild(groupComponent.children[0]);
  });
};
const appTarjetas = () => {
  const btnCrear = document.querySelector(".add");
  const btnEliminar = document.querySelector(".remove");
  const btnEditar = document.querySelector(".edit");
  const groupComponent = document.querySelector(".group-component");
  buttonCrear(btnCrear, groupComponent);
  buttonEditar(btnEditar);
  buttonEliminar(btnCrear, btnEliminar, groupComponent);
};
appTarjetas();
