import { action } from 'storybook/actions';
import { TrashedTaskItem } from './TrashedTaskItem';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/TrashedTaskItem',
  component: TrashedTaskItem,
  args: {
    onRestore: action('RESTORE'),
    onDelete: action('DELETE'),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TrashedTaskItem>;

export default meta;

type Story = StoryObj<typeof TrashedTaskItem>;

export const Index: Story = {
  args: {
    task: {
      id: '1',
      title: 'Trashed Task',
      status: 'trashed',
    },
  },
};
