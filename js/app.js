'use strict';

var globalHours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var totalCookie = 0;
//
// var maxCook= (firstPike.aveCookieNumber),
// console.log (firstPike.name),

// firstPike.getRandomNumCust = function(max,min) {
//   var answerNum = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log ()
//   return answerNum;
// };

// Store 1
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
// console.log(this.custEachHourArray)
};

firstAndPike.calcCustEachHour();
//firstAndPike.calcCustEachHour = function (){
//  // This method will generate a random number of customer for each hour and push
//  //  them into the array.
  //for (var i = 0; i < globalHours.length; i++) {
    //var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    //console.log(this.maxCustPerHour);
    //this.custEachHourArray.push(singleHourCust);
  //}
  //console.log(this.custEachHourArray);
  //return (singleHourCust);
//};

firstAndPike.calcCookiesEachHour = function(){
//  // This method will use the array of customers for each hours, multipy each of those hoursly values by the average cookies per customer.
//  // and generate an array of hourly cookie sales
//   //this.calcCustEachHour();
  for (var i = 0; i < globalHours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;

  }
  //console.log(this.totalDailyCookieSales);
};
//firstAndPike.calcCookiesEachHour();

//firstAndPike.render = function(){
  //var pikeList = document.getElementById('Pike');
  //for (var i = 0; i < globalHours.length; i++){
    //var listElement.textContent = pikeList[i];
    //pikeList.appendChild(listElement);
  //}
  //document.ul.appendChild(pikeList);
/*  This method will take the array of thoursly cookie sales and display the data as an unordered list
// };
// firstAndPike.calcCookiesEachHour();
// // Code to make the list starts here
//
// firstAndPike.calcCustEachHour ();

//OLD CODE
//  var firstAndPike = document.createElement('h1');
//  firstAndPike.textContent = ' 1st and Pike';
//  document.body.appendChild(firstAndPike);
//  var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//  var totalCookie = 0;
//  var getRandomNumCust = function(max,min ){
//    var RandonNum = Math.floor(Math.random() * (max - min + 1)) + min;
//    //console.log (this.cookiesEachHourArray.push(RandonNum));
//  };
// //Store1
//  var store1  = {
//    minNumCust: 23,
//    maxNumCust: 65,
//    avgCookieSale:6.3,
//    name:'First and Pike',
// //   cookiesCountArray:Array[15]
//  };
//  var listItem = document.getElementById('First And Pike');
//  for (var i = 0; i < 14; i++){
//    var totalCookiePerHour = getRandomNumCust(store1.maxNumCust,store1.minNumCust) * Math.floor( store1.avgCookieSale);
// //   cookiesCountArray.push(totalCookiePerHour);
//    totalCookie = totalCookie + totalCookiePerHour;
//    console.log(totalCookie);
//    var newlistItem = document.createElement('li')
//    newlistItem.textContent = totalCookiePerHour;
//    document.body.appendChild(listItem);

//  }
//  /* Store2
//  var store2 = {
//    minNumCust: 3,
//    maxNumCust: 24,
//    avgCookieSale: 1.2,
//    name:'SeaTac Airport'
//  };
//  for (var i = 0; i < 14; i++){
//    var totalCookiePerHour = getRandomNumCust(store2.maxNumCust,store2.minNumCust) * Math.floor(store2.avgCookieSale);
//    totalCookie = totalCookie + totalCookiePerHour;
//    console.log(totalCookie);
//  }
//  //Store3
//  var store3 = {
//    minNumCust: 11,
//    maxNumCust: 38,
//    avgCookieSale: 3.7,
//    name:'Seattle Center'
//  };
//  for (var i = 0; i < 14; i++){
//    var totalCookiePerHour = getRandomNumCust(store3.maxNumCust,store3.minNumCust) * Math.floor(store3.avgCookieSale);
//    totalCookie = totalCookie + totalCookiePerHour;
//    console.log(totalCookie);
//  }
//  //Store4
//  var store4 = {
//    minNumCust: 20,
//    maxNumCust: 38,
//    avgCookieSale: 2.3,
//    name:'Capitol Hill'
//  };
//  for (var i = 0; i < 14; i++){
//    var totalCookiePerHour = getRandomNumCust(store4.maxNumCust,store4.minNumCust) * Math.floor(store4.avgCookieSale);
//    totalCookie = totalCookie + totalCookiePerHour;
//    console.log(totalCookie);
//  }
//  //Store5
//  var store5 = {
//    minNumCust: 2,
//    maxNumCust: 16,
//    avgCookieSale: 4.6,
//    name:'Alki'
//  };
//  for (var i = 0; i < 14; i++){
//    var totalCookiePerHour = getRandomNumCust(store5.maxNumCust,store5.minNumCust) * Math.floor(store5.avgCookieSale);
//    totalCookie = totalCookie + totalCookiePerHour;
//    console.log(totalCookie);
} */
