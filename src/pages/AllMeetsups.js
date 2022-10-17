import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: '타이틀1',
    image:
      'https://images.unsplash.com/photo-1665898186363-dfbc8a5a8c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    address: '주소1',
    description: '디스크립션1',
  },
  {
    id: 'm2',
    title: '타이틀2',
    image:
      'https://images.unsplash.com/photo-1665688761551-8ea1d37d5205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    address: '주소2',
    description: '디스크립션2',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
