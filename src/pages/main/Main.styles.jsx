import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	padding-top: 24px;
	padding-left: calc(50% - 577px);
	padding-right: calc(50% - 577px);
	min-height: 100vh;
	width: 100%;
	position: relative;
`;

export const Header = styled.header``;

export const LogoHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.img``;

export const AuthButton = styled.button`
	width: 77px;
	height: 36px;
	border: #140d40;
	border-radius: 46px;
	background: #140d40;
	color: #ffffff;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	&:hover {
		background: rgba(45, 31, 121, 1);
	}
	&:focus {
		background: rgba(59, 41, 161, 1);
	}
`;

export const TextHeader = styled.div``;

export const SmallText = styled.p`
	padding-top: 35px;
	font-size: 20px;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: -0.05px;
	text-align: left;
	color: rgba(255, 255, 255, 0.5);
`;

export const BigTextBlock = styled.div`
	display: flex;
	padding-top: 17px;
	display: flex;
	gap: 150px;
`;

export const BigText = styled.p`
	font-size: 60px;
	font-weight: 400;
	line-height: 55px;
	letter-spacing: -1.16px;
	text-align: left;
	width: 830px;
`;

export const ChangeBodyBlock = styled.div``;

export const ChangeBodyImg = styled.img`
	position: absolute;
	top: 100px;
`;

export const Container = styled.div`
	padding-top: 52px;
	display: flex;
	flex-wrap: wrap;
	gap: 37px;
`;

export const Exercise = styled(NavLink)`
	width: 360px;
	height: 480px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const ExerciseG = styled.g`
	mix-blend-mode: multiply;
`;

export const ExerciseName = styled.span`
	font-family: 'Abhaya Libre', serif;
	position: absolute;
	top: 35px;
	left: 30px;
	font-weight: 800;
	font-size: 36px;
	line-height: 40px;
	letter-spacing: -0.5px;
	text-align: left;
	color: rgba(0, 0, 0, 1);
`;

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	padding-top: 34px;
	padding-bottom: 60px;
`;
export const UpButton = styled.button`
	background: rgba(199, 233, 87, 1);
	width: 147px;
	height: 48px;
	border-radius: 46px;
	gap: 8px;
	color: rgba(0, 0, 0, 1);
	font-size: 24px;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: -0.1px;
	text-align: center;
	border: none;
	&:hover {
		background: rgba(218, 242, 137, 1);
	}
	&:focus {
		background: rgba(235, 255, 171, 1);
	}
`;

export const MenuStyle = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	cursor: pointer;
`;

export const SpanName = styled.span`
	color: ${props => props.$color ? 'white' : 'black'};
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
	text-overflow: ellipsis;
	overflow: hidden;
	min-width: 64px;
	max-width: 160px;
	margin-left: 15px;
	margin-right: 12px;
`;
