/* Your Code Here */

function createEmployeeRecord(employee) {
    return {
        firstName:employee[0],
        familyName:employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(employeeS) {
    return employeeS.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event) {
    //console.log (event.split(" "))
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(eventObj)
    return this
}
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)
    //console.log("timeClocked", timeOut, timeIn)
    //console.log((timeOut.hour - timeIn.hour)/100)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate (date) {
    //console.log(this)
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
    //return this.payPerHour * hoursWorkedOnDate(date)
}

function calculatePayroll (records) {
    //console.log("RECORDS", records)
    //return event.reduce(employee => )
    let onRecord = records.map(employee => allWagesFor.call(employee))
    //console.log(onRecord)
    // console.log(
    //     onRecord.reduce((currentValue, total) => currentValue + total)
    // )
    return onRecord.reduce((currentValue, total) => currentValue + total)
}

function findEmployeeByFirstName (employeeS, firstNameString) {
    //console.table(employeeS)
        //console.table(employeeS)
    //console.log(employeeS.find(worker => worker.firstName === firstNameString))
    let person = employeeS.find(worker => worker.firstName === firstNameString)
    return person

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

