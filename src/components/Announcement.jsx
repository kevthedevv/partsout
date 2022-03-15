import styled from "styled-components";

const Container = styled.div`
    height: 40px;
    color: white;
    background-color: black;
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