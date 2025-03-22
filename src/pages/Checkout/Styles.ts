import styled from 'styled-components'
import { brackpoints, colors } from '../../Styles'

type RowProps = {
  marginTop?: string
}

type InputGroupProps = {
  maxWidth?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.ul<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || 'auto'};

  @media (max-width: ${brackpoints.desktop}) {
    display: block;
  }
`

export const InputGroup = styled.li<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 2px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border-color: rgb(255, 79, 79);
    }
  }

  @media (max-width: ${brackpoints.desktop}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${brackpoints.desktop}) {
    margin-top: 8px;
    width: 100%;
  }
`
