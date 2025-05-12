import DashboardLayout from "@/layouts/DashboardLayout";
import RootLayout from "@/layouts/RootLayout";
import Comments from "@/pages/Comments";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Posts from "@/pages/Posts";
import { BrowserRouter, Route, Routes } from "react-router";

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
