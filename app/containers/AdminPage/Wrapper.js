import styled from 'styled-components';

const Wrapper = styled.div`
  bottom: 0;
  justify-content: flex-end;
  left: calc(50vw - 1350px / 2);
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 240px;
  z-index: 10;
  background-color: #e3e8ee;
`;

const FlexBoxRoot = styled.div`
  margin-top: -16px;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
`;
const BoxRoot = styled.div`
  margin-top: 16px;
`;

const A = styled.a`
  color: #586ada;
  text-decoration: none;
  font-weight: 500;
`;

const NavItem = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
  background-color: #e3e8ee;
`;

export { BoxRoot, FlexBoxRoot, A, NavItem };
export default Wrapper;
