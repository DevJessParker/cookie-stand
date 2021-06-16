'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


function Store(location, avgCookie, minCust, maxCust) {
  this.location = location;
  this.avgCookie = avgCookie;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieNumber = [];
  this.storeArray.push(this);
  console.log('this', this);
}

Store.prototype.storeArray = [];

Store.prototype.getCookieSales = function() {
  for (let i = 0; i < storeHours.length; i++) {
  const randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)
  const cookieSales = (randomCust * Math.floor(this.avgCookie));
  this.cookieNumber.push(cookieSales);
  }
}

const cookieChartElemDiv = document.getElementById('cookiechart');


document.getElementById('cookiechart') 
const tableElem = document.createElement('table');
cookieChartElemDiv.appendChild(tableElem);

function renderHours() {
  const tableHeader = document.createElement('thead');
  tableElem.appendChild(tableHeader);
  const row1 = document.createElement('tr')
  tableHeader.appendChild(row1);
  const storeCell = document.createElement('th');
  storeCell.textContent = ('Location');
  row1.appendChild(storeCell);
  
  for (let i = 0; i < storeHours.length; i++) {
   const headerCell = document.createElement('th');
   headerCell.textContent = storeHours[i];
   row1.appendChild(headerCell);
  }
}

Store.prototype.renderData = function() {
  const storeRow = document.createElement('tr');
  tableElem.appendChild(storeRow);
  const storeColumn = document.createElement('td');
  storeColumn.textContent = this.location;
  storeRow.appendChild(storeColumn);
  

  for (let i = 0; i < storeHours.length; i++) {
      const dataCell = document.createElement('td');
      dataCell.textContent = this.cookieNumber[i];
      storeRow.appendChild(dataCell);
  }
}

function renderAllStores() {
for (let i = 0; i < Store.prototype.storeArray.length; i++) {
  let currentStore = Store.prototype.storeArray[i];
  currentStore.getCookieSales();
  currentStore.renderData();
  }
}

const seattle = new Store('Seattle', 6.3, 23, 65);
const toyko = new Store('Tokyo', 1.2, 3, 24);
const dubai = new Store('Dubai', 3.7, 11, 38);
const paris = new Store('Paris', 2.3, 20, 38);
const lima = new Store('Lima', 4.6, 2, 16);

renderHours();
renderAllStores();


