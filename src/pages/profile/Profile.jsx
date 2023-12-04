import { NavLink } from 'react-router-dom';
import * as S from './Profile.styles';
import { useEffect, useState } from 'react';
import { MenuProfile } from '../../components/menuProf/MenuProfile';
import { ListLessons } from '../../components/listLesons/listLessons';
import { FormPassword } from '../../components/forms/changePass';
import { FormLogin } from '../../components/forms/changeLogin';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

export const ProfilePage = ({ userData, setUserData }) => {

	setUserData(useSelector((state) => state.api.dataUser))

	const [color, setColor] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [userLesson, setUserLesson] = useState(null);
	const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(null);
	const openModalLogin = () => setModalIsOpenLogin(true);
	const closeModalLogin = () => setModalIsOpenLogin(null);

	useEffect(() => {
		if (userData) {
			setUserLesson(userData.courses);
		}
	}, [userData]);

	useEffect(() => {
		setColor(false);
	}, []);

	function mouseOut() {
		if (isOpen) {
			toggleOpen();
		}
	}

	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src='/logo2.png' />
				</NavLink>

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
						<S.SpanName $color={color}>{userData && userData.email}</S.SpanName>
						<MenuProfile
							color={color}
							isOpen={isOpen}
							setUserData={setUserData}
						/>
					</S.MenuStyle>
				) : (
					<NavLink to='/auth'>
						<S.AuthButton>Войти</S.AuthButton>
					</NavLink>
				)}
			</S.LogoHeader>
			<S.MyProf>Мой профиль</S.MyProf>
			<S.NamePass>
				<S.SpanNameFull>
					Логин: {userData ? userData.email : 'Загрузка'}
				</S.SpanNameFull>
				<S.ButtonS onClick={openModalLogin}>Редактировать логин</S.ButtonS>
				{modalIsOpenLogin && <FormLogin closeModalLogin={closeModalLogin} />}
				<S.ButtonS onClick={openModal}>Редактировать пароль</S.ButtonS>
				{modalIsOpen && <FormPassword closeModal={closeModal} />}
			</S.NamePass>
			<S.MyCoursesW>Мои курсы</S.MyCoursesW>
			{userLesson && <ListLessons userLesson={userLesson} />}
		</S.Wrapper>
	);
};
ProfilePage.propTypes = {
	userData: PropTypes.object.isRequired,
	setUserData: PropTypes.func.isRequired,
  };