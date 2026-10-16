/* Ananda Miners - website concept 2026. All machine figures are taken from anandaminers.com. */
const WA = '94773146495'; // replace with the company WhatsApp number
const EMAIL = 'info@anandaminers.com';

const MODELS = [
  { id: 'portable', name: 'Portable', code: 'P2406', type: 'Portable gem gravel washing plant with vibrating screen',
    m3: 8, tpd: 16, tph: 2, ft3: 283, h: '153 cm', l: '153 cm', w: '97 cm', hi: "5'", li: "5'", wi: "3' 2\"", kg: 150, lb: 331,
    water: '60 m³/h (1,000 L/min)', waterI: '265 US gal/min', engine: '3.7 kW (5.0 HP) / 3,600 rpm', fuel: '',
    pump: 'Kerosene engine pump, 3" suction / 2" delivery',
    acc: ['Water splitter: in 2", out 1" × 4'], addons: ['Custom colours'],
    img: 'm-portable-p6.jpg', photos: ['m-portable-p6', 'm-portable-p1', 'm-portable-p3', 'm-portable-p4', 'm-portable-p5', 'm-portable-p2', 'm-portable-portable'],
    blurb: 'Light and easy to move between pits. Ideal for test pits and small family mines.' },
  { id: 'small', name: 'Small', code: 'S2401', type: 'Small gem gravel washing plant with trommel, gravel bucket, gravel channel, sand channels and trommel tray',
    m3: 14, tpd: 28, tph: 3.5, ft3: 500, h: '122 cm', l: '196 cm', w: '56 cm', hi: "4'", li: "6' 5\"", wi: "1' 10\"", kg: 300, lb: 662,
    water: '60 m³/h (1,000 L/min)', waterI: '265 US gal/min', engine: '3.7 kW (5.0 HP) / 3,600 rpm', fuel: '',
    pump: 'Engine-driven water pump (see note 4)',
    acc: ['Water splitter: in 2", out 1" × 4', 'Gravel channel 244 × 18 × 13 cm', 'Gravel bucket 183 × 108 × 52 cm'], addons: ['Custom colours'],
    img: 'm-small-s3.jpg', photos: ['m-small-s3', 'm-small-s1', 'm-small-s2', 'm-small-s4', 'm-small-s5', 'm-small-s6', 'm-small-s7', 'm-small-s8', 'm-small-sskltn1'],
    blurb: 'A full trommel plant small enough to carry on the back of a pick-up truck.' },
  { id: 'medium', name: 'Medium', code: 'M2403', type: 'Medium gem gravel washing plant with trommel, gravel bucket, gravel channel, sand channels and trommel tray',
    m3: 70, tpd: 140, tph: 17.5, ft3: 2473, h: '171 cm', l: '290 cm', w: '115 cm', hi: "5' 7\"", li: "9' 6\"", wi: "3' 9\"", kg: 1180, lb: 2602,
    water: '100–120 m³/h (1,835–2,170 L/min)', waterI: '485–574 US gal/min', engine: 'R175 6.6 HP water-cooled 4-stroke diesel (4.5 kW)', fuel: 'About 5 L of diesel per day',
    pump: 'Diesel pump, 4" suction / 3" delivery',
    acc: ['Water splitter: in 3", out 1.5" × 2 and 1.25" × 4', 'Gravel channel 427 × 23 × 16 cm', 'Gravel bucket 366 × 183 × 122 cm'],
    addons: ['Custom colours', 'Construction sand separator', 'Black sand separator', 'Water pump kit with hoses and foot valve'],
    img: 'm-medium-m1.jpg', photos: ['m-medium-m1', 'm-medium-m2', 'm-medium-m3', 'm-medium-m4', 'm-medium-m6', 'm-medium-m7', 'm-medium-m9', 'm-medium-mskltn1'],
    blurb: 'The workhorse for established mines: five times the output of the Small plant.' },
  { id: 'large', name: 'Large', code: 'L2312', type: 'Large gem gravel washing plant with trommel, gravel bucket, gravel channel, sand channels and trommel tray',
    m3: 112, tpd: 224, tph: 28, ft3: 3956, h: '211 cm', l: '407 cm', w: '145 cm', hi: "6' 11\"", li: "13' 4\"", wi: "4' 9\"", kg: 2550, lb: 5622,
    water: '120–160 m³/h (2,000–2,667 L/min)', waterI: '529–705 US gal/min', engine: 'S1100 16 HP water-cooled 4-stroke diesel (11.5 kW)', fuel: 'About 6 L of diesel per day',
    pump: 'Diesel pump, 6" suction / 5" delivery',
    acc: ['Water splitter: in 4", out 1.5" × 7', 'Gravel channel 427 × 36 × 21 cm', 'Gravel bucket 488 × 122 × 244 cm'],
    addons: ['Custom colours', 'Construction sand separator', 'Water pump kit with hoses and foot valve'],
    img: 'm-large-l1.jpg', photos: ['m-large-l1', 'm-large-l2', 'm-large-l3', 'm-large-l4', 'm-large-l5', 'm-large-l6', 'm-large-l8', 'm-large-lskltn1'],
    blurb: 'Commercial-scale washing, built heavy and transportable by truck.' },
  { id: 'xl', name: 'XL', code: 'XL2310', type: 'Extra-large gem gravel washing plant with trommel, gravel bucket, gravel channel, sand channels and trommel tray',
    m3: 140, tpd: 280, tph: 35, ft3: 4945, h: 'Built to order', l: 'Built to order', w: 'Built to order', hi: 'Built to order', li: 'Built to order', wi: 'Built to order', kg: '3,500+', lb: '7,700+',
    water: '170–190 m³/h (2,834–3,167 L/min)', waterI: '749–837 US gal/min', engine: 'S1100 16 HP water-cooled 4-stroke diesel (11.5 kW)', fuel: 'About 6 L of diesel per day',
    pump: 'Sized to your site',
    acc: ['Water splitter sized to your pump', 'Gravel channel 427 × 36 × 21 cm', 'Gravel bucket: see custom options'],
    addons: ['Custom colours', 'Water pump kit with hoses and foot valve'],
    img: 'gem_gold_plant.jpg', photos: ['gem_gold_plant', 'm-xl-xlskltn1', 'gem_gold', 'portable_gem_gold'],
    blurb: 'Our biggest standard plant, for large sites and continuous operation.' }
];

const NAV = [['index.html', 'Home'], ['machines.html', 'Machines'], ['amg.html', 'AMG Faceting'], ['mining.html', 'Mining & Gems'], ['about.html', 'About'], ['contact.html', 'Contact']];
const here = (location.pathname.split('/').pop() || 'index.html');
const waLink = t => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t);
const waIcon = '<svg viewBox="0 0 32 32"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 1.9 6.8L3 29l6.8-2.1c1.9 1 4 1.6 6.2 1.6 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm5.8 15.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-1-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9 2.7 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/></svg>';

function chrome() {
  document.body.insertAdjacentHTML('afterbegin',
    '<div class="ribbon"><b>Website concept</b> by Yasitha Ishantha &middot; preview only, not the official Ananda Miners website</div>' +
    '<header class="nav" id="nav"><div class="wrap">' +
    '<a class="logo" href="index.html"><div class="logo-mark"><span>AM</span></div><div><b>Ananda Miners</b><small>Est. Sri Lanka &middot; ISO 9001</small></div></a>' +
    '<nav class="menu" id="menu">' + NAV.map(([h, t]) => '<a href="' + h + '"' + (h === here ? ' class="on"' : '') + '>' + t + '</a>').join('') + '</nav>' +
    '<div style="display:flex;gap:10px;align-items:center"><a class="btn btn-primary hide-m" href="contact.html">Get a quote</a><button class="burger" id="burger" aria-label="Menu">☰</button></div>' +
    '</div></header>');
  document.body.insertAdjacentHTML('beforeend',
    '<footer><div class="wrap"><div class="fgrid">' +
    '<div><a class="logo" href="index.html"><div class="logo-mark"><span>AM</span></div><div><b>Ananda Miners</b><small>Pokunuwita &middot; Sri Lanka</small></div></a>' +
    '<p style="margin-top:16px;max-width:36ch">Gem and gold washing machinery, AMG precision faceting machines, sapphire mining and gem trading, for over 35 years.</p>' +
    '<div class="badge-iso"><b>ISO 9001</b> certified company</div></div>' +
    '<div><h4>Machinery</h4><a href="machines.html#portable">Portable</a><a href="machines.html#small">Small</a><a href="machines.html#medium">Medium</a><a href="machines.html#large">Large</a><a href="machines.html#xl">XL</a><a href="machines.html#custom">Custom plants</a></div>' +
    '<div><h4>Company</h4><a href="amg.html">AMG Faceting</a><a href="mining.html">Mining &amp; Gems</a><a href="about.html">About us</a><a href="contact.html">Contact</a><a href="https://www.youtube.com/user/AnandaMiners" target="_blank" rel="noopener">YouTube</a><a href="https://www.facebook.com/AnandaMiners/" target="_blank" rel="noopener">Facebook</a></div>' +
    '<div><h4>Visit or call</h4><p>239/2 Henegama, Pokunuwita 12404, Sri Lanka</p><a href="tel:+94342265088">+94 34 226 5088</a><a href="mailto:' + EMAIL + '">' + EMAIL + '</a><a href="' + waLink('Hello Ananda Miners,') + '" target="_blank" rel="noopener">WhatsApp us</a></div>' +
    '</div><div class="fbottom"><span>© ' + new Date().getFullYear() + ' Ananda Miners (Pvt) Ltd. All rights reserved.</span><span>Concept design by Yasitha Ishantha &middot; 072 161 9939</span></div></div></footer>' +
    '<a class="fab" href="' + waLink('Hello Ananda Miners, I would like some information.') + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + waIcon + '</a>' +
    '<div class="mbar"><a class="btn btn-ghost" href="tel:+94342265088">Call</a><a class="btn btn-wa" href="' + waLink('Hello Ananda Miners,') + '" target="_blank" rel="noopener">WhatsApp</a></div>' +
    '<div class="lb" id="lb"><button aria-label="Close">✕</button><img alt=""></div>');
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 30);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });
  document.getElementById('burger').onclick = () => document.getElementById('menu').classList.toggle('open');
}

function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; co.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now();
    const tick = t => { const p = Math.min(1, (t - t0) / 1600), v = Math.round(to * (1 - Math.pow(1 - p, 3))); el.textContent = v.toLocaleString() + suf; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => co.observe(el));
}

function videos() {
  document.querySelectorAll('.vid[data-yt]').forEach(v => v.addEventListener('click', () => {
    v.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.dataset.yt + '?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Video"></iframe>';
  }, { once: true }));
}

function lightbox() {
  const lb = document.getElementById('lb'); if (!lb) return;
  const img = lb.querySelector('img');
  document.addEventListener('click', e => { const a = e.target.closest('[data-lb]'); if (!a) return; e.preventDefault(); img.src = a.getAttribute('href'); lb.classList.add('open'); });
  lb.addEventListener('click', e => { if (e.target !== img) lb.classList.remove('open'); });
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
}

/* capacity finder: recommends a standard plant, or a parallel-jig setup above 140 m3/day */
function finder() {
  const box = document.getElementById('finder'); if (!box) return;
  const r = box.querySelector('input[type=range]'), out = box.querySelector('.range-out'), res = box.querySelector('.result'), pic = box.querySelector('.r img');
  let unit = 'm3';
  box.querySelectorAll('.seg button').forEach(b => b.onclick = () => { box.querySelectorAll('.seg button').forEach(x => x.classList.remove('on')); b.classList.add('on'); unit = b.dataset.u; draw(); });
  function draw() {
    const v = +r.value; r.style.setProperty('--p', ((v - r.min) / (r.max - r.min) * 100) + '%');
    out.innerHTML = unit === 'm3' ? v + '<small>m³ of gravel per day</small>' : Math.round(v * 2) + '<small>tonnes per day</small>';
    let m = MODELS.find(x => x.m3 >= v), units = 1;
    if (!m) { m = MODELS[4]; units = Math.ceil(v / m.m3); }
    const name = units > 1 ? units + ' × XL plants in a parallel jig setup' : m.name + ' plant';
    res.innerHTML = '<div class="k">Recommended for you</div><h4>' + name + '</h4>' +
      '<ul><li>Model <b>' + m.code + '</b></li><li>Capacity <b>' + (m.m3 * units) + ' m³/day</b></li><li>Throughput <b>' + (m.tph * units) + ' t/hour</b></li><li>Water <b>' + m.water.split(' (')[0] + (units > 1 ? ' each' : '') + '</b></li></ul>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px"><a class="btn btn-primary" href="machines.html#' + m.id + '">See full specs</a><a class="btn btn-ghost" target="_blank" rel="noopener" href="' + waLink('Hello Ananda Miners, I wash about ' + v + ' m³ of gravel per day. Please send me a price for the ' + name + '.') + '">Ask for a price</a></div>';
    const src = 'img/' + m.img; if (!pic.src.endsWith(src)) { pic.style.opacity = 0; setTimeout(() => { pic.src = src; pic.style.opacity = 1; }, 250); }
  }
  r.addEventListener('input', draw); draw();
}

/* machines page: tabs, gallery, metric/imperial */
function machines() {
  const host = document.getElementById('models'); if (!host) return;
  let unit = 'metric', cur = MODELS.find(m => '#' + m.id === location.hash) || MODELS[2];
  const tabs = document.getElementById('tabs');
  tabs.innerHTML = MODELS.map(m => '<button data-id="' + m.id + '">' + m.name + ' <span style="opacity:.55;font-weight:500">' + m.code + '</span></button>').join('');
  tabs.onclick = e => { const b = e.target.closest('button'); if (!b) return; cur = MODELS.find(m => m.id === b.dataset.id); history.replaceState(null, '', '#' + cur.id); draw(); };
  document.querySelectorAll('#units button').forEach(b => b.onclick = () => { document.querySelectorAll('#units button').forEach(x => x.classList.remove('on')); b.classList.add('on'); unit = b.dataset.u; draw(); compare(); });
  function draw() {
    tabs.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === cur.id));
    const m = cur, met = unit === 'metric';
    const rows = [
      ['Model number', m.code],
      ['Washing capacity', met ? m.m3 + ' m³ per day' : m.ft3.toLocaleString() + ' ft³ per day'],
      ['Throughput', m.tpd + ' tonnes/day · ' + m.tph + ' t/hour'],
      ['Size (H × L × W)', met ? [m.h, m.l, m.w].join(' × ') : [m.hi, m.li, m.wi].join(' × ')],
      ['Weight', met ? m.kg.toLocaleString() + ' kg' : m.lb.toLocaleString() + ' lb'],
      ['Water supply', met ? m.water : m.waterI],
      ['Engine', m.engine]
    ];
    if (m.fuel) rows.push(['Fuel use', m.fuel]);
    rows.push(['Recommended pump', m.pump], ['Included', m.acc.join('<br>')], ['Add-ons', m.addons.join(' · ')]);
    host.innerHTML = '<div class="model-view">' +
      '<div class="gallery"><div class="main"><img id="gmain" src="img/' + m.photos[0] + '.jpg" alt="' + m.name + ' gem and gold washing plant"></div>' +
      '<div class="thumbs">' + m.photos.map((p, i) => '<button' + (i ? '' : ' class="on"') + ' data-src="img/' + p + '.jpg"><img loading="lazy" src="img/' + p + '.jpg" alt=""></button>').join('') + '</div></div>' +
      '<div class="spec"><div class="top"><div><span class="tag">' + m.code + '</span><h3 style="margin-top:10px">' + m.name + ' washing plant</h3><p>' + m.blurb + '</p></div>' +
      '<div style="text-align:right"><div class="big-num">' + m.m3 + '</div><small style="color:var(--muted)">m³ / day</small></div></div>' +
      '<dl>' + rows.map(r => '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>').join('') + '</dl>' +
      '<div class="acts"><a class="btn btn-primary" target="_blank" rel="noopener" href="' + waLink('Hello Ananda Miners, please send me the price and delivery time for the ' + m.name + ' plant (' + m.code + ').') + '">Get price on WhatsApp</a><a class="btn btn-ghost" href="contact.html?machine=' + m.id + '">Request a quotation</a></div></div></div>';
    host.querySelector('.thumbs').onclick = e => { const b = e.target.closest('button'); if (!b) return; host.querySelectorAll('.thumbs button').forEach(x => x.classList.remove('on')); b.classList.add('on'); document.getElementById('gmain').src = b.dataset.src; };
  }
  function compare() {
    const t = document.getElementById('compare'); if (!t) return; const met = unit === 'metric';
    const row = (label, f) => '<tr><td>' + label + '</td>' + MODELS.map(m => '<td>' + f(m) + '</td>').join('') + '</tr>';
    t.innerHTML = '<thead><tr><th></th>' + MODELS.map(m => '<th>' + m.name + '<br><span style="color:var(--muted);font-weight:500;font-size:13px">' + m.code + '</span></th>').join('') + '</tr></thead><tbody>' +
      row('Capacity', m => met ? m.m3 + ' m³/day' : m.ft3.toLocaleString() + ' ft³/day') + row('Throughput', m => m.tph + ' t/hour') +
      row('Weight', m => met ? m.kg.toLocaleString() + ' kg' : m.lb.toLocaleString() + ' lb') + row('Water', m => (met ? m.water : m.waterI).split(' (')[0]) +
      row('Engine', m => m.engine.split(' (')[0].replace(' water-cooled 4-stroke', '')) + row('Trommel', m => m.id === 'portable' ? 'Vibrating screen' : 'Yes') + '</tbody>';
  }
  addEventListener('hashchange', () => { const m = MODELS.find(x => '#' + x.id === location.hash); if (m) { cur = m; draw(); } });
  draw(); compare();
}

/* contact form -> WhatsApp or email */
function quote() {
  const f = document.getElementById('quote'); if (!f) return;
  const q = new URLSearchParams(location.search).get('machine');
  if (q) { const s = f.querySelector('[name=interest]'); const m = MODELS.find(x => x.id === q); if (m) s.value = m.name + ' washing plant'; }
  const text = () => { const d = new FormData(f); return 'Quotation request\n' + ['name', 'company', 'country', 'phone', 'email', 'interest', 'volume', 'water'].map(k => k[0].toUpperCase() + k.slice(1) + ': ' + (d.get(k) || '-')).join('\n') + '\nMinerals: ' + (d.getAll('mineral').join(', ') || '-') + '\n\n' + (d.get('msg') || ''); };
  f.onsubmit = e => { e.preventDefault(); open(waLink(text()), '_blank'); };
  document.getElementById('byMail').onclick = () => { location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Quotation request') + '&body=' + encodeURIComponent(text()); };
}

chrome(); reveal(); videos(); lightbox(); finder(); machines(); quote();
document.querySelectorAll('[data-wa]').forEach(a => { a.href = waLink(a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; });
