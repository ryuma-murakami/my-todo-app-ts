import { action } from 'storybook/actions';
import { TaskItem } from './TaskItem';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/TaskItem',
  component: TaskItem,
  args: {
    onChange: action('CHANGE'),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskItem>;

export default meta;

type Story = StoryObj<typeof TaskItem>;

export const NotStarted: Story = {
  args: {
    task: {
      id: '1',
      title: 'Incomplete Task',
      status: 'notStarted',
    },
  },
};

export const Completed: Story = {
  args: {
    task: {
      id: '2',
      title: 'Completed Task',
      status: 'completed',
    },
  },
};
