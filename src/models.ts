
export type RouteViews = 'all' | 'completed' | 'active';

export interface AppState {
    newTodoTitle: string;
    currentView?: RouteViews;
    todos: Todo[];
}

export interface Todo {
    title: string;
    completed: boolean;
}
