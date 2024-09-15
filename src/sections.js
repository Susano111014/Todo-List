function CallDefaultSection() {
    return { CrateTodo, SavesTodo, DeleteTodo };
}
const CrateTodo = () => Object.CreateNewTodo();
const DeleteTodo = (key) => RemoveItem(key);
const SavesTodo = (todo) => savesItems('key', todo);

function CreateNewSections() {
    { return AddTitle, AddNewTodo };
}
const AddNewTodo = (titleKey) => LookUpStorage(titleKey);
const AddTitle = (title) => title;
