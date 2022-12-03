import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export const dateConverter = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatDate = date => {
  return format(new Date(date), 'Pp');
};
