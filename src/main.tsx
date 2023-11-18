import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
