import EventItem from "../eventItem/eventItem";

const EventsList = (props) => {
  const { events } = props;

  return (
    <ul>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
