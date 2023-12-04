import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 24px;
  padding-left: calc(50% - 577px);
  padding-right: calc(50% - 577px);
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: #fafafa;
`;

export const StyledParagraph = styled.p`
  color: black;
`;

export const MainCenterblock = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const TextImg = styled.div`
  padding-top: 75px;
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
	font-family: 'StratosSkyeng', sans-serif;
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

export const Text = styled.p`
	z-index: 1;
	position: absolute;
	padding-left: 30px;
	border-radius: 30px;
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 64px;
	font-style: normal;
	font-weight: 400;
	line-height: 72px;
	letter-spacing: -0.8px;
	padding-top: 30px;
`;
export const Li = styled.li`
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
	width: 244px;
	text-align: left;
	list-style-type: none;
`;

export const Ul = styled.div`
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
export const NnumberLi = styled.div`
	border-radius: 34px;
	background: rgb(199, 233, 87);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 67px;
	height: 67px;
	color: #000;
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px; /* 125% */
`;

export const Ulli = styled.div`
display: flex;
    flex-wrap: wrap;
    gap: 24px;
    flex-direction: row;
    align-content: flex-start;
    align-items: flex-start;

`;
export const Foryou = styled.p`
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  padding-top: 75px;
  padding-bottom: 40px;
  color: black;
`;
export const Directions = styled.div`
  text-align: left;
  padding-top: 107px;
`;

export const DirectionsOl = styled.div`
  column-count: 2;
  padding-top: 22px;
`;

export const LiDw = styled.li`
	color: #000;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
	width: 244px;
	text-align: left;
	list-style-type: disc;
`;

export const Description = styled.div`
	margin-top: 75px;
	width: 100%;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
	text-align: left;
	text-align: justify;
`;
export const Span = styled.span`
	text-align: left;
	z-index: 10;
	width: 823px;
	position: absolute;
	color: #000;
	padding-left: 52px;
	padding-top: 46px;
	font-variant-numeric: lining-nums proportional-nums;
	font-family: 'StratosSkyeng', sans-serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px; /* 125% */
`;
export const Foot = styled.div`
  position: relative;
  margin-top: 75px;
  display: flex;
  align-items: flex-start;
`;

export const ButtonS = styled.button`
  border-radius: 46px;
  background: var(--palette-purple-90, #580ea2);
  width: 275px;
  height: 52px;
  flex-shrink: 0;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.05px;
  position: absolute;
  left: 3.25rem;
  bottom: 1rem;
  

  &:hover {
    background: #2d1f79;
  }

  &:active {
    background: #3b29a1;
  }
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
`;

export const Modal = styled.div`
position: sticky;
width: 444px;
height: 360px;
border-radius: 12px;
background: #fff;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 1000;
color: #000;
flex-direction: column;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
`;

export const SpanS = styled.span`
  font-size: 2rem;
  position: absolute;
  padding: 25px 45px 223px;
`;

export const SpanName = styled.span`
	color: #000;
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

export const MenuStyle = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	cursor: pointer;
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