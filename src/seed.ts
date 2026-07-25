export type Task = {
    id: number;
    title: string;
    completed: boolean;
}

export let tasks: Task[] = [];

export function nextTaskId(): number {
    return nextId++;
}

export let nextId = 1;

export function createSampleTasks() : void {
    const sampleTasks: Omit<Task, 'id'>[] = [
        { title: "Buy groceries", completed: false },
        { title: "Walk the dog", completed: true },
        { title: "Read a book", completed: false },
    ];
    tasks.push(...sampleTasks.map((task, index) => ({ ...task, id: nextId++ })));
} 