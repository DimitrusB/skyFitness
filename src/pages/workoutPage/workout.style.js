import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	padding-left: calc(50% - 577px);
	padding-right: calc(50% - 577px);
	background: #fafafa;
`;

export const LogoHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	align-items: flex-end;
`;

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

export const Logo = styled.img`
	width: 220px;
	height: 35px;
	margin-top: 33px;
`;
export const Button = styled.button`
	display: inline-flex;
	padding: 5px 16px 7px 16px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 46px;
	background: #140d40;
	color: #fff;
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	&:hover {
		background: #2d1f79;
	}

	&:active {
		background: #3b29a1;
	}
`;

export const MyProf = styled.h1`
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 48px;
	font-style: normal;
	font-weight: 400;
	line-height: 56px; /* 116.667% */
	padding-top: 75px;
`;

export const ExerciseSpanName = styled.span`
	color: ${props => (props.$color ? 'white' : 'black')};
	font-variant-numeric: lining-nums proportional-nums;
	font-style: normal;
	text-overflow: ellipsis;
	overflow: hidden;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 32px;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: 0em;
`;

export const SpanName = styled.span`
	color: ${props => (props.$color ? 'white' : 'black')};
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

export const NamePass = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: center;
	padding-top: 40px;
	gap: 20px;
`;

export const ButtonS = styled.button`
	border-radius: 46px;
	background: var(--palette-purple-90, #580ea2);
	width: 275px;
	height: 52px;
	flex-shrink: 0;
	color: #fff;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 133.333% */
	letter-spacing: -0.05px;
	margin-top: 20px;

	&:hover {
		background: #2d1f79;
	}

	&:active {
		background: #3b29a1;
	}
`;

export const MyCoursesW = styled.h1`
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 48px;
	font-style: normal;
	font-weight: 400;
	line-height: 56px; /* 116.667% */
	padding-top: 91px;
`;

export const NameCourse = styled.span`
	width: 290px;
	height: 120px;
	position: absolute;
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'Abhaya Libre', serif;
	font-size: 36px;
	font-style: normal;
	font-weight: 800;
	line-height: 110%;
	letter-spacing: -0.5px;
	padding-top: 30px;
	padding-left: 30px;
`;

export const MyCourses = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	padding-top: 60px;
	width: 1200px;
	padding-bottom: 60px;
`;

export const CouresNameAndSVG = styled.div`
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

export const MenuStyle = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	cursor: pointer;
`;

export const SpanEx = styled.span`
	color: #000;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	color: ;
	margin-bottom: 40px;
	text-align: center;
`;

export const LiEx = styled.li`
	list-style-type: disc;
	width: 428px;
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
`;
export const Ex = styled.div`
	width: 428px;
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
`;

export const ExProg = styled.input`
	-webkit-appearance: none;
	background: transparent;
	width: 278px;
	height: 35px;
	overflow: hidden;
	border-radius: 22px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		border: 1px solid ${props => props.$colorBorder};
		height: 1px;
		width: 1px;
		background: ${props => props.$colorBorder};
		border-radius: 50%;
		cursor: pointer;
		box-shadow: -400px 0 0 400px ${props => props.$colorBorder};
		cursor: default;
		position: relative;

	}
	&::-webkit-slider-runnable-track {
		height: 35px;
		background: ${props => props.$colorBG};
		border: 2px solid ${props => props.$colorBorder};
		border-radius: 22px;
		cursor: default;
	}
`;

export const ProgressItem = styled.div`
	display: flex;
`;

export const ExProgress = styled.div`
	padding-top: 75px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-bottom: 100px;
`;

export const Progress = styled.div`
	padding: 36px 55px 20px 44px;
	width: 638px;
	min-height: 336px;
	border-radius: 30px;
	background: #f2f2f2;
	display: flex;
	flex-direction: column;
`;

export const ProgressMain = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 26px;
`;

export const UlEx = styled.ul`
	padding-top: 30px;
	padding-bottom: 52px;
`;
export const ButtonProgress = styled.button`
	display: ${props => props.$enabled ? `none` : `block`};
	width: 275px;
	height: 52px;
	flex-shrink: 0;
	border-radius: 46px;
	background: var(--palette-purple-90, #580ea2);
	color: #fafafa;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 133.333% */
	letter-spacing: -0.05px;

	&:hover {
		background: #2d1f79;
	}

	&:active {
		background: #3b29a1;
	}
`;

export const ListOfExercises = styled.div``;

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

export const ListOfLessons = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	width: 444px;
	min-height: 554px;
	border-radius: 12px;
	background: #fff;
	align-items: center;
  padding-bottom: 44px;
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

export const ExerciseForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-top: 30px;
`;

export const ExerciseQuestion = styled.p`
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05000000074505806px;
	text-align: left;
	color: rgba(0, 0, 0, 1);
	width: 360px;
`;

export const ExerciseInput = styled.input`
	width: 361px;
	border: 1px solid rgba(208, 206, 206, 1);
	border-top: none;
	border-left: none;
	border-right: none;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05000000074505806px;
	text-align: left;

	&::placeholder {
		color: rgba(208, 206, 206, 1);
	}
`;

export const ExerciseButton = styled.button`
	width: 278px;
	height: 52px;
	border-radius: 46px;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.05000000074505806px;
	color: rgba(255, 255, 255, 1);
	background: rgba(88, 14, 162, 1);
	margin-top: 40px;
`;
