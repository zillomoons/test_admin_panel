import React from 'react';
import EditProfile from './EditProfile';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Setting() {
  const query = useQuery();
  const name = query.get('name');
  const email = query.get('email');
  const phone = query.get('phone');
  const username = query.get('username');
  return (
    <EditProfile name={name} email={email} phone={phone} username={username} />
  );
}

export default Setting;
