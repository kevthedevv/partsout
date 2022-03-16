import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    color: white;
    background-color: #e0bb7f;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AnnouncementContent = styled.p`
    cursor: pointer;
`

const Announcement = () => {
  return (
    <Container>
        <AnnouncementContent>Free shipping! Claim your voucher today</AnnouncementContent>
    </Container>
  )
}

export default Announcement