import Link from "next/link";

import EventsList from "../components/eventsList/eventsList";

import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
