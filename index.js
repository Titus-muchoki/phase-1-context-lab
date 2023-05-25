/* Your Code Here */
function createEmployeeRecord(array) {
  const obj = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
    return obj;
}
let createEmployeeRecords = function(employeeRowData){
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row);
    });
}
let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split('')

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return this;
}
let createTimeOutEvent = function(dateStamp){
    let [date, hour]  = dateStamp.split('')

    this.createTimeOutEvent.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })
    return this;
}
let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate;
    })
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === soughtDate;
    })
    return(timeOut.hour - inEvent.hour) / 100;
}
let wagesEarnedOnDate = function(soughtDate){
    let rawage = hoursWorkedOnDate.call(this, soughtDate)
    *this.payPerHour
    return parseFloat(rawage.toString())
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
