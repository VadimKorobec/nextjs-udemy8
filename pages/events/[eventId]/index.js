import { useRouter } from "next/router";

import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/iventDetail/event-summary";
import EventLogistics from "../../../components/iventDetail/event-logistics";
import EventContent from "../../../components/iventDetail/event-content";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export default EventDetailPage;
