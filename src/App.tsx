import { useEffect, useState } from "react";
import CountryButton from "./components/CountryButton";
import CountryInfo from "./components/CountryInfo";
//import AddButton from "./components/AddButton"
const countries = [
  {
    name: {
      common: "Turkey",
      official: "Republic of Turkey",
      nativeName: {
        eng: { official: "Türkiye Cumhuriyeti", common: "Türkiye" },
      },
    },
    currencies: { "TRY": { name: "Turkish lira", symbol: "₺" } },
    languages: { tur: "Turkish" },
    capital: ["Ankara"],
    region: "Asia",
    
  },
  {
    name: {
      common: "Egypt",
      official: "Arab Republic of Egypt",
      nativeName: { eng: { official: "جمهورية مصر العربية", common: "مصر" } },
    },
    currencies: { "EGP": { name: "Egyptian pound", symbol: "£" } },
    languages: { ara: "Arabic" },
    capital: ["Cairo"],
    region: "Africa",
  },
  {
    name: {
      common: "Vietnam",
      official: "Socialist Republic of Vietnam",
      nativeName: {
        eng: {
          official: "Cộng hòa xã hội chủ nghĩa Việt Nam",
          common: "Việt Nam",
        },
      },
    },
    currencies: { "VND": { name: "Vietnamese đồng", symbol: "₫" } },
    languages: { vie: "Vietnamese" },
    capital: ["Hanoi"],
    region: "Asia",
  },
  {
    name: {
      common: "Maldives",
      official: "Republic of the Maldives",
      nativeName: {
        eng: {
          official: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
          common: "ދިވެހިރާއްޖޭގެ",
        },
      },
    },
    currencies: { "MVR": { name: "Maldivian rufiyaa", symbol: ".ރ" } },
    languages: { div: "Maldivian" },
    capital: ["Malé"],
    region: "Asia",
  },
  {
    name: {
      common: "Greece",
      official: "Hellenic Republic",
      nativeName: {
        eng: { official: "Ελληνική Δημοκρατία", common: "Ελλάδα" },
      },
    },
    currencies: { "EUR": { name: "euro", symbol: "€" } },
    languages: { ell: "Greek" },
    capital: ["Athens"],
    region: "Europe",
  },
  {
    name: {
      common: "France",
      official: "French Republic",
      nativeName: {
        eng: { official: "République française", common: "France" },
      },
    },
    currencies: { "EUR": { name: "euro", symbol: "€" } },
    languages: { fra: "French" },
    capital: ["Paris"],
    region: "Europe",
  },
  {"name":{"common":"United Kingdom","official":"United Kingdom of Great Britain and Northern Ireland","nativeName":{"eng":{"official":"United Kingdom of Great Britain and Northern Ireland","common":"United Kingdom"}}},"currencies":{"GBP":{"name":"British pound","symbol":"£"}},"languages":{"eng":"English"},"capital":["London"],"region":"Europe"},
  { "name": { "common": "Italy", "official": "Italian Republic", "nativeName": { "ita": { "official": "Repubblica italiana", "common": "Italia" } } }, "currencies": { "EUR": { "name": "euro", "symbol": "€" } }, "languages": { "ita": "Italian", "cat": "Catalan" }, "capital": ["Rome"], "region": "Europe" },
  { "name": { "common": "Brazil", "official": "Federative Republic of Brazil", "nativeName": { "por": { "official": "República Federativa do Brasil", "common": "Brasil" } } }, "currencies": { "BRL": { "name": "Brazilian real", "symbol": "R$" } }, "languages": { "por": "Portuguese" }, "capital": ["Brasília"], "region": "Americas" },
  { "name": { "common": "United Arab Emirates", "official": "United Arab Emirates", "nativeName": { "ara": { "official": "الإمارات العربية المتحدة", "common": "دولة الإمارات العربية المتحدة" } } }, "currencies": { "AED": { "name": "United Arab Emirates dirham", "symbol": "د.إ" } }, "languages": { "ara": "Arabic" }, "capital": ["Abu Dhabi"], "region": "Asia" },
  { "name": { "common": "Sri Lanka", "official": "Democratic Socialist Republic of Sri Lanka", "nativeName": { "sin": { "official": "ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය", "common": "ශ්‍රී ලංකාව" }, "tam": { "official": "இலங்கை சனநாயக சோசலிசக் குடியரசு", "common": "இலங்கை" } } }, "currencies": { "LKR": { "name": "Sri Lankan rupee", "symbol": "Rs  රු" } }, "languages": { "sin": "Sinhala", "tam": "Tamil" }, "capital": ["Sri Jayawardenepura Kotte"], "region": "Asia"},
  { "name": { "common": "Thailand", "official": "Kingdom of Thailand", "nativeName": { "tha": { "official": "ราชอาณาจักรไทย", "common": "ประเทศไทย" } } }, "currencies": { "THB": { "name": "Thai baht", "symbol": "฿" } }, "languages": { "tha": "Thai" }, "capital": ["Bangkok"], "region": "Asia" },
  {"name":{"common":"Malta","official":"Republic of Malta","nativeName":{"eng":{"official":"Republic of Malta","common":"Malta"},"mlt":{"official":"Repubblika ta ' Malta","common":"Malta"}}},"currencies":{"EUR":{"name":"euro","symbol":"€"}},"languages":{"eng":"English","mlt":"Maltese"},"capital":["Valletta"],"region":"Europe"},
];



function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const render = countries.map((c) => {
    return (
      <CountryButton
        onClick={() => {
          setSelectedCountry(c);
        }}
        key={c.name.official}
        name={c.name.common}
        nativeName={Object.values(c.name.nativeName)[0].common.length > 30? "" : Object.values(c.name.nativeName)[0].common}
      ></CountryButton>
    );
  });
  const [currency, setCurrency] = useState(0)
  
  useEffect(() => {
    fetch("https://cdn.moneyconvert.net/api/latest.json")
      .then((res) => res.json())
      .then((result) => {
        const currencyCode = Object.keys(selectedCountry.currencies)[0];
        setCurrency(result.rates[currencyCode]);
      });
  }, [selectedCountry]);
  
  return (
    <>
      <h1 className=" box mb-5 mt-2 text-2xl text-center">Tourist Wiki</h1>

      <div className="text-center box sm:flex sm:flex-row-reverse">
        <div className="flex-1 m-4">
          <CountryInfo usd={currency} country={selectedCountry}></CountryInfo>
          
        </div>
        <div className="sm:w-80 w-full mt-4 h-[70vh] sm:h-[90vh] overflow-y-scroll">{render}</div>
        
      </div>
    </>
  );
}

export default App;
