import MeetupItem from './MeetupItem';
import classess from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classess.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          titile={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
