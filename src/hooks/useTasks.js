import { useSelector } from "react-redux";
import { getStatusFilter, getTasks } from "redux/selectors";
import { statusFilters } from "redux/constants";


export const useTasks = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getStatusFilter);

  switch (filter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};