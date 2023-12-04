import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-left: calc(50% - 577px);
  padding-right: calc(50% - 577px);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Span = styled.span`
	padding-top: 38px;
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 133.333% */
	letter-spacing: -0.05px;
	width: 284px;
`;

export const Error = styled.div`
  width: 280px;
  color: coral;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LogInForm = styled.div`
	width: 366px;
	height: 401px;
	border-radius: 12px;
	background: rgba(255, 255, 255, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

export const LogInFormLogin = styled.div`
  width: 366px;
  height: auto;
  border-radius: 12px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 220px;
  height: 35px;
  margin-top: 33px;
`;

export const EmailInput = styled.input`
  width: 278.5px;
  margin-top: 38px;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  border-image: initial;
  border-bottom: 1px solid rgb(208, 206, 206);
  line-height: 24px;
  font-size: 18px;
  letter-spacing: -0.05px;
  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: rgba(208, 206, 206, 1);
  }
`;

export const PasswordInput = styled.input`
  width: 278.5px;
  margin-top: 38px;
  font-size: 18px;
  line-height: 24px;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid rgb(208, 206, 206);
  letter-spacing: -0.05px;
  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: rgba(208, 206, 206, 1);
  }
`;

export const SaveButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 46px;
  background: rgba(88, 14, 162, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  margin-top: 50px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  margin-bottom: 30px;
  &:hover {
    background: rgba(63, 0, 125, 1);
  }
  &:focus {
    background: rgba(39, 26, 88, 1);
  }
`;

export const CloseButton = styled.div`
	display: flex;
	cursor: pointer;
	z-index: 10;
	flex-direction: row;
	align-items: flex-start;
	position: absolute;
	right: 10px;
	top: 5px;
`;
