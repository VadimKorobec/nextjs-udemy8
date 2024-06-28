import { useRouter } from "next/router";
import { getFeaturedEvents } from "../../../dummy-data";
import EventsList from "../../../components/eventsList/eventsList";
import ResultsTitle from "../../../components/iventDetail/results-title";
import Button from "../../../components/button/button";
import ErrorAlert from "../../../components/errorAlert/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="centre">Loading...</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your value!</p>
        </ErrorAlert>

        <div className="centure">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFeaturedEvents({ 
    year: filteredYear,
    month:filteredMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="centure">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredYear,filteredMonth -1)
  
    return (
      <>
        <ResultsTitle date={date} />
        <EventsList events={filteredEvents} />
      </>
    );
};

export default FilteredEventsPage;
