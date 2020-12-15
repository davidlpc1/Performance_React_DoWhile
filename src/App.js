import React from 'react';
import { FixedSizeList as List } from 'react-window';
import users from './users_data'
import User from './components/User'

export default function App() {
  return (
    <List
      height={window.innerHeight}
      itemCount={users.length}
      itemSize={35}
      width={window.innerWidth}
    >
      {User}
    </List>
  );
}
