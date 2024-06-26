import Link from "next/link";

import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <h1>All Events Page</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllEventsPage;
