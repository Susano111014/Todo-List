import { TodosFactory } from "./Todos";
export {CallDefaultSection, CreateNewSections};

function CallDefaultSection() {
    return { CrateTodo: CratedTodo, SavesTodos, DeleteTodos };
}
const CratedTodo = () => new TodosFactory();
const DeleteTodos = (key) => RemoveItem(key);
const SavesTodos = (todo) => savesItems('key', todo);

function CreateNewSections() {
    { return AddTitle, AddNewTodo };
}
const AddNewTodo = (titleKey) => LookUpStorage(titleKey);
const AddTitle = (title) => toString(title);
