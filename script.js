document.getElementById('year').textContent = new Date().getFullYear();

const products = [
  {id:1, title:'Round Neck Premium', price:'₦20,000', desc:'Premium cotton tee.'},
  {id:2, title:'Classic Hexagon Tee', price:'₦18,000', desc:'Minimal logo tee.'},
  {id:3, title:'Own Your Edge Edition', price:'₦15,000', desc:'Limited drop tee.'}
];

const grid = document.getElementById('products');
products.forEach(p=>{
  const el = document.createElement('div');
  el.className = 'product';
  el.innerHTML = `<div class="thumb"><div style="color:var(--gold);font-weight:800">${p.title}</div></div>
  <div class="title">${p.title}</div>
  <div class="price">${p.price}</div>
  <div><button class="add" data-id="${p.id}">Add to cart</button></div>`;
  grid.appendChild(el);
});

document.addEventListener('click', e=>{
  if(e.target.matches('.add')){
    alert('Added to cart — ' + e.target.dataset.id);
  }
});

document.getElementById('joinBtn').addEventListener('click', ()=>{
  const email = document.getElementById('email').value.trim();
  if(!email) return alert('Please enter your email');
  alert('Thanks! We will notify you about drops — ' + email);
});
