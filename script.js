const profilesDB = {
  // IPE
  IPE160: { Iz: 68.3,  It: 3.1,   Iw: 4300,    Wpl: 93.5,  Wel: 85.4,  Weff: 80.0,  h: 160, b: 82,  tf: 7.4, tw: 5.0 },
  IPE180: { Iz: 101.7, It: 4.3,   Iw: 7600,    Wpl: 131.7, Wel: 113,   Weff: 108,   h: 180, b: 91,  tf: 8.0, tw: 5.3 },
  IPE200: { Iz: 142.3, It: 6.98,  Iw: 12990,   Wpl: 220.6, Wel: 194,   Weff: 180,   h: 200, b: 100, tf: 8.5, tw: 5.6 },
  IPE220: { Iz: 205.0, It: 7.5,   Iw: 18500,   Wpl: 252.0, Wel: 223,   Weff: 210,   h: 220, b: 110, tf: 9.2, tw: 5.9 },
  IPE240: { Iz: 283.6, It: 11.9,  Iw: 32700,   Wpl: 324.0, Wel: 287,   Weff: 270,   h: 240, b: 120, tf: 9.8, tw: 6.2 },
  IPE270: { Iz: 419.0, It: 14.2,  Iw: 56000,   Wpl: 429.0, Wel: 376,   Weff: 355,   h: 270, b: 135, tf: 10.2, tw: 6.6 },
  IPE300: { Iz: 603.8, It: 18.1,  Iw: 95000,   Wpl: 557.0, Wel: 502,   Weff: 470,   h: 300, b: 150, tf: 10.7, tw: 7.1 },
  IPE330: { Iz: 804.0, It: 24.0,  Iw: 144000,  Wpl: 713.0, Wel: 615,   Weff: 590,   h: 330, b: 160, tf: 11.5, tw: 7.5 },
  IPE360: { Iz: 1043.0, It: 30.5, Iw: 210000,  Wpl: 889.0, Wel: 760,   Weff: 720,   h: 360, b: 170, tf: 12.7, tw: 8.0 },
  IPE400: { Iz: 1457.0, It: 38.0, Iw: 318000,  Wpl: 1110.0, Wel: 920,   Weff: 880,   h: 400, b: 180, tf: 13.5, tw: 8.6 },
  IPE450: { Iz: 2025.0, It: 47.0, Iw: 500000,  Wpl: 1410.0, Wel: 1170,  Weff: 1110,  h: 450, b: 190, tf: 14.6, tw: 9.4 },
  IPE500: { Iz: 2890.0, It: 58.0, Iw: 760000,  Wpl: 1810.0, Wel: 1450,  Weff: 1390,  h: 500, b: 200, tf: 16.0, tw: 10.2 },
  IPE550: { Iz: 3930.0, It: 72.0, Iw: 1100000, Wpl: 2240.0, Wel: 1790,  Weff: 1710,  h: 550, b: 210, tf: 17.2, tw: 11.1 },
  IPE600: { Iz: 5290.0, It: 88.0, Iw: 1600000, Wpl: 2760.0, Wel: 2210,  Weff: 2100,  h: 600, b: 220, tf: 19.0, tw: 12.0 },

  // HEA
  HEA100: { Iz: 45.3,  It: 3.1,   Iw: 5800,    Wpl: 75.0,  Wel: 68.0,  Weff: 64.0,  h: 96,  b: 100, tf: 8.0, tw: 5.0 },
  HEA120: { Iz: 72.7,  It: 4.6,   Iw: 10500,   Wpl: 107.0, Wel: 95.0,  Weff: 90.0,  h: 114, b: 120, tf: 8.0, tw: 5.0 },
  HEA140: { Iz: 112.0, It: 6.7,   Iw: 18000,   Wpl: 154.0, Wel: 133,   Weff: 126,   h: 133, b: 140, tf: 8.5, tw: 5.5 },
  HEA160: { Iz: 167.0, It: 9.1,   Iw: 30000,   Wpl: 220.0, Wel: 190,   Weff: 180,   h: 152, b: 160, tf: 9.0, tw: 6.0 },
  HEA180: { Iz: 251.0, It: 11.2,  Iw: 41000,   Wpl: 311.0, Wel: 260,   Weff: 245,   h: 171, b: 180, tf: 9.5, tw: 6.0 },
  HEA200: { Iz: 369.2, It: 13.3,  Iw: 52200,   Wpl: 429.0, Wel: 389,   Weff: 360,   h: 190, b: 200, tf: 10,  tw: 6.5 },
  HEA220: { Iz: 541.0, It: 16.0,  Iw: 79000,   Wpl: 552.0, Wel: 465,   Weff: 440,   h: 210, b: 220, tf: 11,  tw: 7.0 },
  HEA240: { Iz: 675.5, It: 21.6,  Iw: 118000,  Wpl: 665.0, Wel: 587,   Weff: 550,   h: 230, b: 240, tf: 12,  tw: 7.5 },
  HEA260: { Iz: 868.0, It: 25.0,  Iw: 162000,  Wpl: 805.0, Wel: 694,   Weff: 650,   h: 250, b: 260, tf: 12.5, tw: 7.5 },
  HEA280: { Iz: 1080.0, It: 29.0, Iw: 218000,  Wpl: 960.0, Wel: 800,   Weff: 760,   h: 270, b: 280, tf: 13,  tw: 8.0 },
  HEA300: { Iz: 1330.0, It: 34.0, Iw: 290000,  Wpl: 1120.0, Wel: 920,   Weff: 880,   h: 290, b: 300, tf: 14,  tw: 8.5 },
  HEA320: { Iz: 1620.0, It: 39.0, Iw: 380000,  Wpl: 1290.0, Wel: 1050,  Weff: 1000,  h: 310, b: 300, tf: 15.5, tw: 9.0 },
  HEA340: { Iz: 1970.0, It: 44.0, Iw: 490000,  Wpl: 1480.0, Wel: 1200,  Weff: 1140,  h: 330, b: 300, tf: 16.5, tw: 9.5 },
  HEA360: { Iz: 2360.0, It: 50.0, Iw: 620000,  Wpl: 1680.0, Wel: 1360,  Weff: 1290,  h: 350, b: 300, tf: 17.5, tw: 10.0 },
  HEA400: { Iz: 3220.0, It: 63.0, Iw: 980000,  Wpl: 2080.0, Wel: 1680,  Weff: 1600,  h: 390, b: 300, tf: 19.0, tw: 11.0 },

  // HEB
  HEB100: { Iz: 91.6,  It: 5.6,   Iw: 9800,    Wpl: 126.0, Wel: 110,   Weff: 104,   h: 100, b: 100, tf: 10,  tw: 6.0 },
  HEB120: { Iz: 144.0, It: 8.6,   Iw: 18000,   Wpl: 198.0, Wel: 165,   Weff: 156,   h: 120, b: 120, tf: 11,  tw: 6.5 },
  HEB140: { Iz: 216.0, It: 12.0,  Iw: 30000,   Wpl: 290.0, Wel: 220,   Weff: 210,   h: 140, b: 140, tf: 12,  tw: 7.0 },
  HEB160: { Iz: 311.0, It: 15.6,  Iw: 47000,   Wpl: 406.0, Wel: 310,   Weff: 295,   h: 160, b: 160, tf: 13,  tw: 8.0 },
  HEB180: { Iz: 426.0, It: 18.0,  Iw: 63000,   Wpl: 525.0, Wel: 410,   Weff: 390,   h: 180, b: 180, tf: 14,  tw: 8.5 },
  HEB200: { Iz: 569.6, It: 20.1,  Iw: 80500,   Wpl: 651.0, Wel: 570,   Weff: 535,   h: 200, b: 200, tf: 15,  tw: 9.0 },
  HEB220: { Iz: 809.0, It: 27.0,  Iw: 132000,  Wpl: 829.0, Wel: 735,   Weff: 690,   h: 220, b: 220, tf: 16,  tw: 9.5 },
  HEB240: { Iz: 1126.0, It: 34.6, Iw: 227000,  Wpl: 938.0, Wel: 838,   Weff: 790,   h: 240, b: 240, tf: 17,  tw: 10.0 },
  HEB260: { Iz: 1490.0, It: 42.0, Iw: 330000,  Wpl: 1150.0, Wel: 1010,  Weff: 950,   h: 260, b: 260, tf: 17.5, tw: 10.0 },
  HEB280: { Iz: 1920.0, It: 51.0, Iw: 470000,  Wpl: 1360.0, Wel: 1180,  Weff: 1110,  h: 280, b: 280, tf: 18,  tw: 10.5 },
  HEB300: { Iz: 2510.0, It: 63.0, Iw: 700000,  Wpl: 1680.0, Wel: 1390,  Weff: 1310,  h: 300, b: 300, tf: 19,  tw: 11.0 },
  HEB320: { Iz: 3080.0, It: 74.0, Iw: 930000,  Wpl: 1970.0, Wel: 1620,  Weff: 1530,  h: 320, b: 300, tf: 20.5, tw: 11.5 },
  HEB340: { Iz: 3770.0, It: 87.0, Iw: 1250000, Wpl: 2280.0, Wel: 1870,  Weff: 1760,  h: 340, b: 300, tf: 21.5, tw: 12.0 },
  HEB360: { Iz: 4560.0, It: 101.0, Iw: 1660000, Wpl: 2610.0, Wel: 2130,  Weff: 2000,  h: 360, b: 300, tf: 22.5, tw: 12.5 },
  HEB400: { Iz: 5760.0, It: 131.0, Iw: 2500000, Wpl: 3220.0, Wel: 2600,  Weff: 2450,  h: 400, b: 300, tf: 24,   tw: 13.5 },

  // IPN
  IPN160: { Iz: 54.7,  It: 2.5,   Iw: 3500,    Wpl: 78.0,  Wel: 68.0,  Weff: 64.0,  h: 160, b: 74,  tf: 9.5,  tw: 6.3 },
  IPN180: { Iz: 82.0,  It: 3.9,   Iw: 6000,    Wpl: 110.0, Wel: 92.0,  Weff: 88.0,  h: 180, b: 82,  tf: 10.4, tw: 6.9 },
  IPN200: { Iz: 117.0, It: 5.2,   Iw: 9800,    Wpl: 170.0, Wel: 155,   Weff: 145,   h: 200, b: 90,  tf: 11.3, tw: 7.5 },
  IPN220: { Iz: 162.0, It: 6.8,   Iw: 14500,   Wpl: 210.0, Wel: 185,   Weff: 175,   h: 220, b: 98,  tf: 12.2, tw: 8.1 },
  IPN240: { Iz: 221.0, It: 8.7,   Iw: 21000,   Wpl: 270.0, Wel: 230,   Weff: 215,   h: 240, b: 106, tf: 13.1, tw: 8.7 },
  IPN260: { Iz: 296.0, It: 11.0,  Iw: 30000,   Wpl: 340.0, Wel: 290,   Weff: 270,   h: 260, b: 113, tf: 14.1, tw: 9.4 },
  IPN280: { Iz: 389.0, It: 13.8,  Iw: 42000,   Wpl: 420.0, Wel: 355,   Weff: 330,   h: 280, b: 122, tf: 15.2, tw: 10.1 },
  IPN300: { Iz: 501.0, It: 16.9,  Iw: 58000,   Wpl: 510.0, Wel: 430,   Weff: 400,   h: 300, b: 130, tf: 16.2, tw: 10.8 },

  // HEM (Profils lourds)
  HEM100: { Iz: 223.0, It: 14.0,  Iw: 23000,   Wpl: 248.0, Wel: 210,   Weff: 198,   h: 120, b: 106, tf: 20,   tw: 12 },
  HEM120: { Iz: 355.0, It: 20.0,  Iw: 43000,   Wpl: 392.0, Wel: 300,   Weff: 285,   h: 140, b: 126, tf: 21,   tw: 12.5 },
  HEM140: { Iz: 560.0, It: 27.0,  Iw: 76000,   Wpl: 562.0, Wel: 435,   Weff: 410,   h: 160, b: 146, tf: 22,   tw: 13 },
  HEM160: { Iz: 792.0, It: 34.0,  Iw: 113000,  Wpl: 757.0, Wel: 590,   Weff: 555,   h: 180, b: 166, tf: 23,   tw: 14 },
  HEM180: { Iz: 990.0, It: 39.0,  Iw: 145000,  Wpl: 880.0, Wel: 710,   Weff: 670,   h: 200, b: 186, tf: 24,   tw: 14.5 },
  HEM200: { Iz: 1063.0,It: 42.5,  Iw: 167000,  Wpl: 977.0, Wel: 875,   Weff: 830,   h: 220, b: 206, tf: 25,   tw: 15 },
  HEM220: { Iz: 1460.0,It: 58.0,  Iw: 290000,  Wpl: 1230.0, Wel: 1030,  Weff: 980,   h: 240, b: 226, tf: 27,   tw: 15.5 },
  HEM240: { Iz: 2010.0,It: 72.0,  Iw: 450000,  Wpl: 1540.0, Wel: 1280,  Weff: 1210,  h: 270, b: 248, tf: 29,   tw: 18 },
  HEM260: { Iz: 2630.0,It: 90.0,  Iw: 680000,  Wpl: 1840.0, Wel: 1510,  Weff: 1430,  h: 290, b: 268, tf: 31,   tw: 18 },
  HEM280: { Iz: 3460.0,It: 113.0, Iw: 1020000, Wpl: 2230.0, Wel: 1820,  Weff: 1720,  h: 310, b: 288, tf: 33,   tw: 18.5 },
  HEM300: { Iz: 4530.0,It: 140.0, Iw: 1500000, Wpl: 2680.0, Wel: 2170,  Weff: 2050,  h: 340, b: 310, tf: 35,   tw: 21 },

  // UPN (Profils en U)
  UPN80:  { Iz: 10.9,  It: 1.0,   Iw: 600,     Wpl: 23.0,  Wel: 19,    Weff: 18,    h: 80,  b: 45,  tf: 8.0,  tw: 6.0 },
  UPN100: { Iz: 20.6,  It: 1.5,   Iw: 1300,    Wpl: 38.0,  Wel: 31,    Weff: 29,    h: 100, b: 50,  tf: 8.5,  tw: 6.0 },
  UPN120: { Iz: 36.4,  It: 2.2,   Iw: 2500,    Wpl: 58.0,  Wel: 47,    Weff: 44,    h: 120, b: 55,  tf: 9.0,  tw: 7.0 },
  UPN140: { Iz: 60.5,  It: 2.9,   Iw: 4500,    Wpl: 83.0,  Wel: 66,    Weff: 62,    h: 140, b: 60,  tf: 10.0, tw: 7.0 },
  UPN160: { Iz: 92.5,  It: 4.2,   Iw: 7800,    Wpl: 118.0, Wel: 92,    Weff: 86,    h: 160, b: 65,  tf: 10.5, tw: 7.5 },
  UPN180: { Iz: 137.0, It: 5.8,   Iw: 12300,   Wpl: 160.0, Wel: 126,   Weff: 118,   h: 180, b: 70,  tf: 11.0, tw: 8.0 },
  UPN200: { Iz: 191.0, It: 7.3,   Iw: 14600,   Wpl: 210.0, Wel: 185,   Weff: 170,   h: 200, b: 75,  tf: 11.5, tw: 8.5 },
  UPN220: { Iz: 262.0, It: 9.3,   Iw: 23000,   Wpl: 271.0, Wel: 220,   Weff: 205,   h: 220, b: 80,  tf: 12.5, tw: 9.0 },
  UPN240: { Iz: 360.0, It: 11.8,  Iw: 36000,   Wpl: 340.0, Wel: 280,   Weff: 260,   h: 240, b: 85,  tf: 13.0, tw: 9.5 },
  UPN260: { Iz: 482.0, It: 14.8,  Iw: 53000,   Wpl: 420.0, Wel: 340,   Weff: 320,   h: 260, b: 90,  tf: 14.0, tw: 10.0 },
  UPN300: { Iz: 803.0, It: 22.0,  Iw: 109000,  Wpl: 590.0, Wel: 470,   Weff: 440,   h: 300, b: 100, tf: 16.0, tw: 10.0 }
};

let momentChart = null;
let shearChart = null;
let deflectionChart = null;
let chiChart = null;
let currentLang = 'fr';

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = "#475569";

const coefficientsEC3 = {
  // Simplement appuyée
  simply: {
    udl: {
      superieure: { C1: 1.132, C2: 0.459, C3: 0.525 },
      centre:     { C1: 1.132, C2: 0.000, C3: 0.525 },
      inferieure: { C1: 1.132, C2: -0.459, C3: 0.525 }
    },
    point: {
      superieure: { C1: 1.365, C2: 0.553, C3: 1.730 },
      centre:     { C1: 1.365, C2: 0.000, C3: 1.730 },
      inferieure: { C1: 1.365, C2: -0.553, C3: 1.730 }
    },
    point_third: {
      superieure: { C1: 1.143, C2: 0.358, C3: 0.867 },
      centre:     { C1: 1.143, C2: 0.000, C3: 0.867 },
      inferieure: { C1: 1.143, C2: -0.358, C3: 0.867 }
    },
    triangular: {
      superieure: { C1: 1.127, C2: 0.454, C3: 0.553 },
      centre:     { C1: 1.127, C2: 0.000, C3: 0.553 },
      inferieure: { C1: 1.127, C2: -0.454, C3: 0.553 }
    },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  // Encastrée-encastrée
  fixed: {
    udl: {
      superieure: { C1: 0.972, C2: 0.304, C3: 0.980 },
      centre:     { C1: 0.972, C2: 0.000, C3: 0.980 },
      inferieure: { C1: 0.972, C2: -0.304, C3: 0.980 }
    },
    point: {
      superieure: { C1: 1.070, C2: 0.432, C3: 3.050 },
      centre:     { C1: 1.070, C2: 0.000, C3: 3.050 },
      inferieure: { C1: 1.070, C2: -0.432, C3: 3.050 }
    },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  // Encastrée-appuyée (mixed)
  mixed: {
    udl: {
      superieure: { C1: 1.030, C2: 0.379, C3: 0.750 },
      centre:     { C1: 1.030, C2: 0.000, C3: 0.750 },
      inferieure: { C1: 1.030, C2: -0.379, C3: 0.750 }
    },
    point: {
      superieure: { C1: 1.218, C2: 0.492, C3: 2.390 },
      centre:     { C1: 1.218, C2: 0.000, C3: 2.390 },
      inferieure: { C1: 1.218, C2: -0.492, C3: 2.390 }
    },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  // Poutre continue (approximation)
  continuous: {
    udl: {
      superieure: { C1: 1.132, C2: 0.459, C3: 0.525 },
      centre:     { C1: 1.132, C2: 0.000, C3: 0.525 },
      inferieure: { C1: 1.132, C2: -0.459, C3: 0.525 }
    },
    point: {
      superieure: { C1: 1.365, C2: 0.553, C3: 1.730 },
      centre:     { C1: 1.365, C2: 0.000, C3: 1.730 },
      inferieure: { C1: 1.365, C2: -0.553, C3: 1.730 }
    },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  // Double console
  doublecantilever: {
    udl: {
      superieure: { C1: 1.132, C2: 0.459, C3: 0.525 },
      centre:     { C1: 1.132, C2: 0.000, C3: 0.525 },
      inferieure: { C1: 1.132, C2: -0.459, C3: 0.525 }
    },
    point: {
      superieure: { C1: 1.365, C2: 0.553, C3: 1.730 },
      centre:     { C1: 1.365, C2: 0.000, C3: 1.730 },
      inferieure: { C1: 1.365, C2: -0.553, C3: 1.730 }
    },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  // Console
  cantilever: {
    udl: {
      superieure: { C1: 1.350, C2: 0.550, C3: 0.600 },
      centre:     { C1: 1.350, C2: 0.000, C3: 0.600 },
      inferieure: { C1: 1.350, C2: -0.550, C3: 0.600 }
    },
    point_end: {
      superieure: { C1: 1.040, C2: 0.420, C3: 0.550 },
      centre:     { C1: 1.040, C2: 0.000, C3: 0.550 },
      inferieure: { C1: 1.040, C2: -0.420, C3: 0.550 }
    }
  }
};

/* =========================================================
   UTILITIES
   ========================================================= */
function getValue(id) { return parseFloat(document.getElementById(id).value); }

function formatNumber(n, decimals=1) {
  if(isNaN(n) || !isFinite(n) || n === 0) return "-";
  return n.toLocaleString(currentLang === 'fr' ? "fr-FR" : "en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function getCoefficients() {
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const loadPos = document.getElementById('loadPosition').value;
  
  // Si le mode manuel est activé
  const isManual = document.getElementById('manualCoeffs')?.checked;
  if (isManual) {
    return {
      C1: getValue('C1_val') || 1.132,
      C2: getValue('C2_val') || 0.459,
      C3: getValue('C3_val') || 0.525
    };
  }

  const defaultCoeff = { C1: 1.132, C2: 0.459, C3: 0.525 };
  let base = coefficientsEC3[support] || coefficientsEC3.simply;
  let config = base[loading];
  
  if (config && config.superieure) {
    return config[loadPos] || config.superieure;
  }
  
  return config || defaultCoeff;
}

function updateCoefficientsDisplay() {
  const { C1, C2, C3 } = getCoefficients();
  if(document.getElementById('c1Display')) document.getElementById('c1Display').innerHTML = C1.toFixed(3);
  if(document.getElementById('c2Display')) document.getElementById('c2Display').innerHTML = C2.toFixed(3);
  if(document.getElementById('c3Display')) document.getElementById('c3Display').innerHTML = C3.toFixed(3);
  
  // Update manual inputs if they exist
  const c1val = document.getElementById('C1_val');
  if(c1val && !document.getElementById('manualCoeffs')?.checked) {
    c1val.value = C1.toFixed(3);
    document.getElementById('C2_val').value = C2.toFixed(3);
    document.getElementById('C3_val').value = C3.toFixed(3);
  }
}

function updateProfile() {
  const profile = document.getElementById('profile').value;
  const data = profilesDB[profile];
  if(data) {
    if(document.getElementById('pillProfile')) document.getElementById('pillProfile').innerHTML = profile;
    if(document.getElementById('iz')) document.getElementById('iz').innerHTML = formatNumber(data.Iz, 0) + " cm⁴";
    if(document.getElementById('it')) document.getElementById('it').innerHTML = formatNumber(data.It, 1) + " cm⁴";
    if(document.getElementById('iw')) document.getElementById('iw').innerHTML = formatNumber(data.Iw, 0) + " cm⁶";
    if(document.getElementById('wpl')) document.getElementById('wpl').innerHTML = formatNumber(data.Wpl, 0) + " cm³";
    updateLoadPosition(); // Recalculer zg
    if(document.getElementById('fabrication')) updateFabrication();
  }
  calculate();
}

function updateLoadPosition() {
  const pos = document.getElementById('loadPosition').value;
  const profile = document.getElementById('profile').value;
  const data = profilesDB[profile];
  if(!data) return;
  let zg = 0;
  if(pos === 'superieure') zg = data.h / 2;
  else if(pos === 'centre') zg = 0;
  else if(pos === 'inferieure') zg = -data.h / 2;
  document.getElementById('zg').value = zg.toFixed(1);
  calculate();
}

function updateFabrication() {
  const profile = document.getElementById('profile').value;
  const data = profilesDB[profile];
  if(!data) return;
  const fab = document.getElementById('fabrication').value;
  const alphaEl = document.getElementById('alphaLT');
  
  const hbRatio = data.h / data.b;
  let alphaVal = "0.49";
  
  if (fab === "lamime") { // Rolled
    if (hbRatio > 2) alphaVal = "0.21";
    else alphaVal = "0.34";
  } else { // Welded
    if (hbRatio > 2) alphaVal = "0.49";
    else alphaVal = "0.76";
  }
  
  alphaEl.value = alphaVal;
  calculate();
}

function updateSteel() { calculate(); }
function updateSupport() { updateCoefficientsDisplay(); calculate(); }
function updateLabels() {
  const loading = document.getElementById('loading').value;
  const isPoint = loading.includes('point');
  const isMoment = loading === 'moment';
  const unit = isMoment ? 'kN.m' : (isPoint ? 'kN' : 'kN/m');
  
  const frG = document.querySelector('label[data-fr="Charge G (kN/m)"]');
  if(frG) {
    frG.setAttribute('data-fr', `Charge G (${unit})`);
    frG.setAttribute('data-en', `Dead Load G (${unit})`);
    frG.textContent = currentLang === 'fr' ? `Charge G (${unit})` : `Dead Load G (${unit})`;
  }
  const frQ = document.querySelector('label[data-fr="Charge Q (kN/m)"]');
  if(frQ) {
    frQ.setAttribute('data-fr', `Charge Q (${unit})`);
    frQ.setAttribute('data-en', `Live Load Q (${unit})`);
    frQ.textContent = currentLang === 'fr' ? `Charge Q (${unit})` : `Live Load Q (${unit})`;
  }
}

function updateLoading() { updateLabels(); updateCoefficientsDisplay(); calculate(); }

function switchTab(tabName) {
  document.getElementById('tabDiagram').classList.remove('active');
  document.getElementById('tabDeformed').classList.remove('active');
  document.getElementById('tab-diagram').classList.remove('active');
  document.getElementById('tab-deformed').classList.remove('active');
  
  if(tabName === 'diagram') {
    document.getElementById('tabDiagram').classList.add('active');
    document.getElementById('tab-diagram').classList.add('active');
  } else {
    document.getElementById('tabDeformed').classList.add('active');
    document.getElementById('tab-deformed').classList.add('active');
  }
}

/* =========================================================
   MECHANIC CALCULATIONS
   ========================================================= */
function getBetaW(sectionClass, profileData) {
  if(!profileData) return 1.0;
  if(sectionClass === 1 || sectionClass === 2) return 1.0;
  if(sectionClass === 3) return profileData.Wel / profileData.Wpl;
  if(sectionClass === 4) return profileData.Weff / profileData.Wpl;
  return 1.0;
}

function getSupportK(support) {
  switch(support) {
    case 'simply': return 1.0;
    case 'fixed': return 0.5;
    case 'mixed': return 0.7;
    case 'cantilever': return 2.0; // Corrigé selon EC3 (2.0 au lieu de 2.1)
    case 'doublecantilever': return 1.0;
    case 'continuous': return 0.85;
    default: return 1.0;
  }
}

function getMomentMax(L, loading, support, qElu) {
  let Mmax = 0;
  if(support === 'cantilever') {
    if(loading === 'udl') Mmax = qElu * L * L / 2;
    else if(loading.includes('point')) Mmax = qElu * L;
    else if(loading === 'moment') Mmax = qElu;
    else Mmax = qElu * L * L / 2;
  } else if(support === 'doublecantilever') {
    Mmax = qElu * L * L / 8;
  } else if(support === 'continuous') {
    Mmax = qElu * L * L / 8;
  } else if(support === 'mixed') {
    if(loading === 'udl') Mmax = qElu * L * L / 8;
    else if(loading.includes('point')) Mmax = qElu * L * 3 / 16;
    else if(loading === 'moment') Mmax = qElu;
    else Mmax = qElu * L * L / 8;
  } else if(support === 'fixed') {
    if(loading === 'udl') Mmax = qElu * L * L / 12;
    else if(loading.includes('point')) Mmax = qElu * L / 8;
    else if(loading === 'moment') Mmax = qElu;
    else Mmax = qElu * L * L / 12;
  } else {
    if(loading === 'udl') Mmax = qElu * L * L / 8;
    else if(loading === 'point') Mmax = qElu * L / 4;
    else if(loading === 'point_third') Mmax = qElu * L / 3;
    else if(loading === 'moment') Mmax = qElu;
    else Mmax = qElu * L * L / 8;
  }
  return Mmax;
}

function getDeflection(L, loading, support, qEls, profileData) {
  if(!profileData) return 0;
  const E = 210000;
  const Iy = profileData.Wel * profileData.h * 500; // Iy in mm4 from Wel (cm3) and h (mm)
  const L_mm = L * 1000;
  let deflection = 0;
  
  if(support === 'cantilever') {
    if(loading === 'udl') deflection = qEls * Math.pow(L_mm, 4) / (8 * E * Iy);
    else if(loading.includes('point')) deflection = qEls * Math.pow(L_mm, 3) / (3 * E * Iy);
    else if(loading === 'moment') deflection = qEls * Math.pow(L_mm, 2) / (2 * E * Iy);
    else deflection = qEls * Math.pow(L_mm, 4) / (8 * E * Iy);
  } else if(support === 'fixed') {
    if(loading === 'udl') deflection = qEls * Math.pow(L_mm, 4) / (384 * E * Iy);
    else if(loading.includes('point')) deflection = qEls * Math.pow(L_mm, 3) / (192 * E * Iy);
    else deflection = qEls * Math.pow(L_mm, 4) / (384 * E * Iy);
  } else if(support === 'mixed') {
    if(loading === 'udl') deflection = qEls * Math.pow(L_mm, 4) / (185 * E * Iy);
    else if(loading.includes('point')) deflection = qEls * Math.pow(L_mm, 3) / (110 * E * Iy);
    else deflection = qEls * Math.pow(L_mm, 4) / (185 * E * Iy);
  } else {
    if(loading === 'udl') deflection = 5 * qEls * Math.pow(L_mm, 4) / (384 * E * Iy);
    else if(loading === 'point') deflection = qEls * Math.pow(L_mm, 3) / (48 * E * Iy);
    else if(loading === 'point_third') deflection = 0.0213 * qEls * Math.pow(L_mm, 3) / (E * Iy);
    else if(loading === 'moment') deflection = qEls * Math.pow(L_mm, 2) / (15 * E * Iy);
    else deflection = 5 * qEls * Math.pow(L_mm, 4) / (384 * E * Iy);
  }
  return deflection;
}

function calculateMcrParams(L, support, zg, zj, kw, data) {
  const E = 210000, G = 80769;
  const Iz = data.Iz * 1e4, It = data.It * 1e4, Iw = data.Iw * 1e6;
  const k = getSupportK(support);
  const { C1, C2, C3 } = getCoefficients();
  const Lmm = L * 1000;
  
  const termA = (Math.PI ** 2 * E * Iz) / ((k * Lmm) ** 2);
  const termB = ((k / kw) ** 2) * (Iw / Iz);
  const termC = (((k * Lmm) / Math.PI) ** 2) * (G * It) / (E * Iz);
  const termD = Math.pow(C2 * zg - C3 * zj, 2);
  const termE = (C2 * zg - C3 * zj);
  
  const insideRoot = termB + termC + termD;
  if (insideRoot < 0) return 0;

  return (C1 * termA * (Math.sqrt(insideRoot) - termE)) / 1e6;
}

function calculateMcr() {
  const L = getValue('L');
  const profile = document.getElementById('profile').value;
  const support = document.getElementById('support').value;
  const zg = getValue('zg');
  const zj = getValue('zj') || 0;
  const kw = getValue('kw') || 1.0;
  const data = profilesDB[profile];
  if(!data) return 0;
  const k = getSupportK(support);
  if(document.getElementById('kCoeff')) document.getElementById('kCoeff').innerHTML = k.toFixed(2);
  return calculateMcrParams(L, support, zg, zj, kw, data);
}

/* =========================================================
   MAIN CALCULATE FUNCTION
   ========================================================= */
let lastCalcData = null;

function calculate(skipSave = false) {
  const profile = document.getElementById('profile').value;
  const fy = getValue('steel');
  const alphaLT = getValue('alphaLT');
  const gammaM1 = getValue('gammaM1') || 1.1;
  const L = getValue('L');
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const zg = getValue('zg');
  const data = profilesDB[profile];
  if(!data) return;

  const qElu = 1.35 * Gk + 1.5 * Qk;
  const qEls = Gk + Qk;
  const MEd = getMomentMax(L, loading, support, qElu);
  
  document.getElementById('pillMmax').innerHTML = formatNumber(MEd, 1);
  const supportEl = document.getElementById('support');
  document.getElementById('pillSupport').innerHTML = supportEl.options[supportEl.selectedIndex].text;
  const loadingEl = document.getElementById('loading');
  document.getElementById('pillLoading').innerHTML = loadingEl.options[loadingEl.selectedIndex].text;

  const betaW = getBetaW(sectionClass, data);
  document.getElementById('betaW').innerHTML = betaW.toFixed(3);
  
  const Mcr = calculateMcr();
  const lambdaLT = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
  const phiLT = 0.5 * (1 + alphaLT * (lambdaLT - 0.2) + lambdaLT * lambdaLT);
  let chiLT = 1 / (phiLT + Math.sqrt(Math.max(phiLT * phiLT - lambdaLT * lambdaLT, 0)));
  chiLT = Math.min(chiLT, 1.0);
  const MbRd = chiLT * data.Wpl * 1000 * fy * betaW / (gammaM1 * 1e6);
  
  document.getElementById('med').innerHTML = formatNumber(MEd, 1) + " kN.m";
  document.getElementById('mcr').innerHTML = formatNumber(Mcr, 1) + " kN.m";
  document.getElementById('lambda').innerHTML = formatNumber(lambdaLT, 3);
  document.getElementById('chi').innerHTML = formatNumber(chiLT, 3);
  document.getElementById('mbRd').innerHTML = formatNumber(MbRd, 1) + " kN.m";
  
  const verifELU = MEd <= MbRd;
  const eluDiv = document.getElementById('verificationELU');
  const tV = currentLang === 'fr' ? 'VÉRIFIÉ' : 'VERIFIED';
  const tNV = currentLang === 'fr' ? 'NON VÉRIFIÉ' : 'NOT VERIFIED';
  if(verifELU) {
    eluDiv.innerHTML = `<span class="status-title">${tV}</span><span>MEd = ${formatNumber(MEd,1)} kN.m &le; Mb,Rd = ${formatNumber(MbRd,1)} kN.m</span>`;
    eluDiv.className = 'verification-box verified-badge';
  } else {
    eluDiv.innerHTML = `<span class="status-title">${tNV}</span><span>MEd = ${formatNumber(MEd,1)} kN.m &gt; Mb,Rd = ${formatNumber(MbRd,1)} kN.m</span>`;
    eluDiv.className = 'verification-box failed-badge';
  }
  
  const deflection = getDeflection(L, loading, support, qEls, data);
  const deflectionLimit = L * 1000 / 250;
  const deflectionRel = deflection > 0 ? (L * 1000 / deflection).toFixed(0) : 0;
  document.getElementById('deflection').innerHTML = formatNumber(deflection, 1) + " mm";
  document.getElementById('deflectionRel').innerHTML = "L/" + deflectionRel;
  document.getElementById('deflectionLimit').innerHTML = formatNumber(deflectionLimit, 1) + " mm";
  document.getElementById('deltaRatio').innerHTML = "1/" + (L * 1000 / deflection).toFixed(0);
  
  const verifELS = deflection <= deflectionLimit;
  const elsDiv = document.getElementById('verificationELS');
  if(verifELS) {
    elsDiv.innerHTML = `<span class="status-title">${tV}</span><span>${currentLang==='fr'?'Flèche':'Deflection'} = ${formatNumber(deflection,1)} mm &le; L/250 = ${formatNumber(deflectionLimit,1)} mm</span>`;
    elsDiv.className = 'verification-box verified-badge';
  } else {
    elsDiv.innerHTML = `<span class="status-title">${tNV}</span><span>${currentLang==='fr'?'Flèche':'Deflection'} = ${formatNumber(deflection,1)} mm &gt; L/250 = ${formatNumber(deflectionLimit,1)} mm</span>`;
    elsDiv.className = 'verification-box failed-badge';
  }

  // Save for modal and URL
  lastCalcData = { profile, L, lambdaLT, chiLT, MEd, MbRd, verifELU, verifELS };
  
  drawDiagrams();
  drawDeflectionDiagram();
  drawSupportDiagram();
  if(!document.getElementById('chiModal').style.display || document.getElementById('chiModal').style.display !== 'none') {
    drawChiLTCurve();
  }
  
  // Suggest optimal
  findOptimalProfile(L, support, loading, Gk, Qk, zg, fy, alphaLT, sectionClass);

  if(!skipSave) {
    saveToHistory();
    if(document.getElementById('comparePanel').style.display === 'block') {
      compareProfiles();
    }
  }
}

/* =========================================================
   DIAGRAMS
   ========================================================= */
function drawDiagrams() {
  const L = getValue('L'), support = document.getElementById('support').value, loading = document.getElementById('loading').value;
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const qElu = 1.35 * Gk + 1.5 * Qk;
  const Mmax = getMomentMax(L, loading, support, qElu);
  const x = [], M = [], V = [], steps = 300;
  for(let i = 0; i <= steps; i++) {
    const xi = i * L / steps;
    x.push(xi);
    let moment = 0, shear = 0;
    const px = xi / L; // ratio [0, 1]
    
    if(support === 'cantilever') {
      if(loading === 'udl') { moment = - Mmax * Math.pow(1 - px, 2); shear = (2 * Mmax / L) * (1 - px); }
      else { moment = - Mmax * (1 - px); shear = Mmax / L; }
    } else if(support === 'fixed') {
      if(loading === 'udl') { moment = - Mmax + 6 * Mmax * px - 6 * Mmax * px * px; shear = (2 * Mmax / L) * (0.5 - px); }
      else { moment = 4 * Mmax * px * (1 - px); shear = 0; /* approx for other loads if needed */ }
    } else if(support === 'mixed') {
      if(loading === 'udl') { moment = - Mmax + 5 * Mmax * px - 4 * Mmax * px * px; shear = (2 * Mmax / L) * (0.625 - px); }
      else { moment = 4 * Mmax * px * (1 - px); shear = 0; }
    } else {
      // simply supported default
      if(loading === 'udl') { moment = 4 * Mmax * px * (1 - px); shear = (4 * Mmax / L) * (0.5 - px); }
      else if(loading === 'point') { 
        if(px <= 0.5) { moment = 2 * Mmax * px; shear = 2 * Mmax / L; } 
        else { moment = 2 * Mmax * (1 - px); shear = - 2 * Mmax / L; } 
      }
      else if(loading === 'point_end') { moment = - Mmax * (1 - px); shear = Mmax / L; } // fallback
      else if(loading === 'moment') { moment = - Mmax * (1 - px); shear = Mmax / L; } // applied moment at left
      else { moment = 4 * Mmax * px * (1 - px); shear = (4 * Mmax / L) * (0.5 - px); }
    }
    M.push(moment); V.push(shear);
  }
  const textColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#94a3b8' : '#475569';
  
  const momentCtx = document.getElementById('momentChart').getContext('2d');
  if(momentChart) momentChart.destroy();
  momentChart = new Chart(momentCtx, {
    type: 'line',
    data: { datasets: [{ label: currentLang==='fr'?'Moment fléchissant M(x) [kN.m]':'Bending Moment M(x) [kN.m]', data: x.map((xi, index) => ({ x: xi, y: M[index] })), borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.12)', borderWidth: 2.5, fill: 'origin', tension: 0.25, pointRadius: 0 }] },
    options: { responsive: true, color: textColor, scales: { x: { type: 'linear', min: 0, max: L, position: 'top', ticks:{color:textColor} }, y: { reverse: true, title: { display: true, text: 'M(x) [kN.m]', color: textColor }, ticks:{color:textColor} } } }
  });
  const shearCtx = document.getElementById('shearChart').getContext('2d');
  if(shearChart) shearChart.destroy();
  shearChart = new Chart(shearCtx, {
    type: 'line',
    data: { datasets: [{ label: currentLang==='fr'?'Effort tranchant V(x) [kN]':'Shear Force V(x) [kN]', data: x.map((xi, index) => ({ x: xi, y: V[index] })), borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.10)', borderWidth: 2.5, fill: true, tension: 0.15, pointRadius: 0 }] },
    options: { responsive: true, color: textColor, scales: { x: { type: 'linear', min: 0, max: L, ticks:{color:textColor} }, y: { title: { display: true, text: 'V(x) [kN]', color:textColor }, ticks:{color:textColor} } } }
  });
}

function drawDeflectionDiagram() {
  const L = getValue('L'), profile = document.getElementById('profile').value;
  const data = profilesDB[profile]; if(!data) return;
  const E = 210000, Iy = data.Wel * data.h * 500, qEls = getValue('Gk') + getValue('Qk'), L_mm = L * 1000;
  const loading = document.getElementById('loading').value;
  const support = document.getElementById('support').value;
  const x = [], w = [], steps = 300;
  for(let i = 0; i <= steps; i++) {
    const xi = i * L / steps; x.push(xi);
    const px = xi / L;
    let deflection = 0;
    if(support === 'cantilever') {
      if(loading === 'udl') deflection = qEls * Math.pow(L_mm, 4) / (24 * E * Iy) * (Math.pow(px, 4) - 4*px + 3);
      else deflection = qEls * Math.pow(L_mm, 3) / (6 * E * Iy) * (2 - 3*px + px*px*px);
    } else {
      if(loading === 'udl') deflection = qEls * Math.pow(L_mm, 4) / (24 * E * Iy) * (px - 2 * Math.pow(px, 3) + Math.pow(px, 4));
      else deflection = qEls * Math.pow(L_mm, 3) / (48 * E * Iy) * (3*px - 4*Math.pow(px, 3)); // approx shape
    }
    w.push(Math.abs(deflection));
  }
  let maxDeflection = Math.max(...w);
  if(maxDeflection === 0) maxDeflection = 1;
  const textColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#94a3b8' : '#475569';
  
  const ctx = document.getElementById('deflectionChart').getContext('2d');
  if(deflectionChart) deflectionChart.destroy();
  deflectionChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [{ label: currentLang==='fr'?'Déformée (amplifiée)':'Deformed shape (amplified)', data: x.map((xi, index) => ({ x: xi, y: w[index] / maxDeflection * 100 })), borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', borderWidth: 2.5, fill: true, tension: 0.3, pointRadius: 0 }] },
    options: { responsive: true, color:textColor, scales: { x: { type: 'linear', min: 0, max: L, ticks:{color:textColor} }, y: { reverse: true, ticks:{display:false} } } }
  });
}

function drawSupportDiagram() {
  const support = document.getElementById('support').value;
  const div = document.getElementById('supportDiagram');
  const kObj = document.getElementById('kCoeff').innerHTML;
  
  let leftSVG = '';
  let rightSVG = '';
  const w = 400, h = 100;
  const yLine = 50;
  const beamColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#f1f5f9' : '#0f172a';
  const beam = `<line x1="50" y1="${yLine}" x2="350" y2="${yLine}" class="beam-line" stroke="${beamColor}" />`;
  
  const pinSupport = `<polygon points="0,0 -15,20 15,20" class="support-fill" transform="translate({x},${yLine})" /><line x1="-20" y1="${yLine+20}" x2="20" y2="${yLine+20}" class="beam-line" stroke="${beamColor}" stroke-width="2" transform="translate({x},0)" />`;
  const fixedSupport = `<line x1="{x}" y1="${yLine-25}" x2="{x}" y2="${yLine+25}" class="beam-line" stroke="${beamColor}" /><path d="M {x} ${yLine-20} L {x1} ${yLine-10} M {x} ${yLine-10} L {x1} ${yLine} M {x} ${yLine} L {x1} ${yLine+10} M {x} ${yLine+10} L {x1} ${yLine+20}" class="beam-line" stroke="${beamColor}" stroke-width="1" />`;
  
  if (support === 'simply') {
    leftSVG = pinSupport.replaceAll('{x}', '50');
    rightSVG = pinSupport.replaceAll('{x}', '350');
  } else if (support === 'fixed') {
    leftSVG = fixedSupport.replaceAll('{x}', '50').replaceAll('{x1}', '40');
    rightSVG = fixedSupport.replaceAll('{x}', '350').replaceAll('{x1}', '360');
  } else if (support === 'mixed') {
    leftSVG = fixedSupport.replaceAll('{x}', '50').replaceAll('{x1}', '40');
    rightSVG = pinSupport.replaceAll('{x}', '350');
  } else if (support === 'cantilever') {
    leftSVG = fixedSupport.replaceAll('{x}', '50').replaceAll('{x1}', '40');
  } else if (support === 'continuous') {
    leftSVG = pinSupport.replaceAll('{x}', '50');
    const midSVG = pinSupport.replaceAll('{x}', '200');
    rightSVG = pinSupport.replaceAll('{x}', '350') + midSVG;
  }
  
  const svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%">
    <text x="200" y="20" font-family="Inter" font-size="14" font-weight="600" fill="#64748b" text-anchor="middle">${currentLang === 'fr' ? 'Schéma Statique' : 'Static Scheme'} (k = ${kObj})</text>
    ${beam}
    ${leftSVG}
    ${rightSVG}
  </svg>`;
  
  div.innerHTML = svg;
}

/* =========================================================
   FEATURE 7 : χLT Curve
   ========================================================= */
function openChiModal() {
  document.getElementById('chiModal').style.display = 'flex';
  drawChiLTCurve();
}

function closeChiModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) return;
  document.getElementById('chiModal').style.display = 'none';
}

function drawChiLTCurve() {
  if (!lastCalcData) return;
  const alphas = [0.21, 0.34, 0.49, 0.76];
  const curves = [];
  const labels = [];

  for (let lambda = 0; lambda <= 2.5; lambda += 0.05) {
    labels.push(lambda);
    const row = { x: lambda };
    alphas.forEach((a, i) => {
      const phi = 0.5 * (1 + a * (lambda - 0.2) + lambda * lambda);
      let chi = 1 / (phi + Math.sqrt(Math.max(phi * phi - lambda * lambda, 0)));
      row[`c${i}`] = Math.min(chi, 1.0);
    });
    curves.push(row);
  }

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#94a3b8' : '#475569';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  const cColors = isDark 
    ? ['#f1f5f9', '#94a3b8', '#64748b', '#475569'] 
    : ['#0f172a', '#475569', '#64748b', '#94a3b8'];

  const ctx = document.getElementById('chiChart').getContext('2d');
  if(chiChart) chiChart.destroy();
  chiChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Courbe a (0.21)', data: curves.map(d => ({x:d.x, y:d.c0})), borderColor: cColors[0], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        { label: 'Courbe b (0.34)', data: curves.map(d => ({x:d.x, y:d.c1})), borderColor: cColors[1], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        { label: 'Courbe c (0.49)', data: curves.map(d => ({x:d.x, y:d.c2})), borderColor: cColors[2], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        { label: 'Courbe d (0.76)', data: curves.map(d => ({x:d.x, y:d.c3})), borderColor: cColors[3], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        {
          label: `${lastCalcData.profile} (Projet)`,
          data: [{ x: lastCalcData.lambdaLT, y: lastCalcData.chiLT }],
          borderColor: '#6366f1',
          backgroundColor: '#6366f1',
          pointRadius: 6,
          pointHoverRadius: 8,
          showLine: false
        }
      ]
    },
    options: {
      responsive: true,
      color: textColor,
      scales: {
        x: { type: 'linear', min: 0, max: 2.5, title: {display:true, text: 'λ̄LT'}, ticks:{color:textColor} },
        y: { type: 'linear', min: 0, max: 1.1, title: {display:true, text: 'χLT'}, ticks:{color:textColor} }
      },
      plugins: {
        legend: { position: 'bottom', labels: {color:textColor} }
      }
    }
  });
}

/* =========================================================
   FEATURE 8 : Export PDF
   ========================================================= */
function exportPDF() {
  window.print();
}

/* =========================================================
   FEATURE 9 : Compare Profiles
   ========================================================= */
function toggleCompare() {
  const p = document.getElementById('comparePanel');
  if (p.style.display === 'none') {
    p.style.display = 'block';
    p.classList.add('revealed');
    compareProfiles();
    // Scroll to it
    p.scrollIntoView({behavior:'smooth'});
  } else {
    p.style.display = 'none';
  }
}

function compareProfiles() {
  if (!lastCalcData) return;
  const fy = getValue('steel');
  const alphaLT = getValue('alphaLT');
  const gammaM1 = getValue('gammaM1') || 1.1;
  const L = getValue('L');
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const Gk = getValue('Gk'), Qk = getValue('Qk'), zg = getValue('zg');
  const qElu = 1.35 * Gk + 1.5 * Qk;
  const qEls = Gk + Qk;
  const MEd = getMomentMax(L, loading, support, qElu);
  const defLimit = L * 1000 / 250;
  const zj = getValue('zj') || 0;
  const kw = getValue('kw') || 1.0;
  
  const type = document.getElementById('profile').value.substring(0,3);
  const results = [];

  Object.keys(profilesDB).forEach(key => {
    if(!key.startsWith(type)) return;
    const data = profilesDB[key];
    const betaW = getBetaW(sectionClass, data);
    const Mcr = calculateMcrParams(L, support, zg, zj, kw, data);
    const lambdaLT = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
    const phiLT = 0.5 * (1 + alphaLT * (lambdaLT - 0.2) + lambdaLT * lambdaLT);
    let chiLT = Math.min(1 / (phiLT + Math.sqrt(Math.max(phiLT * phiLT - lambdaLT * lambdaLT, 0))), 1.0);
    const MbRd = chiLT * data.Wpl * 1000 * fy * betaW / (gammaM1 * 1e6);
    const def = getDeflection(L, loading, support, qEls, data);
    results.push({ key, chiLT, MbRd, ok: (MEd <= MbRd && def <= defLimit), def });
  });

  results.sort((a,b) => a.MbRd - b.MbRd);
  
  let html = `<table class="compare-table">
    <tr>
      <th>Profilé</th>
      <th>χLT</th>
      <th>Mb,Rd (kN.m)</th>
      <th>Ratio MEd/MbRd</th>
      <th>Flèche (mm)</th>
      <th>Statut</th>
    </tr>`;
  
  results.forEach(r => {
    const isCurrent = r.key === lastCalcData.profile;
    const trClass = isCurrent ? 'current-row' : (r.ok ? 'ok-row' : 'fail-row');
    const ratio = (MEd / r.MbRd * 100).toFixed(1);
    const tag = r.ok ? `<span class="compare-tag tag-ok">OK</span>` : `<span class="compare-tag tag-fail">KO</span>`;
    html += `<tr class="${trClass}">
      <td>${r.key} ${isCurrent ? '<br><span class="compare-tag tag-current">ACTUEL</span>' : ''}</td>
      <td>${r.chiLT.toFixed(3)}</td>
      <td>${r.MbRd.toFixed(1)}</td>
      <td>${ratio}%</td>
      <td>${r.def.toFixed(1)}</td>
      <td>${tag}</td>
    </tr>`;
  });
  
  html += `</table>`;
  document.getElementById('compareTable').innerHTML = html;
}

/* =========================================================
   FEATURE 10 : History (localStorage)
   ========================================================= */
function saveToHistory() {
  if (!lastCalcData) return;
  const str = localStorage.getItem('spillcalc_history');
  let history = str ? JSON.parse(str) : [];
  
  // Create history entry
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    profile: lastCalcData.profile,
    L: lastCalcData.L,
    MEd: formatNumber(lastCalcData.MEd,1),
    MbRd: formatNumber(lastCalcData.MbRd,1),
    ok: lastCalcData.verifELU && lastCalcData.verifELS
  };

  history.unshift(entry);
  if(history.length > 10) history = history.slice(0, 10);
  localStorage.setItem('spillcalc_history', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const div = document.getElementById('historyList');
  const str = localStorage.getItem('spillcalc_history');
  if(!str) { div.innerHTML = `<div style="font-size:12px;color:var(--text-secondary)">Aucun calcul récent</div>`; return; }
  let history = JSON.parse(str);
  
  let html = '';
  history.forEach(h => {
    const badge = h.ok ? `<span class="history-badge badge-ok">OK</span>` : `<span class="history-badge badge-fail">FAIL</span>`;
    html += `
      <div class="history-item">
        <div class="history-item-left">
          <span class="history-item-profile">${h.profile} (L=${h.L}m)</span>
          <span class="history-item-meta">${h.date} — MEd=${h.MEd}</span>
        </div>
        <div class="history-item-right">${badge}</div>
      </div>
    `;
  });
  div.innerHTML = html;
}

function toggleHistory() {
  const p = document.getElementById('historyPanel');
  if (p.style.display === 'none') {
    renderHistory();
    p.style.display = 'block';
    p.classList.add('revealed');
  } else {
    p.style.display = 'none';
  }
}

function clearHistory() {
  localStorage.removeItem('spillcalc_history');
  renderHistory();
}

/* =========================================================
   FEATURE 11 : Dark Mode
   ========================================================= */
function initTheme() {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('iconDark').style.display = 'none';
    document.getElementById('iconLight').style.display = 'block';
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  
  if (isDark) {
    document.getElementById('iconLight').style.display = 'none';
    document.getElementById('iconDark').style.display = 'block';
  } else {
    document.getElementById('iconDark').style.display = 'none';
    document.getElementById('iconLight').style.display = 'block';
  }
  
  // Re-draw charts with correct colors
  drawDiagrams();
  drawDeflectionDiagram();
  if(!document.getElementById('chiModal').style.display || document.getElementById('chiModal').style.display !== 'none') {
    drawChiLTCurve();
  }
}

/* =========================================================
   FEATURE 12 : Share URL
   ========================================================= */
function shareURL() {
  const p = {
    pr: document.getElementById('profile').value,
    sc: document.getElementById('sectionClass').value,
    st: document.getElementById('steel').value,
    l:  document.getElementById('L').value,
    gk: document.getElementById('Gk').value,
    qk: document.getElementById('Qk').value,
    sp: document.getElementById('support').value,
    ld: document.getElementById('loading').value,
    fb: document.getElementById('fabrication') ? document.getElementById('fabrication').value : 'lamime',
    al: document.getElementById('alphaLT').value,
    gm: document.getElementById('gammaM1').value,
    lp: document.getElementById('loadPosition').value,
    zg: document.getElementById('zg').value,
    zj: document.getElementById('zj').value,
    kw: document.getElementById('kw').value
  };
  const hash = btoa(JSON.stringify(p));
  window.history.replaceState(null, null, `#${hash}`);
  
  // Copy to clipboard
  const urlToShare = window.location.href;
  navigator.clipboard.writeText(urlToShare).then(() => {
    // Show Toast
    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerText = currentLang === 'fr' ? 'Lien copié dans le presse-papiers !' : 'Link copied to clipboard!';
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('visible'), 100);
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }).catch(() => {
    alert(currentLang === 'fr' ? 'Impossible de copier le lien. Copiez-le manuellement depuis la barre d\'adresse.' : 'Could not copy link. Manually copy it from the address bar.');
  });
}

function loadFromURL() {
  if(window.location.hash) {
    try {
      const p = JSON.parse(atob(window.location.hash.substring(1)));
      if(p.pr) document.getElementById('profile').value = p.pr;
      if(p.sc) document.getElementById('sectionClass').value = p.sc;
      if(p.st) document.getElementById('steel').value = p.st;
      if(p.l)  document.getElementById('L').value = p.l;
      if(p.gk) document.getElementById('Gk').value = p.gk;
      if(p.qk) document.getElementById('Qk').value = p.qk;
      if(p.sp) document.getElementById('support').value = p.sp;
      if(p.ld) document.getElementById('loading').value = p.ld;
      if(p.fb && document.getElementById('fabrication')) document.getElementById('fabrication').value = p.fb;
      if(p.al) document.getElementById('alphaLT').value = p.al;
      if(p.gm) document.getElementById('gammaM1').value = p.gm;
      if(p.lp) document.getElementById('loadPosition').value = p.lp;
      if(p.zg) document.getElementById('zg').value = p.zg;
      if(p.zj) document.getElementById('zj').value = p.zj;
      if(p.kw) document.getElementById('kw').value = p.kw;
    } catch(e) { console.error("Invalid URL parameters"); }
  }
}

/* =========================================================
   FEATURE 13 : Optimal Profile Suggestion
   ========================================================= */
function findOptimalProfile(L, support, loading, Gk, Qk, zg, fy, alphaLT, sectionClass) {
  const panel = document.getElementById('optimalSuggestion');
  const type = document.getElementById('profile').value.substring(0,3);
  const qElu = 1.35 * Gk + 1.5 * Qk;
  const qEls = Gk + Qk;
  const MEd = getMomentMax(L, loading, support, qElu);
  const defLimit = L * 1000 / 250;
  const zj = getValue('zj') || 0;
  const kw = getValue('kw') || 1.0;
  const gammaM1 = getValue('gammaM1') || 1.1;

  let optimal = null;
  
  for(let key in profilesDB) {
    if(!key.startsWith(type)) continue;
    const data = profilesDB[key];
    const betaW = getBetaW(sectionClass, data);
    const Mcr = calculateMcrParams(L, support, zg, zj, kw, data);
    const lambdaLT = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
    const phiLT = 0.5 * (1 + alphaLT * (lambdaLT - 0.2) + lambdaLT * lambdaLT);
    let chiLT = Math.min(1 / (phiLT + Math.sqrt(Math.max(phiLT * phiLT - lambdaLT * lambdaLT, 0))), 1.0);
    const MbRd = chiLT * data.Wpl * 1000 * fy * betaW / (gammaM1 * 1e6);
    const def = getDeflection(L, loading, support, qEls, data);
    
    if(MEd <= MbRd && def <= defLimit) {
      optimal = { key, MbRd, def };
      break; 
    }
  }

  if (optimal) {
    panel.style.display = 'block';
    const isCurrent = optimal.key === lastCalcData.profile;
    const title = currentLang === 'fr' ? 'Profilé minimum recommandé' : 'Minimum optimal section';
    if(isCurrent) {
      panel.innerHTML = `<div class="opt-title">${title}</div><div class="opt-item">${optimal.key} <span class="opt-ok">✓ Déjà sélectionné</span></div>`;
    } else {
      panel.innerHTML = `<div class="opt-title">${title}</div>
        <div class="opt-item" onclick="applyOptimal('${optimal.key}')">
          ${optimal.key} 
          <span class="opt-badge">Mb,Rd = ${optimal.MbRd.toFixed(0)}</span>
          <span style="flex:1;text-align:right;color:var(--accent-color);font-size:10px">Appliquer →</span>
        </div>`;
    }
  } else {
    panel.style.display = 'none';
  }
}

function applyOptimal(key) {
  document.getElementById('profile').value = key;
  updateProfile();
}

/* =========================================================
   FEATURE 14 : Translation (FR/EN)
   ========================================================= */
function initLang() {
  const l = localStorage.getItem('lang');
  if(l === 'en') toggleLang();
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  document.getElementById('langLabel').innerText = currentLang === 'fr' ? 'EN' : 'FR';
  
  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });
  
  // Re-calculate to update JS-rendered text
  calculate(true);
}

/* =========================================================
   FEATURE 15 : Mobile Tabs
   ========================================================= */
function switchMobileTab(tab) {
  document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.mobile-section').forEach(s => s.classList.remove('active-mobile'));
  
  if(tab === 'input') {
    document.getElementById('mTabInput').classList.add('active');
    document.getElementById('sectionInput').classList.add('active-mobile');
  } else if(tab === 'results') {
    document.getElementById('mTabResults').classList.add('active');
    document.getElementById('sectionResults').classList.add('active-mobile');
  } else {
    document.getElementById('mTabGraphs').classList.add('active');
    document.getElementById('sectionGraphs').classList.add('active-mobile');
  }
}

/* =========================================================
   INIT
   ========================================================= */
function calculateCombinations() {
  const Gk = getValue('Gk'), Qk = getValue('Qk'), L = getValue('L');
  const qElu = 1.35 * Gk + 1.5 * Qk, qEls = Gk + Qk;
  const title = currentLang === 'fr' ? "COMBINAISONS D'ACTIONS" : "LOAD COMBINATIONS";
  alert(`${title}\n\nELU (1.35G + 1.5Q) : ${qElu.toFixed(2)} kN/m\nELS (G + Q) : ${qEls.toFixed(2)} kN/m`);
}

function resetToCantilever() {
  document.getElementById('profile').value = 'IPE300';
  document.getElementById('support').value = 'cantilever';
  document.getElementById('loading').value = 'point_end';
  document.getElementById('L').value = '4.0';
  document.getElementById('sectionClass').value = '1';
  updateProfile();
}

window.onload = () => {
  initTheme();
  loadFromURL();
  initLang();
  initTooltips();
  initValidation();
  updateLabels();
  updateProfile(); 
  updateCoefficientsDisplay(); 
  calculate(true);
  initStickySummary();
  initScrollReveal();
  
  // Keyboard shortcut: Enter to calculate
  document.addEventListener('keydown', e => {
    if(e.key === 'Enter' && !e.target.matches('button')) calculate();
  });

  // Mobile initial tab
  if(window.innerWidth <= 768) {
    switchMobileTab('input');
  }
};

/* =========================================================
   ENHANCED CALCULATE — hooks for new features
   ========================================================= */
// Patch calculate() to call new UI updaters
const _originalCalculate = calculate;
calculate = function(skipSave = false) {
  validateInputs();
  _originalCalculate(skipSave);
  updateUtilizationGauges();
  updateStickySummary();
  drawSectionSVG();
  drawAnimatedLoad();
  animateResultValues();
};

/* =========================================================
   FEATURE A — Cross-Section SVG Preview (Enhanced)
   ========================================================= */
function drawSectionSVG() {
  const profile = document.getElementById('profile').value;
  const data = profilesDB[profile];
  if(!data) return;
  const div = document.getElementById('sectionSVG');
  const dims = document.getElementById('sectionDims');
  if(!div) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const steel = isDark ? '#818cf8' : '#6366f1';
  const outline = isDark ? '#e2e8f0' : '#1e293b';
  const fillColor = isDark ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.15)';
  const dimColor = isDark ? '#64748b' : '#94a3b8';
  const dimText = isDark ? '#94a3b8' : '#64748b';

  // Larger canvas for better visibility
  const canvasW = 240, canvasH = 210;
  const cx = canvasW / 2, cy = 95; // center of the profile

  // Scale to fit comfortably within the canvas (max profile height ~160, width ~140)
  const maxH = 160, maxB = 140;
  const scale = Math.min(maxH / data.h, maxB / data.b);

  const H  = data.h * scale;
  const B  = data.b * scale;
  // Enforce minimum flange thickness of 8px and web width of 5px for visibility
  const TF = Math.max(data.tf * scale, 8);
  const TW = Math.max(data.tw * scale, 5);

  // Profile coordinates
  const top    = cy - H / 2;
  const bottom = cy + H / 2;
  const left   = cx - B / 2;
  const right  = cx + B / 2;

  // Fillet radius (visual only, proportional)
  const r = Math.max(Math.min(TF * 0.6, TW * 0.4), 2);

  // Build I-beam as a single path for clean rendering
  const path = `
    M ${left} ${top}
    L ${right} ${top}
    L ${right} ${top + TF}
    L ${cx + TW/2 + r} ${top + TF}
    Q ${cx + TW/2} ${top + TF} ${cx + TW/2} ${top + TF + r}
    L ${cx + TW/2} ${bottom - TF - r}
    Q ${cx + TW/2} ${bottom - TF} ${cx + TW/2 + r} ${bottom - TF}
    L ${right} ${bottom - TF}
    L ${right} ${bottom}
    L ${left} ${bottom}
    L ${left} ${bottom - TF}
    L ${cx - TW/2 - r} ${bottom - TF}
    Q ${cx - TW/2} ${bottom - TF} ${cx - TW/2} ${bottom - TF - r}
    L ${cx - TW/2} ${top + TF + r}
    Q ${cx - TW/2} ${top + TF} ${cx - TW/2 - r} ${top + TF}
    L ${left} ${top + TF}
    Z`;

  // Dimension annotation lines
  const dimGap = 18;
  // Height dimension (left side)
  const hLineX = left - dimGap;
  const hDims = `
    <line x1="${hLineX}" y1="${top}" x2="${hLineX}" y2="${bottom}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${hLineX - 4}" y1="${top}" x2="${hLineX + 4}" y2="${top}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${hLineX - 4}" y1="${bottom}" x2="${hLineX + 4}" y2="${bottom}" stroke="${dimColor}" stroke-width="1"/>
    <text x="${hLineX - 4}" y="${cy + 4}" text-anchor="end" font-family="Inter" font-size="10" fill="${dimText}" font-weight="600">h</text>`;

  // Width dimension (bottom)
  const bLineY = bottom + dimGap;
  const bDims = `
    <line x1="${left}" y1="${bLineY}" x2="${right}" y2="${bLineY}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${left}" y1="${bLineY - 4}" x2="${left}" y2="${bLineY + 4}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${right}" y1="${bLineY - 4}" x2="${right}" y2="${bLineY + 4}" stroke="${dimColor}" stroke-width="1"/>
    <text x="${cx}" y="${bLineY - 5}" text-anchor="middle" font-family="Inter" font-size="10" fill="${dimText}" font-weight="600">b</text>`;

  // Flange thickness indicator (right side, top flange)
  const tfX = right + dimGap;
  const tfDims = `
    <line x1="${tfX}" y1="${top}" x2="${tfX}" y2="${top + TF}" stroke="${steel}" stroke-width="1" opacity="0.7"/>
    <line x1="${tfX - 3}" y1="${top}" x2="${tfX + 3}" y2="${top}" stroke="${steel}" stroke-width="1" opacity="0.7"/>
    <line x1="${tfX - 3}" y1="${top + TF}" x2="${tfX + 3}" y2="${top + TF}" stroke="${steel}" stroke-width="1" opacity="0.7"/>
    <text x="${tfX + 4}" y="${top + TF/2 + 3}" font-family="Inter" font-size="9" fill="${steel}" font-weight="600" opacity="0.8">tf</text>`;

  const svg = `<svg viewBox="0 0 ${canvasW} ${canvasH}" width="100%" style="max-width:280px;height:auto;">
    <!-- Profile shape -->
    <path d="${path}" fill="${fillColor}" stroke="${outline}" stroke-width="2" stroke-linejoin="round"/>
    <!-- Neutral axis -->
    <line x1="${left - 6}" y1="${cy}" x2="${right + 6}" y2="${cy}" stroke="${steel}" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.5"/>
    <!-- Dimension annotations -->
    ${hDims}
    ${bDims}
    ${tfDims}
    <!-- Profile label -->
    <text x="${cx}" y="${canvasH - 2}" text-anchor="middle" font-family="Outfit" font-size="13" fill="${steel}" font-weight="700">${profile}</text>
  </svg>`;
  div.innerHTML = svg;

  // Dim chips
  dims.innerHTML = [
    ['h', data.h, 'mm'], ['b', data.b, 'mm'], ['tf', data.tf, 'mm'], ['tw', data.tw, 'mm']
  ].map(([k,v,u]) => `<div class="section-dims-chip">${k} = <span>${v} ${u}</span></div>`).join('');
}

/* =========================================================
   FEATURE B — Tooltips
   ========================================================= */
function initTooltips() {
  const box = document.getElementById('tooltipBox');
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('.tooltip-icon');
    if(!el) return;
    const tip = el.getAttribute('data-tip');
    if(!tip) return;
    box.textContent = tip;
    box.style.display = 'block';
    positionTooltip(e, box);
  });
  document.addEventListener('mousemove', e => {
    if(box.style.display === 'none') return;
    positionTooltip(e, box);
  });
  document.addEventListener('mouseout', e => {
    if(e.target.closest('.tooltip-icon')) box.style.display = 'none';
  });
}

function positionTooltip(e, box) {
  const gap = 12;
  let x = e.clientX + gap;
  let y = e.clientY + gap;
  const bw = box.offsetWidth || 240;
  const bh = box.offsetHeight || 60;
  if(x + bw > window.innerWidth - 10) x = e.clientX - bw - gap;
  if(y + bh > window.innerHeight - 10) y = e.clientY - bh - gap;
  box.style.left = x + 'px';
  box.style.top  = y + 'px';
}

/* =========================================================
   FEATURE C — Count-up / value pop animation
   ========================================================= */
function animateResultValues() {
  ['mcr','lambda','chi','mbRd','deflection','deflectionRel','deflectionLimit','deltaRatio'].forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    el.classList.remove('value-animate');
    void el.offsetWidth; // reflow to restart
    el.classList.add('value-animate');
    el.addEventListener('animationend', () => el.classList.remove('value-animate'), { once: true });
  });
}

/* =========================================================
   FEATURE D — Input Validation
   ========================================================= */
function initValidation() {
  [
    { id:'L',  min:0.1, max:100, msgFr:'Longueur doit être > 0 m', msgEn:'Length must be > 0 m' },
    { id:'Gk', min:0,   max:1000, msgFr:'Charge G doit être ≥ 0', msgEn:'Load G must be ≥ 0' },
    { id:'Qk', min:0,   max:1000, msgFr:'Charge Q doit être ≥ 0', msgEn:'Load Q must be ≥ 0' },
  ].forEach(({ id, min, max, msgFr, msgEn }) => {
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('input', () => {
      const v = parseFloat(el.value);
      const errEl = el.parentElement.querySelector('.field-error-msg');
      if(errEl) errEl.remove();
      if(isNaN(v) || v < min || v > max) {
        el.classList.add('input-error');
        el.classList.remove('input-ok');
        const msg = document.createElement('div');
        msg.className = 'field-error-msg';
        msg.textContent = '⚠ ' + (currentLang === 'fr' ? msgFr : msgEn);
        el.parentElement.appendChild(msg);
      } else {
        el.classList.remove('input-error');
        el.classList.add('input-ok');
      }
    });
  });
}

function validateInputs() {
  const L = getValue('L'), Gk = getValue('Gk'), Qk = getValue('Qk');
  return (L > 0 && Gk >= 0 && Qk >= 0);
}

/* =========================================================
   FEATURE G/H — Utilization Gauge Bars
   ========================================================= */
function updateUtilizationGauges() {
  if(!lastCalcData) return;
  const { MEd, MbRd, verifELU } = lastCalcData;
  const eluWrap = document.getElementById('eluGaugeWrap');
  const eluFill = document.getElementById('eluFill');
  const eluRatio = document.getElementById('eluRatio');

  if(eluWrap && MEd > 0 && MbRd > 0) {
    eluWrap.style.display = 'block';
    const pct = Math.min(MEd / MbRd * 100, 200);
    const displayPct = (MEd / MbRd * 100).toFixed(1);
    eluRatio.textContent = displayPct + '%';
    eluFill.style.width = Math.min(pct, 100) + '%';
    eluFill.className = 'util-fill' + (pct > 100 ? ' danger' : pct > 80 ? ' warn' : '');
  }

  // ELS gauge (deflection)
  const elsWrap = document.getElementById('elsGaugeWrap');
  const elsFill = document.getElementById('elsFill');
  const elsRatio = document.getElementById('elsRatio');
  const L = getValue('L');
  const loading = document.getElementById('loading').value;
  const support = document.getElementById('support').value;
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const data = profilesDB[lastCalcData.profile];
  if(data && elsWrap) {
    const def = getDeflection(L, loading, support, Gk + Qk, data);
    const defLimit = L * 1000 / 250;
    if(def > 0 && defLimit > 0) {
      elsWrap.style.display = 'block';
      const pct = Math.min(def / defLimit * 100, 200);
      const displayPct = (def / defLimit * 100).toFixed(1);
      elsRatio.textContent = displayPct + '%';
      elsFill.style.width = Math.min(pct, 100) + '%';
      elsFill.className = 'util-fill' + (pct > 100 ? ' danger' : pct > 80 ? ' warn' : '');
    }
  }
}

/* =========================================================
   FEATURE I — Copy to Clipboard
   ========================================================= */
function copyValue(id) {
  const el = document.getElementById(id);
  if(!el) return;
  const text = el.textContent.replace(/[^\d.,\-\/\s]/g, '').trim();
  navigator.clipboard.writeText(text).then(() => {
    const btn = el.parentElement.querySelector('.copy-btn');
    if(btn) {
      btn.textContent = '✓';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = '⎘'; btn.classList.remove('copied'); }, 1500);
    }
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  });
}

/* =========================================================
   FEATURE J — Sensitivity Analysis Slider
   ========================================================= */
let sensitivityChart = null;

function toggleSensitivity() {
  const p = document.getElementById('sensitivityPanel');
  if(p.style.display === 'none') {
    p.style.display = 'block';
    p.classList.add('revealed');
    drawSensitivityChart(getValue('L'));
    p.scrollIntoView({behavior:'smooth'});
  } else {
    p.style.display = 'none';
  }
}

function updateSensitivity(val) {
  document.getElementById('sliderVal').textContent = val;
  // Update slider gradient
  const slider = document.getElementById('sensitivitySlider');
  const pct = ((val - 1) / 19) * 100;
  slider.style.background = `linear-gradient(to right, var(--accent-color) ${pct}%, var(--border-color) ${pct}%)`;
  drawSensitivityChart(parseFloat(val));
}

function drawSensitivityChart(currentL) {
  const profile = document.getElementById('profile').value;
  const fy = getValue('steel');
  const alphaLT = getValue('alphaLT');
  const gammaM1 = getValue('gammaM1') || 1.1;
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const Gk = getValue('Gk'), Qk = getValue('Qk'), zg = getValue('zg');
  const zj = getValue('zj') || 0;
  const kw = getValue('kw') || 1.0;
  const data = profilesDB[profile];
  if(!data) return;
  const betaW = getBetaW(sectionClass, data);

  const Ls = [], chis = [], meds = [], mbrds = [];
  for(let L = 1; L <= 20; L += 0.5) {
    const qElu = 1.35 * Gk + 1.5 * Qk;
    const MEd = getMomentMax(L, loading, support, qElu);
    const Mcr = calculateMcrParams(L, support, zg, zj, kw, data);
    const lam = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
    const phi = 0.5 * (1 + alphaLT * (lam - 0.2) + lam * lam);
    let chi = Math.min(1 / (phi + Math.sqrt(Math.max(phi * phi - lam * lam, 0))), 1.0);
    const MbRd = chi * data.Wpl * 1000 * fy * betaW / (gammaM1 * 1e6);
    Ls.push(L); chis.push(chi); meds.push(MEd); mbrds.push(MbRd);
  }

  const textColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#94a3b8' : '#475569';
  const ctx = document.getElementById('sensitivityChart').getContext('2d');
  if(sensitivityChart) sensitivityChart.destroy();
  sensitivityChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Mb,Rd (kN.m)', data: Ls.map((l,i) => ({x:l, y:mbrds[i]})), borderColor:'#6366f1', borderWidth:2.5, pointRadius:0, fill:false },
        { label: 'MEd (kN.m)',   data: Ls.map((l,i) => ({x:l, y:meds[i]})),  borderColor:'#ef4444', borderWidth:2, borderDash:[5,4], pointRadius:0, fill:false },
        // current L point
        { label:`L=${currentL}m`, data:[{x:currentL, y:mbrds[Math.round((currentL-1)/0.5)]}], borderColor:'#6366f1', backgroundColor:'#6366f1', pointRadius:6, showLine:false }
      ]
    },
    options: {
      responsive:true, color:textColor,
      scales:{
        x:{type:'linear', min:1, max:20, title:{display:true, text:'L (m)', color:textColor}, ticks:{color:textColor}},
        y:{title:{display:true, text:'Moment (kN.m)', color:textColor}, ticks:{color:textColor}}
      },
      plugins:{legend:{position:'bottom', labels:{color:textColor}}}
    }
  });
}

/* =========================================================
   FEATURE K — Animated Load Diagram
   ========================================================= */
function drawAnimatedLoad() {
  const svg = document.getElementById('loadDiagramSVG');
  if(!svg) return;
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const col = isDark ? '#f1f5f9' : '#0f172a';
  const accent = '#6366f1';
  const red = '#ef4444';

  // Beam line
  let content = `<line x1="80" y1="120" x2="520" y2="120" stroke="${col}" stroke-width="6" stroke-linecap="round"/>`;

  // Supports
  const pinSVG = (x) => `<polygon points="${x},120 ${x-12},142 ${x+12},142" fill="${accent}" opacity="0.8"/><line x1="${x-16}" y1="144" x2="${x+16}" y2="144" stroke="${col}" stroke-width="2"/>`;
  const fixSVG = (x, dir) => `<line x1="${x}" y1="100" x2="${x}" y2="140" stroke="${col}" stroke-width="4"/>
    <path d="M${x} 103 L${x+dir*12} 110 M${x} 112 L${x+dir*12} 119 M${x} 121 L${x+dir*12} 128 M${x} 130 L${x+dir*12} 137" stroke="${col}" stroke-width="1.5" opacity="0.6"/>`;

  if(support === 'simply') { content += pinSVG(80) + pinSVG(520); }
  else if(support === 'fixed') { content += fixSVG(80,1) + fixSVG(520,-1); }
  else if(support === 'mixed') { content += fixSVG(80,1) + pinSVG(520); }
  else if(support === 'cantilever') { content += fixSVG(80,1); }
  else if(support === 'continuous') { content += pinSVG(80) + pinSVG(300) + pinSVG(520); }
  else { content += pinSVG(80) + pinSVG(520); }

  // Loads
  if(loading === 'udl') {
    // Animated UDL arrows
    for(let x = 90; x <= 510; x += 30) {
      const delay = ((x-90)/30 * 0.08).toFixed(2);
      content += `<g class="load-arrow" style="animation-delay:${delay}s">
        <line x1="${x}" y1="60" x2="${x}" y2="110" stroke="${red}" stroke-width="2"/>
        <polygon points="${x},110 ${x-5},97 ${x+5},97" fill="${red}"/>
      </g>`;
    }
    content += `<line x1="90" y1="60" x2="510" y2="60" stroke="${red}" stroke-width="2.5" stroke-dasharray="8,4" class="load-udl-line"/>`;
  } else if(loading === 'point') {
    content += `<g class="load-arrow"><line x1="300" y1="40" x2="300" y2="112" stroke="${red}" stroke-width="3"/>
      <polygon points="300,112 292,94 308,94" fill="${red}"/>
      <text x="314" y="60" font-family="Inter" font-size="13" fill="${red}" font-weight="700">P</text></g>`;
  } else if(loading === 'point_end') {
    content += `<g class="load-arrow"><line x1="520" y1="40" x2="520" y2="112" stroke="${red}" stroke-width="3"/>
      <polygon points="520,112 512,94 528,94" fill="${red}"/>
      <text x="530" y="60" font-family="Inter" font-size="13" fill="${red}" font-weight="700">P</text></g>`;
  } else if(loading === 'point_third') {
    const x3 = 80 + (520-80)/3;
    content += `<g class="load-arrow"><line x1="${x3}" y1="40" x2="${x3}" y2="112" stroke="${red}" stroke-width="3"/>
      <polygon points="${x3},112 ${x3-8},94 ${x3+8},94" fill="${red}"/>
      <text x="${x3+10}" y="60" font-family="Inter" font-size="13" fill="${red}" font-weight="700">P</text></g>`;
  } else if(loading === 'triangular') {
    content += `<polygon points="90,110 510,60 510,110" fill="${red}" opacity="0.2" stroke="${red}" stroke-width="1.5"/>`;
    for(let i = 0; i <= 5; i++) {
      const x = 90 + i * (420/5);
      const maxH = (x - 90) / 420 * 50;
      const delay = (i * 0.1).toFixed(2);
      content += `<g class="load-arrow" style="animation-delay:${delay}s">
        <line x1="${x}" y1="${110-maxH}" x2="${x}" y2="110" stroke="${red}" stroke-width="1.5"/>
        <polygon points="${x},110 ${x-4},${110-8} ${x+4},${110-8}" fill="${red}"/>
      </g>`;
    }
  } else if(loading === 'moment') {
    content += `<path d="M260,80 Q300,50 340,80" fill="none" stroke="${red}" stroke-width="2.5" marker-end="url(#arrow)"/>
      <text x="288" y="47" font-family="Inter" font-size="13" fill="${red}" font-weight="700">M</text>
      <defs><marker id="arrow" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${red}"/></marker></defs>`;
  }

  // Span annotation
  content += `<line x1="80" y1="168" x2="520" y2="168" stroke="${isDark?'#64748b':'#94a3b8'}" stroke-width="1" marker-start="url(#ls)" marker-end="url(#ls)"/>
    <defs><marker id="ls" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><line x1="3" y1="0" x2="3" y2="6" stroke="${isDark?'#64748b':'#94a3b8'}" stroke-width="1.5"/></marker></defs>
    <text x="300" y="186" font-family="Inter" font-size="12" fill="${isDark?'#64748b':'#94a3b8'}" text-anchor="middle" font-weight="600">L = ${getValue('L')} m</text>`;

  svg.innerHTML = content;
}

/* =========================================================
   FEATURE L — Sticky Summary Bar
   ========================================================= */
function initStickySummary() {
  window.addEventListener('scroll', () => {
    const ss = document.getElementById('stickySummary');
    if(!ss) return;
    if(lastCalcData && window.scrollY > 300) ss.style.display = 'flex';
    else ss.style.display = 'none';
  });
}

function updateStickySummary() {
  if(!lastCalcData) return;
  const s = document.getElementById('stickySummary');
  if(!s) return;

  document.getElementById('ssProfile').textContent = lastCalcData.profile;
  document.getElementById('ssMed').textContent = lastCalcData.MEd.toFixed(1) + ' kN.m';
  document.getElementById('ssMbrd').textContent = lastCalcData.MbRd.toFixed(1) + ' kN.m';

  const eluBadge = document.getElementById('ssElu');
  eluBadge.textContent = lastCalcData.verifELU ? 'OK' : 'KO';
  eluBadge.className = 'ss-badge ' + (lastCalcData.verifELU ? 'ok' : 'fail');

  const elsBadge = document.getElementById('ssEls');
  elsBadge.textContent = lastCalcData.verifELS ? 'OK' : 'KO';
  elsBadge.className = 'ss-badge ' + (lastCalcData.verifELS ? 'ok' : 'fail');
}

/* =========================================================
   FEATURE N — CSV Export
   ========================================================= */
function exportCSV() {
  if(!lastCalcData) { alert(currentLang==='fr'?'Lancez d\'abord un calcul.':'Run a calculation first.'); return; }
  const data = profilesDB[lastCalcData.profile];
  const L = lastCalcData.L;
  const fy = getValue('steel');
  const loading = document.getElementById('loading').value;
  const support = document.getElementById('support').value;
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const def = getDeflection(L, loading, support, Gk+Qk, data);
  const defLimit = L * 1000 / 250;

  const rows = [
    ['Paramètre / Parameter', 'Valeur / Value', 'Unité / Unit'],
    ['Profilé', lastCalcData.profile, '-'],
    ['Longueur L', L, 'm'],
    ['Nuance acier', `S${fy}`, '-'],
    ['Charge G', Gk, 'kN/m'],
    ['Charge Q', Qk, 'kN/m'],
    ['MEd', lastCalcData.MEd.toFixed(2), 'kN.m'],
    ['Mcr', (getValue('alphaLT') ? '' : '') + document.getElementById('mcr').textContent.replace(' kN.m',''), 'kN.m'],
    ['Lambda LT', lastCalcData.lambdaLT.toFixed(4), '-'],
    ['Chi LT', lastCalcData.chiLT.toFixed(4), '-'],
    ['Mb,Rd', lastCalcData.MbRd.toFixed(2), 'kN.m'],
    ['Vérification ELU', lastCalcData.verifELU ? 'VERIFIE':'NON VERIFIE', '-'],
    ['Flèche max', def.toFixed(2), 'mm'],
    ['Limite L/250', defLimit.toFixed(2), 'mm'],
    ['Vérification ELS', lastCalcData.verifELS ? 'VERIFIE':'NON VERIFIE', '-'],
    ['Taux utilisation ELU', (lastCalcData.MEd/lastCalcData.MbRd*100).toFixed(1), '%'],
    ['Taux utilisation ELS', (def/defLimit*100).toFixed(1), '%'],
    ['Date', new Date().toLocaleString(), '-'],
    ['', '', ''],
    ['--- DONNÉES DE LA COURBE DE SENSIBILITÉ ---', '', ''],
    ['Longueur L (m)', 'MEd (kN.m)', 'Mb,Rd (kN.m)']
  ];

  // Calculate curve data
  const alphaLT = getValue('alphaLT');
  const gammaM1 = getValue('gammaM1') || 1.1;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const zg = getValue('zg');
  const zj = getValue('zj') || 0;
  const kw = getValue('kw') || 1.0;
  const betaW = getBetaW(sectionClass, data);
  for(let curL = 1; curL <= 20; curL += 0.5) {
    const qElu = 1.35 * Gk + 1.5 * Qk;
    const curMEd = getMomentMax(curL, loading, support, qElu);
    const curMcr = calculateMcrParams(curL, support, zg, zj, kw, data);
    const lam = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (curMcr * 1e6));
    const phi = 0.5 * (1 + alphaLT * (lam - 0.2) + lam * lam);
    let chi = Math.min(1 / (phi + Math.sqrt(Math.max(phi * phi - lam * lam, 0))), 1.0);
    const curMbRd = chi * data.Wpl * 1000 * fy * betaW / (gammaM1 * 1e6);
    rows.push([curL.toFixed(1), curMEd.toFixed(2), curMbRd.toFixed(2)]);
  }

  const csv = rows.map(r => r.map(c => `"${String(c).replace('.', ',')}"`).join(';')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GS_Calc_${lastCalcData.profile}_L${L}m.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* =========================================================
   UPDATED SWITCHTAB — handle 'load' tab
   ========================================================= */
function switchTab(tabName) {
  ['tabDiagram','tabDeformed','tabLoad'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.remove('active');
  });
  ['tab-diagram','tab-deformed','tab-load'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.remove('active');
  });

  if(tabName === 'diagram') {
    document.getElementById('tabDiagram').classList.add('active');
    document.getElementById('tab-diagram').classList.add('active');
  } else if(tabName === 'deformed') {
    document.getElementById('tabDeformed').classList.add('active');
    document.getElementById('tab-deformed').classList.add('active');
  } else {
    document.getElementById('tabLoad').classList.add('active');
    document.getElementById('tab-load').classList.add('active');
    drawAnimatedLoad();
  }
}

/* =========================================================
   FEATURE O — Scroll Reveal Entrance Animations
   ========================================================= */
function initScrollReveal() {
  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.card, .header').forEach(el => el.classList.add('revealed'));
    return;
  }

  // Assign staggered delays to cards within each column
  const columns = document.querySelectorAll('.mobile-section');
  columns.forEach(col => {
    const cards = col.querySelectorAll('.card');
    cards.forEach((card, i) => {
      card.classList.add(`reveal-delay-${Math.min(i + 1, 6)}`);
    });
  });

  // The graphs card spans full width — give it a scale effect
  const graphsCard = document.getElementById('sectionGraphs');
  if (graphsCard && graphsCard.classList.contains('card')) {
    graphsCard.classList.add('reveal-scale');
  }

  // Collect all revealable elements
  const revealTargets = document.querySelectorAll('.card, .header');

  // IntersectionObserver to trigger reveal when elements enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.08,      // Trigger when 8% of element is visible
    rootMargin: '0px 0px -40px 0px'  // Slight offset from bottom
  });

  revealTargets.forEach(el => {
    // Immediately reveal elements already in viewport (above the fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}