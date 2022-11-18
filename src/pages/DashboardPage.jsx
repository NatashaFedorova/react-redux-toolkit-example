import useLogOutRedirect from 'hooks/useLogOutRedirect';

export const DashboardPage = () => {
  useLogOutRedirect();
  return <p>Dashboard Page</p>;
};
