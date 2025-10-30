fetch('./data/products.json').then(r=>r.json()).then(js=>{ DATA.products = js; renderProducts(); });
