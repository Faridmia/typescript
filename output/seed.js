export let tasks = [];
export function nextTaskId() {
    return nextId++;
}
export let nextId = 1;
export function createSampleTasks() {
    const sampleTasks = [
        { title: "Buy groceries", completed: false },
        { title: "Walk the dog", completed: true },
        { title: "Read a book", completed: false },
    ];
    tasks.push(...sampleTasks.map((task, index) => ({ ...task, id: nextId++ })));
}
