import {
    useHistory,
  useParams
} from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    margin:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
`;

export default function UserView(){
    const history = useHistory()
    const { user } = useParams()
    return (
        <>
            <img style={{height:20,width:20,margin:10,backgroundColor:'#fff',borderRadius:'50%'}} src="https://www.flaticon.com/premium-icon/icons/svg/2550/2550243.svg" alt="Voltar" onClick={() => history.goBack()} />
            <Container>
                <span><strong>{ user }</strong> está no DoWhile 2020</span>
                <img src={`https://github.com/${user}.png`} alt={user} />
            </Container>
        </>
    )
}