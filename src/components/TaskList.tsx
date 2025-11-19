import { useEffect, useState } from 'react';
import { CreateTaskForm } from './CreateTaskForm';
import { TaskItem } from './TaskItem';

export function TaskList() {
  type Task = {
    id: number;
    title: string;
    status: 'notStarted' | 'completed' | 'trashed';
  };

  const [taskList, setTaskList] = useState<Task[]>(() => {
    const taskListStorage = localStorage.getItem('taskList');

    return JSON.parse(taskListStorage ?? '[]');
  });

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const createTask = (title: string) => {
    setTaskList((prevTaskList) => {
      const newTask: Task = {
        id: Date.now(),
        title,
        status: 'notStarted',
      };

      return [...prevTaskList, newTask];
    });
  };

  const activeTaskList = taskList.filter(({ status }) => status !== 'trashed');

  const updateTask = (id: number, update: Partial<Task>) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((task) =>
        task.id === id ? { ...task, ...update } : task,
      );
    });
  };

  return (
    <div className="relative">
      <div className="sticky top-0 flex flex-col items-end gap-2 bg-slate-100 px-10 py-5">
        <div className="w-full">
          <CreateTaskForm onSubmit={createTask} />
        </div>
      </div>
      <div className="space-y-3 px-10 pb-10">
        {activeTaskList.length === 0 ? (
          <p className="text-center text-sm">タスクがありません</p>
        ) : (
          activeTaskList.map((task) => (
            <TaskItem key={task.id} task={task} onChange={updateTask} />
          ))
        )}
      </div>
    </div>
  );
}
