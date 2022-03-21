import styled from "styled-components";

const Container = styled.div`
    padding-top: 50px;
    max-width: 80%;
    margin: auto;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SortingFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Select = styled.select`
     padding: 10px 30px;
     margin-left: 10px;
`
const Title = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 100;
`
const Option = styled.option``;

const Filter = () => {
  return (
    <Container>
        <FilterContainer>
            <ProductFilter>
                <Title>Filter by:</Title>
                <Select>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option>Brandnew</Option>
                    <Option>Used</Option>
                </Select>
            </ProductFilter>
            <SortingFilter>
            <Title>Sort by:</Title>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            
            </SortingFilter>
        </FilterContainer>
    </Container>
  )
}

export default Filter