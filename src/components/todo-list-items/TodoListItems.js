import TodoListItem from "../todo-list-item/TodoListItem";

const TodoListItems = ({ todos, onRemoveTodo, onCompletedTodo }) => {
	return (
		<div className="todo-list-items">
			<TodoListItem
				todos={todos}
				onRemoveTodo={onRemoveTodo}
				onCompletedTodo={onCompletedTodo}
			/>
		</div>
	);
};

export default TodoListItems;