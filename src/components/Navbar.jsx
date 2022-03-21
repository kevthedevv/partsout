import React from "react";
import partsout from "../partsout.png"
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  width: 80%;
  margin: auto;
 
`;
const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const Logo = styled.img`
  
  width: 100px;
  height: 30px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  
`
const SearchInput = styled.input`
  border: none;
  padding: 10px;
  width: 100%;
  
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-left: 30px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={partsout}/>
        </Left>
        <Center>
          <SearchContainer>
            <SearchInput/>
           <Search style={{color: "gray", padding: "10px, 0, 10px, 0" }}/>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            Login
          </MenuItem>
          <MenuItem>
            My Shop
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
