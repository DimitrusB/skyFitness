import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import * as S from "./listLessons.style";
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';
import React from 'react';

export const ListLessons = ({ userLesson }) => {
  const [values, setValues] = useState([]);

  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  const openModal = (courseKey) => setActiveModal(courseKey);

  const courseNameMapping = {
    bodyflex: "./bodyflex.svg",
    dancefitness: "./dancefitness.svg",
    stepaerobics: "./stepaerobics.svg",
    stretching: "./stretching.svg",
    yoga: "./yoga.svg",
  };

  const courseTitleMapping = {
    bodyflex: "Бодифлекс",
    dancefitness: "Танцевальный фитнес",
    stepaerobics: "Степ-аэробика",
    stretching: "Стретчинг",
    yoga: "Йога",
  };

  useEffect(() => {
    getData()
      .then((data) => {
        const vals = Object.entries(data).map(([courseName, courseData]) => ({
          ...courseData,
          _id: courseName,
        }));
        setValues(vals);
      })
      .catch((error) => console.error(error));
  }, []);

  const goToLink = (e, lesson, courseKey, index) => {
    e.preventDefault();
    localStorage.setItem("nameCourse", courseKey);
    localStorage.setItem("indexExercise", index);
    localStorage.setItem("lesson", JSON.stringify(lesson));
    navigate("/workout");
  };

  return (
    <S.MyCourses>
      {Object.keys(userLesson).map((courseKey) => {
        const courseSvg = courseNameMapping[courseKey];
        const courseTitle = courseTitleMapping[courseKey];
        const course = values.find((value) => value._id === courseKey);

        return (
          <S.CoursesNameAndSVG
            key={courseKey}
            $enabled={userLesson[courseKey].statusBay}
          >
            <S.NameCourse>{courseTitle}</S.NameCourse>
            <div>
              <img src={courseSvg} alt={courseTitle} />
            </div>
            <S.ButtonGo onClick={() => openModal(courseKey)}>
              Перейти
            </S.ButtonGo>
            {activeModal === courseKey && (
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
                  <S.SpanName>Выберите тренировку</S.SpanName>
                  {course &&
                    course.workout.map((lesson, index) => (
                      <S.Element key={index}
                        $enabled={
                          userLesson[courseKey].workout[index].readyStatus
                        }
                      >
                        <S.ElementCheck
                          $enabled={
                            userLesson[courseKey].workout[index].readyStatus
                          }
                        >
                          <svg
                            width="28"
                            height="26"
                            viewBox="0 0 28 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="13.5"
                              r="11.5"
                              stroke="#06B16E"
                            />
                            <path
                              d="M6 9.81034L11.775 15.5L27 0.5"
                              stroke="#06B16E"
                            />
                          </svg>
                        </S.ElementCheck>
                        <a
                          href={lesson.link}
                          key={index}
                          onClick={(e) => goToLink(e, lesson, courseKey, index)}
                        >
                          {lesson.name}
                        </a>
                      </S.Element>
                    ))}
                </S.ListOfLessons>
              </S.BackModal>
            )}
          </S.CoursesNameAndSVG>
        );
      })}
    </S.MyCourses>
  );
};
ListLessons.propTypes = {
  userLesson: PropTypes.object.isRequired,
};