import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counter from '../Components/Counter';
import Home from '../Components/Home'
import SignupForm from '../Components/SignupForm';
import ToDo from '../Components/ToDo';
import NotificationCenter from '../Components/NotificationCenter';

const NotFound = () => <h2>404 - Page Not Found</h2>;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* 2. Navigation Bar */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/signup">Signup Form</Link></li>
          <li><Link to="/todo">ToDo</Link></li>
          <li><Link to="/notification-center">NotificationCenter</Link></li>
        </ul>
      </nav>

      {/* 3. Route Configuration */}
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/notification-center" element={<NotificationCenter />} />

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
