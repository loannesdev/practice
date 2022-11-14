import { render } from 'preact';
import Form from './components/Form';
import List from './components/List';
import { S } from './store';
import './styles.css';

function App() {
  return (
    <section className='grid h-screen gap-3 p-3 grid-cols-2 max-sm:grid-cols-1'>
      <Form />
      <code className='drop-shadow-md bg-blue-100 rounded-md p-2 break-words overflow-y-auto col-span-1'>
        {JSON.stringify(S.value.USERS)}
      </code>
      <List />
    </section>
  )
}

render(<App />, document.getElementById('app'))
