/* Your Code Here */

const createEmployeeRecord = (arr) => {
    const [firstName, familyName, title, payPerHour] = arr
   return {
        firstName,
        familyName, 
        title, 
        payPerHour, 
        timeInEvents: [], 
        timeOutEvents: []
    }
}
const createEmployeeRecords = (records) => {
   return records.map(record => createEmployeeRecord(record))
}

 function createTimeInEvent(timeEvent) {
    let [date, hour] = timeEvent.split(" ")
    const timeIn = {
        date, 
        hour: parseInt(hour, 10),
        type: "TimeIn"
    }
    
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(timeEvent) {
    let [date, hour] = timeEvent.split(" ")
    const timeIn = {
        date, 
        hour: parseInt(hour, 10),
        type: "TimeOut"
    }
    
    this.timeOutEvents.push(timeIn)
    return this
}



function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100
    
}   

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}


function calculatePayroll(employees) {
   return  employees.reduce(function(total, newVal){
       
        return total += allWagesFor.call(newVal)
    }, 0)
}

function findEmployeeByFirstName(collection, firstName) {
    return collection.find(c => c.firstName === firstName)

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
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



debugger;