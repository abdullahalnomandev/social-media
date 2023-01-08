import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
