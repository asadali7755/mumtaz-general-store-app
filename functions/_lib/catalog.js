// The store's catalog. Edit prices and items here: both pages read it from /api/catalog.
// n = [Urdu, English], u = unit [Urdu, English], p = price (Rs), o = old price for a discount (optional)

export const CATEGORIES = [
  { k: 'veg', l: ['سبزیاں', 'Vegetables'], img: 'tomatoes' },
  { k: 'dairy', l: ['دودھ و انڈے', 'Milk & Eggs'], img: 'eggs' },
  { k: 'grain', l: ['آٹا و چاول', 'Atta & Rice'], img: 'flour' },
  { k: 'oil', l: ['گھی و تیل', 'Ghee & Oil'], img: 'oil' },
  { k: 'dal', l: ['دالیں', 'Daal'], img: 'masoor-dal' },
  { k: 'tea', l: ['چائے و چینی', 'Tea & Sugar'], img: 'tea' },
  { k: 'spice', l: ['مصالحے', 'Spices'], img: 'chili' },
  { k: 'clean', l: ['صفائی', 'Cleaning'], img: 'washing-powder' },
  { k: 'kids', l: ['بیکری و بچے', 'Bakery & Kids'], img: 'biscuits' },
];

export const PRODUCTS = [
  { id: 1, c: 'grain', img: 'flour', n: ['چکی آٹا', 'Chakki Atta'], u: ['10 کلو', '10 kg'], p: 1150, o: 1250 },
  { id: 2, c: 'grain', img: 'rice', n: ['سیلا چاول', 'Sella Rice'], u: ['1 کلو', '1 kg'], p: 340 },
  { id: 3, c: 'oil', img: 'ghee', n: ['گھی', 'Cooking Ghee'], u: ['1 کلو', '1 kg'], p: 560, o: 620 },
  { id: 4, c: 'oil', img: 'oil', n: ['کوکنگ آئل', 'Cooking Oil'], u: ['1 لیٹر', '1 litre'], p: 590, o: 650 },
  { id: 5, c: 'dal', img: 'chana-dal', n: ['دال چنا', 'Chana Dal'], u: ['1 کلو', '1 kg'], p: 290 },
  { id: 6, c: 'dal', img: 'masoor-dal', n: ['دال مسور', 'Masoor Dal'], u: ['1 کلو', '1 kg'], p: 320 },
  { id: 7, c: 'tea', img: 'sugar', n: ['چینی', 'Sugar'], u: ['1 کلو', '1 kg'], p: 165 },
  { id: 8, c: 'tea', img: 'tea', n: ['چائے پتی', 'Tea Leaves'], u: ['475 گرام', '475 g'], p: 850, o: 950 },
  { id: 9, c: 'clean', img: 'washing-powder', n: ['سرف', 'Washing Powder'], u: ['1 کلو', '1 kg'], p: 420, o: 480 },
  { id: 10, c: 'clean', img: 'soap', n: ['نہانے کا صابن', 'Bath Soap'], u: ['2 عدد', '2 bars'], p: 220 },
  { id: 11, c: 'kids', img: 'baby-milk', n: ['بچوں کا دودھ', 'Baby Milk'], u: ['400 گرام', '400 g'], p: 1450 },
  { id: 12, c: 'kids', img: 'biscuits', n: ['بسکٹ', 'Biscuits'], u: ['فیملی پیک', 'Family pack'], p: 150 },
  { id: 13, c: 'dairy', img: 'milk', n: ['دودھ', 'Milk'], u: ['1 لیٹر', '1 litre'], p: 230 },
  { id: 14, c: 'dairy', img: 'eggs', n: ['انڈے', 'Eggs'], u: ['1 درجن', '1 dozen'], p: 380, o: 420 },
  { id: 15, c: 'kids', img: 'bread', n: ['ڈبل روٹی', 'Bread'], u: ['بڑی', 'Large'], p: 180 },
  { id: 16, c: 'veg', img: 'potatoes', n: ['آلو', 'Potatoes'], u: ['1 کلو', '1 kg'], p: 90 },
  { id: 17, c: 'veg', img: 'onions', n: ['پیاز', 'Onions'], u: ['1 کلو', '1 kg'], p: 140 },
  { id: 18, c: 'veg', img: 'tomatoes', n: ['ٹماٹر', 'Tomatoes'], u: ['1 کلو', '1 kg'], p: 160 },
  { id: 19, c: 'spice', img: 'chili', n: ['لال مرچ', 'Red Chili'], u: ['200 گرام', '200 g'], p: 260 },
];

// Shown to customers on the payment screen. Put the store's real Easypaisa / JazzCash number here.
export const STORE = {
  name: ['ممتاز جنرل اسٹور', 'Mumtaz General Store'],
  wallet: '0300 0000000',
  walletName: 'Mumtaz General Store',
};
