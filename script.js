const defaultConfig = {
  main_title: "Global Currency Converter",
  subtitle: "Convert between 150+ world currencies instantly",
  button_text: "Convert Currency",
  background_color: "#667eea",
  surface_color: "#ffffff",
  text_color: "#1a202c",
  primary_action_color: "#667eea",
  secondary_action_color: "#718096",
  font_family: "sans-serif",
  font_size: 16
};

const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
  { code: 'ILS', name: 'Israeli Shekel', symbol: '₪' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
  { code: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$' },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$' },
  { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
  { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
  { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك' },
  { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: 'د.ب' },
  { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا' },
  { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل' },
  { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د' },
  { code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م.' },
  { code: 'DZD', name: 'Algerian Dinar', symbol: 'د.ج' },
  { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵' },
  { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh' },
  { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh' },
  { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs' },
  { code: 'MMK', name: 'Myanmar Kyat', symbol: 'K' },
  { code: 'KHR', name: 'Cambodian Riel', symbol: '៛' },
  { code: 'LAK', name: 'Lao Kip', symbol: '₭' },
  { code: 'NPR', name: 'Nepalese Rupee', symbol: 'रू' },
  { code: 'AFN', name: 'Afghan Afghani', symbol: '؋' },
  { code: 'ISK', name: 'Icelandic Krona', symbol: 'kr' },
  { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn' },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
  { code: 'RSD', name: 'Serbian Dinar', symbol: 'дин' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Mark', symbol: 'KM' },
  { code: 'MKD', name: 'Macedonian Denar', symbol: 'ден' },
  { code: 'ALL', name: 'Albanian Lek', symbol: 'L' },
  { code: 'GEL', name: 'Georgian Lari', symbol: '₾' },
  { code: 'AMD', name: 'Armenian Dram', symbol: '֏' },
  { code: 'AZN', name: 'Azerbaijani Manat', symbol: '₼' },
  { code: 'KZT', name: 'Kazakhstani Tenge', symbol: '₸' },
  { code: 'UZS', name: 'Uzbekistani Som', symbol: 'so\'m' },
  { code: 'BYN', name: 'Belarusian Ruble', symbol: 'Br' },
  { code: 'MDL', name: 'Moldovan Leu', symbol: 'L' },
  { code: 'CRC', name: 'Costa Rican Colon', symbol: '₡' },
  { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'Q' },
  { code: 'HNL', name: 'Honduran Lempira', symbol: 'L' },
  { code: 'NIO', name: 'Nicaraguan Cordoba', symbol: 'C$' },
  { code: 'PAB', name: 'Panamanian Balboa', symbol: 'B/.' },
  { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'Bs.' },
  { code: 'PYG', name: 'Paraguayan Guarani', symbol: '₲' },
  { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U' },
  { code: 'VES', name: 'Venezuelan Bolivar', symbol: 'Bs.' },
  { code: 'DOP', name: 'Dominican Peso', symbol: 'RD$' },
  { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$' },
  { code: 'TTD', name: 'Trinidad & Tobago Dollar', symbol: 'TT$' },
  { code: 'BBD', name: 'Barbadian Dollar', symbol: 'Bds$' },
  { code: 'BZD', name: 'Belize Dollar', symbol: 'BZ$' },
  { code: 'BSD', name: 'Bahamian Dollar', symbol: 'B$' },
  { code: 'XCD', name: 'East Caribbean Dollar', symbol: 'EC$' },
  { code: 'AWG', name: 'Aruban Florin', symbol: 'ƒ' },
  { code: 'ANG', name: 'Netherlands Antillean Guilder', symbol: 'ƒ' },
  { code: 'SRD', name: 'Surinamese Dollar', symbol: '$' },
  { code: 'GYD', name: 'Guyanese Dollar', symbol: 'G$' },
  { code: 'HTG', name: 'Haitian Gourde', symbol: 'G' },
  { code: 'FJD', name: 'Fijian Dollar', symbol: 'FJ$' },
  { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'K' },
  { code: 'WST', name: 'Samoan Tala', symbol: 'T' },
  { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$' },
  { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'Vt' },
  { code: 'SBD', name: 'Solomon Islands Dollar', symbol: 'SI$' },
  { code: 'MUR', name: 'Mauritian Rupee', symbol: '₨' },
  { code: 'SCR', name: 'Seychellois Rupee', symbol: '₨' },
  { code: 'MGA', name: 'Malagasy Ariary', symbol: 'Ar' },
  { code: 'MWK', name: 'Malawian Kwacha', symbol: 'MK' },
  { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZK' },
  { code: 'BWP', name: 'Botswana Pula', symbol: 'P' },
  { code: 'NAD', name: 'Namibian Dollar', symbol: 'N$' },
  { code: 'SZL', name: 'Swazi Lilangeni', symbol: 'E' },
  { code: 'LSL', name: 'Lesotho Loti', symbol: 'L' },
  { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz' },
  { code: 'MZN', name: 'Mozambican Metical', symbol: 'MT' },
  { code: 'XOF', name: 'West African CFA Franc', symbol: 'Fr' },
  { code: 'XAF', name: 'Central African CFA Franc', symbol: 'Fr' },
  { code: 'GMD', name: 'Gambian Dalasi', symbol: 'D' },
  { code: 'SLL', name: 'Sierra Leonean Leone', symbol: 'Le' },
  { code: 'LRD', name: 'Liberian Dollar', symbol: 'L$' },
  { code: 'GNF', name: 'Guinean Franc', symbol: 'Fr' },
  { code: 'CVE', name: 'Cape Verdean Escudo', symbol: '$' },
  { code: 'STN', name: 'São Tomé & Príncipe Dobra', symbol: 'Db' },
  { code: 'IRR', name: 'Iranian Rial', symbol: '﷼' },
  { code: 'SYP', name: 'Syrian Pound', symbol: '£S' },
  { code: 'YER', name: 'Yemeni Rial', symbol: '﷼' },
  { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'Rf' },
  { code: 'BND', name: 'Brunei Dollar', symbol: 'B$' },
  { code: 'MNT', name: 'Mongolian Tugrik', symbol: '₮' },
  { code: 'KGS', name: 'Kyrgyzstani Som', symbol: 'с' },
  { code: 'TJS', name: 'Tajikistani Somoni', symbol: 'ЅМ' },
  { code: 'TMT', name: 'Turkmenistani Manat', symbol: 'm' },
  { code: 'BTN', name: 'Bhutanese Ngultrum', symbol: 'Nu.' },
  { code: 'MOP', name: 'Macanese Pataca', symbol: 'MOP$' }
];

const cryptoCurrencies = [
  { code: 'BTC', name: 'Bitcoin', symbol: '₿' },
  { code: 'ETH', name: 'Ethereum', symbol: 'Ξ' },
  { code: 'USDT', name: 'Tether', symbol: '₮' },
  { code: 'BNB', name: 'Binance Coin', symbol: 'BNB' },
  { code: 'SOL', name: 'Solana', symbol: 'SOL' },
  { code: 'XRP', name: 'Ripple', symbol: 'XRP' },
  { code: 'USDC', name: 'USD Coin', symbol: 'USDC' },
  { code: 'ADA', name: 'Cardano', symbol: '₳' },
  { code: 'DOGE', name: 'Dogecoin', symbol: 'Ð' },
  { code: 'AVAX', name: 'Avalanche', symbol: 'AVAX' },
  { code: 'TRX', name: 'TRON', symbol: 'TRX' },
  { code: 'DOT', name: 'Polkadot', symbol: 'DOT' },
  { code: 'MATIC', name: 'Polygon', symbol: 'MATIC' },
  { code: 'LTC', name: 'Litecoin', symbol: 'Ł' },
  { code: 'LINK', name: 'Chainlink', symbol: 'LINK' },
  { code: 'BCH', name: 'Bitcoin Cash', symbol: 'BCH' },
  { code: 'UNI', name: 'Uniswap', symbol: 'UNI' },
  { code: 'XLM', name: 'Stellar', symbol: 'XLM' },
  { code: 'ATOM', name: 'Cosmos', symbol: 'ATOM' },
  { code: 'ETC', name: 'Ethereum Classic', symbol: 'ETC' },
  { code: 'XMR', name: 'Monero', symbol: 'XMR' },
  { code: 'APT', name: 'Aptos', symbol: 'APT' },
  { code: 'FIL', name: 'Filecoin', symbol: 'FIL' },
  { code: 'ALGO', name: 'Algorand', symbol: 'ALGO' },
  { code: 'VET', name: 'VeChain', symbol: 'VET' },
  { code: 'ICP', name: 'Internet Computer', symbol: 'ICP' },
  { code: 'NEAR', name: 'NEAR Protocol', symbol: 'NEAR' },
  { code: 'APE', name: 'ApeCoin', symbol: 'APE' },
  { code: 'SHIB', name: 'Shiba Inu', symbol: 'SHIB' },
  { code: 'ARB', name: 'Arbitrum', symbol: 'ARB' }
];

let cryptoRates = {};
let lastPriceUpdate = null;

async function fetchCryptoPrices() {
  try {
    const cryptoIds = {
      'BTC': 'bitcoin', 'ETH': 'ethereum', 'USDT': 'tether', 'BNB': 'binancecoin', 
      'SOL': 'solana', 'XRP': 'ripple', 'USDC': 'usd-coin', 'ADA': 'cardano', 
      'DOGE': 'dogecoin', 'AVAX': 'avalanche-2', 'TRX': 'tron', 'DOT': 'polkadot',
      'MATIC': 'matic-network', 'LTC': 'litecoin', 'LINK': 'chainlink', 
      'BCH': 'bitcoin-cash', 'UNI': 'uniswap', 'XLM': 'stellar', 'ATOM': 'cosmos',
      'ETC': 'ethereum-classic', 'XMR': 'monero', 'APT': 'aptos', 'FIL': 'filecoin',
      'ALGO': 'algorand', 'VET': 'vechain', 'ICP': 'internet-computer', 
      'NEAR': 'near', 'APE': 'apecoin', 'SHIB': 'shiba-inu', 'ARB': 'arbitrum'
    };

    const ids = Object.values(cryptoIds).join(',');
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
      { method: 'GET' }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch prices');
    }

    const data = await response.json();
    
    for (const [symbol, id] of Object.entries(cryptoIds)) {
      if (data[id] && data[id].usd) {
        cryptoRates[symbol] = data[id].usd;
      }
    }

    lastPriceUpdate = new Date();
    updatePriceTimestamp();
    return true;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    cryptoRates = {
      'BTC': 43250.00, 'ETH': 2280.50, 'USDT': 1.00, 'BNB': 315.75, 'SOL': 98.50,
      'XRP': 0.52, 'USDC': 1.00, 'ADA': 0.48, 'DOGE': 0.085, 'AVAX': 36.80,
      'TRX': 0.11, 'DOT': 7.25, 'MATIC': 0.82, 'LTC': 72.50, 'LINK': 15.20,
      'BCH': 245.00, 'UNI': 6.35, 'XLM': 0.12, 'ATOM': 10.85, 'ETC': 20.50,
      'XMR': 158.75, 'APT': 9.40, 'FIL': 5.80, 'ALGO': 0.19, 'VET': 0.028,
      'ICP': 12.50, 'NEAR': 3.75, 'APE': 1.85, 'SHIB': 0.0000095, 'ARB': 1.35
    };
    return false;
  }
}

function updatePriceTimestamp() {
  const timestampEl = document.getElementById('priceTimestamp');
  if (timestampEl && lastPriceUpdate) {
    const now = new Date();
    const secondsAgo = Math.floor((now - lastPriceUpdate) / 1000);
    
    if (secondsAgo < 60) {
      timestampEl.textContent = `Updated ${secondsAgo}s ago`;
    } else {
      const minutesAgo = Math.floor(secondsAgo / 60);
      timestampEl.textContent = `Updated ${minutesAgo}m ago`;
    }
  }
}

setInterval(() => {
  if (lastPriceUpdate) {
    updatePriceTimestamp();
  }
}, 1000);

const exchangeRates = {
  'USD': 1.00, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.50, 'AUD': 1.53,
  'CAD': 1.36, 'CHF': 0.88, 'CNY': 7.24, 'INR': 83.12, 'MXN': 17.08,
  'BRL': 4.97, 'ZAR': 18.65, 'KRW': 1318.50, 'SGD': 1.34, 'NZD': 1.67,
  'NOK': 10.87, 'SEK': 10.52, 'DKK': 6.87, 'PLN': 3.98, 'THB': 35.42,
  'IDR': 15678.00, 'HUF': 352.80, 'CZK': 22.98, 'ILS': 3.65, 'PHP': 56.23,
  'AED': 3.67, 'CLP': 973.50, 'SAR': 3.75, 'MYR': 4.47, 'RON': 4.57,
  'RUB': 92.50, 'TRY': 32.15, 'HKD': 7.82, 'TWD': 31.45, 'ARS': 350.25,
  'COP': 3945.00, 'PEN': 3.72, 'VND': 24350.00, 'EGP': 30.90, 'NGN': 775.50,
  'KES': 129.75, 'PKR': 278.50, 'BDT': 109.85, 'UAH': 36.85, 'QAR': 3.64,
  'KWD': 0.31, 'OMR': 0.38, 'BHD': 0.38, 'JOD': 0.71, 'LBP': 15000.00,
  'IQD': 1310.00, 'MAD': 9.87, 'DZD': 134.25, 'TND': 3.08, 'GHS': 12.05,
  'UGX': 3715.00, 'TZS': 2515.00, 'ETB': 56.75, 'LKR': 297.50, 'MMK': 2098.00,
  'KHR': 4085.00, 'LAK': 20850.00, 'NPR': 133.00, 'AFN': 70.25, 'ISK': 137.85,
  'HRK': 6.93, 'BGN': 1.80, 'RSD': 107.95, 'BAM': 1.80, 'MKD': 56.75,
  'ALL': 93.25, 'GEL': 2.67, 'AMD': 386.50, 'AZN': 1.70, 'KZT': 453.75,
  'UZS': 12450.00, 'BYN': 3.27, 'MDL': 17.85, 'CRC': 518.25, 'GTQ': 7.78,
  'HNL': 24.75, 'NIO': 36.75, 'PAB': 1.00, 'BOB': 6.91, 'PYG': 7325.00,
  'UYU': 39.25, 'VES': 36.50, 'DOP': 60.15, 'JMD': 155.75, 'TTD': 6.79,
  'BBD': 2.00, 'BZD': 2.02, 'BSD': 1.00, 'XCD': 2.70, 'AWG': 1.80,
  'ANG': 1.80, 'SRD': 35.45, 'GYD': 209.25, 'HTG': 131.85, 'FJD': 2.24,
  'PGK': 3.73, 'WST': 2.72, 'TOP': 2.35, 'VUV': 119.45, 'SBD': 8.42,
  'MUR': 45.85, 'SCR': 13.67, 'MGA': 4525.00, 'MWK': 1735.00, 'ZMW': 26.75,
  'BWP': 13.48, 'NAD': 18.25, 'SZL': 18.25, 'LSL': 18.25, 'AOA': 825.50,
  'MZN': 63.85, 'XOF': 603.75, 'XAF': 603.75, 'GMD': 67.50, 'SLL': 19750.00,
  'LRD': 193.25, 'GNF': 8615.00, 'CVE': 101.45, 'STN': 22.55, 'IRR': 42025.00,
  'SYP': 13001.00, 'YER': 250.35, 'MVR': 15.42, 'BND': 1.34, 'MNT': 3395.00,
  'KGS': 87.45, 'TJS': 10.65, 'TMT': 3.50, 'BTN': 83.50, 'MOP': 8.03
};

let selectedFromCurrency = 'USD';
let selectedToCurrency = 'EUR';
let selectedCryptoFrom = 'BTC';
let selectedCryptoTo = 'ETH';

function switchPage(page) {
  if (page === 'fiat') {
    document.getElementById('fiatPage').classList.add('active');
    document.getElementById('cryptoPage').classList.remove('active');
    document.getElementById('fiatBtn').classList.add('active');
    document.getElementById('cryptoBtn').classList.remove('active');
  } else {
    document.getElementById('cryptoPage').classList.add('active');
    document.getElementById('fiatPage').classList.remove('active');
    document.getElementById('cryptoBtn').classList.add('active');
    document.getElementById('fiatBtn').classList.remove('active');
  }
}

function initializeSearchInputs() {
  const fromSearch = document.getElementById('fromSearch');
  const toSearch = document.getElementById('toSearch');
  
  const fromCurrency = currencies.find(c => c.code === selectedFromCurrency);
  const toCurrency = currencies.find(c => c.code === selectedToCurrency);
  
  fromSearch.value = `${fromCurrency.code} - ${fromCurrency.name}`;
  toSearch.value = `${toCurrency.code} - ${toCurrency.name}`;
}

function initializeCryptoSearchInputs() {
  const fromSearch = document.getElementById('cryptoFromSearch');
  const toSearch = document.getElementById('cryptoToSearch');
  
  const fromCrypto = cryptoCurrencies.find(c => c.code === selectedCryptoFrom);
  const toCrypto = cryptoCurrencies.find(c => c.code === selectedCryptoTo);
  
  fromSearch.value = `${fromCrypto.code} - ${fromCrypto.name}`;
  toSearch.value = `${toCrypto.code} - ${toCrypto.name}`;
}

function filterCurrencies(searchTerm) {
  const term = searchTerm.toLowerCase();
  return currencies.filter(currency => 
    currency.code.toLowerCase().includes(term) ||
    currency.name.toLowerCase().includes(term)
  );
}

function filterCrypto(searchTerm) {
  const term = searchTerm.toLowerCase();
  return cryptoCurrencies.filter(crypto => 
    crypto.code.toLowerCase().includes(term) ||
    crypto.name.toLowerCase().includes(term)
  );
}

function renderDropdown(dropdown, filteredCurrencies, selectedCode) {
  dropdown.innerHTML = '';
  
  if (filteredCurrencies.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No currencies found';
    dropdown.appendChild(noResults);
    return;
  }
  
  filteredCurrencies.forEach(currency => {
    const option = document.createElement('div');
    option.className = 'currency-option';
    if (currency.code === selectedCode) {
      option.classList.add('selected');
    }
    option.innerHTML = `
      <div class="currency-code">${currency.code}</div>
      <div class="currency-name">${currency.name}</div>
    `;
    option.dataset.code = currency.code;
    option.dataset.name = currency.name;
    dropdown.appendChild(option);
  });
}

function setupSearch(inputId, dropdownId, isFrom) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  
  input.addEventListener('focus', () => {
    const filtered = filterCurrencies(input.value);
    const selectedCode = isFrom ? selectedFromCurrency : selectedToCurrency;
    renderDropdown(dropdown, filtered, selectedCode);
    dropdown.classList.add('show');
  });
  
  input.addEventListener('input', (e) => {
    const filtered = filterCurrencies(e.target.value);
    const selectedCode = isFrom ? selectedFromCurrency : selectedToCurrency;
    renderDropdown(dropdown, filtered, selectedCode);
    dropdown.classList.add('show');
  });
  
  dropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.currency-option');
    if (option) {
      const code = option.dataset.code;
      const name = option.dataset.name;
      
      if (isFrom) {
        selectedFromCurrency = code;
      } else {
        selectedToCurrency = code;
      }
      
      input.value = `${code} - ${name}`;
      dropdown.classList.remove('show');
      
      if (document.getElementById('result').classList.contains('show')) {
        convertCurrency();
      }
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
}

function setupCryptoSearch(inputId, dropdownId, isFrom) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  
  input.addEventListener('focus', () => {
    const filtered = filterCrypto(input.value);
    const selectedCode = isFrom ? selectedCryptoFrom : selectedCryptoTo;
    renderDropdown(dropdown, filtered, selectedCode);
    dropdown.classList.add('show');
  });
  
  input.addEventListener('input', (e) => {
    const filtered = filterCrypto(e.target.value);
    const selectedCode = isFrom ? selectedCryptoFrom : selectedCryptoTo;
    renderDropdown(dropdown, filtered, selectedCode);
    dropdown.classList.add('show');
  });
  
  dropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.currency-option');
    if (option) {
      const code = option.dataset.code;
      const name = option.dataset.name;
      
      if (isFrom) {
        selectedCryptoFrom = code;
      } else {
        selectedCryptoTo = code;
      }
      
      input.value = `${code} - ${name}`;
      dropdown.classList.remove('show');
      
      if (document.getElementById('cryptoResult').classList.contains('show')) {
        convertCrypto();
      }
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('fromAmount').value);
  const fromCurrency = selectedFromCurrency;
  const toCurrency = selectedToCurrency;
  
  if (isNaN(amount) || amount <= 0) {
    return;
  }
  
  const loading = document.getElementById('loading');
  const result = document.getElementById('result');
  const convertBtn = document.getElementById('convertBtn');
  
  loading.classList.add('show');
  result.classList.remove('show');
  convertBtn.disabled = true;
  
  setTimeout(() => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;
    const rate = toRate / fromRate;
    
    const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
    const toCurrencyData = currencies.find(c => c.code === toCurrency);
    
    document.getElementById('toAmount').value = convertedAmount.toFixed(2);
    document.getElementById('resultAmount').textContent = 
      `${toCurrencyData.symbol}${convertedAmount.toFixed(2)}`;
    document.getElementById('resultText').textContent = 
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    document.getElementById('exchangeRate').textContent = 
      `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
    
    loading.classList.remove('show');
    result.classList.add('show');
    convertBtn.disabled = false;
  }, 500);
}

function convertCrypto() {
  const amount = parseFloat(document.getElementById('cryptoFromAmount').value);
  const fromCrypto = selectedCryptoFrom;
  const toCrypto = selectedCryptoTo;
  
  if (isNaN(amount) || amount <= 0) {
    return;
  }
  
  const loading = document.getElementById('cryptoLoading');
  const result = document.getElementById('cryptoResult');
  const convertBtn = document.getElementById('cryptoConvertBtn');
  
  loading.classList.add('show');
  result.classList.remove('show');
  convertBtn.disabled = true;
  
  setTimeout(() => {
    const fromRate = cryptoRates[fromCrypto];
    const toRate = cryptoRates[toCrypto];
    const convertedAmount = (amount * fromRate) / toRate;
    const rate = fromRate / toRate;
    
    const fromCryptoData = cryptoCurrencies.find(c => c.code === fromCrypto);
    const toCryptoData = cryptoCurrencies.find(c => c.code === toCrypto);
    
    document.getElementById('cryptoToAmount').value = convertedAmount.toFixed(8);
    document.getElementById('cryptoResultAmount').textContent = 
      `${toCryptoData.symbol} ${convertedAmount.toFixed(8)}`;
    document.getElementById('cryptoResultText').textContent = 
      `${amount} ${fromCrypto} = ${convertedAmount.toFixed(8)} ${toCrypto}`;
    document.getElementById('cryptoExchangeRate').textContent = 
      `1 ${fromCrypto} = ${rate.toFixed(8)} ${toCrypto}`;
    
    loading.classList.remove('show');
    result.classList.add('show');
    convertBtn.disabled = false;
  }, 500);
}

function swapCurrencies() {
  const temp = selectedFromCurrency;
  selectedFromCurrency = selectedToCurrency;
  selectedToCurrency = temp;
  
  initializeSearchInputs();
  
  if (document.getElementById('result').classList.contains('show')) {
    convertCurrency();
  }
}

function swapCrypto() {
  const temp = selectedCryptoFrom;
  selectedCryptoFrom = selectedCryptoTo;
  selectedCryptoTo = temp;
  
  initializeCryptoSearchInputs();
  
  if (document.getElementById('cryptoResult').classList.contains('show')) {
    convertCrypto();
  }
}

async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';
  const baseSize = config.font_size || defaultConfig.font_size;
  
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  
  const bgColor = config.background_color || defaultConfig.background_color;
  const secondColor = config.primary_action_color || defaultConfig.primary_action_color;
  document.body.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${secondColor} 100%)`;
  
  document.querySelector('.container').style.background = 
    config.surface_color || defaultConfig.surface_color;
  
  const textColor = config.text_color || defaultConfig.text_color;
  document.querySelector('.title').style.color = textColor;
  document.querySelectorAll('label').forEach(label => {
    label.style.color = textColor;
  });
  
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  document.querySelector('.convert-button').style.background = primaryColor;
  document.querySelector('.swap-btn').style.background = primaryColor;
  document.querySelector('.result-amount').style.color = primaryColor;
  
  const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;
  document.querySelector('.subtitle').style.color = secondaryColor;
  document.querySelectorAll('.result-text, .loading').forEach(el => {
    el.style.color = secondaryColor;
  });
  
  document.getElementById('mainTitle').textContent = 
    config.main_title || defaultConfig.main_title;
  document.getElementById('subtitle').textContent = 
    config.subtitle || defaultConfig.subtitle;
  document.getElementById('convertBtn').textContent = 
    config.button_text || defaultConfig.button_text;
  
  document.querySelector('.title').style.fontSize = `${baseSize * 2.25}px`;
  document.querySelector('.subtitle').style.fontSize = `${baseSize}px`;
  document.querySelectorAll('label').forEach(label => {
    label.style.fontSize = `${baseSize * 0.875}px`;
  });
  document.querySelectorAll('input, select').forEach(input => {
    input.style.fontSize = `${baseSize * 1.125}px`;
  });
  document.querySelector('.convert-button').style.fontSize = `${baseSize * 1.125}px`;
  document.querySelector('.result-amount').style.fontSize = `${baseSize * 2}px`;
  document.querySelector('.result-text').style.fontSize = `${baseSize * 0.875}px`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (value) => {
            config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.primary_action_color || defaultConfig.primary_action_color,
          set: (value) => {
            config.primary_action_color = value;
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        },
        {
          get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
          set: (value) => {
            config.secondary_action_color = value;
            window.elementSdk.setConfig({ secondary_action_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['main_title', config.main_title || defaultConfig.main_title],
      ['subtitle', config.subtitle || defaultConfig.subtitle],
      ['button_text', config.button_text || defaultConfig.button_text]
    ])
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Close sticky ad button
  document.getElementById('closeStickyBtn').addEventListener('click', () => {
    document.getElementById('stickyAd').classList.add('hidden');
  });

  // Initialize fiat currency
  initializeSearchInputs();
  setupSearch('fromSearch', 'fromDropdown', true);
  setupSearch('toSearch', 'toDropdown', false);
  
  document.getElementById('convertBtn').addEventListener('click', convertCurrency);
  document.getElementById('swapBtn').addEventListener('click', swapCurrencies);
  
  document.getElementById('fromAmount').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      convertCurrency();
    }
  });

  // Initialize crypto currency
  initializeCryptoSearchInputs();
  setupCryptoSearch('cryptoFromSearch', 'cryptoFromDropdown', true);
  setupCryptoSearch('cryptoToSearch', 'cryptoToDropdown', false);
  
  document.getElementById('cryptoConvertBtn').addEventListener('click', convertCrypto);
  document.getElementById('cryptoSwapBtn').addEventListener('click', swapCrypto);
  
  document.getElementById('cryptoFromAmount').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      convertCrypto();
    }
  });

  // Page switcher
  document.getElementById('fiatBtn').addEventListener('click', () => switchPage('fiat'));
  document.getElementById('cryptoBtn').addEventListener('click', () => switchPage('crypto'));

  // Fetch crypto prices on load
  fetchCryptoPrices();

  // Refresh button
  document.getElementById('refreshPricesBtn').addEventListener('click', async () => {
    const btn = document.getElementById('refreshPricesBtn');
    btn.disabled = true;
    btn.classList.add('loading');
    
    await fetchCryptoPrices();
    
    btn.disabled = false;
    btn.classList.remove('loading');

    if (document.getElementById('cryptoResult').classList.contains('show')) {
      convertCrypto();
    }
  });

  // Auto-refresh every 60 seconds
  setInterval(async () => {
    if (document.getElementById('cryptoPage').classList.contains('active')) {
      await fetchCryptoPrices();
      if (document.getElementById('cryptoResult').classList.contains('show')) {
        convertCrypto();
      }
    }
  }, 60000);
});