
/* ================================================
   KONFIGURASI — EDIT DI SINI
   ================================================ */

/* ── Link tujuan tombol "Main Sekarang" ── */
const APJ_PLAY_URL = "/register";

/* ── Gambar AI Cards ── */
const APJ_CARDS = [
  {
    key: "apj_winrate",
    title: "AI Win x2",
    img: "https://picx.space/images/2026/03/22/My-Video.gif"
  },
  {
    key: "apj_mahjong",
    title: "AI Pro PG SOFT",
    img: "https://picx.space/images/2026/03/22/My-Video.gif"
  },
  {
    key: "apj_pragmatic",
    title: "AI Pro PragPlay",
    img: "https://picx.space/images/2026/03/22/My-Video.gif"
  }
];

/* ── Rule ganti gambar saat AI ON ── */
const APJ_AI_CONFIG = {
  ai1: {
    name: "Scatter Naga Mas X1000",
    sub: "Mahjong Ways",
    rules: [["pgsoft%2F65.png", "https://picx.space/images/2026/03/22/My-Video.gif"]]
  },
  ai2: {
    name: "Scatter Naga Mas X1000",
    sub: "Mahjong Ways 2",
    rules: [["pgsoft%2F74.png", "https://picx.space/images/2026/03/22/My-Video.gif"]]
  }
};

/* ── Delay loading bar AI Cards (ms) ── */
const APJ_CONNECT_DELAY = 7000;

/* ── Storage keys ── */
const APJ_KEY_SERVER  = "apijaya_server_v1";
const APJ_KEY_CARDS   = "apijaya_cards_v1";
const APJ_KEY_SCATTER = "apijaya_scatter_v1";

/* ================================================
   JANGAN EDIT DI BAWAH INI
   ================================================ */

/* ── State scatter ── */
function apjGetScatter(){try{return JSON.parse(localStorage.getItem(APJ_KEY_SCATTER))||{};}catch{return{};}}
function apjSetScatter(k,v){const s=apjGetScatter();s[k]=v;localStorage.setItem(APJ_KEY_SCATTER,JSON.stringify(s));}

/* ── CSS ── */
if(!document.getElementById("apijaya-css")){
  const st=document.createElement("style");
  st.id="apijaya-css";
  st.textContent=`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap');

/* ── TAB ── */
#apj-tab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:99999;cursor:pointer;}
#apj-tab-inner{
  background:#0e0e0e;border:1px solid rgba(230,170,0,.5);border-right:none;
  border-radius:10px 0 0 10px;padding:14px 6px 10px;
  display:flex;flex-direction:column;align-items:center;gap:10px;position:relative;
  animation:apjTabGlow 3s ease-in-out infinite;
}
@keyframes apjTabGlow{
  0%,100%{box-shadow:-4px 0 16px rgba(230,170,0,.18)}
  50%{box-shadow:-4px 0 28px rgba(230,170,0,.45)}
}
#apj-tab-inner::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,rgba(230,170,0,.8),transparent);
  border-radius:10px 0 0 0;
}
#apj-tab-fire{font-size:13px;line-height:1;filter:drop-shadow(0 0 5px #e6aa00)}
#apj-tab-letters{display:flex;flex-direction:column;align-items:center;gap:1px;}
#apj-tab-letters span{
  font-family:'Oswald',sans-serif;font-weight:700;font-size:9.5px;
  color:#e6aa00;line-height:1.2;text-transform:uppercase;
  text-shadow:0 0 8px rgba(230,170,0,.7);
}
#apj-tab-line{width:1px;height:14px;background:linear-gradient(180deg,rgba(230,170,0,.6),transparent);}

/* ── PANEL ── */
#apj-panel{
  position:fixed;right:-320px;top:50%;transform:translateY(-50%);
  width:305px;z-index:100000;
  transition:right .38s cubic-bezier(.22,1,.36,1);
  max-height:90vh;
}
#apj-panel.open{right:0}
#apj-panel-inner{
  background:#080808;border:1px solid rgba(230,170,0,.22);border-right:none;
  border-radius:16px 0 0 16px;overflow:hidden;overflow-y:auto;max-height:90vh;
  box-shadow:-8px 0 40px rgba(0,0,0,.9),-2px 0 20px rgba(230,170,0,.07);
}

/* ── HEADER PANEL ── */
#apj-head{
  padding:15px 17px 13px;background:#0e0e0e;
  border-bottom:1px solid rgba(230,170,0,.09);position:relative;
}
#apj-head::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,#e6aa00,#ff6b00,#e6aa00);
}
#apj-head-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;}
#apj-brand{
  font-family:'Oswald',sans-serif;font-weight:700;font-size:20px;
  color:#fff;letter-spacing:1px;text-transform:uppercase;
}
#apj-brand em{font-style:normal;color:#e6aa00;text-shadow:0 0 12px rgba(230,170,0,.6);}
#apj-close-btn{
  width:24px;height:24px;cursor:pointer;
  border:1px solid rgba(255,255,255,.1);border-radius:6px;
  background:rgba(255,255,255,.04);color:rgba(255,255,255,.35);
  font-size:11px;display:flex;align-items:center;justify-content:center;
  transition:all .15s;flex-shrink:0;
}
#apj-close-btn:hover{background:rgba(255,255,255,.09);color:#fff}
#apj-tagline{
  font-family:'DM Mono',monospace;font-size:9px;
  color:rgba(230,170,0,.4);letter-spacing:2px;text-transform:uppercase;
}

/* ── BODY PANEL ── */
#apj-body{padding:13px 15px;display:flex;flex-direction:column;gap:10px;}

/* ── SERVER BOX ── */
.apj-server-box{
  background:#0e0e0e;border:1px solid rgba(230,170,0,.18);
  border-radius:10px;padding:12px 13px;
}
.apj-server-label{
  font-family:'Oswald',sans-serif;font-weight:700;font-size:10px;
  color:rgba(230,170,0,.45);letter-spacing:2px;text-transform:uppercase;margin-bottom:9px;
}
.apj-server-row{display:flex;align-items:center;gap:8px;}
.apj-flag{
  width:24px;height:18px;border-radius:2px;border:1px solid rgba(255,255,255,.1);
  object-fit:cover;display:none;flex-shrink:0;
}
#apj-server-select{
  flex:1;background:#141414;border:1px solid rgba(255,255,255,.08);
  color:#ccc;padding:8px 10px;border-radius:8px;font-size:12px;
  outline:none;font-family:sans-serif;
}
.apj-scan-btn{
  background:linear-gradient(135deg,#e6aa00,#ff6b00);border:none;
  color:#000;padding:8px 14px;border-radius:8px;
  font-family:'Oswald',sans-serif;font-weight:700;font-size:12px;
  letter-spacing:.5px;cursor:pointer;flex-shrink:0;
}

/* ── DIVIDER ── */
.apj-divider{
  height:1px;background:rgba(255,255,255,.05);margin:0;
}

/* ── AI SCATTER ROWS ── */
.apj-scatter-row{
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  padding:11px 13px;background:rgba(255,255,255,.02);
  border-radius:10px;border:1px solid rgba(255,255,255,.05);
  cursor:pointer;transition:background .2s,border-color .2s;
  position:relative;overflow:hidden;
}
.apj-scatter-row::after{
  content:'';position:absolute;left:0;top:0;bottom:0;width:2px;
  background:linear-gradient(180deg,#e6aa00,#ff6b00);
  opacity:0;transition:opacity .25s;
}
.apj-scatter-row:hover{background:rgba(230,170,0,.04);border-color:rgba(230,170,0,.12);}
.apj-scatter-row.on{background:rgba(230,170,0,.05);border-color:rgba(230,170,0,.2);}
.apj-scatter-row.on::after{opacity:1}
.apj-scatter-left{min-width:0;flex:1}
.apj-scatter-name{
  font-family:'Oswald',sans-serif;font-weight:500;font-size:13px;
  color:#b0b0b0;letter-spacing:.5px;text-transform:uppercase;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .2s;
}
.apj-scatter-row.on .apj-scatter-name{color:#efefef}
.apj-scatter-sub{
  font-family:'DM Mono',monospace;font-size:8.5px;
  color:rgba(255,255,255,.2);letter-spacing:1.2px;
  margin-top:2px;text-transform:uppercase;transition:color .2s;
}
.apj-scatter-row.on .apj-scatter-sub{color:rgba(230,170,0,.45)}
.apj-pwr{
  flex-shrink:0;width:32px;height:32px;border-radius:50%;
  border:1.5px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);
  display:flex;align-items:center;justify-content:center;transition:all .22s;
}
.apj-pwr svg{width:13px;height:13px;}
.apj-scatter-row.on .apj-pwr{
  border-color:#e6aa00;background:rgba(230,170,0,.1);
  box-shadow:0 0 12px rgba(230,170,0,.28),inset 0 0 6px rgba(230,170,0,.06);
}

/* ── AI CARDS GRID ── */
.apj-cards-wrap{display:flex;flex-direction:column;gap:8px;}
.apj-cards-title{
  font-family:'DM Mono',monospace;font-size:9px;
  color:rgba(230,170,0,.4);letter-spacing:2px;text-transform:uppercase;
}
.apj-cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.apj-card{
  background:#0e0e0e;border:1px solid rgba(255,255,255,.07);
  border-radius:10px;padding:9px 7px;text-align:center;
}
.apj-card-img{
  width:100%;aspect-ratio:1;object-fit:contain;border-radius:7px;
  background:#111;margin-bottom:6px;
}
.apj-card-title{
  font-family:'Oswald',sans-serif;font-size:10px;
  color:#aaa;margin-bottom:7px;letter-spacing:.5px;text-transform:uppercase;
  line-height:1.3;
}
.apj-toggle-btn{
  width:100%;padding:6px;border-radius:6px;border:none;
  font-family:'Oswald',sans-serif;font-weight:700;font-size:11px;
  cursor:pointer;transition:all .2s;
}
.apj-toggle-btn.off{
  background:rgba(255,255,255,.06);color:rgba(255,255,255,.3);
  border:1px solid rgba(255,255,255,.1)!important;
}
.apj-toggle-btn.on{background:linear-gradient(135deg,#e6aa00,#ff6b00);color:#000;}
.apj-toggle-btn:disabled{opacity:.6;cursor:not-allowed;}
.apj-status-row{display:flex;align-items:center;justify-content:center;gap:5px;margin-top:6px;}
.apj-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.15);flex-shrink:0;}
.apj-dot.on{background:#e6aa00;box-shadow:0 0 6px rgba(230,170,0,.5);animation:apjBlink 1.2s ease-in-out infinite;}
.apj-dot.loading{background:#f59e0b;animation:apjBlink .6s ease-in-out infinite;}
@keyframes apjBlink{0%,100%{opacity:1}50%{opacity:.25}}
.apj-pill{
  font-family:'DM Mono',monospace;font-size:9px;padding:2px 7px;
  border-radius:999px;position:relative;overflow:hidden;
}
.apj-pill.on{background:rgba(230,170,0,.12);color:#e6aa00;border:1px solid rgba(230,170,0,.25);}
.apj-pill.off{background:rgba(255,255,255,.05);color:rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.07);}
.apj-pill.loading{background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.2);}
.apj-pill-track{position:absolute;inset:0;opacity:.3;}
.apj-pill-fill{height:100%;background:#f59e0b;}

/* ── FOOTER PANEL ── */
#apj-foot{
  padding:9px 15px;border-top:1px solid rgba(255,255,255,.04);
  display:flex;align-items:center;justify-content:space-between;
}
#apj-foot-sig{display:flex;align-items:center;gap:6px;}
#apj-status-dot{
  width:6px;height:6px;border-radius:50%;
  background:rgba(255,255,255,.12);transition:all .3s;
}
#apj-status-dot.on{
  background:#e6aa00;box-shadow:0 0 8px rgba(230,170,0,.5);
  animation:apjBlink 1.2s ease-in-out infinite;
}
#apj-status-txt{
  font-family:'DM Mono',monospace;font-size:9px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.18);transition:color .3s;
}
#apj-status-txt.on{color:#e6aa00}
#apj-wm{font-family:'DM Mono',monospace;font-size:8px;color:rgba(255,255,255,.09);letter-spacing:.5px;}
#apj-wm b{color:rgba(230,170,0,.25)}

/* ── SCAN OVERLAY ── */
#apj-scan-overlay{
  position:fixed;inset:0;background:rgba(4,8,15,.9);
  z-index:999999;display:none;
  align-items:center;justify-content:center;backdrop-filter:blur(3px);
}
.apj-scan-wrap{
  background:#0b0b0b;border:1px solid rgba(230,170,0,.2);
  border-radius:16px;padding:22px 20px;
  width:min(310px,92vw);position:relative;
  max-height:90vh;overflow-y:auto;text-align:center;
}
.apj-scan-close{
  position:absolute;top:12px;right:12px;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
  border-radius:6px;color:#e6aa00;font-size:13px;cursor:pointer;
  width:26px;height:26px;display:flex;align-items:center;justify-content:center;
}
.apj-radar-wrap{width:80px;height:80px;margin:0 auto 14px;position:relative;}
.apj-radar-bg{
  width:80px;height:80px;border-radius:50%;position:absolute;
  border:1.5px solid rgba(230,170,0,.2);
  background:radial-gradient(circle,rgba(230,170,0,.05),transparent 70%);
}
.apj-radar-bg::before,.apj-radar-bg::after{
  content:'';position:absolute;border-radius:50%;border:1px solid rgba(230,170,0,.1);
}
.apj-radar-bg::before{inset:15px;}
.apj-radar-bg::after{inset:30px;}
.apj-radar-sweep{
  width:80px;height:80px;border-radius:50%;position:absolute;
  background:conic-gradient(from 0deg,transparent 75%,rgba(230,170,0,.4) 100%);
  animation:apjSweep 2s linear infinite;
}
@keyframes apjSweep{to{transform:rotate(360deg)}}
.apj-scan-status{
  font-family:'DM Mono',monospace;font-size:11px;
  color:rgba(255,255,255,.6);margin-bottom:6px;
}
.apj-scan-progress{background:rgba(255,255,255,.07);border-radius:999px;height:5px;overflow:hidden;}
.apj-scan-fill{height:100%;background:linear-gradient(90deg,#e6aa00,#ff6b00);border-radius:999px;width:0;transition:width .3s;}
.apj-scan-hint{
  font-family:'DM Mono',monospace;font-size:10px;
  color:rgba(255,255,255,.35);margin-top:5px;margin-bottom:10px;
}
.apj-result-card{
  background:rgba(255,255,255,.03);border:1px solid rgba(230,170,0,.12);
  border-radius:10px;padding:11px 13px;
  display:flex;align-items:center;justify-content:space-between;margin:10px 0 8px;
}
.apj-result-left{display:flex;align-items:center;gap:10px;}
.apj-result-ico{
  width:30px;height:30px;background:rgba(230,170,0,.1);
  border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;
}
.apj-result-t1{font-family:'Oswald',sans-serif;font-weight:600;font-size:13px;color:#fff;}
.apj-result-t2{font-family:'DM Mono',monospace;font-size:10px;color:rgba(230,170,0,.5);}
.apj-gauge-val{font-family:'Oswald',sans-serif;font-weight:700;font-size:22px;color:#e6aa00;}
.apj-gauge-sub{font-size:10px;color:rgba(255,255,255,.3);}
.apj-online-wrap{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:10px;}
.apj-chip{
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);
  border-radius:999px;padding:4px 10px;
  font-family:'DM Mono',monospace;font-size:10px;color:#aaa;
}
.apj-chip.green{border-color:rgba(230,170,0,.3);color:#e6aa00;}
.apj-chip.amber{border-color:rgba(255,107,0,.3);color:#ff6b00;}
.apj-chip.red{border-color:rgba(239,68,68,.3);color:#ef4444;}
.apj-online-bar{width:100%;height:4px;background:rgba(255,255,255,.07);border-radius:999px;overflow:hidden;}
.apj-online-bar-fill{height:100%;background:linear-gradient(90deg,#e6aa00,#ff6b00);border-radius:999px;width:0%;}
.apj-online-caption{font-family:'DM Mono',monospace;font-size:9px;color:rgba(255,255,255,.3);margin-top:3px;}
.apj-scan-actions{display:flex;flex-direction:column;gap:7px;margin-top:12px;}
.apj-btn-play{
  padding:10px;border-radius:8px;border:none;
  font-family:'Oswald',sans-serif;font-weight:700;font-size:13px;
  letter-spacing:.5px;cursor:pointer;
  background:linear-gradient(135deg,#e6aa00,#ff6b00);color:#000;
}
.apj-btn-repick{
  padding:10px;border-radius:8px;cursor:pointer;
  font-family:'Oswald',sans-serif;font-weight:700;font-size:13px;
  letter-spacing:.5px;
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#fff;
}
.apj-scan-tip{font-size:10px;color:rgba(255,255,255,.2);margin-top:10px;font-family:'DM Mono',monospace;}

/* ── TOAST ── */
#apj-toast{
  position:fixed;bottom:22px;right:14px;
  background:#0d0d0d;border:1px solid rgba(230,170,0,.2);
  padding:9px 14px;border-radius:9px;
  font-family:'DM Mono',monospace;font-size:10.5px;
  color:rgba(255,255,255,.75);letter-spacing:.4px;
  z-index:100002;opacity:0;pointer-events:none;
  transform:translateY(8px);
  transition:all .28s cubic-bezier(.22,1,.36,1);
  max-width:220px;line-height:1.5;
}
#apj-toast.show{opacity:1;transform:translateY(0)}
`;
  document.head.appendChild(st);
}

/* ================================================
   INJECT UI
   ================================================ */
function apjInjectUI(){
  if(document.getElementById("apj-tab")) return;

  const letters = "SUPER AI".split("").map(c =>
    c === " " ? '<span style="height:4px;display:block"></span>' : `<span>${c}</span>`
  ).join("");

  const scatterRows = Object.keys(APJ_AI_CONFIG).map(k => `
    <div class="apj-scatter-row" data-scatter="${k}">
      <div class="apj-scatter-left">
        <div class="apj-scatter-name">${APJ_AI_CONFIG[k].name}</div>
        <div class="apj-scatter-sub">${APJ_AI_CONFIG[k].sub}</div>
      </div>
      <div class="apj-pwr">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v6" stroke="rgba(255,255,255,.35)" class="apj-arc-v"/>
          <path d="M5.6 5.6A9 9 0 1 0 18.4 5.6" stroke="rgba(255,255,255,.35)" class="apj-arc-c"/>
        </svg>
      </div>
    </div>`).join("");

  const cardItems = APJ_CARDS.map(c => `
    <div class="apj-card" data-card="${c.key}">
      <img class="apj-card-img" src="${c.img}" alt="${c.title}">
      <div class="apj-card-title">${c.title}</div>
      <div>
        <button class="apj-toggle-btn off" type="button">OFF</button>
      </div>
      <div class="apj-status-row">
        <span class="apj-dot off"></span>
        <span class="apj-pill off"><span class="apj-pill-text">Mati</span></span>
      </div>
    </div>`).join("");

  document.body.insertAdjacentHTML("beforeend", `
<div id="apj-tab">
  <div id="apj-tab-inner">
    <div id="apj-tab-fire">&#128293;</div>
    <div id="apj-tab-letters">${letters}</div>
    <div id="apj-tab-line"></div>
  </div>
</div>

<div id="apj-panel">
  <div id="apj-panel-inner">

    <div id="apj-head">
      <div id="apj-head-row">
        <div id="apj-brand">API<em>JAYA</em></div>
        <div id="apj-close-btn">&#10005;</div>
      </div>
      <div id="apj-tagline">// super ai scatter engine</div>
    </div>

    <div id="apj-body">

      <div class="apj-server-box">
        <div class="apj-server-label">Pilih Server Gacor</div>
        <div class="apj-server-row">
          <img class="apj-flag" id="apj-flag" alt="flag"/>
          <select id="apj-server-select">
            <option value="" selected disabled>Pilih Server</option>
            <option value="id">Server Indonesia</option>
            <option value="th">Server Thailand</option>
            <option value="jp">Server Jepang</option>
            <option value="sg">Server Singapura</option>
            <option value="hk">Server Hong Kong</option>
            <option value="kh">Server Kamboja</option>
            <option value="int">Server Internasional</option>
          </select>
          <button class="apj-scan-btn" id="apj-scan-btn">Scan</button>
        </div>
      </div>

      <div class="apj-divider"></div>

      ${scatterRows}

      <div class="apj-divider"></div>

      <div class="apj-cards-wrap">
        <div class="apj-cards-title">AI Booster</div>
        <div class="apj-cards-grid">${cardItems}</div>
      </div>

    </div>

    <div id="apj-foot">
      <div id="apj-foot-sig">
        <div id="apj-status-dot"></div>
        <div id="apj-status-txt">IDLE</div>
      </div>
      <div id="apj-wm"><b>APJ</b> &bull; AI ENGINE</div>
    </div>

  </div>
</div>

<div id="apj-scan-overlay">
  <div class="apj-scan-wrap">
    <button class="apj-scan-close" id="apj-scan-close">&#10005;</button>
    <div class="apj-radar-wrap"><div class="apj-radar-bg"></div><div class="apj-radar-sweep"></div></div>
    <div class="apj-scan-status" id="apj-scan-status">Menyiapkan scanner...</div>
    <div class="apj-scan-progress"><div class="apj-scan-fill" id="apj-scan-fill"></div></div>
    <div class="apj-scan-hint" id="apj-scan-hint">Menginisialisasi koneksi aman (TLS)...</div>
    <div id="apj-scan-result" style="display:none">
      <div class="apj-result-card">
        <div class="apj-result-left">
          <div class="apj-result-ico">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#e6aa00"/>
            </svg>
          </div>
          <div>
            <div class="apj-result-t1" id="apj-result-title">Tersambung</div>
            <div class="apj-result-t2" id="apj-result-sub">Ping ms</div>
          </div>
        </div>
        <div>
          <div class="apj-gauge-val" id="apj-ms">0</div>
          <div class="apj-gauge-sub">ms</div>
        </div>
      </div>
      <div class="apj-online-wrap">
        <div class="apj-chip" id="apj-ping-chip">- ms</div>
        <div class="apj-chip" id="apj-online-chip">- online</div>
        <div class="apj-online-bar"><div class="apj-online-bar-fill" id="apj-online-fill"></div></div>
        <div class="apj-online-caption" id="apj-online-caption"></div>
      </div>
    </div>
    <div class="apj-scan-actions" id="apj-scan-actions">
      <button class="apj-btn-play" id="apj-btn-play">Main Sekarang</button>
      <button class="apj-btn-repick" id="apj-btn-repick">Pilih Server Ulang</button>
    </div>
    <div class="apj-scan-tip">Tap di luar untuk menutup</div>
  </div>
</div>

<div id="apj-toast"></div>
`);

  apjBindUI();
  apjSyncAll();
}

/* ================================================
   TOAST
   ================================================ */
function apjToast(msg){
  const t=document.getElementById("apj-toast");
  if(!t) return;
  t.textContent=msg; t.classList.add("show");
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove("show"),2500);
}

/* ================================================
   SERVER — PING & ONLINE SIMULATION
   ================================================ */
const APJ_SERVER_NAME = {
  id:"Server Indonesia", th:"Server Thailand", jp:"Server Jepang",
  int:"Server Internasional", sg:"Server Singapura", hk:"Server Hong Kong", kh:"Server Kamboja"
};
const APJ_FLAG_URL = (c) => c==="int"
  ? 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18"><rect width="24" height="18" rx="2" fill="#0e0e0e"/><circle cx="12" cy="9" r="7.2" fill="#e6aa00" stroke="#fff3cc" stroke-width="1.4"/><path d="M4.8 9h14.4M12 1.8c2 2.1 3 4.7 3 7.2s-1 5.1-3 7.2M12 1.8C10 3.9 9 6.5 9 9s1 5.1 3 7.2" stroke="#fff" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>')
  : `https://flagcdn.com/24x18/${c}.png`;

const APJ_PING_CFG = {
  id:{min:10,max:50,cls:"green"}, th:{min:70,max:102,cls:"amber"},
  jp:{min:100,max:150,cls:"red"}, int:{min:140,max:220,cls:"amber"},
  sg:{min:20,max:60,cls:"green"}, hk:{min:60,max:110,cls:"amber"}, kh:{min:8,max:40,cls:"green"}
};
const APJ_CAPACITY = {id:4000,th:2000,jp:1000,int:6000,sg:3500,hk:2500,kh:3000};

const apjHash=(s)=>{let h=2166136261>>>0;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;};
const apjMul32=(a)=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t^=t+Math.imul(t^t>>>7,61|t);return((t^(t>>>14))>>>0)/4294967296;};
const apjRnd=(seed)=>apjMul32(seed)();
const apjSlot=()=>Math.floor(Date.now()/(15*60*1000));

function apjComputePing(key){
  const c=APJ_PING_CFG[key]||{min:30,max:90,cls:"amber"};
  return{ms:Math.round(c.min+apjRnd(apjHash(key+":"+apjSlot()))*(c.max-c.min)),cls:c.cls,range:[c.min,c.max]};
}
function apjComputeOnline(key,ping,range){
  const cap=APJ_CAPACITY[key]||2000;
  const OCC=({id:[0.2,0.45],th:[0.55,0.85],jp:[0.75,0.95],int:[0.5,0.9],sg:[0.3,0.65],hk:[0.45,0.8],kh:[0.25,0.55]})[key]||[0.35,0.8];
  const norm=Math.max(0,Math.min(1,(ping-range[0])/(range[1]-range[0])));
  const base=OCC[0]+norm*(OCC[1]-OCC[0]);
  const jitter=(apjRnd(apjHash("on:"+key+":"+apjSlot()))-.5)*.06;
  const occ=Math.max(.05,Math.min(.98,base+jitter));
  return{online:Math.max(1,Math.round(cap*occ)),cap,pct:Math.round(occ*100),occ};
}

function apjRunProgress(key, done){
  const hints=[
    "Menginisialisasi koneksi aman (TLS)...",
    "Mengukur latensi & packet loss...",
    "Sinkronisasi route & DNS...",
    "Negosiasi kunci & verifikasi IP...",
    "Finalisasi rute & NAT traversal..."
  ];
  const fill=document.getElementById("apj-scan-fill");
  const hint=document.getElementById("apj-scan-hint");
  const steps=[8,28,52,78,92,100];
  let i=0;
  fill.style.width="0%";
  hint.textContent=hints[0];
  const go=()=>{
    if(i>=steps.length){done();return;}
    const to=steps[i]; i++;
    const cur=parseFloat(fill.style.width)||0;
    const delta=to-cur; const ticks=Math.max(6,Math.round(delta/2)); let c=0;
    hint.textContent=hints[Math.min(Math.floor(i/1.2),hints.length-1)];
    const iv=setInterval(()=>{
      c++; fill.style.width=(cur+(delta*(c/ticks)))+'%';
      if(c>=ticks){clearInterval(iv); if(to===100)done(); else setTimeout(go,200+Math.random()*200);}
    }, 28+(Math.random()*14));
  };
  go();
}

/* ================================================
   BIND UI
   ================================================ */
function apjBindUI(){

  /* ── Tab toggle ── */
  document.getElementById("apj-tab").onclick=()=>{
    document.getElementById("apj-panel").classList.toggle("open");
  };
  document.getElementById("apj-close-btn").onclick=(e)=>{
    e.stopPropagation();
    document.getElementById("apj-panel").classList.remove("open");
  };

  /* ── Server select: tampilkan bendera ── */
  document.getElementById("apj-server-select").onchange=function(){
    const flag=document.getElementById("apj-flag");
    if(!this.value){flag.style.display="none";return;}
    flag.src=APJ_FLAG_URL(this.value);
    flag.style.display="block";
  };

  /* ── Tombol Scan ── */
  document.getElementById("apj-scan-btn").onclick=()=>{
    const v=document.getElementById("apj-server-select").value;
    if(!v){alert("Silakan pilih server dulu.");return;}
    const sn=APJ_SERVER_NAME[v];
    try{localStorage.setItem(APJ_KEY_SERVER,v);}catch(_){}
    /* reset overlay */
    document.getElementById("apj-scan-result").style.display="none";
    document.getElementById("apj-scan-actions").style.display="flex";
    document.getElementById("apj-scan-fill").style.width="0%";
    document.getElementById("apj-scan-status").textContent=`Scanning ${sn}...`;
    document.getElementById("apj-scan-hint").textContent="Menginisialisasi koneksi aman (TLS)...";
    /* buka overlay */
    const ov=document.getElementById("apj-scan-overlay");
    ov.style.display="flex";
    /* jalankan progress */
    const ping=apjComputePing(v);
    apjRunProgress(v,()=>{
      const online=apjComputeOnline(v,ping.ms,ping.range);
      const nf=n=>n.toLocaleString("id-ID");
      document.getElementById("apj-result-title").textContent=`Tersambung ke ${sn}`;
      document.getElementById("apj-result-sub").textContent=`Ping ${ping.ms} ms`;
      document.getElementById("apj-ms").textContent=ping.ms;
      const pc=document.getElementById("apj-ping-chip");
      pc.textContent=`${ping.ms} ms`;
      pc.className="apj-chip "+ping.cls;
      document.getElementById("apj-online-chip").textContent=`${nf(online.online)} / ${nf(online.cap)} online`;
      document.getElementById("apj-online-fill").style.width=(online.occ*100)+"%";
      document.getElementById("apj-online-caption").textContent=`Beban server ${online.pct}%`;
      document.getElementById("apj-scan-result").style.display="block";
      document.getElementById("apj-scan-status").textContent=`Terhubung ke ${sn} ✓`;
      document.getElementById("apj-scan-hint").textContent="Ingin bermain? atau pilih server ulang.";
      apjToast(`Kamu bermain di ${sn}`);
    });
  };

  /* ── Tutup overlay ── */
  const apjCloseOverlay=()=>{
    document.getElementById("apj-scan-overlay").style.display="none";
  };
  document.getElementById("apj-scan-close").onclick=apjCloseOverlay;
  document.getElementById("apj-scan-overlay").onclick=function(e){
    if(e.target===this) apjCloseOverlay();
  };

  /* ── Pilih server ulang ── */
  document.getElementById("apj-btn-repick").onclick=()=>{
    document.getElementById("apj-scan-result").style.display="none";
    document.getElementById("apj-scan-fill").style.width="0%";
    document.getElementById("apj-scan-status").textContent="Menyiapkan scanner...";
    document.getElementById("apj-scan-hint").textContent="Menginisialisasi koneksi aman (TLS)...";
  };

  /* ── Main Sekarang ── */
  document.getElementById("apj-btn-play").onclick=()=>{
    apjCloseOverlay();
    window.open(APJ_PLAY_URL,"_blank");
  };

  /* ── Scatter rows ── */
  document.querySelectorAll(".apj-scatter-row[data-scatter]").forEach(row=>{
    const key=row.dataset.scatter;
    row.onclick=()=>{
      const val=!row.classList.contains("on");
      apjSetScatter(key,val);
      row.classList.toggle("on",val);
      const col=val?"#e6aa00":"rgba(255,255,255,.35)";
      row.querySelectorAll(".apj-arc-v,.apj-arc-c").forEach(el=>el.setAttribute("stroke",col));
      if(val){apjToast("ON — "+APJ_AI_CONFIG[key].name);apjReplaceAll();}
      else{apjToast("OFF — "+APJ_AI_CONFIG[key].name);apjRestoreAll();apjReplaceAll();}
      apjUpdateStatus();
    };
  });

  /* ── AI Cards ── */
  document.querySelectorAll(".apj-card[data-card]").forEach(card=>{
    const key=card.dataset.card;
    const btn=card.querySelector(".apj-toggle-btn");
    const dot=card.querySelector(".apj-dot");
    const pill=card.querySelector(".apj-pill");
    const pillTxt=card.querySelector(".apj-pill-text");

    const stored=()=>{try{return JSON.parse(localStorage.getItem(APJ_KEY_CARDS)||"{}");}catch(_){return{};}};
    const saveCard=(k,v)=>{const s=stored();s[k]=v;try{localStorage.setItem(APJ_KEY_CARDS,JSON.stringify(s));}catch(_){}};

    /* restore state */
    if(stored()[key]){
      btn.classList.replace("off","on"); btn.textContent="ON";
      dot.classList.replace("off","on");
      pill.classList.replace("off","on"); pillTxt.textContent="Aktif";
    }

    btn.onclick=()=>{
      if(btn.disabled) return;
      btn.disabled=true;
      if(btn.classList.contains("off")){
        /* loading */
        dot.className="apj-dot loading";
        pill.className="apj-pill loading";
        pillTxt.textContent="Loading...";
        /* animasi fill */
        let track=pill.querySelector(".apj-pill-track");
        if(!track){
          track=document.createElement("div"); track.className="apj-pill-track";
          const fill=document.createElement("div"); fill.className="apj-pill-fill";
          track.appendChild(fill); pill.prepend(track);
        }
        const f=track.querySelector(".apj-pill-fill");
        f.style.width="0%"; let st=null;
        (function step(ts){if(!st)st=ts;const p=Math.min(1,(ts-st)/APJ_CONNECT_DELAY);f.style.width=p*100+"%";if(p<1)requestAnimationFrame(step);})(performance.now());
        setTimeout(()=>{
          btn.classList.replace("off","on"); btn.textContent="ON";
          dot.className="apj-dot on";
          const t=pill.querySelector(".apj-pill-track"); if(t)t.remove();
          pill.className="apj-pill on"; pillTxt.textContent="Aktif";
          saveCard(key,true);
          btn.disabled=false;
        }, APJ_CONNECT_DELAY);
      } else {
        btn.classList.replace("on","off"); btn.textContent="OFF";
        dot.className="apj-dot off";
        const t=pill.querySelector(".apj-pill-track"); if(t)t.remove();
        pill.className="apj-pill off"; pillTxt.textContent="Mati";
        saveCard(key,false);
        btn.disabled=false;
      }
    };
  });

  /* ── Restore server saved ── */
  const saved=(localStorage.getItem(APJ_KEY_SERVER)||"").toLowerCase();
  if(APJ_SERVER_NAME[saved]){
    try{document.getElementById("apj-server-select").value=saved;}catch(_){}
    const flag=document.getElementById("apj-flag");
    flag.src=APJ_FLAG_URL(saved); flag.style.display="block";
  }
}

/* ================================================
   SYNC SCATTER STATE
   ================================================ */
function apjSyncAll(){
  const s=apjGetScatter();
  document.querySelectorAll(".apj-scatter-row[data-scatter]").forEach(row=>{
    const key=row.dataset.scatter, on=!!s[key];
    row.classList.toggle("on",on);
    const col=on?"#e6aa00":"rgba(255,255,255,.35)";
    row.querySelectorAll(".apj-arc-v,.apj-arc-c").forEach(el=>el.setAttribute("stroke",col));
  });
  apjUpdateStatus();
}

function apjUpdateStatus(){
  const on=Object.values(apjGetScatter()).some(v=>v);
  const dot=document.getElementById("apj-status-dot");
  const txt=document.getElementById("apj-status-txt");
  if(!dot||!txt) return;
  dot.className=on?"on":"";
  txt.className=on?"on":"";
  txt.textContent=on?"ACTIVE":"IDLE";
}

/* ================================================
   IMAGE REPLACE LOGIC
   ================================================ */
const _apjOrig=new Map();
function apjProcessImg(img){
  if(!img||img.tagName!=="IMG") return;
  if(!_apjOrig.has(img)) _apjOrig.set(img,img.src);
  const s=apjGetScatter();
  Object.keys(APJ_AI_CONFIG).forEach(ai=>{
    if(!s[ai]) return;
    APJ_AI_CONFIG[ai].rules.forEach(([f,r])=>{
      if(img.src.includes(f)){img.src=r;img.srcset=r;}
    });
  });
}
function apjReplaceAll(){document.querySelectorAll("img").forEach(apjProcessImg);}
function apjRestoreAll(){_apjOrig.forEach((src,img)=>{if(img&&img.tagName==="IMG"){img.src=src;img.srcset=src;}});}

new MutationObserver(muts=>{
  if(!Object.values(apjGetScatter()).some(v=>v)) return;
  muts.forEach(m=>m.addedNodes.forEach(n=>{
    if(n.tagName==="IMG") apjProcessImg(n);
    if(n.querySelectorAll) n.querySelectorAll("img").forEach(apjProcessImg);
  }));
}).observe(document.body,{childList:true,subtree:true});

(function(){
  const _p=history.pushState,_r=history.replaceState;
  function go(){if(Object.values(apjGetScatter()).some(v=>v)){setTimeout(apjReplaceAll,300);setTimeout(apjReplaceAll,800);}}
  history.pushState=function(){_p.apply(this,arguments);go();};
  history.replaceState=function(){_r.apply(this,arguments);go();};
  window.addEventListener("popstate",go);
})();

/* ================================================
   BOOT
   ================================================ */
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){
    setInterval(apjInjectUI, 700);
  });
} else {
  setInterval(apjInjectUI, 700);
}
