 **`TERMS.md`** sencillo, claro y directo, que diga algo como esto:

---

# **Términos y Condiciones – Pedido en Efectivo**

1. **Aceptación del pedido**
   Al hacer clic en “Enviar Pedido” con opción de **Pago en Efectivo**, el cliente acepta **pagar la totalidad del pedido al momento de recibirlo**.

2. **Responsabilidad del cliente**

   * Si el pedido es aceptado y no se paga, el restaurante **podrá tomar acciones legales** correspondientes.
   * El sistema solo gestiona el registro del pedido; **no garantiza pago ni entrega**.

3. **Entrega y cancelación**

   * El restaurante confirmará la disponibilidad del pedido.
   * **Cancelaciones posteriores** pueden no ser aceptadas, según disponibilidad y políticas internas.

4. **Uso de la plataforma**

   * Este sistema es un **prototipo o herramienta de pedidos**, sin vinculación directa con servicios de terceros de pago.
   * Los pagos electrónicos (Didi, PayPal, Stripe, etc.) funcionan con sus propias condiciones y seguridad; el restaurante **no se hace responsable de problemas ajenos a su gestión directa**.

---

💡 **Tips prácticos para implementarlo en tu HTML/JS**:

1. **Checkbox de aceptación**:

```html
<label>
  <input type="checkbox" id="accept-terms"> Acepto los Términos y Condiciones
</label>
<button onclick="sendOrder()" id="send-btn" disabled>Enviar Pedido</button>
```

2. **Habilitar botón solo si acepta**:

```js
const checkbox = document.getElementById('accept-terms');
const btn = document.getElementById('send-btn');
checkbox.addEventListener('change', ()=>{
  btn.disabled = !checkbox.checked;
});
```

3. **Mostrar link a términos**:

```html
<a href="TERMS.md" target="_blank">Ver Términos y Condiciones</a>
```

---

Así, cumples con **informar al usuario**, evitas que digan “no sabía”, y dejas claro que **aceptar = obligación de pagar en efectivo**.

Si quieres, puedo hacer **el TERMS.md completo y listo para tu proyecto**, con estilo limpio y lenguaje claro, que luego puedes enlazar en tu HTML.

¿Quieres que haga eso ahora?
