'use strict';

var globalHours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var storeListArray = [];
var salmonTable = document.getElementById('salmonTable');
var newLocationForm = document.getElementById('newLocationForm');
function Store(location, min, max, ave){
  this.locationName = location;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookieNumber = ave;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
  this.stringsForDisplayInLists = [];
//calculate random num of cust per hour
  this.calcCustEachHour = function (){
    for (var i = 0; i < globalHours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);
    }
  };
  //calculate num of cookies per hour
  this.calcCookiesEachHour = function(){
    for (var i = 0; i < globalHours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookieNumber);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  this.render = function() {
    var trRowName = document.createElement('tr');
    var tdStore = document.createElement('td');
    tdStore.textContent = this.locationName;
    console.log(this.locationName);
    trRowName.appendChild(tdStore);
    for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
      var tdCell = document.createElement('td');
      tdCell.textContent = this.cookiesEachHourArray[i];
      trRowName.appendChild(tdCell);
    };
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalDailyCookieSales;
    trRowName.appendChild(tdTotal);
    salmonTable.appendChild(trRowName);
  };
  this.calcCustEachHour();
  this.calcCookiesEachHour();
  this.render();
  storeListArray.push(this);
} ;
//End of Constructors
function makeHeaderRow(){
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < globalHours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = globalHours[i];
    tableRow.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Store Total';
  tableRow.appendChild(thElement);
  salmonTable.appendChild(tableRow);
};
function makeFooterRow(){
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Total';
  salmonTable.appendChild(tableRow);
  var totalSum = 0;
  for (var i = 0; i < globalHours.length; i++){
    var hourlyTotal = 0;
    for (var k = 0; k < storeListArray.length; k++){
      hourlyTotal = hourlyTotal + storeListArray[k].cookiesEachHourArray[i];
      totalSum += storeListArray[k].cookiesEachHourArray[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalSum;
  tableRow.appendChild(tdElement);
};

//call headerRow
makeHeaderRow();
//instances
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitalHill = new Store('Capital Hill', 11, 38, 3.7);
var alki = new Store('Alki', 11, 38, 3.7);
//call footerRow
makeFooterRow();

//create new form
function storeData(event){
  event.preventDefault();
  if (!event.target.storeName.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value){
    return alert('Please enter a value.');
  }
  var storeName = event.target.storeName.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;
  console.log('user submit', storeName,min, max, avg);

  var newStore = new Store(storeName,min,max,avg,'newStore');
};

newLocationForm.addEventListener('submit',storeData);
