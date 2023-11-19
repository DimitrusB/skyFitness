import { NavLink } from "react-router-dom";
import * as S from "./Profile.styles";
import { useEffect, useState } from "react";
import { MenuProfile } from "../../menuProf/MenuProfile";
import { ListLessons } from "../../listLesons";
import { getUserLessons, auth, editPassword } from "../../api/api";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux'
import { signIn } from '../../store/actions/creators'



export const ProfilePage = () => {

	const name = window.localStorage.getItem("name");
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);
	const [userLesson, setUserLesson] = useState(JSON.parse(window.localStorage.getItem("lesson")));


	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
		  if (user) {
			(async () => {
			  try {
				const userData = await getUserLessons();
				dispatch(signIn(userData));
				setUserLesson(userData.courses)
				console.log(userData);
			  } catch (error) {
				console.log(error);
			  }
			})();
		  } else {
		  }
		});
	  
		return () => unsubscribe();
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
					<S.Logo src='/logo2.png'></S.Logo>
				</NavLink>

				<S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 50 50'
						fill='none'
					>
						<circle cx='25' cy='25' r='25' fill='#D9D9D9' />
					</svg>
					<S.SpanName>{name}</S.SpanName>
					<MenuProfile isOpen={isOpen} />
				</S.MenuStyle>
			</S.LogoHeader>
			<S.MyProf>Мой профиль</S.MyProf>
			<S.NamePass>
				<S.SpanName>Мой логин: {name}</S.SpanName>
				{/* <S.SpanName>Пароль: {user.password}</S.SpanName> */}
				<S.ButtonS>Редактировать логин</S.ButtonS>
				<S.ButtonS>Редактировать пароль</S.ButtonS>
			</S.NamePass>
			<S.MyCoursesW>Мои курсы</S.MyCoursesW>
			<ListLessons userLesson={userLesson}/>
		</S.Wrapper>
	);
};
