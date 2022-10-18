import MeetupList from '../components/meetups/MeetupList';
import { useState } from 'react';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: '타이틀1',
    image:
      'https://images.unsplash.com/photo-1665779829294-f2297a628d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
    address: '주소1',
    description: '디스크립션1',
  },
  {
    id: 'm2',
    title: '타이틀2',
    image:
      'https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: '주소2',
    description: '디스크립션2',
  },
];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  fetch('https://react-add-backend-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
