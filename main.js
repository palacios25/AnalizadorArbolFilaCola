import analizador from "./analizador.js";

document.querySelector("#btn").addEventListener("click", () =>{
    let exprecion = document.querySelector("#exprecion").value;

    let objExprecion = {
        exprecion : exprecion
    }; 
    analizador.agregar(objExprecion);
});

document.querySelector("#btnPreOrder").addEventListener("click", () =>{
    inventario.PreOrder();
});

document.querySelector("#btnPosOrder").addEventListener("click", () =>{
    inventario.PosOrder();
});