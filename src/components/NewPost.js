import classes from './NewPost.module.css';
import {useState} from 'react';

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  // add state for requests
  const [sendingRequest, setSendingRequest] = useState(false);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    setSendingRequest(true);
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title: enteredTitle }),
      });

      setSendingRequest(false);
      setEnteredTitle('');
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button disabled={sendingRequest}>
        {sendingRequest ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}

export default NewPost;