import { NavLink } from 'react-router-dom'
import * as S from './workout.style'
import { MenuProfile } from '../../components/menuProf/MenuProfile'
import { useEffect, useState } from 'react'
import { changeStatusExercises, changeCounter } from '../../api/api'
import { useDispatch } from 'react-redux'
import { editProgress, editReadyStatus } from '../../store/actions/creators'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

export const WorkOut = ({ userData, setUserData }) => {
  setUserData(useSelector((state) => state.api.dataUser))

  const dispatch = useDispatch()

  const [color, setColor] = useState()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const [userLesson, setUserLesson] = useState(null)

  const [activeModal, setActiveModal] = useState(null)

  const openModal = () => setActiveModal(true)

  const closeModal = () => setActiveModal(null)

  let maxCounter = []

  const storedLesson = window.localStorage.getItem('lesson')
  const indexExercise = window.localStorage.getItem('indexExercise')
  const nameCourse = window.localStorage.getItem('nameCourse')
  const lesson = storedLesson ? JSON.parse(storedLesson) : null
  let ExerciseCounter =
    userData.courses[nameCourse].workout[indexExercise].exercisesCounter

  const [exerciseValues, setExerciseValues] = useState(ExerciseCounter)

  const readyStatus =
    userData.courses[nameCourse].workout[indexExercise].readyStatus

  const handleInputChange = (index, value) => {
    const newValues = [...exerciseValues]
    newValues[index] = value
    setExerciseValues(newValues)
  }

  const handleButtonSubmit = () => {
    console.log(maxCounter)
    if (ExerciseCounter.length === exerciseValues.length) {
      console.log(nameCourse)
      console.log(indexExercise)
      changeCounter(nameCourse, indexExercise, exerciseValues)
      dispatch(editProgress(exerciseValues, nameCourse, indexExercise))
      closeModal()
    }
    let result = exerciseValues.every(
      (element, index) => Number(element) >= Number(maxCounter[index]),
    )
    console.log(exerciseValues)
    console.log(maxCounter)
    console.log(result)
    if (result) {
      dispatch(editReadyStatus(nameCourse, indexExercise))
      changeStatusExercises(nameCourse, indexExercise)
    }
  }

  useEffect(() => {
    if (userData) {
      setUserLesson(userData.courses)
    }
  }, [userData])

  const renderExercises = () => {
    if (lesson.exercises && lesson.exercises.length > 0) {
      return lesson.exercises.map((exercise, index) => (
        <S.LiEx key={index}>{exercise}</S.LiEx>
      ))
    } else {
      return ''
    }
  }

  const colorMapping = [
    { colorBorder: '#565EEF', colorBG: '#EDECFF' },
    { colorBorder: '#FF6D00', colorBG: '#FFF2E0' },
    { colorBorder: '#9A48F1', colorBG: '#F9EBFF' },
    { colorBorder: '#FFD700', colorBG: '#FFFFE0' },
  ]

  const renderExercisesProgress = () => {
    const cfr = /\d+/
    if (lesson.exercises && lesson.exercises.length > 0) {
      maxCounter = lesson.exercises.map((exercise, index) => {
        maxCounter[index] = exercise.match(cfr)[0]
        return maxCounter[index]
      })
      let h = 1
      return lesson.exercises.map((exercise, index) => (
        <S.ProgressItem key={index}>
          <S.Ex>{exercise.slice(0, exercise.indexOf('('))}</S.Ex>
          <S.ExProg
            $colorBorder={colorMapping[index].colorBorder}
            $colorBG={colorMapping[index].colorBG}
            type="range"
            min={0}
            max={exercise.match(cfr)[0]}
            value={
              userLesson[nameCourse].workout[indexExercise].exercisesCounter[
                index
              ]
            }
            step={1}
            $color="#ffffff"
            disabled
          ></S.ExProg>
        </S.ProgressItem>
      ))
    } else {
      return ''
    }
  }

  useEffect(() => {
    setColor(false)
  }, [])

  function mouseOut() {
    if (isOpen) {
      toggleOpen()
    }
  }

  useEffect(() => {
    var regex = /embed\/(.+)/
    var videoId = lesson.link.match(regex)[1]

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    let player

    let checkYT = setInterval(() => {
      if (window.YT) {
        clearInterval(checkYT)
        window.YT.ready(function () {
          player = new window.YT.Player('player', {
            height: '639',
            width: '1160',
            videoId: videoId,
            playerVars: {
              origin: window.location.origin,
            },
            events: {
              onStateChange: onPlayerStateChange,
            },
          })
        })
      }
    }, 100)

    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        if (nameCourse === 'dancefitness' || nameCourse === 'stepaerobics') {
          changeStatusExercises(nameCourse, indexExercise)
          dispatch(editReadyStatus(nameCourse, indexExercise))
          console.log('Video Ended')
        }
      }
    }
  }, [])

  return (
    <S.Wrapper>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo2.png"></S.Logo>
        </NavLink>
        {userData ? (
          <S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
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
          <NavLink to="/auth">
            <S.AuthButton>Войти</S.AuthButton>
          </NavLink>
        )}
      </S.LogoHeader>
      <S.MyProf>{lesson.name}</S.MyProf>
      <div id="player"></div>
      <S.ExProgress>
        <S.ListOfExercises>
          <S.SpanEx>Упражнения:</S.SpanEx>
          <S.UlEx>{renderExercises()}</S.UlEx>
          <S.ButtonProgress onClick={() => openModal()} $enabled={readyStatus}>
            Заполнить свой прогресс
          </S.ButtonProgress>

          {activeModal && (
            <S.BackModal>
              <S.ListOfLessons>
                <S.CloseButton onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
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
                        stopColor="#262626"
                        stopOpacity="0"
                      ></stop>
                      <stop
                        offset="1"
                        stopColor="#262626"
                        stopOpacity=".8"
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
                        stopColor="#262626"
                        stopOpacity="0"
                      ></stop>
                      <stop
                        offset="1"
                        stopColor="#262626"
                        stopOpacity=".8"
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
                        stopColor="#262626"
                        stopOpacity="0"
                      ></stop>
                      <stop
                        offset="1"
                        stopColor="#262626"
                        stopOpacity=".8"
                      ></stop>
                    </linearGradient>
                    <polygon
                      fill="urclo(#9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3)"
                      points="33.192,28.95 28.95,33.192 24,28.243 28.243,24"
                    ></polygon>
                  </svg>
                </S.CloseButton>
                <S.ExerciseSpanName>Мой прогресс</S.ExerciseSpanName>
                {lesson.exercises &&
                  lesson.exercises.map((exercise, index) => {
                    exercise = exercise.replace(/.\(.+\)/, '').toLowerCase()

                    return (
                      <S.ExerciseForm key={index}>
                        <S.ExerciseQuestion>
                          Сколько раз вы сделали {exercise}?
                        </S.ExerciseQuestion>
                        <S.ExerciseInput
                          type="number"
                          placeholder="Введите значение"
                          value={exerciseValues[index]}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        ></S.ExerciseInput>
                      </S.ExerciseForm>
                    )
                  })}
                <S.ExerciseButton onClick={handleButtonSubmit}>
                  Отправить
                </S.ExerciseButton>
              </S.ListOfLessons>
            </S.BackModal>
          )}
        </S.ListOfExercises>
        <S.Progress>
          <S.SpanEx>
            Мой прогресс по тренировке {Number(indexExercise) + Number(1)}:
          </S.SpanEx>
          {userLesson && (
            <S.ProgressMain>{renderExercisesProgress()}</S.ProgressMain>
          )}
        </S.Progress>
      </S.ExProgress>
    </S.Wrapper>
  )
}
WorkOut.propTypes = {
  setUserData: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
}
