// src/utils/calculadora.js

function calcularDescuento(precio, porcentaje) {
  if (precio < 0) throw new Error("El precio no puede ser negativo");
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error("El porcentaje debe estar entre 0 y 100");
  }
  return precio - (precio * porcentaje / 100);
}

function calcularTotal(productos) {
  if (!Array.isArray(productos)) {
    throw new Error("Se esperaba un arreglo");
  }
  return productos.reduce((total, prod) => {
    return total + (prod.precio * prod.cantidad);
  }, 0);
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function formatearMoneda(cantidad) {
  return `$${cantidad.toFixed(2)}`;
}

// Actividad de práctica (IVA 15% Ecuador)
function aplicarIVA(precio) {
  if (precio < 0) throw new Error("El precio no puede ser negativo");
  const TASA_IVA = 0.15;
  return precio + (precio * TASA_IVA);
}

module.exports = {
  calcularDescuento,
  calcularTotal,
  validarEmail,
  formatearMoneda,
  aplicarIVA
};