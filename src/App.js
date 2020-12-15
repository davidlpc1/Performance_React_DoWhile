import React,{useCallback} from 'react';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import users from './users_data'

const Container = styled.div`
  display:flex ;
  flex-direction:row ;
  justify-content:space-between ;
  align-items:center ;
  padding:0px 10px ;
  border-bottom: .3px solid #5551 ;
`;

const User = ({ index, style }) => {
  const user = users[index]
  const alertOnClick = useCallback(() => alert(`${user} está apresentando no DoWhile2020`),[ user ])
  return(
    <>
      <Container style={style} onClick={alertOnClick}>
        <span>{user}</span>
        <img src={`https://github.com/${user}.png`} alt={user} height={30} width={30}/>
      </Container>
    </>
  )
};

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