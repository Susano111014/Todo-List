export {TodosFactory};
import { format } from "date-fns";


function TodosFactory () {
   this.title;
   this.description;
   this.dueDate;
   this.priority;
   this.checklist = false;
}

TodosFactory.prototype.addTodoTitle = function (title) {
    this.title = title.toString();
    console.log(`Your Todo's Title: ${title}
        has been successfully added`);
};

TodosFactory.prototype.addDescription = function(description) {
    this.description = description.toString();
    console.log(`Your Todo's Description: ${description}
        has been successfully added`);
};

TodosFactory.prototype.addDate = function (year, month, day, hour, minutes) {
    this.dueDate = [
        year,
        month-1,
        day,
        hour,
        minutes,
    ];
    console.log(`Your Todo's Date is : ${FormateDate(...this.dueDate)} has been successfully added`);
};

function FormateDate (yyy, MM, dd, HH, mm) {
    const createdDate = format(new Date(yyy, MM, dd, HH, mm), 'PPpp');
    return createdDate;
}


TodosFactory.prototype.addPriority = function (priority) {
    this.priority = priority;
    console.log(`Your Todo's priority: ${priority}
        has been successfully added`);
};

TodosFactory.prototype.addChecked = function () {
    this.checklist = 'checked';
    console.log(`Your Todo's task has been completed`);
};

