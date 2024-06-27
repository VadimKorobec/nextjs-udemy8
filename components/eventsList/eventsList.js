import EventItem from "../eventItem/eventItem";

import styles from "./eventsList.module.css";

const EventsList = (props) => {
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
