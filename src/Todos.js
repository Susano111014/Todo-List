 function TodosFactory () {
   this.title = title;
   this.description = description;
   this.dueDate = dueDate;
   this.priority = priority;
   this.checklist = checklist;
}

TodosFactory.prototype.addTodoTitle = function (title) {
    this.title = title.toString();
    console.log(`Your Todo's Title: ${textDescription}
        has been successfully added`);
};

TodosFactory.prototype.addDescription = function(description) {
    const textDescription = description.toString();
    console.log(`Your Todo's Description: ${textDescription}
        has been successfully added`);
};

TodosFactory.prototype.addDate = function (dueDate) {
    this.dueDate = dueDate;
    console.log(`Your Todo's Date: ${textDescription}
        has been successfully added`);
};

TodosFactory.prototype.addPriority = function (priority) {
    this.priority = priority;
    console.log(`Your Todo's priority: ${priority}
        has been successfully added`);
};

TodosFactory.prototype.addChecked = function () {
    this.checklist = 'checked';
    console.log(`Your Todo's task has been: has been completed`);
};