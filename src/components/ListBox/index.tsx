import React from 'react'
import styled from 'styled-components/macro'

interface IProps {
  children?: React.ReactNode
  title?: string
}

const ListWrap = styled.div`
  width: 100%;
`
const Title = styled.p`
  font-size: 24px;
  line-height: 24px;
  color: #222222;
  font-weight: 600;
  margin: 60px 0 6px;
`
const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 20px;
`
const Container = styled.div`
  width: 100%;
  background-color: #f6f7f9;
  box-sizing: border-box;
  padding: 14px;
  border-radius: 20px;
`
const ContainerMain = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 30px;
`
const ListHead = styled.div`
  width: 100%;
  padding: 0 0 20px;
  border-bottom: 1px dashed #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`
const HeadLeft = styled.div`
  p {
    margin: 0;
    &.title {
      font-size: 28px;
      line-height: 28px;
      font-weight: 600;
      color: #222222;
    }
    &.sub-title {
      font-size: 14px;
      line-height: 14px;
      color: #888888;
      font-weight: 400;
      margin-top: 5px;
    }
  }
`
const HeadRight = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: #999999;
  font-weight: 600;
  position: relative;
  display: inline-block;
  padding-right: 12px;
  cursor: pointer;
  a {
    color: #999999;
    text-decoration: none;
  }
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    right: 0;
    top: 4px;
    width: 5px;
    height: 5px;
    border-top: 2px solid #999999;
    border-right: 2px solid #999999;
    transform: rotate(45deg);
  }
`
export default function ListBox({ children, title }: IProps) {
  return (
    <ListWrap>
      <Container>
        <ContainerMain>
          <ListHead>
            <HeadLeft>
              <Title>{title}</Title>
            </HeadLeft>
          </ListHead>
          {children}
        </ContainerMain>
      </Container>
    </ListWrap>
  )
}
