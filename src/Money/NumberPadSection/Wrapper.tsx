import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      font-size: 18px;
      background: #f3f0f1;
      width: 20%;
      height: 64px;
      float: left;
      border-radius: 32px;
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
      6px 6px 10px rgba(0, 0, 0, 0.2);
      margin: 8px 2.5%;
      top: 45%;
      left: 0;
      right: 0;
      border: 0;
      transition: 300ms ease-out;
      cursor: pointer;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      &:active {
        box-shadow: inset 2px 2px 16px rgba(255,255,255,.9),
        inset 8px 8px 9px rgba(0,0,0,.2), 5px 10px 5px rgba(0,0,0,.03),
          -5px -5px 25px rgba(255,255,255,.1), -2px -2px 9px rgba(100,100,100,.1),
          inset -2px -2px 9px rgba(255,255,255,1);
        outline: none;
        background-color: #e5e5ef;
        text-shadow: -2px -2px 3px rgba(0,0,0,.2), 2px 2px 3px rgba(255,255,255,1);
        transform: translateY(3px);
      }
      &.ok {
        height: 144px;
        float: right;
      }

      &.zero {
        width: 45%;
      }
      > svg{
        height: 24px;
        width: 24px;
      }
  }
`;

export default Wrapper;