import { formatDistanceToNow } from 'date-fns';

export const dateConverter = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
