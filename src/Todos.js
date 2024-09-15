 function TodosFactory () {
   this.title = title;
   this.description = description;
   this.dueDate = dueDate;
   this.priority = priority;
   this.checklist = checklist;
}

TodosFactory.prototype.addTodoTitle = function (title) {
    this.title = title.toString();
};

TodosFactory.prototype.addDescription = function(description) {
    return description.toString();
};

TodosFactory.prototype.addDate = function (dueDate) {
    return dueDate;
};

TodosFactory.prototype.addPriority = function (priority) {
    return priority;
};

TodosFactory.prototype.addChecklist = function (checklist) {
    return checklist;
};