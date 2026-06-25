/* ============ GAMEVERSE — SPA ============ */

const IMG = {
  // Unsplash gaming gear images
  headset1: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&q=80",
  headset2: "https://images.unsplash.com/photo-1612444530582-fc66183b16f8?w=800&q=80",
  headset3: "https://images.unsplash.com/photo-1591105575633-922c8897af9a?w=800&q=80",
  kb1: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
  kb2: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
  kb3: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
  mouse1: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
  mouse2: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
  mouse3: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800&q=80",
  ctrl1: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80",
  ctrl2: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=800&q=80",
  ctrl3: "https://images.unsplash.com/photo-1606318313846-1b0c9c5e9c8e?w=800&q=80",
  chair1: "https://images.unsplash.com/photo-1610395219791-21b0353e43c4?w=800&q=80",
  chair2: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
  vr1: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
  vr2: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
  stream1: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
  stream2: "https://images.unsplash.com/photo-1547015904-1e89c0a59f0a?w=800&q=80",
  acc1: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
  acc2: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&q=80",
  hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  avatar1: "https://i.pravatar.cc/100?img=12",
  avatar2: "https://i.pravatar.cc/100?img=32",
  avatar3: "https://i.pravatar.cc/100?img=47",
};

/* ---------------- DATA ---------------- */
const PRODUCTS = [
  { id: 1, name: "Neon Surge Pro Headset", category: "Headsets", price: 189, oldPrice: 249, rating: 4.8, reviews: 412, tag: "Hot", img: IMG.headset1, gallery: [IMG.headset1, IMG.headset2, IMG.headset3], desc: "Studio-grade 50mm drivers, 7.1 surround, and a noise-canceling boom mic. Built for marathon sessions.", features: ["7.1 Surround Sound", "50mm Neodymium Drivers", "RGB LED Lighting", "30-Hour Battery", "Detachable Boom Mic"] },
  { id: 2, name: "Cyber Phantom Wireless", category: "Headsets", price: 229, rating: 4.7, reviews: 198, img: IMG.headset2, gallery: [IMG.headset2, IMG.headset1, IMG.headset3], desc: "Low-latency wireless headset with active noise cancellation.", features: ["2.4GHz Wireless", "Active Noise Cancel", "40h Battery", "Memory Foam Cushions"] },
  { id: 3, name: "Volt Strike Pro Headset", category: "Headsets", price: 149, oldPrice: 179, rating: 4.6, reviews: 87, img: IMG.headset3, gallery: [IMG.headset3, IMG.headset1, IMG.headset2], desc: "Esports-tuned headset with crystal-clear comms.", features: ["Lightweight 240g", "Hi-Res Audio", "Onboard EQ"] },

  { id: 4, name: "Hyper Mech RGB Keyboard", category: "Keyboards", price: 159, rating: 4.9, reviews: 532, tag: "New", img: IMG.kb1, gallery: [IMG.kb1, IMG.kb2, IMG.kb3], desc: "Hot-swappable switches and per-key RGB lighting.", features: ["Hot-Swappable", "Per-key RGB", "PBT Keycaps", "USB-C Detachable"] },
  { id: 5, name: "Aurora 65% Compact", category: "Keyboards", price: 129, rating: 4.7, reviews: 211, img: IMG.kb2, gallery: [IMG.kb2, IMG.kb3, IMG.kb1], desc: "Compact 65% layout with gasket-mounted plate.", features: ["Gasket Mount", "Wireless Tri-mode", "South-Facing RGB"] },
  { id: 6, name: "Titan Optical TKL", category: "Keyboards", price: 99, oldPrice: 139, rating: 4.5, reviews: 142, img: IMG.kb3, gallery: [IMG.kb3, IMG.kb1, IMG.kb2], desc: "Tenkeyless optical keyboard with 0.2ms response.", features: ["Optical Switches", "0.2ms Actuation", "Magnetic Wrist Rest"] },

  { id: 7, name: "Specter Pro Wireless Mouse", category: "Mice", price: 119, rating: 4.9, reviews: 644, tag: "Best", img: IMG.mouse1, gallery: [IMG.mouse1, IMG.mouse2, IMG.mouse3], desc: "26K DPI sensor and 60-hour battery in a 58g shell.", features: ["26000 DPI", "58g Ultralight", "60h Battery", "Optical Switches"] },
  { id: 8, name: "Glide RGB Esports Mouse", category: "Mice", price: 79, rating: 4.6, reviews: 320, img: IMG.mouse2, gallery: [IMG.mouse2, IMG.mouse1, IMG.mouse3], desc: "Ambidextrous design with RGB underglow.", features: ["18000 DPI", "RGB Underglow", "6 Programmable Buttons"] },
  { id: 9, name: "Reaper Wired Pro", category: "Mice", price: 59, rating: 4.4, reviews: 88, img: IMG.mouse3, gallery: [IMG.mouse3, IMG.mouse1, IMG.mouse2], desc: "Lightweight wired mouse for FPS dominance.", features: ["Paracord Cable", "PTFE Feet", "75g Frame"] },

  { id: 10, name: "Vortex Elite Controller", category: "Controllers", price: 169, rating: 4.8, reviews: 274, img: IMG.ctrl1, gallery: [IMG.ctrl1, IMG.ctrl2, IMG.ctrl3], desc: "Hall-effect sticks, back paddles, and custom mapping.", features: ["Hall-Effect Sticks", "4 Back Paddles", "Trigger Locks", "Custom Profiles"] },
  { id: 11, name: "Arcade Pulse Pad", category: "Controllers", price: 89, rating: 4.5, reviews: 132, img: IMG.ctrl2, gallery: [IMG.ctrl2, IMG.ctrl1, IMG.ctrl3], desc: "Retro-inspired arcade pad.", features: ["Mechanical Buttons", "USB-C", "Cross-platform"] },
  { id: 12, name: "Phantom Pro Controller", category: "Controllers", price: 129, oldPrice: 159, rating: 4.7, reviews: 201, img: IMG.ctrl3, gallery: [IMG.ctrl3, IMG.ctrl1, IMG.ctrl2], desc: "Wireless pro-grade controller.", features: ["Bluetooth + 2.4GHz", "Gyro Aim", "Rumble HD"] },

  { id: 13, name: "ThroneX Pro Gaming Chair", category: "Chairs", price: 449, oldPrice: 549, rating: 4.7, reviews: 421, tag: "Sale", img: IMG.chair1, gallery: [IMG.chair1, IMG.chair2], desc: "Ergonomic lumbar support and 4D armrests.", features: ["4D Armrests", "Lumbar Support", "180° Recline", "Cold-Cure Foam"] },
  { id: 14, name: "Apex Recline Chair", category: "Chairs", price: 329, rating: 4.5, reviews: 156, img: IMG.chair2, gallery: [IMG.chair2, IMG.chair1], desc: "All-day comfort with breathable mesh.", features: ["Mesh Backrest", "Tilt Lock", "PU Wheels"] },

  { id: 15, name: "OmniView VR Pro", category: "VR Headsets", price: 599, rating: 4.8, reviews: 188, tag: "New", img: IMG.vr1, gallery: [IMG.vr1, IMG.vr2], desc: "4K per eye, 120Hz, inside-out tracking.", features: ["4K Per Eye", "120Hz", "Inside-Out Tracking", "Wireless"] },
  { id: 16, name: "Nebula VR Lite", category: "VR Headsets", price: 349, rating: 4.4, reviews: 92, img: IMG.vr2, gallery: [IMG.vr2, IMG.vr1], desc: "Entry-level VR with crisp visuals.", features: ["2K Per Eye", "90Hz", "Lightweight"] },

  { id: 17, name: "Streamer Pro Mic", category: "Streaming", price: 199, rating: 4.9, reviews: 367, img: IMG.stream1, gallery: [IMG.stream1, IMG.stream2], desc: "Studio-quality cardioid USB mic.", features: ["24-bit/96kHz", "USB-C", "Pop Filter Included", "Onboard Mute"] },
  { id: 18, name: "RingLight Studio Kit", category: "Streaming", price: 149, rating: 4.6, reviews: 142, img: IMG.stream2, gallery: [IMG.stream2, IMG.stream1], desc: "Adjustable bicolor ring light.", features: ["3000K–6000K", "Dimmable", "Phone Mount"] },

  { id: 19, name: "Glide XL Desk Mat", category: "Accessories", price: 39, rating: 4.7, reviews: 512, img: IMG.acc1, gallery: [IMG.acc1, IMG.acc2], desc: "Extended cloth mat with stitched edges.", features: ["900x400mm", "Anti-slip Base", "Stitched Edges"] },
  { id: 20, name: "Cable Hub RGB", category: "Accessories", price: 49, rating: 4.5, reviews: 88, img: IMG.acc2, gallery: [IMG.acc2, IMG.acc1], desc: "7-port USB hub with RGB lighting.", features: ["USB 3.2", "RGB Lighting", "Aluminum Body"] },
];

const CATEGORIES = [
  { name: "Headsets", img: IMG.headset1 },
  { name: "Keyboards", img: IMG.kb1 },
  { name: "Mice", img: IMG.mouse1 },
  { name: "Controllers", img: IMG.ctrl1 },
  { name: "Chairs", img: IMG.chair1 },
  { name: "VR Headsets", img: IMG.vr1 },
  { name: "Streaming", img: IMG.stream1 },
  { name: "Accessories", img: IMG.acc1 },
];

const TESTIMONIALS = [
  { name: "Alex 'Vortex' Chen", role: "Pro FPS Player", text: "GameVerse delivered overnight. The Specter mouse is a game-changer — my aim has never felt better.", rating: 5, avatar: IMG.avatar1 },
  { name: "Maya Rodriguez", role: "Streamer · 200K", text: "Everything in my studio is from GameVerse. Quality, speed, support — they nail all three.", rating: 5, avatar: IMG.avatar2 },
  { name: "Jordan Kim", role: "Esports Coach", text: "We outfit our entire roster here. The Hyper Mech keyboards are unmatched at this price.", rating: 5, avatar: IMG.avatar3 },
];

const FAQS = [
  { q: "Do you ship internationally?", a: "Yes — we ship to 60+ countries. Free shipping on orders over $99." },
  { q: "What is your return policy?", a: "30-day no-questions-asked returns on all unopened products." },
  { q: "Do you offer warranty?", a: "All products come with at least a 1-year manufacturer warranty. Pro tier includes 2 years." },
  { q: "Can I track my order?", a: "Absolutely — tracking is provided via email and inside your dashboard." },
  { q: "Do you price-match competitors?", a: "Yes, on identical SKUs from authorized retailers. Contact support with the listing." },
];

/* ---------------- STATE ---------------- */
const state = {
  route: "home",
  productId: null,
  cart: JSON.parse(localStorage.getItem("gv_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("gv_wishlist") || "[]"),
  user: JSON.parse(localStorage.getItem("gv_user") || "null"),
  users: JSON.parse(localStorage.getItem("gv_users") || "[]"),
  orders: JSON.parse(localStorage.getItem("gv_orders") || "[]"),
  filters: { category: "All", search: "", maxPrice: 700, sort: "popular" },
  authMode: "login",
};

const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const persist = () => {
  save("gv_cart", state.cart);
  save("gv_wishlist", state.wishlist);
  save("gv_user", state.user);
  save("gv_users", state.users);
  save("gv_orders", state.orders);
};

/* ---------------- UTIL ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const fmt = n => "$" + n.toFixed(2);
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

function toast(msg, type = "success") {
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.textContent = msg;
  $("#toast-container").appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transform = "translateX(120%)"; el.style.transition = "all .3s"; }, 2400);
  setTimeout(() => el.remove(), 2800);
}

function navigate(route, opts = {}) {
  state.route = route;
  if (opts.productId) state.productId = opts.productId;
  if (opts.category) state.filters.category = opts.category;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
  $("#nav-links")?.classList.remove("open");
}

/* ---------------- CART / WISHLIST ---------------- */
function addToCart(id, qty = 1) {
  const item = state.cart.find(i => i.id === id);
  if (item) item.qty += qty;
  else state.cart.push({ id, qty });
  persist(); updateCartUI();
  toast("Added to cart");
}
function removeFromCart(id) { state.cart = state.cart.filter(i => i.id !== id); persist(); updateCartUI(); renderCartDrawer(); }
function changeQty(id, delta) {
  const it = state.cart.find(i => i.id === id);
  if (!it) return;
  it.qty = Math.max(1, it.qty + delta);
  persist(); updateCartUI(); renderCartDrawer();
}
function cartTotal() { return state.cart.reduce((s, i) => s + i.qty * PRODUCTS.find(p => p.id === i.id).price, 0); }
function cartCount() { return state.cart.reduce((s, i) => s + i.qty, 0); }
function toggleWish(id) {
  const i = state.wishlist.indexOf(id);
  if (i >= 0) { state.wishlist.splice(i, 1); toast("Removed from wishlist"); }
  else { state.wishlist.push(id); toast("Added to wishlist"); }
  persist(); updateCartUI();
  if (state.route === "wishlist") render();
}
function updateCartUI() {
  $("#cart-count").textContent = cartCount();
  $("#wish-count").textContent = state.wishlist.length;
  $("#cart-subtotal").textContent = fmt(cartTotal());
}

/* ---------------- CART DRAWER ---------------- */
function openCart() { $("#cart-drawer").classList.add("open"); $("#overlay").classList.add("show"); renderCartDrawer(); }
function closeCart() { $("#cart-drawer").classList.remove("open"); $("#overlay").classList.remove("show"); }
function renderCartDrawer() {
  const c = $("#cart-items");
  if (!state.cart.length) { c.innerHTML = `<div class="empty-state"><h3>Cart is empty</h3><p>Add some gear to get started.</p></div>`; updateCartUI(); return; }
  c.innerHTML = state.cart.map(it => {
    const p = PRODUCTS.find(x => x.id === it.id);
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      <div>
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${fmt(p.price)}</div>
        <div class="qty" style="margin-top:6px">
          <button onclick="changeQty(${p.id},-1)">−</button>
          <span>${it.qty}</span>
          <button onclick="changeQty(${p.id},1)">+</button>
        </div>
      </div>
      <button class="icon-btn" onclick="removeFromCart(${p.id})" aria-label="Remove">✕</button>
    </div>`;
  }).join("");
  updateCartUI();
}

/* ---------------- VIEWS ---------------- */
function productCard(p) {
  const wished = state.wishlist.includes(p.id) ? "active" : "";
  return `<article class="product fade-in">
    ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
    <button class="wish-btn ${wished}" onclick="toggleWish(${p.id})" aria-label="Wishlist">♥</button>
    <div class="img-wrap" onclick="navigate('product',{productId:${p.id}})">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
    </div>
    <div class="body">
      <div class="cat">${p.category}</div>
      <div class="name">${p.name}</div>
      <div class="rating">${stars(p.rating)} <span class="muted" style="font-size:12px">(${p.reviews})</span></div>
      <div class="price-row">
        <div><span class="price">${fmt(p.price)}</span>${p.oldPrice ? `<span class="old">${fmt(p.oldPrice)}</span>` : ""}</div>
      </div>
    </div>
    <div class="actions">
      <button class="btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
      <button class="btn ghost" onclick="navigate('product',{productId:${p.id}})">View</button>
    </div>
  </article>`;
}

function viewHome() {
  const featured = PRODUCTS.slice(0, 8);
  return `
  <section class="hero">
    <div class="hero-text fade-in">
      <h1>Level Up Your <span class="grad">Battlestation</span></h1>
      <p>Premium gaming accessories engineered for esports champions, streamers, and weekend warriors. Free shipping over $99.</p>
      <div class="hero-cta">
        <button class="btn primary" onclick="navigate('shop')">Shop Now →</button>
        <button class="btn ghost" onclick="navigate('about')">About GameVerse</button>
      </div>
      <div class="hero-stats">
        <div><b>500K+</b><span class="muted">Gamers</span></div>
        <div><b>4.9★</b><span class="muted">Avg Rating</span></div>
        <div><b>24/7</b><span class="muted">Support</span></div>
      </div>
    </div>
    <div class="hero-img"><img src="${IMG.hero}" alt="Gaming setup"/></div>
  </section>

  <section class="section">
    <h2>Shop by Category</h2>
    <p class="sub">Find your edge across every category.</p>
    <div class="cat-grid stagger">
      ${CATEGORIES.map(c => `
        <div class="cat-card" onclick="navigate('shop',{category:'${c.name}'})">
          <img src="${c.img}" alt="${c.name}"/>
          <div class="overlay-grad"></div>
          <h3>${c.name}</h3>
        </div>`).join("")}
    </div>
  </section>

  <section class="section">
    <div class="row" style="margin-bottom:24px">
      <div><h2>Featured Drops</h2><p class="sub" style="margin:0">Hand-picked top sellers.</p></div>
      <button class="btn ghost" onclick="navigate('shop')">View all →</button>
    </div>
    <div class="product-grid">${featured.map(productCard).join("")}</div>
  </section>

  <section class="section">
    <h2>Trusted by Champions</h2>
    <p class="sub">What gamers say about GameVerse.</p>
    <div class="testi-grid">
      ${TESTIMONIALS.map(t => `<div class="testi">
        <div class="stars">${stars(t.rating)}</div>
        <p>"${t.text}"</p>
        <div class="author"><img src="${t.avatar}" alt=""/><div><strong>${t.name}</strong><div class="muted" style="font-size:12px">${t.role}</div></div></div>
      </div>`).join("")}
    </div>
  </section>

  <section class="section">
    <div class="card" style="text-align:center; padding:50px 20px;">
      <h2>Join the GameVerse</h2>
      <p class="muted" style="margin:10px 0 22px">Get early drops, exclusive deals, and free giveaways.</p>
      <form class="newsletter" style="max-width:420px;margin:0 auto" onsubmit="event.preventDefault();toast('Subscribed! Welcome 🎮');this.reset();">
        <input type="email" required placeholder="your@email.com"/>
        <button class="btn primary">Subscribe</button>
      </form>
    </div>
  </section>`;
}

function viewShop() {
  const f = state.filters;
  let list = PRODUCTS.filter(p =>
    (f.category === "All" || p.category === f.category) &&
    p.price <= f.maxPrice &&
    (p.name.toLowerCase().includes(f.search.toLowerCase()) || p.category.toLowerCase().includes(f.search.toLowerCase()))
  );
  if (f.sort === "price-asc") list.sort((a,b)=>a.price-b.price);
  else if (f.sort === "price-desc") list.sort((a,b)=>b.price-a.price);
  else if (f.sort === "rating") list.sort((a,b)=>b.rating-a.rating);

  const cats = ["All", ...CATEGORIES.map(c=>c.name)];

  return `
  <section class="section">
    <h2>Shop All Gear</h2>
    <p class="sub">${list.length} products</p>
    <div class="shop-layout">
      <aside class="sidebar">
        <div class="filter-group">
          <h4>Category</h4>
          ${cats.map(c => `<label><input type="radio" name="cat" ${f.category===c?"checked":""} onchange="state.filters.category='${c}';render()"/> ${c}</label>`).join("")}
        </div>
        <div class="filter-group">
          <h4>Max Price: <span style="color:var(--neon)">${fmt(f.maxPrice)}</span></h4>
          <input type="range" min="50" max="700" step="10" value="${f.maxPrice}" oninput="state.filters.maxPrice=+this.value;render()"/>
        </div>
        <button class="btn block" onclick="state.filters={category:'All',search:'',maxPrice:700,sort:'popular'};render()">Reset Filters</button>
      </aside>
      <div>
        <div class="shop-head">
          <input placeholder="Search products..." value="${f.search}" oninput="state.filters.search=this.value;render()"/>
          <select onchange="state.filters.sort=this.value;render()">
            <option value="popular" ${f.sort==='popular'?'selected':''}>Most Popular</option>
            <option value="price-asc" ${f.sort==='price-asc'?'selected':''}>Price: Low → High</option>
            <option value="price-desc" ${f.sort==='price-desc'?'selected':''}>Price: High → Low</option>
            <option value="rating" ${f.sort==='rating'?'selected':''}>Top Rated</option>
          </select>
        </div>
        ${list.length ? `<div class="product-grid">${list.map(productCard).join("")}</div>` : `<div class="empty-state"><h3>No products found</h3><p>Try adjusting your filters.</p></div>`}
      </div>
    </div>
  </section>`;
}

function viewProduct() {
  const p = PRODUCTS.find(x => x.id === state.productId);
  if (!p) return `<div class="empty-state"><h3>Product not found</h3></div>`;
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0,4);
  return `
  <section class="section">
    <button class="btn ghost" onclick="navigate('shop')" style="margin-bottom:20px">← Back to Shop</button>
    <div class="pd-layout">
      <div class="gallery">
        <div class="main-img"><img id="main-img" src="${p.gallery[0]}" alt="${p.name}"/></div>
        <div class="thumbs">${p.gallery.map((g,i)=>`<img src="${g}" class="${i===0?'active':''}" onclick="document.getElementById('main-img').src='${g}';document.querySelectorAll('.thumbs img').forEach(t=>t.classList.remove('active'));this.classList.add('active')"/>`).join("")}</div>
      </div>
      <div class="pd-info">
        <div class="muted">${p.category}</div>
        <h1>${p.name}</h1>
        <div class="rating" style="color:var(--warn)">${stars(p.rating)} <span class="muted">(${p.reviews} reviews)</span></div>
        <div class="price">${fmt(p.price)} ${p.oldPrice?`<span class="old" style="font-size:18px;color:var(--muted);text-decoration:line-through;margin-left:8px">${fmt(p.oldPrice)}</span>`:""}</div>
        <p class="muted">${p.desc}</p>
        <div class="tabs">
          <button class="tab-btn active" onclick="switchTab(this,'features')">Features</button>
          <button class="tab-btn" onclick="switchTab(this,'specs')">Specifications</button>
          <button class="tab-btn" onclick="switchTab(this,'reviews')">Reviews</button>
        </div>
        <div id="tab-features" class="tab-pane">
          <ul class="features">${p.features.map(f=>`<li>${f}</li>`).join("")}</ul>
        </div>
        <div id="tab-specs" class="tab-pane" style="display:none">
          <ul class="features">
            <li>SKU: GV-${p.id.toString().padStart(4,'0')}</li>
            <li>Category: ${p.category}</li>
            <li>Warranty: 2 Years</li>
            <li>Ships from: USA / EU warehouses</li>
          </ul>
        </div>
        <div id="tab-reviews" class="tab-pane" style="display:none">
          ${[1,2,3].map(i=>`<div class="review">
            <div class="who"><strong>Verified Buyer</strong><span class="muted">${stars(5)}</span></div>
            <p class="muted">Best ${p.category.toLowerCase()} I've owned. Build feels premium, performance is killer.</p>
          </div>`).join("")}
        </div>
        <div style="display:flex; gap:12px; align-items:center; margin-top:24px">
          <div class="qty">
            <button onclick="window._qty=Math.max(1,(window._qty||1)-1);document.getElementById('qty-val').textContent=window._qty">−</button>
            <span id="qty-val">1</span>
            <button onclick="window._qty=(window._qty||1)+1;document.getElementById('qty-val').textContent=window._qty">+</button>
          </div>
          <button class="btn primary" onclick="addToCart(${p.id}, window._qty||1); window._qty=1;">Add to Cart</button>
          <button class="btn ghost" onclick="toggleWish(${p.id})">♥ Wishlist</button>
        </div>
      </div>
    </div>

    ${related.length ? `
    <div style="margin-top:60px">
      <h2>You Might Also Like</h2>
      <div class="product-grid" style="margin-top:20px">${related.map(productCard).join("")}</div>
    </div>` : ""}
  </section>`;
}

function switchTab(btn, name) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  ["features","specs","reviews"].forEach(n => document.getElementById("tab-"+n).style.display = n===name ? "block" : "none");
}

function viewCheckout() {
  if (!state.cart.length) return `<div class="empty-state section"><h3>Your cart is empty</h3><p>Add products before checking out.</p><button class="btn primary" onclick="navigate('shop')" style="margin-top:16px">Shop Now</button></div>`;
  const sub = cartTotal();
  const ship = sub > 99 ? 0 : 9.99;
  const tax = sub * 0.08;
  const total = sub + ship + tax;
  return `
  <section class="section">
    <h2>Checkout</h2>
    <div class="checkout" style="margin-top:24px">
      <form class="card" id="checkout-form">
        <h3 style="margin-bottom:16px">Shipping Information</h3>
        <div class="form" style="max-width:none">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px">
            <input required placeholder="First Name"/>
            <input required placeholder="Last Name"/>
          </div>
          <input required type="email" placeholder="Email"/>
          <input required placeholder="Address"/>
          <div style="display:grid; grid-template-columns:2fr 1fr 1fr; gap:14px">
            <input required placeholder="City"/>
            <input required placeholder="ZIP"/>
            <input required placeholder="Country"/>
          </div>
          <h3 style="margin:16px 0 0">Payment</h3>
          <input required placeholder="Card Number (4242 4242 4242 4242)" maxlength="19"/>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px">
            <input required placeholder="MM/YY"/>
            <input required placeholder="CVC" maxlength="4"/>
          </div>
          <button type="submit" class="btn primary block" style="margin-top:10px">Place Order — ${fmt(total)}</button>
        </div>
      </form>
      <aside class="summary">
        <h3>Order Summary</h3>
        ${state.cart.map(i => { const p=PRODUCTS.find(x=>x.id===i.id); return `<div class="line"><span>${p.name} × ${i.qty}</span><span>${fmt(p.price*i.qty)}</span></div>`; }).join("")}
        <div class="line"><span>Subtotal</span><span>${fmt(sub)}</span></div>
        <div class="line"><span>Shipping</span><span>${ship===0?"FREE":fmt(ship)}</span></div>
        <div class="line"><span>Tax</span><span>${fmt(tax)}</span></div>
        <div class="line total"><span>Total</span><span>${fmt(total)}</span></div>
      </aside>
    </div>
  </section>`;
}

function viewAuth() {
  const mode = state.authMode;
  return `
  <section class="section">
    <div class="auth-card fade-in">
      <h2>${mode==="login"?"Welcome Back":"Create Account"}</h2>
      <p class="muted" style="margin-bottom:20px">${mode==="login"?"Login to access your dashboard.":"Join GameVerse in seconds."}</p>
      <form class="form" id="auth-form" onsubmit="return submitAuth(event)">
        ${mode==="register"?`<div><label>Name</label><input name="name" required minlength="2"/></div>`:""}
        <div><label>Email</label><input name="email" type="email" required/></div>
        <div><label>Password</label><input name="password" type="password" required minlength="6"/></div>
        <button class="btn primary block" type="submit">${mode==="login"?"Login":"Register"}</button>
      </form>
      <p style="margin-top:16px; text-align:center" class="muted">
        ${mode==="login"?"No account?":"Have one?"}
        <span class="switch-link" onclick="state.authMode='${mode==='login'?'register':'login'}';render()">${mode==='login'?'Register':'Login'}</span>
      </p>
    </div>
  </section>`;
}

function submitAuth(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const email = fd.get("email").trim().toLowerCase();
  const password = fd.get("password");
  if (state.authMode === "register") {
    const name = fd.get("name").trim();
    if (state.users.find(u => u.email === email)) { toast("Email already registered", "error"); return false; }
    const user = { name, email, password };
    state.users.push(user);
    state.user = { name, email };
    persist();
    toast("Account created!");
  } else {
    const u = state.users.find(x => x.email === email && x.password === password);
    if (!u) { toast("Invalid credentials", "error"); return false; }
    state.user = { name: u.name, email: u.email };
    persist();
    toast("Welcome back, " + u.name);
  }
  navigate("dashboard");
  return false;
}

function logout() {
  state.user = null; persist();
  toast("Logged out");
  navigate("home");
}

function viewAccount() {
  if (!state.user) return viewAuth();
  return viewDashboard();
}

function viewDashboard() {
  if (!state.user) { state.authMode="login"; return viewAuth(); }
  const myOrders = state.orders.filter(o => o.email === state.user.email);
  return `
  <section class="section">
    <div class="row" style="margin-bottom:20px">
      <div><h2>Hey, ${state.user.name} 👋</h2><p class="muted">${state.user.email}</p></div>
      <button class="btn danger" onclick="logout()">Logout</button>
    </div>
    <div class="dash-tabs">
      <span class="chip active">Profile</span>
      <span class="chip" onclick="navigate('wishlist')">Wishlist (${state.wishlist.length})</span>
      <span class="chip" onclick="navigate('settings')">Settings</span>
    </div>

    <h3 style="margin:30px 0 16px">Order History</h3>
    ${myOrders.length ? myOrders.map(o => `<div class="order">
      <div class="row"><strong>Order #${o.id}</strong><span class="status">${o.status}</span></div>
      <div class="muted">${new Date(o.date).toLocaleDateString()}</div>
      <div class="muted" style="margin-top:6px">${o.items.length} item(s) · Total ${fmt(o.total)}</div>
    </div>`).join("") : `<div class="empty-state"><p>No orders yet.</p></div>`}
  </section>`;
}

function viewWishlist() {
  const items = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  return `
  <section class="section">
    <h2>My Wishlist</h2>
    <p class="sub">${items.length} item(s)</p>
    ${items.length ? `<div class="product-grid">${items.map(productCard).join("")}</div>` : `<div class="empty-state"><h3>Your wishlist is empty</h3><button class="btn primary" onclick="navigate('shop')" style="margin-top:12px">Discover Products</button></div>`}
  </section>`;
}

function viewAbout() {
  return `
  <section class="section">
    <h2>About GameVerse</h2>
    <p class="muted" style="max-width:780px; font-size:18px; margin-top:8px">
      Founded in 2021, GameVerse is the destination for elite gaming accessories. We partner with top brands and independent labs to deliver gear that performs in tournaments, on streams, and in your living room.
    </p>
    <div class="product-grid stagger" style="margin-top:40px; grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
      <div class="card"><h3>🎯 Our Mission</h3><p class="muted" style="margin-top:10px">Equip every gamer with championship-grade tools.</p></div>
      <div class="card"><h3>🚀 Fast Shipping</h3><p class="muted" style="margin-top:10px">Same-day dispatch in 60+ countries.</p></div>
      <div class="card"><h3>🛡️ 2-Year Warranty</h3><p class="muted" style="margin-top:10px">Trust built into every product we sell.</p></div>
      <div class="card"><h3>💬 24/7 Support</h3><p class="muted" style="margin-top:10px">Real humans, real fast answers.</p></div>
    </div>
  </section>`;
}

function viewContact() {
  return `
  <section class="section">
    <h2>Contact Us</h2>
    <p class="sub">We respond within 24 hours.</p>
    <form class="form card" onsubmit="event.preventDefault();toast('Message sent!');this.reset()" style="margin-top:24px">
      <div><label>Name</label><input required minlength="2"/></div>
      <div><label>Email</label><input type="email" required/></div>
      <div><label>Subject</label><input required/></div>
      <div><label>Message</label><textarea rows="5" required minlength="10"></textarea></div>
      <button class="btn primary">Send Message</button>
    </form>
  </section>`;
}

function viewFAQ() {
  return `
  <section class="section">
    <h2>Frequently Asked Questions</h2>
    <p class="sub">Answers to common questions.</p>
    <div style="margin-top:24px">
      ${FAQS.map(f => `<details class="faq-item"><summary>${f.q} <span>＋</span></summary><p>${f.a}</p></details>`).join("")}
    </div>
  </section>`;
}

function viewSettings() {
  const theme = document.documentElement.dataset.theme;
  return `
  <section class="section">
    <h2>Settings</h2>
    <p class="sub">Tune your experience.</p>
    <div class="card" style="margin-top:20px">
      <div class="row"><div><strong>Theme</strong><div class="muted">Currently: ${theme}</div></div><button class="btn" onclick="toggleTheme();render()">Toggle</button></div>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="row"><div><strong>Clear Cart</strong><div class="muted">${state.cart.length} item(s) in cart</div></div><button class="btn" onclick="state.cart=[];persist();updateCartUI();toast('Cart cleared');render()">Clear</button></div>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="row"><div><strong>Clear Wishlist</strong><div class="muted">${state.wishlist.length} item(s)</div></div><button class="btn" onclick="state.wishlist=[];persist();updateCartUI();toast('Wishlist cleared');render()">Clear</button></div>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="row"><div><strong>Reset All Data</strong><div class="muted">Removes cart, wishlist, orders, and account</div></div><button class="btn danger" onclick="if(confirm('Reset all data?')){localStorage.clear();location.reload()}">Reset</button></div>
    </div>
  </section>`;
}

/* ---------------- RENDER ---------------- */
const views = {
  home: viewHome, shop: viewShop, product: viewProduct, checkout: viewCheckout,
  account: viewAccount, dashboard: viewDashboard, wishlist: viewWishlist,
  about: viewAbout, contact: viewContact, faq: viewFAQ, settings: viewSettings, auth: viewAuth,
};

function render() {
  const fn = views[state.route] || viewHome;
  $("#app").innerHTML = fn();
  updateCartUI();
}

/* ---------------- THEME ---------------- */
function toggleTheme() {
  const cur = document.documentElement.dataset.theme;
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("gv_theme", next);
  $("#theme-toggle").textContent = next === "dark" ? "🌙" : "☀️";
}

/* ---------------- INIT ---------------- */
function init() {
  // theme
  const t = localStorage.getItem("gv_theme") || "dark";
  document.documentElement.dataset.theme = t;
  $("#theme-toggle").textContent = t === "dark" ? "🌙" : "☀️";
  $("#year").textContent = new Date().getFullYear();

  // splash
  setTimeout(() => $("#splash").classList.add("hide"), 800);
  setTimeout(() => $("#splash").remove(), 1500);

  // events
  document.body.addEventListener("click", e => {
    const r = e.target.closest("[data-route]");
    if (r) {
      e.preventDefault();
      const cat = r.dataset.cat;
      navigate(r.dataset.route, cat ? { category: cat } : {});
    }
  });
  $("#theme-toggle").onclick = toggleTheme;
  $("#cart-btn").onclick = openCart;
  $("#close-cart").onclick = closeCart;
  $("#overlay").onclick = closeCart;
  $("#go-checkout").onclick = () => { closeCart(); navigate("checkout"); };
  $("#menu-toggle").onclick = () => $("#nav-links").classList.toggle("open");

  $("#nav-search").addEventListener("input", e => {
    state.filters.search = e.target.value;
    if (state.route !== "shop") navigate("shop");
    else render();
  });

  $("#newsletter").addEventListener("submit", e => {
    e.preventDefault(); toast("Subscribed! Welcome 🎮"); e.target.reset();
  });

  // checkout form delegate
  document.body.addEventListener("submit", e => {
    if (e.target.id === "checkout-form") {
      e.preventDefault();
      const sub = cartTotal(); const ship = sub>99?0:9.99; const tax = sub*0.08;
      const order = {
        id: "GV" + Date.now().toString().slice(-7),
        date: Date.now(),
        items: [...state.cart],
        total: sub + ship + tax,
        status: "Processing",
        email: state.user ? state.user.email : "guest@gameverse.com",
      };
      state.orders.push(order);
      state.cart = [];
      persist(); updateCartUI();
      toast("Order placed! 🚀");
      $("#app").innerHTML = `<section class="section"><div class="card" style="text-align:center;padding:60px 20px"><h2>Thank you! 🎮</h2><p class="muted" style="margin:10px 0 6px">Order <strong>#${order.id}</strong> confirmed.</p><p class="muted">Total ${fmt(order.total)} · Status: ${order.status}</p><div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn primary" onclick="navigate('dashboard')">View Orders</button><button class="btn ghost" onclick="navigate('shop')">Continue Shopping</button></div></div></section>`;
    }
  });

  render();
}

// expose for inline handlers
Object.assign(window, { addToCart, removeFromCart, changeQty, toggleWish, navigate, switchTab, submitAuth, logout, toggleTheme, render, state });

document.addEventListener("DOMContentLoaded", init);
