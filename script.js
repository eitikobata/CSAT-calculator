function calcular() {
  const total = Number(document.getElementById("total").value);
  const bads = Number(document.getElementById("bads").value);
  const meta = Number(document.getElementById("meta").value) / 100;

  if (total <= 0 || bads < 0 || bads > total) {
    alert("Valores inválidos");
    return;
  }

  const goods = total - bads;
  const csat = (goods / total) * 100;

  // Goods necessários para meta
  let faltam = Math.ceil(
    (meta * total - goods) / (1 - meta)
  );
  if (faltam < 0) faltam = 0;

  // Impactos
  const impactoGood =
    (((goods + 1) / (total + 1)) * 100 - csat).toFixed(2);

  const impactoBad =
    (((goods) / (total + 1)) * 100 - csat).toFixed(2);

  document.getElementById("resultado").innerHTML = `
    <p><strong>CSAT atual:</strong> ${csat.toFixed(2)}%</p>
    <p><strong>Total de Goods:</strong> ${goods}</p>
    <p><strong>Goods necessários para meta:</strong> ${faltam}</p>
    <p><strong>Impacto de 1 GOOD:</strong> +${impactoGood}%</p>
    <p><strong>Impacto de 1 BAD:</strong> ${impactoBad}%</p>
  `;

  salvarRegistro(total, goods, bads);
}
