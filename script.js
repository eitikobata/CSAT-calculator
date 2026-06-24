function calculate() {
  const total = Number(document.getElementById('total').value);
  const bads = Number(document.getElementById('bads').value);
  const metaRaw = Number(document.getElementById('meta').value);
  const errorEl = document.getElementById('error');
 
  errorEl.style.display = 'none';
 
  if (!total || total <= 0 || bads < 0 || bads > total || !metaRaw) {
    errorEl.textContent = 'Please enter valid values. Bad ratings cannot exceed total interactions.';
    errorEl.style.display = 'block';
    document.getElementById('results').style.display = 'none';
    return;
  }
 
  const meta = metaRaw / 100;
  const goods = total - bads;
  const csat = (goods / total) * 100;
 
  let needed = Math.ceil((meta * total - goods) / (1 - meta));
  if (needed < 0) needed = 0;
 
  const gap = (metaRaw - csat).toFixed(2);
  const goodImpact = (((goods + 1) / (total + 1)) * 100 - csat).toFixed(2);
  const badImpact = ((goods / (total + 1)) * 100 - csat).toFixed(2);
 
  document.getElementById('r-csat').textContent = csat.toFixed(2) + '%';
  document.getElementById('r-goods').textContent = goods.toLocaleString();
  document.getElementById('r-needed').textContent = needed === 0 ? '✓ On target' : '+' + needed;
  document.getElementById('r-gap').textContent = parseFloat(gap) >= 0 ? '+' + gap + '%' : gap + '%';
  document.getElementById('r-good-impact').textContent = '+' + goodImpact + '%';
  document.getElementById('r-bad-impact').textContent = badImpact + '%';
 
  const neededEl = document.getElementById('r-needed');
  neededEl.className = 'metric-value' + (needed === 0 ? ' good' : '');
 
  const gapEl = document.getElementById('r-gap');
  gapEl.className = 'metric-value' + (parseFloat(gap) >= 0 ? ' good' : ' bad');
 
  document.getElementById('results').style.display = 'block';
}
 
function clearAll() {
  ['total', 'bads', 'meta'].forEach(function (id) {
    document.getElementById(id).value = '';
  });
  document.getElementById('results').style.display = 'none';
  document.getElementById('error').style.display = 'none';
}
