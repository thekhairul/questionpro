import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;