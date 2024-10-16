import Brain from './components/brain.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = (message) => toast(message);
  return (
    <>
      <Brain notify={notify}/>
      <ToastContainer />
    </>
  );
}

export default App;
