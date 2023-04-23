const TodoFooter = ({ todos, completedTodos, onRemoveAllCompletedTodos }) => {
	return (
		<div className="todo-footer">
			<span>{completedTodos} / {todos}</span>
			<button onClick={onRemoveAllCompletedTodos}>
				Clear all completed
			</button>
		</div>
	);
};

export default TodoFooter;