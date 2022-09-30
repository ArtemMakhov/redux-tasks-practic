import { Button } from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "redux/constants";
import css from "./StatusFilter.module.css";

import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChange = value => dispatch(setStatusFilter(value));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        elected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};