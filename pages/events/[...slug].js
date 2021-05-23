import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { getFilteredEvents } from '../../helpers/api-utils'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/results-title/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/error-alert/error-alert'

function FilteredEventsPage(props) {
  const [loadedEvents, setLoadedEvents] = useState([])
  const router = useRouter()

  const filterData = router.query.slug

  const { data, error } = useSWR(
    'https://nextjs-course-e5902-default-rtdb.firebaseio.com/events.json'
  )

  useEffect(() => {
    if (data) {
      const events = []

      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        })
      }

      setLoadedEvents(events)
    }
  }, [data])

  if (!loadedEvents) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          Invalid filter. ErrorAlertlease adjust your values!
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = loadedEvents.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>No events found for the chosen filter!</ErrorAlert>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
