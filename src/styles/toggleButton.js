import styled from 'styled-components'

export const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background-color: #892cdc;
  }

  &:checked + label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`
export const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
  float: right;
  margin: 10px;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`
