import React from 'react'
import * as S from './NotFound.styles'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
    const smile = `${process.env.PUBLIC_URL}/crying.png`
    const logo = `${process.env.PUBLIC_URL}/logo.png`;

    return(
        <React.Fragment>
        <S.Wrapper>
        <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <S.Container>
          <S.Main>
            <S.PersonalSidebar>

            </S.PersonalSidebar>
          </S.Main>
          <S.CenterError>
            <S.MainText>404</S.MainText>
            <S.Crying>
              <S.PageNotFound>Страница не найдена</S.PageNotFound>
              <img src={smile} alt="crying"></img>
            </S.Crying>
            <S.TextDel>
              Возможно, она была удалена или перенесена на другой адрес
            </S.TextDel>
            <S.ButtonBackMain>
              <S.ButtonBackMainA to="/">Вернуться на главную</S.ButtonBackMainA>
            </S.ButtonBackMain>
          </S.CenterError>

          <footer className="footer"></footer>
        </S.Container>
       </S.Wrapper>
        </React.Fragment>

    )
}