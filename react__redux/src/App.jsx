import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reload, setCount, useSelectCount } from './store/slices/counterSlice'
import { setNote, useSelectNote } from './store/slices/notesSlice';
import { fetchPosts, useSelectPosts, useSelectPostsStatus } from './store/slices/postsSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(useSelectCount);
  const [value, setValue] = useState('');
  const [noteValue, setNoteValue] = useState('');
  const posts = useSelector(useSelectPosts);
  const status = useSelector(useSelectPostsStatus);
  const notes = useSelector(useSelectNote);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error {error}</p>

  const inc = () => {
    dispatch(increment());
  }
  const dec = () => {
    dispatch(decrement());
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>Inc++</button>
      <button onClick={dec}>Dec++</button>
      <button onClick={() => dispatch(reload())}>Reload</button>
      <button onClick={() => dispatch(setCount(value))}>Push</button>
      <br />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <br />
      <ul>
        {posts.map(el => <li key={el.id}>{el.title}</li>)}
      </ul>
      <br />
      <ul>
        {notes.map(noteEl => <li key={noteEl.id}>{noteEl}</li>
        )}
      </ul>
      <input type="text" value={noteValue} onChange={(e) => setNoteValue(e.target.value)}/>
      <br />
      <button onClick={() => dispatch(setNote(noteValue))}>Push note</button>
    </>
  )
}

export default App
