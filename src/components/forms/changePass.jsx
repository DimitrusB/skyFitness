import { useState, useEffect } from 'react';
import * as S from "./forms.style"
import { editPassword, enter, auth } from "../../api/api";
import { onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import React from 'react';


export const FormPassword = ({ closeModal }) => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [error, setError] = useState(null);
	
	const handleSubmit =  async () => {
		if (password !== repeatPassword) {
			setError('Пароли не совпадают');
		} else if (password === '') {
			setError('Пароль не может быть пустым');
		} 
		try {
			await editPassword(password)
			await enter(auth.currentUser.email, password)
			closeModal()
		} catch (error) {
			setError(error);
		}
	};


	return (
		<S.Wrapper>
			<S.Container>
				<S.LogInForm>
					<S.Logo src='/logo2.png'></S.Logo>
					<S.Span>Новый пароль:</S.Span>
					<S.PasswordInput
						type='password'
						placeholder='Пароль'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<S.PasswordInput
						type='password'
						placeholder='Подтвердите Пароль'
						value={repeatPassword}
						onChange={e => setRepeatPassword(e.target.value)}
					/>
					{error && <S.Error>{error}</S.Error>}
					<S.SaveButton onClick={handleSubmit}>Сохранить</S.SaveButton>
					<S.CloseButton onClick={closeModal}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='30'
							height='30'
							viewBox='0 0 48 48'
						>
							<linearGradient
								id='9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1'
								x1='1.956'
								x2='54.829'
								y1='1.956'
								y2='54.829'
								gradientUnits='userSpaceOnUse'
							>
								<stop offset='0' stopColor='#262626' stopOpacity='0'></stop>
								<stop offset='1' stopColor='#262626' stopOpacity='.8'></stop>
							</linearGradient>
							<circle
								cx='24'
								cy='24'
								r='20'
								fill='url(#9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1)'
							></circle>
							<linearGradient
								id='9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2'
								x1='740.406'
								x2='787.897'
								y1='-1145.624'
								y2='-1158.349'
								gradientTransform='translate(-743.775 1175.631)'
								gradientUnits='userSpaceOnUse'
							>
								<stop offset='0' stopColor='#262626' stopOpacity='0'></stop>
								<stop offset='1' stopColor='#262626' stopOpacity='.8'></stop>
							</linearGradient>
							<polygon
								fill='url(#9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2)'
								points='33.192,19.05 19.05,33.192 14.808,28.95 19.757,24 14.808,19.05 19.05,14.808 24,19.757 28.95,14.808'
							></polygon>
							<linearGradient
								id='9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3'
								x1='778.531'
								x2='767.699'
								y1='-1138.238'
								y2='-1153.707'
								gradientTransform='translate(-743.775 1175.631)'
								gradientUnits='userSpaceOnUse'
							>
								<stop offset='0' stopColor='#262626' stopOpacity='0'></stop>
								<stop offset='1' stopColor='#262626' stopOpacity='.8'></stop>
							</linearGradient>
							<polygon
								fill='url(#9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3)'
								points='33.192,28.95 28.95,33.192 24,28.243 28.243,24'
							></polygon>
						</svg>
					</S.CloseButton>
				</S.LogInForm>
			</S.Container>
		</S.Wrapper>
	);
};
FormPassword.propTypes = {
	closeModal: PropTypes.func.isRequired,
  };