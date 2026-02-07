import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateTaskForm } from './CreateTaskForm';
import { action } from 'storybook/actions';

const meta = {
  title: 'Components/CreateTaskForm',
  component: CreateTaskForm,
  args: {
    onSubmit: action('SUBMIT'),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreateTaskForm>;

export default meta;

type Story = StoryObj<typeof CreateTaskForm>;

export const Index: Story = {};
