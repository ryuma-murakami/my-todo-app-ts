import { useLocalStorageState } from './useLocalStorageState';
import type { Task } from '../types/task';

export function useTasks() {
  const [taskList, setTaskList] = useLocalStorageState<Task[]>('taskList', []);

  const activeTaskList = taskList.filter(({ status }) => status !== 'trashed');

  const createTask = (title: string) => {
    setTaskList(prev => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        status: 'notStarted',
      };
      return [...prev, newTask];
    });
  };

  const updateTask = (id: string, update: Partial<Task>) => {
    setTaskList(prev =>
      prev.map(task => (task.id === id ? { ...task, ...update } : task)),
    );
  };

  return {
    activeTaskList,
    createTask,
    updateTask,
  };
}
