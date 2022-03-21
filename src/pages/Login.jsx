import styled from "styled-components";

const Wrapper = styled.div`
    background-color: gray;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

`
const Label = styled.p`

`
const Modal = styled.div`
    height: 300px;
    width: 500px;
    border: 1px solid black;
`
const FormContainer = styled.div`
padding-top: 40px;
padding-bottom: 10px;
    
`
const Title = styled.h1`
`
const Email = styled.input`
    display: block;
    padding: 10px;
    width: 300px;
    margin-bottom: 5px;
  
    border: 1px solid black;
`
const Password = styled.input`
    width: 300px;
    padding: 10px;
    
    border: 1px solid black;
`
const RememberMeContainer = styled.div`
    display: flex;
    max-width: 80%;
    justify-content: space-around;
    align-items: center;
`
const RememberMe = styled.input.attrs({ type: 'checkbox' })`
    height: 20px;
    width: 20px;
    border: 1px solid black;
`
const Button = styled.button`
    width: 100%;
`

const Login = () => {
  return (
    <Wrapper>
        
        <Modal>
        <Title>Login</Title>
            <Container>
            <FormContainer>
                <Email placeholder="Email"/>
                <Password placeholder="Password"/>
            </FormContainer>
            
            </Container>
            
            <RememberMeContainer>
                Remember me?
                <RememberMe/>
            </RememberMeContainer>
        </Modal>
       
    </Wrapper>
  )
}

export default Login