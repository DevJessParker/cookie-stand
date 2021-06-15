'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  hourSales: [],
  avgCookie: 6.3,
}

const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  hourSales: [],
  avgCookie: 1.2,
}

const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  hourSales: [],
  avgCookie: 3.7,
}

const paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  hourSales: [],
  avgCookie: 2.3,
}

const lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  hourSales: [],
  avgCookie: 4.6,
}

function randomCustomer(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function cookieNumber(avgCookie, customerCount) { 
  return Math.floor(avgCookie * customerCount);
}

function getHourSales(object) {
  for (let i = 0; i < storeHours.length; i++) {
    let hourCust = randomCustomer(object.minCust, object.maxCust);
    let avgCookieHour = cookieNumber(object.avgCookie, hourCust);
    object.hourSales.push(avgCookieHour);
  }
}

console.log(seattle);

let storeArray = [seattle, tokyo, dubai, paris, lima]

const cookieChartDivElem = document.getElementById('cookiechart')

function renderCookieChart(store) {
  const articleElem = document.createElement('article');
  cookieChartDivElem.appendChild(articleElem);
  
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = store.location;
  articleElem.appendChild(h2Elem);
  
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  
  for (let i = 0; i < storeHours.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = storeHours[i] + ' ' + store.hourSales[i];
    ulElem.appendChild(liElem);
  }
}

for (let i = 0; i < storeArray.length; i++) {
  let currentStore = storeArray[i];
  getHourSales(currentStore);
  renderCookieChart(currentStore);
}


