export type Task = {
  id: string;
  title: string;
  status: 'notStarted' | 'completed' | 'trashed';
};
