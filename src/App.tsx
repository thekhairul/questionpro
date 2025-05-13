import DashboardLayout from "@/layouts/DashboardLayout";
import RootLayout from "@/layouts/RootLayout";
import Comments from "@/pages/Comments";
import Component from '@/pages/Component';
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Posts from "@/pages/Posts";
import Profile from '@/pages/Profile';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="component" element={<Component />} />
          <Route path="user" element={<Profile />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
