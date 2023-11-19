import * as S from './MenuProfile.styles';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../store/actions/creators'
import { exit } from '../api/api'

export const MenuProfile = ({ isOpen, color }) => {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleExit = async () => {
		try {
			exit()
			dispatch(signOut());
			window.localStorage.removeItem("name")
			window.localStorage.removeItem("lesson")
			navigate('/')
		} catch (error) {
			
		}
	  };

	return (
		<S.Dropdown >
			<S.Pointer >
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='14'
					height='9'
					viewBox='0 0 14 9'
					fill='none'
				>
					<path
						d='M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308'
						stroke={color ? 'white' : 'black'}
						strokeWidth='2'
					/>
				</svg>
			</S.Pointer>
			<S.DropdownContent  className={isOpen ? 'open' : ''}>
				<NavLink  to='/'>
					<S.EachDropdownContent $color={color}>
						На главную
					</S.EachDropdownContent>
				</NavLink>
				<NavLink to='/profile'>
					<S.EachDropdownContent $color={color}>Профиль</S.EachDropdownContent>
				</NavLink>
				<NavLink  to='/auth'>
					<S.EachDropdownContent $color={color} onClick={handleExit}>
						Выйти
					</S.EachDropdownContent>
				</NavLink>
			</S.DropdownContent>
		</S.Dropdown>
	);
};
