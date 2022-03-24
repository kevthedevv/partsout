import styled from "styled-components";
import imgLogin from "../images/login.jpg"

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100%;
`
const ImgContainer = styled.div`
    flex: 2;
`
const Label = styled.p`

`
const Image = styled.img`
     max-width: 100%;
    min-width: 100%;
    
`
const Modal = styled.div`
    height: 500px;
    width: 900px;
    border: 1px solid black;
`
const FormContainer = styled.div`
    flex: 1;
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
            <Container>
            <ImgContainer>
                <Image src={imgLogin}/>
            </ImgContainer>
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