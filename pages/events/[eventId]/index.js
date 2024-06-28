import { useRouter } from "next/router";

import { getEventById } from "../../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId)

  if (!event) {
    return <p>No Event found!</p>
  }
  
 
  return (
    <div>
      <h1>The Event Detaile Page</h1>
    </div>
  );
};

export default EventDetailPage;
