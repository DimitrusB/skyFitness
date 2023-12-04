import { styled } from 'styled-components';

export const Dropdown = styled.div`
	display: inline-block;
`;

export const DropdownContent = styled.div`
	height: 144px;
	display: flex;
	opacity: 0;
	visibility: hidden;
	transform: translateY(-20px);
	transition: all 0.3s ease-in-out 0s;
	position: absolute;
	z-index: 999;
	flex-direction: column;
	right: 0;
	justify-content: flex-end;
	overflow: hidden;


	&.open {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
	
`;

export const EachDropdownContent = styled.div`
	width: inherit;
	text-align: right;
	cursor: pointer;
	font-size: 24px;
	line-height: 1.7;
	color: ${props => (props.$color ? 'white' : 'black')};
	&:hover {
		color: rgba(217, 217, 217, 1);
	}
`;

export const Pointer = styled.div`
	border: none;
`;


