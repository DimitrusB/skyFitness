import React, { useEffect, useState } from 'react';
import * as S from './Main.styles';
import { MainArray } from './MainArray';
import { NavLink } from 'react-router-dom';
import { MenuProfile } from '../../components/menuProf/MenuProfile';
import PropTypes from 'prop-types';

export const Main = ({ userData, setUserData }) => {
	function goTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -10);
			setTimeout(goTop, 0);
		}
	}

	const [color, setColor] = useState();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	useEffect(() => {
		setColor(true);
	}, []);

	function mouseOut() {
		if (isOpen) {
			toggleOpen();
		}
	}

	return (
		<S.Wrapper>
			<S.Header>
				<S.LogoHeader>
					<S.Logo src='/logo.png' />
					{userData ? (
						<S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 50 50'
								fill='none'
							>
								<circle
									cx='25'
									cy='25'
									r='25'
									fill={color ? 'rgb(105, 105, 105)' : '#D9D9D9'}
								/>
							</svg>
							<S.SpanName $color={color}>
								{userData && userData.email}
							</S.SpanName>
							<MenuProfile
								setUserData={setUserData}
								color={color}
								isOpen={isOpen}
							/>
						</S.MenuStyle>
					) : (
						<NavLink to='/auth'>
							<S.AuthButton>Войти</S.AuthButton>
						</NavLink>
					)}
				</S.LogoHeader>
				<S.TextHeader>
					<S.SmallText>Онлайн-тренировки для занятий дома</S.SmallText>
					<S.BigTextBlock>
						<S.BigText>
							Начните заниматься спортом и улучшите качество жизни
						</S.BigText>
						<S.ChangeBodyBlock>
							<S.ChangeBodyImg src='/changeBody.png' />
						</S.ChangeBodyBlock>
					</S.BigTextBlock>
				</S.TextHeader>
			</S.Header>
			<S.Container>
				{MainArray.map(exercise => (
					<S.Exercise to={`/course/${exercise.id}`} key={exercise.id}>
						{exercise.name}
						{exercise.img}
					</S.Exercise>
				))}
			</S.Container>
			<S.Footer>
				<S.UpButton onClick={goTop}>Наверх ↑</S.UpButton>
			</S.Footer>
		</S.Wrapper>
	);
};
Main.propTypes = {
	userData: PropTypes.object.isRequired,
	setUserData: PropTypes.func.isRequired,
  };
