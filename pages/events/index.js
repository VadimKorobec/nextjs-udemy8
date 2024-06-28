import { useRouter } from "next/router";
import EventsList from "../../components/eventsList/eventsList";
import EventsSearch from "../../components/eventsSearch/eventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter()
  const events = getAllEvents();

  const findEventsHandler = (year,month) => {
    const fullPath = `/events/${year}/${month}`
    
    router.push(fullPath)
  }

  return (
    <>
      <EventsSearch onSearch={ findEventsHandler} />
      <EventsList events={events} />
    </>
  );
};

export default AllEventsPage;
