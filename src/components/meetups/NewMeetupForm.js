import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Title</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Title</label>
          <input type='text' required id='address' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Title</label>
          <textarea type='description' required row='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button type='button'>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
