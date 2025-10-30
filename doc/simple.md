# 1️⃣ Estructura del proyecto “solo JS/HTML/JSON”


---


/menu
│ index.html
│ /css
│   styles.css
│ /js
│   app.js
│ /data
│   products.json


products.json → Contiene todos los productos del marketplace, menú, precios.

app.js → Lógica del carrito, generación de mensaje preestructurado y envío.

index.html → Todo el layout y botones.

styles.css → Diseño visual.

2️⃣ Products JSON (ejemplo)
[
  {"id":"001","name":"Hamburguesa Clásica","price":50,"quantity":1},
  {"id":"002","name":"Pizza Mediana","price":120,"quantity":1}
]

3️⃣ JS – carrito y mensaje preestructurado
let cart = [];

function addToCart(productId){
  const product = products.find(p => p.id === productId);
  cart.push(product);
  renderCart();
}

function renderCart(){
  const container = document.getElementById('cart');
  container.innerHTML = '';
  cart.forEach(p => {
    const div = document.createElement('div');
    div.textContent = `${p.name} - $${p.price}`;
    container.appendChild(div);
  });
}

// Generar mensaje para enviar
function generateMessage(){
  let msg = "Hola! Quisiera hacer este pedido:\n";
  cart.forEach(p => {
    msg += `- ${p.name} x${p.quantity}\n`;
  });
  msg += "Gracias!";
  return encodeURIComponent(msg);
}

// Enviar mensaje
function sendToWhatsApp(){
  const url = `https://wa.me/5211234567890?text=${generateMessage()}`;
  window.open(url, '_blank');
}

function sendToMessenger(){
  const url = `https://m.me/username?ref=${generateMessage()}`;
  window.open(url, '_blank');
}

function sendToEmail(){
  const url = `mailto:restaurante@demo.com?subject=Pedido&body=${generateMessage()}`;
  window.open(url, '_blank');
}


Funciona sin servidor, todo en cliente.

Solo necesitas actualizar el número de WhatsApp, usuario de Messenger o correo.

Carrito dinámico con JSON → fácil de mantener.

4️⃣ HTML mínimo para botones
<div id="cart"></div>
<button onclick="sendToWhatsApp()">Enviar WhatsApp</button>
<button onclick="sendToMessenger()">Enviar Messenger</button>
<button onclick="sendToEmail()">Enviar Email</button>

5️⃣ Próximos pasos para el futuro

Chat efímero P2P → usarás WebRTC:

Podrás enviar mensajes en tiempo real sin servidor central.

Luego integrar carrito o pedidos como mensajes efímeros.

Pagos reales (Stripe/PayPal) → necesitarás server para seguridad.

Mientras tanto, tu prototipo funciona sin riesgos legales, solo JS y links.

Escalabilidad:

Agregar más productos al JSON.

Mostrar totales, fotos, cantidades.

Mantener todo client-side hasta que quieras pagos o backend real.
