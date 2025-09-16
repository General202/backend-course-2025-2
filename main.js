const { URL } = require("url");

const currency = "usd";        // долар США
const start = "20220707";     // дата початку
const end = "20220719";       // дата кінця

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

url.searchParams.set("valcode", currency);
url.searchParams.set("start", start);
url.searchParams.set("end", end);
url.searchParams.set("json", "");

console.log(url.toString());
