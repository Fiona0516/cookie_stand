'use strict';

var globalHours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var allStores = [];
function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
  this.calCustEachHour = function () {
    for (var i = 0; i < globalHours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);
    }
  };
  this.calcCookiesEachHour = function (){
    this.calCustEachHour();
    for (var i = 0; i < globalHours.length; i++){
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  this.calcCookiesEachHour();
  allStores.push(this);

};

var firstAndPike = new Store('First And Pike',23,65,6.3);
var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
var seattleCenter = new Store('Seattle Center',11,38,3.7);
var capitolHill = new Store('Capitol Hill',20,38,2.3);
var alki = new Store('Alki',2,16,4.6);
console.log(firstAndPike);
console.log(seaTacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);
//End of constructors
var dataset = document.getElementById('cookiez');
function makeHeaderRow(){
  for( var i = 0; i < globalHours.length; i++){
    var tableRow = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = globalHours[i];
    tableRow.appenChild(thElement);
  }
};
//this.calcCookiesEachHour = function(){
  //return Math.floor(this.calCustEachHour() * this.avgCookiesPerCust);
  //}

  //var firstAndPike = new store('First And Pike',23,65,6.3);
/* Store 1
var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};
firstAndPike.calcCustEachHour = function (){
 // This method will generate a random number of customer for each hour and push
 //  them into the array.
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    //console.log(this.maxCustPerHour);
    this.custEachHourArray.push(singleHourCust);
  }
  //console.log(this.custEachHourArray);
};
firstAndPike.calcCookiesEachHour = function(){
//  // This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
//  // and generate an array of hourly cookie sales
//   //this.calcCustEachHour();
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
  //  console.log(Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust));
    //;
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
  //console.log(this.cookiesEachHourArray);
};
firstAndPike.render = function() {
  //This method will take the array of thoursly cookie sales and display the data as an unordered list
  // };
  var pikeList = document.getElementById('Pike');
  for (var i = 0; i < globalHours.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    pikeList.appendChild(listElement);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  pikeList.appendChild(totalElement);
};
firstAndPike.calcCustEachHour();
firstAndPike.calcCookiesEachHour();
firstAndPike.render();
//Store2
var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};
seaTacAirport.calcCustEachHour = function (){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
};
seaTacAirport.calcCookiesEachHour = function(){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};
seaTacAirport.render = function() {
  var airportList = document.getElementById('SeaTac Airport');
  for (var i = 0; i < globalHours.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    airportList.appendChild(listElement);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  airportList.appendChild(totalElement);
};
seaTacAirport.calcCustEachHour();
seaTacAirport.calcCookiesEachHour();
seaTacAirport.render();
//store3
var seattleCenter = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};
seattleCenter.calcCustEachHour = function (){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
};
seattleCenter.calcCookiesEachHour = function(){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};
seattleCenter.render = function() {
  var centerList = document.getElementById('Seattle Center');
  for (var i = 0; i < globalHours.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    centerList.appendChild(listElement);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  centerList.appendChild(totalElement);
};
seattleCenter.calcCustEachHour();
seattleCenter.calcCookiesEachHour();
seattleCenter.render();
//store4
var capitolHill = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};
capitolHill.calcCustEachHour = function (){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
};
capitolHill.calcCookiesEachHour = function(){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};
capitolHill.render = function() {
  var capitalList = document.getElementById('Capitol Hill');
  for (var i = 0; i < globalHours.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    capitalList.appendChild(listElement);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  capitalList.appendChild(totalElement);
};
capitolHill.calcCustEachHour();
capitolHill.calcCookiesEachHour();
capitolHill.render();
//store5
var alki = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookieSales: 0
};
alki.calcCustEachHour = function (){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
};
alki.calcCookiesEachHour = function(){
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
};
alki.render = function() {
  var alkiList = document.getElementById('Alki');
  for (var i = 0; i < globalHours.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = globalHours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    alkiList.appendChild(listElement);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  alkiList.appendChild(totalElement);
};
alki.calcCustEachHour();
alki.calcCookiesEachHour();
alki.render();
*/
