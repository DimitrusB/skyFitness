import { NavLink } from "react-router-dom";
import * as S from "./Profile.styles";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";
import { getData } from "../../api/api";
import { useEffect, useState } from "react";
import { MenuProfile } from "../../menuProf/MenuProfile";
import { ListLessons } from "../../listLesons";


export const ProfilePage = () => {
	const name = localStorage.getItem('name');
	// const user = useSelector((state) => state.playerControl.dataUser);
	const [values, setValues] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

//   const courseNameMapping = {
//     bodyflex: './bodyflex.svg',
//     dancefitness: './dancefitness.svg',
//     stepaerobics: './stepaerobics.svg',
//     stretching: './stretching.svg',
//     yoga: './yoga.svg',
//   };

//   const courseTitleMapping = {
//     bodyflex: 'Бодифлекс',
//     dancefitness: 'Танцевальный фитнес',
//     stepaerobics: 'Степ-аэробика',
//     stretching: 'Стретчинг',
//     yoga: 'Йога',
//   };


  useEffect(() => {
  getData()
  .then((data) => {
    const vals = Object.values(data);

    setValues(vals);
  })
  .catch((error) => console.error(error));
  }, [])



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
			<ListLessons/>
		</S.Wrapper>
	);
};
