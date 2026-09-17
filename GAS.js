// ============================================================
// GACOR HUNTER PRO V5.5 - FULL STACK TRADING ENGINE
// ============================================================

const CONFIG = {
  MIN_PRICE: 50,
  MIN_AVG_DAILY_VALUE: 1000000000, 
  MIN_VOLUME_EMA5: 1000000, 
  RSI_PERIOD: 14,
  TOP_N: 10,
  RANGE: "6mo", 
  INTERVAL: "1d",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
  BATCH_SIZE: 25, 
  BATCH_SLEEP_MS: 1000
};

// 🔴 WAJIB DIGANTI: Masukkan ID Spreadsheet kamu di bawah ini
const SHEET_ID = "1gCH0ryDrxCylNazqwGEC_XBQHgRiaDo1csnCYT0U8Rs";

// WATCHLIST PENUH
const WATCHLIST = [
  // 🏦 FINANCIALS (Banks, Multi-finance, & Holdings)
  "ABDA.JK", "ADMF.JK", "AGRO.JK", "AMAR.JK", "APIC.JK", "ARTO.JK", "BABP.JK", "BACA.JK", "BANK.JK", "BBCA.JK",
  "BBHI.JK", "BBKP.JK", "BBNI.JK", "BBRI.JK", "BBTN.JK", "BBYB.JK", "BCIC.JK", "BDMN.JK", "BFIN.JK", "BGTG.JK",
  "BHAT.JK", "BHIT.JK", "BINA.JK", "BJBR.JK", "BJTM.JK", "BMRI.JK", "BNBR.JK", "BNGA.JK", "BNLI.JK", "BRIS.JK",
  "BSIM.JK", "BVIC.JK", "CASH.JK", "DNAR.JK", "MASB.JK", "MAYA.JK", "MCOR.JK", "MEGA.JK", "MFIN.JK", "NISP.JK",
  "NOBU.JK", "PNBN.JK", "PNIN.JK", "PNLF.JK", "POLA.JK", "SDRA.JK", "SMIL.JK", "SRTG.JK", "TRIM.JK", "VRNA.JK",
  "WOMF.JK",

  // ⚡ ENERGY (Coal, Oil & Gas, Alternative Energy)
  "ABMM.JK", "ADMR.JK", "ADRO.JK", "AKRA.JK", "BIPI.JK", "BREN.JK", "BSSR.JK", "BUMI.JK", "BYAN.JK", "CUAN.JK",
  "DEWA.JK", "DOID.JK", "DSSA.JK", "ELSA.JK", "ENRG.JK", "ESSA.JK", "FIRE.JK", "GEMS.JK", "GTBO.JK", "HEXA.JK",
  "HITS.JK", "HRUM.JK", "IATA.JK", "INDY.JK", "ITMG.JK", "KOPI.JK", "LEAD.JK", "MBAP.JK", "MCOL.JK", "MEDC.JK",
  "PGAS.JK", "PGEO.JK", "PTBA.JK", "PTRO.JK", "RAJA.JK", "RMKE.JK", "SGER.JK", "SMMT.JK", "SOCI.JK", "TEBE.JK",
  "TOBA.JK", "UNTR.JK", "WINS.JK",

  // 🪨 BASIC MATERIALS (Metals, Mining, Chemicals, Pulp & Paper)
  "ALDO.JK", "AMMN.JK", "ANTM.JK", "ARNA.JK", "BRMS.JK", "BRPT.JK", "CITA.JK", "DKFT.JK", "DPNS.JK", "FASW.JK",
  "IFSH.JK", "IGAR.JK", "INCO.JK", "INKP.JK", "INTP.JK", "ISSP.JK", "KDSI.JK", "KIAS.JK", "KRAS.JK", "MBMA.JK",
  "MDKA.JK", "MLIA.JK", "NCKL.JK", "NICL.JK", "NIKL.JK", "PSAB.JK", "SMBR.JK", "SMCB.JK", "SMGR.JK", "SPMA.JK",
  "SQMI.JK", "TINS.JK", "TKIM.JK", "TOTO.JK", "TPIA.JK",

  // 🛒 CONSUMER NON-CYCLICALS (F&B, FMCG, Agriculture)
  "AALI.JK", "ADES.JK", "ALTO.JK", "AMRT.JK", "ANJT.JK", "BTEK.JK", "BWPT.JK", "CAMP.JK", "CEKA.JK", "CLEO.JK",
  "CMRY.JK", "CPRO.JK", "CSRA.JK", "DLTA.JK", "DSNG.JK", "FISH.JK", "GGRM.JK", "GOOD.JK", "GZCO.JK", "HERO.JK",
  "HMSP.JK", "ICBP.JK", "INDF.JK", "JAWA.JK", "JPFA.JK", "KEJU.JK", "LSIP.JK", "MAGP.JK", "MAIN.JK", "MGRO.JK",
  "MIDI.JK", "MLBI.JK", "MYOR.JK", "PALM.JK", "ROTI.JK", "SGRO.JK", "SIDO.JK", "SIMP.JK", "SKLT.JK", "SMAR.JK",
  "SSMS.JK", "STTP.JK", "TAPG.JK", "TBLA.JK", "ULTJ.JK", "UNIC.JK", "UNSP.JK", "UNVR.JK",

  // 🛍️ CONSUMER CYCLICALS (Retail, Media, Apparel, Entertainment)
  "ABBA.JK", "ACES.JK", "BMTR.JK", "BUVA.JK", "CSAP.JK", "EMTK.JK", "ERAA.JK", "FILM.JK", "FORU.JK", "LPPF.JK",
  "MAPA.JK", "MAPI.JK", "MARI.JK", "MDIA.JK", "MNCN.JK", "MSIN.JK", "NETV.JK", "PACK.JK", "PADA.JK", "RALS.JK",
  "RANS.JK", "SCMA.JK", "VIVA.JK", "WOOD.JK", "ZATA.JK",

  // 📱 TECHNOLOGY & TELECOM
  "ATIC.JK", "AWAN.JK", "AXIO.JK", "BELI.JK", "BUKA.JK", "CENT.JK", "CYBR.JK", "DATA.JK", "DCII.JK", "DIVA.JK",
  "DMMX.JK", "EDGE.JK", "ENVY.JK", "FREN.JK", "GLVA.JK", "GOTO.JK", "INET.JK", "IPTV.JK", "ISAT.JK", "KIOS.JK",
  "MCAS.JK", "MLPT.JK", "MTDL.JK", "MTEL.JK", "NFCX.JK", "TBIG.JK", "TECH.JK", "TFAS.JK", "TLKM.JK", "TOWR.JK",
  "WIFI.JK", "WIRG.JK",

  // 🏥 HEALTHCARE
  "BMHS.JK", "CARE.JK", "HEAL.JK", "INAF.JK", "KAEF.JK", "MEDS.JK", "MIKA.JK", "PEHA.JK", "PRDA.JK", "SAME.JK",
  "SILO.JK", "SOHO.JK", "SRAJ.JK", "TSPC.JK",

  // 🏙️ PROPERTY & REAL ESTATE
  "APLN.JK", "ASRI.JK", "BEST.JK", "BKSL.JK", "BSDE.JK", "CTRA.JK", "DART.JK", "DILD.JK", "DMAS.JK", "DUTI.JK",
  "GPRA.JK", "GWSA.JK", "JRPT.JK", "KIJA.JK", "LPCK.JK", "LPKR.JK", "MDLN.JK", "MTLA.JK", "NIRO.JK", "NZIA.JK",
  "PANI.JK", "PLIN.JK", "PWON.JK", "RISE.JK", "SMRA.JK", "SSIA.JK",

  // 🏗️ INFRASTRUCTURE & CONSTRUCTION
  "ADHI.JK", "APLI.JK", "CMNP.JK", "IDPR.JK", "JSMR.JK", "KOKA.JK", "META.JK", "NRCA.JK", "PPRE.JK", "PTPP.JK",
  "TOTL.JK", "WEGE.JK", "WIKA.JK", "WSBP.JK", "WSKT.JK", "WTON.JK",

  // 🚢 TRANSPORTATION & LOGISTICS
  "ASPI.JK", "ASSA.JK", "BIRD.JK", "BULL.JK", "CMPP.JK", "GIAA.JK", "GTSI.JK", "HAIS.JK", "HELI.JK", "HUMI.JK",
  "IPCC.JK", "IPCM.JK", "NICE.JK", "SAPX.JK", "SMDR.JK", "TMAS.JK", "TNCA.JK", "TPMA.JK", "WEHA.JK",

  // 🚀 ACTIVE SMALL-MID CAPS, NEW IPOs & OTHERS
  "AADI.JK", "ACRO.JK", "ACST.JK", "AEGS.JK", "AIMS.JK", "ALII.JK", "APEX.JK", "APII.JK", "ARCI.JK", "AREA.JK",
  "ARGO.JK", "ARKO.JK", "ATLA.JK", "AURA.JK", "BACH.JK", "BAIK.JK", "BAJA.JK", "BELL.JK", "BSML.JK", "BUEA.JK",
  "CBPE.JK", "CBRE.JK", "CGAS.JK", "CHIP.JK", "COCO.JK", "COIN.JK", "DAAZ.JK", "DOOH.JK", "DPUM.JK", "EMAS.JK",
  "EPAC.JK", "FORE.JK", "GOLD.JK", "GOLF.JK", "GRPH.JK", "GTRA.JK", "GULA.JK", "GUNA.JK", "HALO.JK", "IBST.JK",
  "IMPC.JK", "INCF.JK", "JARR.JK", "JGLE.JK", "JSPT.JK", "KETR.JK", "KINI.JK", "KMTR.JK", "KOTA.JK", "KRYA.JK",
  "LIVE.JK", "MAHA.JK", "MANG.JK", "MAXI.JK", "MEJA.JK", "MINA.JK", "MINE.JK", "MMIX.JK", "MPIX.JK", "MSET.JK",
  "MSJA.JK", "MUTU.JK", "NAYZ.JK", "OBMD.JK", "PADI.JK", "PANR.JK", "PART.JK", "PIPA.JK", "POWR.JK", "PTMP.JK",
  "PTPS.JK", "PURA.JK", "RATU.JK", "RGAS.JK", "SAGE.JK", "SHID.JK", "SINI.JK", "SIPD.JK", "SMLE.JK", "SRSN.JK",
  "STRK.JK", "SURE.JK", "TBMS.JK", "TDPM.JK", "TOSS.JK", "TRJA.JK", "TRON.JK", "UDNG.JK", "VAST.JK", "VISI.JK",
  "VKTR.JK", "WINE.JK", "YUPI.JK"
];

function getDbSheet() { return SpreadsheetApp.openById(SHEET_ID).getSheetByName("Users"); }
function handleAuth(params) {
  const sheet = getDbSheet();
  const data = sheet.getDataRange().getValues();
  const today = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd");
  
  if (params.type === "register") {
    let emailExists = data.some(row => row[0].toString().toLowerCase() === params.email.toLowerCase());
    let userExists = data.some(row => row[1].toString().toLowerCase() === params.username.toLowerCase());
    if (emailExists) return { status: "error", message: "Email sudah terdaftar! Silakan login." };
    if (userExists) return { status: "error", message: "Username sudah dipakai orang lain." };
    sheet.appendRow([params.email, params.username, params.password, 0, 10, today]);
    return { status: "success", username: params.username, email: params.email, saldo: 0, kuota: 10 };
  }
  
  if (params.type === "login") {
    for (let i = 1; i < data.length; i++) {
      let isMatchId = (data[i][0].toString().toLowerCase() === params.login_id.toLowerCase()) || (data[i][1].toString().toLowerCase() === params.login_id.toLowerCase());
      if (isMatchId && data[i][2].toString() === params.password) {
        let email = data[i][0], username = data[i][1], saldo = Number(data[i][3]), kuota = Number(data[i][4]), lastDate = data[i][5];
        if (lastDate !== today) {
          kuota = 10;
          sheet.getRange(i + 1, 5).setValue(kuota);
          sheet.getRange(i + 1, 6).setValue(today);
        }
        return { status: "success", username: username, email: email, saldo: saldo, kuota: kuota };
      }
    }
    return { status: "error", message: "Email/Username atau Password salah!" };
  }

  if (params.type === "use_quota") {
    for (let i = 1; i < data.length; i++) {
      if (data[i][0].toString().toLowerCase() === params.email.toLowerCase()) {
        let saldo = Number(data[i][3]), kuota = Number(data[i][4]); 
        if (kuota > 0) {
          sheet.getRange(i + 1, 5).setValue(kuota - 1);
          return { status: "success", remain_kuota: kuota - 1, remain_saldo: saldo, type: "FREE" };
        } else if (saldo >= 500) {
          sheet.getRange(i + 1, 4).setValue(saldo - 500);
          return { status: "success", remain_kuota: 0, remain_saldo: saldo - 500, type: "PAID" };
        } else { return { status: "error", message: "INSUFFICIENT_FUNDS" }; }
      }
    }
    return { status: "error", message: "User tidak ditemukan dalam sistem." };
  }
}

// MATH & INDICATORS (V5.0)
function average(arr) { return arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0; }
function highest(arr) { return arr.length ? Math.max(...arr) : 0; }
function lowest(arr) { return arr.length ? Math.min(...arr) : 0; }
function calcSMA(arr, period) { return arr.length >= period ? average(arr.slice(-period)) : 0; }
function calcEMA(arr, period) {
  if(!arr || arr.length === 0) return 0;
  const k = 2 / (period + 1); let ema = arr[0];
  for(let i = 1; i < arr.length; i++) ema = (arr[i] * k) + (ema * (1 - k));
  return ema;
}
function emaSeries(arr, period) {
  if(!arr || arr.length === 0) return [];
  const out = [arr[0]], k = 2 / (period + 1);
  for(let i = 1; i < arr.length; i++) out[i] = arr[i] * k + out[i-1] * (1 - k);
  return out;
}
function calcMACD(closes) {
  const e12 = emaSeries(closes, 12), e26 = emaSeries(closes, 26);
  const macd = closes.map((_, i) => e12[i] - e26[i]), signal = emaSeries(macd, 9);
  return { macd, signal, hist: macd.map((v, i) => v - signal[i]) };
}
function calculateRSI(closes, period) {
  if(!closes || closes.length <= period) return 50;
  let gains = 0, losses = 0;
  for(let i = 1; i <= period; i++) {
      const d = closes[i] - closes[i - 1];
      if(d > 0) gains += d; else losses += Math.abs(d);
  }
  let avgGain = gains / period, avgLoss = losses / period;
  for(let i = period + 1; i < closes.length; i++) {
      const d = closes[i] - closes[i - 1];
      avgGain = (avgGain * (period - 1) + (d > 0 ? d : 0)) / period;
      avgLoss = (avgLoss * (period - 1) + (d < 0 ? Math.abs(d) : 0)) / period;
  }
  return avgLoss === 0 ? 100 : 100 - (100 / (1 + avgGain / avgLoss));
}
function getPivots(highs, lows, lookback) {
  lookback = lookback || 2;
  const highPivots = [], lowPivots = [];
  for(let i = lookback; i < highs.length - lookback; i++) {
      let hi = true, lo = true;
      for(let j = 1; j <= lookback; j++) {
          if(!(highs[i] > highs[i-j] && highs[i] >= highs[i+j])) hi = false;
          if(!(lows[i] < lows[i-j] && lows[i] <= lows[i+j])) lo = false;
      }
      if(hi) highPivots.push({ index: i, price: highs[i] });
      if(lo) lowPivots.push({ index: i, price: lows[i] });
  }
  return { highPivots, lowPivots };
}
function nearestBelow(values, price) {
  const x = values.filter(v => Number.isFinite(v) && v < price); return x.length ? Math.max(...x) : 0;
}
function nearestAbove(values, price) {
  const x = values.filter(v => Number.isFinite(v) && v > price); return x.length ? Math.min(...x) : 0;
}
function buildStructure(p) {
  const hs = p.highPivots.slice(-3), ls = p.lowPivots.slice(-3);
  if(hs.length < 2 || ls.length < 2) return { label: "UNDEFINED", bullish: false, bearish: false };
  const lh = hs[hs.length - 1].price, ph = hs[hs.length - 2].price;
  const ll = ls[ls.length - 1].price, pl = ls[ls.length - 2].price;
  if(lh > ph && ll > pl) return { label: "HH + HL (UPTREND)", bullish: true, bearish: false };
  if(lh < ph && ll < pl) return { label: "LH + LL (DOWNTREND)", bullish: false, bearish: true };
  if(lh > ph && ll < pl) return { label: "EXPANSION / MIXED", bullish: false, bearish: false };
  return { label: "RANGE / TRANSITION", bullish: false, bearish: false };
}
function fibMap(swingLow, swingHigh, bullish) {
  if(!(swingHigh > swingLow)) return null;
  const r = swingHigh - swingLow;
  if(bullish) return { 0: swingHigh, .236: swingHigh - r * .236, .382: swingHigh - r * .382, .5: swingHigh - r * .5, .618: swingHigh - r * .618, .786: swingHigh - r * .786, 1: swingLow };
  return { 0: swingLow, .236: swingLow + r * .236, .382: swingLow + r * .382, .5: swingLow + r * .5, .618: swingLow + r * .618, .786: swingLow + r * .786, 1: swingHigh };
}
function buildPlan(price, direction, setup, supports, resistances, atr) {
  if (direction === "BEARISH") return { rr: 0 };
  const S = supports.filter(x => x > 0 && x < price).sort((a,b) => b - a)[0] || price - atr;
  const R = resistances.filter(x => x > price).sort((a,b) => a - b)[0] || price + Math.max(atr * 2, price * .04);
  let entryLow = 0, entryHigh = 0, stop = 0, tp1 = 0;
  
  if (setup === "BREAKOUT") {
      const breakoutR = resistances.filter(x => x > 0).sort((a,b) => b-a).find(x => Math.abs(x - price) / price < .03) || R;
      entryLow = breakoutR * .995; entryHigh = breakoutR * 1.005;
      stop = Math.min(breakoutR - Math.max(atr * .7, price * .015), S - atr * .25);
      tp1 = R > entryHigh ? R : entryHigh + Math.max(atr * 2, price * .04);
  } else {
      entryLow = Math.max(S * .995, S + atr * .15); entryHigh = Math.min(S * 1.01, price);
      if(entryLow > entryHigh) { entryLow = Math.max(S * .995, price * .985); entryHigh = price; }
      stop = S - Math.max(atr * .7, price * .015);
      tp1 = R > entryHigh ? R : entryHigh + Math.max(atr * 2, price * .04);
  }
  const mid = entryLow && entryHigh ? (entryLow + entryHigh) / 2 : 0;
  const rr = mid && stop && tp1 > mid ? (tp1 - mid) / (mid - stop) : 0;
  return { rr: rr };
}

// API ENDPOINT
function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const props = PropertiesService.getScriptProperties();

  if (params.action === "auth") {
    try {
      const result = handleAuth(params);
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } catch(err) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.message })).setMimeType(ContentService.MimeType.JSON);
    }
  }

  if (params.action === "getTop10") {
    const cachedData = props.getProperty("TOP10_RADAR");
    const lastUpdate = props.getProperty("LAST_UPDATE") || "Belum ada data";
    let data = [];
    try { if (cachedData) data = JSON.parse(cachedData); } catch (err) { data = []; }
    return ContentService.createTextOutput(JSON.stringify({ status: "success", lastUpdate: lastUpdate, data: data })).setMimeType(ContentService.MimeType.JSON);
  }

  if (params.action === "getMarketOutlook") {
    const cachedOutlook = props.getProperty("MARKET_OUTLOOK");
    let outlookData = { level: 0, trend: "UNKNOWN", ma20: 0, summary: "Menunggu data EOD..." };
    try { if (cachedOutlook) outlookData = JSON.parse(cachedOutlook); } catch(err) {}
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: outlookData })).setMimeType(ContentService.MimeType.JSON);
  }

  if (params.ticker) {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(params.ticker)}?range=6mo&interval=1d`;
    try {
      const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
      if (response.getResponseCode() !== 200) return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "SERVER_DOWN" })).setMimeType(ContentService.MimeType.JSON);
      return ContentService.createTextOutput(response.getContentText()).setMimeType(ContentService.MimeType.JSON);
    } catch (err) { return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "SERVER_DOWN" })).setMimeType(ContentService.MimeType.JSON); }
  }

  return ContentService.createTextOutput(JSON.stringify({ status: "success", engine: "GACOR HUNTER PRO V5.0 BACKEND" })).setMimeType(ContentService.MimeType.JSON);
}

// FULL V5.0 EOD SCAN ENGINE
function runEODScan() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  try {
    const candidates = [];
    
    for (let start = 0; start < WATCHLIST.length; start += CONFIG.BATCH_SIZE) {
      const batch = WATCHLIST.slice(start, start + CONFIG.BATCH_SIZE);
      const requests = batch.map(ticker => ({
        url: `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?range=${CONFIG.RANGE}&interval=${CONFIG.INTERVAL}`,
        method: "get",
        headers: { "User-Agent": CONFIG.USER_AGENT },
        muteHttpExceptions: true
      }));

      let responses = [];
      try { responses = UrlFetchApp.fetchAll(requests); } catch (err) { continue; }

      for (let j = 0; j < responses.length; j++) {
        const ticker = batch[j];
        const res = responses[j];
        if (res.getResponseCode() !== 200) continue;
        
        try {
          const json = JSON.parse(res.getContentText());
          const quote = json.chart?.result?.[0]?.indicators?.quote?.[0];
          if (!quote) continue;

          const validData = [];
          for (let k = 0; k < quote.close.length; k++) {
            if (quote.close[k] != null && quote.volume[k] != null) {
              validData.push({
                close: Number(quote.close[k]), volume: Number(quote.volume[k]),
                high: Number(quote.high[k] || quote.close[k]), low: Number(quote.low[k] || quote.close[k])
              });
            }
          }
          if (validData.length < 120) continue; 

          const closes = validData.map(d => d.close);
          const volumes = validData.map(d => d.volume);
          const highs = validData.map(d => d.high);
          const lows = validData.map(d => d.low);

          const currClose = closes[closes.length - 1], prevClose = closes[closes.length - 2], previousVolume = volumes[volumes.length - 1];
          if (currClose <= CONFIG.MIN_PRICE) continue;
          
          const ema5Volume = calcEMA(volumes, 5), avgTransactionValue = ema5Volume * currClose;
          if (ema5Volume < CONFIG.MIN_VOLUME_EMA5 && avgTransactionValue < CONFIG.MIN_AVG_DAILY_VALUE) continue; 
          if (previousVolume <= ema5Volume) continue; 
          
          const return1d = prevClose ? ((currClose - prevClose) / prevClose) * 100 : 0;
          const close5d = closes[closes.length - 6], return5d = close5d ? ((currClose - close5d) / close5d) * 100 : 0;
          const e5 = emaSeries(closes, 5), e21 = emaSeries(closes, 21), e34 = emaSeries(closes, 34), e99 = emaSeries(closes, 99);
          const ema5 = e5[e5.length - 1], ema21 = e21[e21.length - 1], ema34 = e34[e34.length - 1], ema99 = e99[e99.length - 1];
          const macd = calcMACD(closes);
          const macdLine = macd.macd[macd.macd.length - 1], signalLine = macd.signal[macd.signal.length - 1], macdHist = macd.hist[macd.hist.length - 1];
          const rsi = calculateRSI(closes, CONFIG.RSI_PERIOD);
          const avgVol20 = average(volumes.slice(-21, -1)), volRatio = avgVol20 ? previousVolume / avgVol20 : 0;

          const trs = [];
          for(let i = Math.max(1, closes.length - 20); i < closes.length; i++) {
              trs.push(Math.max(highs[i] - lows[i], Math.abs(highs[i] - closes[i-1]), Math.abs(lows[i] - closes[i-1])));
          }
          const atr = average(trs) || currClose * 0.02;

          const piv = getPivots(highs, lows, 2), structure = buildStructure(piv);
          const recentH = piv.highPivots.slice(-10).map(x => x.price), recentL = piv.lowPivots.slice(-10).map(x => x.price);
          const classicS = nearestBelow(recentL, currClose) || lowest(lows.slice(-20)), classicR = nearestAbove(recentH, currClose) || highest(highs.slice(-20));

          const win = Math.min(80, closes.length), startIdx = closes.length - win;
          let hiI = startIdx, loI = startIdx;
          for(let i = startIdx; i < closes.length; i++) {
              if(highs[i] > highs[hiI]) hiI = i;
              if(lows[i] < lows[loI]) loI = i;
          }
          const swingHigh = highs[hiI], swingLow = lows[loI], fib = fibMap(swingLow, swingHigh, structure.bullish || currClose > ema21);
          const fibS = fib ? nearestBelow(Object.values(fib), currClose) : 0, fibR = fib ? nearestAbove(Object.values(fib), currClose) : 0;

          const dynS = nearestBelow([ema21, ema34, ema99], currClose) || Math.min(ema21, ema34, ema99);
          const dynR = nearestAbove([ema21, ema34, ema99], currClose) || Math.max(ema21, ema34, ema99);

          const emaBull = ema5 > ema21 && ema21 > ema34, emaBear = ema5 < ema21 && ema21 < ema34;
          
          let direction = "SIDEWAYS";
          if(structure.bullish && emaBull && currClose > ema21 && macdLine > signalLine) direction = "BULLISH";
          else if(structure.bearish && emaBear && currClose < ema21 && macdLine < signalLine) direction = "BEARISH";
          else if(currClose > ema21 && ema5 > ema21 && macdLine > signalLine) direction = "BULLISH";
          else if(currClose < ema21 && ema5 < ema21 && macdLine < signalLine) direction = "BEARISH";

          let setup = "RANGE / WAIT";
          if(direction === "BULLISH" && classicR && currClose >= classicR * 0.995 && volRatio >= 1.5) setup = "BREAKOUT";
          else if(direction === "BULLISH" && ema5 > ema21 && currClose <= ema21 * 1.025 && currClose >= dynS * 0.985) setup = "PULLBACK TO DYNAMIC SUPPORT";
          else if(direction === "BULLISH" && structure.bullish) setup = "TREND CONTINUATION";
          else if(direction === "BEARISH") setup = "DOWNTREND / NO LONG";

          let scStructure = structure.bullish ? 20 : structure.bearish ? 0 : structure.label === "EXPANSION / MIXED" ? 10 : 7;
          let scEma = (ema5 > ema21 ? 6 : 0) + (ema21 > ema34 ? 4 : 0) + (ema34 > ema99 ? 3 : 0) + (currClose > ema21 ? 2 : 0);
          let scMacd = (macdLine > signalLine ? 5 : 0) + (macdLine > 0 ? 3 : 0) + (macdHist > 0 ? 2 : 0);
          let scFibo = fibS && currClose > fibS ? (Math.abs(currClose - fibS) / currClose <= 0.03 ? 10 : 7) : 3;
          
          const dS = classicS ? Math.abs(currClose - classicS) / currClose : 1, dR = classicR ? Math.abs(classicR - currClose) / currClose : 1;
          let scClassic = Math.min(10, (dS <= 0.03 ? 7 : 4) + ((dR <= 0.03 && volRatio >= 1.5) ? 3 : 0));
          
          let scDynamic = (currClose > ema21 ? 4 : 0) + (ema21 > ema34 ? 3 : 0) + (currClose > ema99 ? 3 : 0);
          let scMomentum = (rsi >= 55 && rsi <= 70 ? 6 : rsi > 50 ? 3 : 0) + (return5d > 0 ? 3 : 0) + (volRatio >= 2 ? 6 : volRatio >= 1.5 ? 4 : volRatio >= 1.2 ? 2 : 0);
          let scSetup = setup === "BREAKOUT" ? 8 : setup === "PULLBACK TO DYNAMIC SUPPORT" ? 7 : setup === "TREND CONTINUATION" ? 6 : direction === "SIDEWAYS" ? 4 : 0;

          const plan = buildPlan(currClose, direction, setup, [classicS, dynS, fibS, ema21, ema34], [classicR, dynR, fibR], atr);
          if(plan.rr >= 2) scSetup = Math.min(10, scSetup + 2); 
          else if(plan.rr >= 1.5) scSetup = Math.min(10, scSetup + 1);
          else if(direction === "BULLISH" && plan.rr < 1.2) scSetup = Math.max(0, scSetup - 2);

          const finalScore = Math.min(100, scStructure + scEma + scMacd + scFibo + scClassic + scDynamic + scMomentum + scSetup);

          candidates.push({
            ticker: ticker, score: Math.round(finalScore), setup: setup, price: currClose, return1d: return1d, volumeRatio: volRatio
          });

        } catch (err) {}
      }
      Utilities.sleep(CONFIG.BATCH_SLEEP_MS);
    }

    candidates.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score; 
      if (b.volumeRatio !== a.volumeRatio) return b.volumeRatio - a.volumeRatio; 
      return b.return1d - a.return1d; 
    });

    const top10 = candidates.slice(0, CONFIG.TOP_N).map(c => ({
      ticker: c.ticker, score: c.score, setup: c.setup, price: c.price
    }));

    const nowStr = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm");
    const props = PropertiesService.getScriptProperties();
    props.setProperty("TOP10_RADAR", JSON.stringify(top10));
    props.setProperty("LAST_UPDATE", nowStr);
    
    generateMarketOutlook();
  } finally {
    lock.releaseLock();
  }
}

function generateMarketOutlook() {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/%5EJKSE?range=3mo&interval=1d`;
  try {
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) return;
    const json = JSON.parse(response.getContentText());
    const closes = json.chart?.result?.[0]?.indicators?.quote?.[0]?.close?.filter(c => c !== null) || [];
    if (closes.length < 20) return;
    
    const lastClose = closes[closes.length - 1];
    const ma20 = calcSMA(closes, 20);
    const ma5 = calcSMA(closes, 5);
    
    let trend = "SIDEWAYS";
    if (lastClose > ma20 && ma5 > ma20) trend = "BULLISH";
    else if (lastClose < ma20 && ma5 < ma20) trend = "BEARISH";
    
    const outlookData = {
      level: Math.round(lastClose), trend: trend, ma20: Math.round(ma20),
      summary: trend === "BULLISH" 
        ? "IHSG bergerak di atas MA20, tren saat ini BULLISH. Setup Breakout dan Trend Follower memiliki win-rate tinggi. Cari saham yang terkonfirmasi breakout dengan volume besar."
        : trend === "BEARISH" 
        ? "IHSG bergerak di bawah MA20, tren saat ini BEARISH. Market rawan koreksi lanjutan. Kurangi size entry, perketat Stop Loss, dan fokus pada saham defensif."
        : "IHSG berkonsolidasi (SIDEWAYS) di sekitar area MA20. Gunakan strategi Buy on Support & Sell on Resistance."
    };
    PropertiesService.getScriptProperties().setProperty("MARKET_OUTLOOK", JSON.stringify(outlookData));
  } catch(e) {}
}

function setupDailyTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("runEODScan").timeBased().everyDays(1).atHour(18).inTimezone("Asia/Jakarta").create();
}