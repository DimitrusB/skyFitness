import styled from 'styled-components';

export const NameCourse = styled.span`
	width: 290px;
	height: 120px;
	position: absolute;
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'Abhaya Libre ExtraBold', serif;
	font-size: 36px;
	font-style: normal;
	font-weight: 800;
	line-height: 110%;
	letter-spacing: -0.5px;
	padding-top: 30px;
	padding-left: 30px;
`;

export const SpanName = styled.span`
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
`;

export const CoursesNameAndSVG = styled.div`
	display: ${props => (props.$enabled ? `block` : `none`)};
	border-radius: 29.998px;
	background: #fff;
	box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
		10px -10px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonGo = styled.button`
	bottom: 40px;
	left: 20px;
	background: rgba(199, 233, 87, 1);
	width: 147px;
	height: 48px;
	border-radius: 46px;
	color: rgba(0, 0, 0, 1);
	font-size: 24px;
	font-weight: 400;
	line-height: 32px;
	letter-spacing: -0.1px;
	text-align: center;
	border: none;
	position: relative;

	&:hover {
		background: #daf289;
	}
	&:active {
		background: #ebffab;
	}
`;

export const MyCourses = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	padding-top: 60px;
	width: 1200px;
	padding-bottom: 60px;
`;

export const MenuStyle = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
	flex-wrap: wrap;
`;
export const ListOfLessons = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	width: 444px;
	padding-bottom: 40px;
	gap: 12px;
	border-radius: 12px;
	background: #fff;
	align-items: center;
`;

export const Element = styled.div`
	position: relative;
	border: ${props =>
		props.$enabled
			? `1px solid var(--mint-90, #06b16e)`
			: `1px solid var(--mint-90, #000000)`};
	border-radius: 26px;
	width: 278px;
	height: 76px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 0 15px 0 15px;

	a {
		color: ${props => (props.$enabled ? `#06b16e` : `#000000`)};
	}
`;

export const ElementCheck = styled.div`
	display: ${props => (props.$enabled ? `block` : `none`)};
	width: 27px;
	height: 25px;
	position: absolute;
	top: 12px;
	right: 12px;
`;

export const CloseButton = styled.div`
	display: flex;
	cursor: pointer;
	z-index: 10;
	flex-direction: row;
	align-items: flex-start;
	position: relative;
	left: 200px;
	top: 5px;
`;
export const BackModal = styled.div`
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;
