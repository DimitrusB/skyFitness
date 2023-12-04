import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	padding-left: calc(50% - 577px);
	padding-right: calc(50% - 577px);
`;

export const LogoHeader = styled.div``;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

export const Error = styled.div`
width: 280px;
color: coral;
font-weight: 400;
font-size: 14px;
line-height: 24px;
text-align: center;
`

export const LogInForm = styled.form`
	width: 366px;
	height: 439px;
	border-radius: 12px;
	background: rgba(255, 255, 255, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
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

export const PasswordInputRepeat = styled.input`
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

export const RegisterButton = styled.button`
	width: 278px;
	height: 52px;
	border-radius: 46px;
	border: 1px solid rgba(208, 206, 206, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05px;
	margin-top: 60px;
	background: rgba(88, 14, 162, 1);

	&:hover {
		background: rgba(63, 0, 125, 1);
	}
	&:focus {
		background: rgba(39, 26, 88, 1);
	}
`;
