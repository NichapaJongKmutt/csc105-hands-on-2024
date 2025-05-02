export type AddTodoRequestBody = {
	title: string;
};

export type EditTodoRequestBody = {
	id: number;
	title: string;
};
