import EventsList from "../../components/eventsList/eventsList";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsList events={events} />
    </div>
  );
};

export default AllEventsPage;
