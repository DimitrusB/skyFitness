  import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
  import * as S from "./Сourses.styles";
  import React, { useEffect, useState } from "react";
  import { bayCourse } from "../../api/api";
  import { useDispatch } from 'react-redux'
  import { bay } from '../../store/actions/creators'

  import foot from "../../../img/coursesImage/foot.svg";
  import svgAero from "../../../img/coursesImage/svgAero.svg";
  import svgStretch from "../../../img/coursesImage/svgStretch.svg";
  import svgYoga from "../../../img/coursesImage/svgYoga.svg";
  import svgBodyflex from "../../../img/coursesImage/svgBodyflex.svg";
  import svgDance from "../../../img/coursesImage/svgDance.svg";
  import hand from "../../../img/coursesImage/hand.svg";
  import { getData } from "../../api/api";
  import { MenuProfile } from "../../menuProf/MenuProfile";

  export const CoursesPage = (props) => {
    const name = localStorage.getItem("name");

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logo = `${process.env.PUBLIC_URL}/logo2.png`;

    let { id } = useParams();

    const [values, setValues] = useState([]);
    const [nameCourse, setNameCourse] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => setModalIsOpen(false);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);

    const toggleOpen = () => setIsOpen(!isOpen);
  
    console.log(name);

  function mouseOut() {
      if (isOpen) {
        toggleOpen();
      }
    }

    useEffect(() => {
      getData()
        .then((data) => {
          setNameCourse(Object.keys(data));
          const vals = Object.values(data);
          const found = vals.find((item) => item._id === id);
          setValues(found);
        })

        .catch((error) => console.error(error));
    }, [id]);

    if (!values) {
      navigate("/NotfoundPage");
      return null;
    }

    let svgMain;

    switch (Number(id)) {
      case 0:
        svgMain = svgBodyflex;
        break;
      case 1:
        svgMain = svgDance;
        break;
      case 2:
        svgMain = svgAero;
        break;
      case 3:
        svgMain = svgStretch;
        break;
      default:
        svgMain = svgYoga;
    }

    return (
      <React.Fragment>
        <S.Wrapper>
          <div>
            <S.MainCenterblock>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            {name ? (
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
            ) : (
              <NavLink to='/auth'>
                <S.AuthButton>Войти</S.AuthButton>
              </NavLink>
            )}
            </S.MainCenterblock>
          </div>
          <S.TextImg>
            <S.Text>{values.name}</S.Text>
            <img src={svgMain} alt="My SVG Icon" />
          </S.TextImg>
          <S.Foryou>Подойдет для вас, если:</S.Foryou>
          <S.Ul>
            {values.forYou &&
              values.forYou.map((item, index) => (
                <S.Ulli key={index}>
                  <S.NnumberLi>{index + 1}</S.NnumberLi>
                  <S.Li>{item}</S.Li>
                </S.Ulli>
              ))}
          </S.Ul>
          <S.Foryou>Направления:</S.Foryou>
          <div>
            <S.DirectionsOl>
              {values.directions &&
                values.directions.map((direction, directionIndex) => (
                  <S.LiDw key={directionIndex}>{direction}</S.LiDw>
                ))}
            </S.DirectionsOl>
          </div>
          <S.Description>
            <S.StyledParagraph>{values.description}</S.StyledParagraph>
          </S.Description>
          <S.Foot>
            <img src={foot} alt="My SVG Icon" />
            <S.Span>
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
              выбором направления и тренера, с которым тренировки принесут
              здоровье и радость!
            </S.Span>
            <S.ButtonS onClick={() => {
              openModal() 
              bayCourse(nameCourse[values._id]);
              dispatch(bay(nameCourse[values._id]))
              }}>Записаться на тренировку</S.ButtonS>
            {modalIsOpen && (
              <S.BackModal>
                <S.Modal>
                  <S.CloseButton onClick={closeModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1"
                        x1="1.956"
                        x2="54.829"
                        y1="1.956"
                        y2="54.829"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stop-color="#262626"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="#262626"
                          stop-opacity=".8"
                        ></stop>
                      </linearGradient>
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="url(#9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1)"
                      ></circle>
                      <linearGradient
                        id="9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2"
                        x1="740.406"
                        x2="787.897"
                        y1="-1145.624"
                        y2="-1158.349"
                        gradientTransform="translate(-743.775 1175.631)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stop-color="#262626"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="#262626"
                          stop-opacity=".8"
                        ></stop>
                      </linearGradient>
                      <polygon
                        fill="url(#9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2)"
                        points="33.192,19.05 19.05,33.192 14.808,28.95 19.757,24 14.808,19.05 19.05,14.808 24,19.757 28.95,14.808"
                      ></polygon>
                      <linearGradient
                        id="9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3"
                        x1="778.531"
                        x2="767.699"
                        y1="-1138.238"
                        y2="-1153.707"
                        gradientTransform="translate(-743.775 1175.631)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stop-color="#262626"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="#262626"
                          stop-opacity=".8"
                        ></stop>
                      </linearGradient>
                      <polygon
                        fill="url(#9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3)"
                        points="33.192,28.95 28.95,33.192 24,28.243 28.243,24"
                      ></polygon>
                    </svg>
                  </S.CloseButton>
                  <S.SpanS>Вы успешно записались!</S.SpanS>
                  <div>
                    <img src={hand} alt="OK"></img>
                  </div>
                </S.Modal>
              </S.BackModal>
            )}
          </S.Foot>
        </S.Wrapper>
      </React.Fragment>
    );
  };
