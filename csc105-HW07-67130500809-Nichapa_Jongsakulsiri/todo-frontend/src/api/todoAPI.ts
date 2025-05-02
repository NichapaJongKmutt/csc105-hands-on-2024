import { Axios } from '../axiosInstance';
import { Todo } from '../../types/todo';


type arrayTodoResponse = {
	success: boolean;
	data: Todo[] | null;
	msg: string;
};

type singleTodoResponse = {
	success: boolean;
	data: Todo | null;
	msg: string;
};

const getTodo = async () => {
	try {
		const response = await Axios.get<arrayTodoResponse>('/todo');
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const addTodo = async (title: string) => {
	try {
		const response = await Axios.post<singleTodoResponse>('/todo', {
			title: title,
		});
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const editNameTodo = async (id: number, title: string) => {
	try {
		const response = await Axios.patch<singleTodoResponse>('/todo', {
			id,
			title,
		});
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const successTodo = async (id: number) => {
	try {
		const response = await Axios.patch<singleTodoResponse>(`/todo/success/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

const deleteTodo = async (id: number) => {
	try {
		const response = await Axios.delete<singleTodoResponse>(`/todo/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
		return {
			success: false,
			data: null,
			msg: `${e}`,
		};
	}
};

export { getTodo, addTodo, editNameTodo, successTodo, deleteTodo };
