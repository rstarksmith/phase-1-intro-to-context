
// const employee = [firstName, familyName, title, payPerHour]

function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}
    
function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let eventObj = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    }
    employee.timeInEvents.push(eventObj)
    return employee
}

function createTimeOutEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let eventObj = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    }
    employee.timeOutEvents.push(eventObj)
    return employee
}

function hoursWorkedOnDate(employee, date){   
    const timeIn = employee.timeInEvents.find(dateStamp => date)
    const timeOut = employee.timeOutEvents.find(dateStamp => dateStamp.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(employee, date){
    const hours = hoursWorkedOnDate(employee, date)
    return employee.payPerHour * hours
}

// function calculatePayroll(date) {

// }
    

