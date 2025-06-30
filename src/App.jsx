
import { Routes, Route } from 'react-router-dom';
import Enter from './pages/Enter';
import Signin from './pages/Signin';
// import Logout from './pages/Logout';
import Pay from './pages/Pay';
import Shopping from './pages/Shopping';
import Signup from './pages/Signup';
import  Profile  from './pages/Profile';
import Error404 from './pages/Error404';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Enter />} />
      <Route path="/signin" element={<Signin />} />
  {/* <Route path="/logout" element={<Logout />} /> */}
<Route path="/pay" element={<Pay />} />
<Route path="/shopping" element={<Shopping />} />
<Route path="/signup" element={<Signup/>} />
<Route path="/profile" element={<Profile/>} />
    <Route path="*" element={<Error404 />} />


    </Routes>
  );
}

export default App;
