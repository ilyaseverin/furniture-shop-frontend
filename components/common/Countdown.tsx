"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ style = 1, targetDate = "2025-06-31T23:59:59" }) => {
  const [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    setShowTimer(true);
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Time is up
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <div>Время вышло!</div>;
  }

  return (
    <>
      {showTimer ? (
        <>
          {style == 1 && (
            <div aria-hidden="true" className="countdown__timer">
              <span className="countdown__item">
                <span className="countdown__value countdown__value--0 js-countdown__value--0">
                  {timeLeft.days}
                </span>
                <span className="countdown__label">Д:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--1 js-countdown__value--1">
                  {timeLeft.hours}
                </span>
                <span className="countdown__label">Х:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--2 js-countdown__value--2">
                  {timeLeft.minutes}
                </span>
                <span className="countdown__label">М:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--3 js-countdown__value--3">
                  {timeLeft.seconds}
                </span>
                <span className="countdown__label">С</span>
              </span>
            </div>
          )}
          {style == 2 && (
            <div aria-hidden="true" className="countdown__timer">
              <span className="countdown__item">
                <span className="countdown__value countdown__value--0 js-countdown__value--0">
                  {timeLeft.days}
                </span>
                <span className="countdown__label">Дни</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--1 js-countdown__value--1">
                  {timeLeft.hours}
                </span>
                <span className="countdown__label">Часы</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--2 js-countdown__value--2">
                  {timeLeft.minutes}
                </span>
                <span className="countdown__label">Мин.</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--3 js-countdown__value--3">
                  {timeLeft.seconds}
                </span>
                <span className="countdown__label">Секунды</span>
              </span>
            </div>
          )}
          {style == 3 && (
            <div aria-hidden="true" className="countdown__timer">
              <span className="countdown__item">
                <span className="countdown__value countdown__value--0 js-countdown__value--0">
                  {timeLeft.days}
                </span>
                <span className="countdown__label">ДНИ</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--1 js-countdown__value--1">
                  {timeLeft.hours}
                </span>
                <span className="countdown__label">ЧАСЫ</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--2 js-countdown__value--2">
                  {timeLeft.minutes}
                </span>
                <span className="countdown__label">МИНУТЫ</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--3 js-countdown__value--3">
                  {timeLeft.seconds}
                </span>
                <span className="countdown__label">СЕКУНДЫ</span>
              </span>
            </div>
          )}
          {style == 4 && (
            <div aria-hidden="true" className="countdown__timer">
              <span className="countdown__item">
                <span className="countdown__value countdown__value--2 js-countdown__value--2">
                  {timeLeft.minutes}
                </span>
                <span className="countdown__label">:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--3 js-countdown__value--3">
                  {timeLeft.seconds}
                </span>
                <span className="countdown__label"></span>
              </span>
            </div>
          )}

          {style == 5 && (
            <div aria-hidden="true" className="countdown__timer">
              <span className="countdown__item">
                <span className="countdown__value countdown__value--0 js-countdown__value--0">
                  {timeLeft.days}
                </span>
                <span className="countdown__label">д:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--1 js-countdown__value--1">
                  {timeLeft.hours}
                </span>
                <span className="countdown__label">ч:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--2 js-countdown__value--2">
                  {timeLeft.minutes}
                </span>
                <span className="countdown__label">м:</span>
              </span>
              <span className="countdown__item">
                <span className="countdown__value countdown__value--3 js-countdown__value--3">
                  {timeLeft.seconds}
                </span>
                <span className="countdown__label">с</span>
              </span>
            </div>
          )}
        </>
      ) : (
        ""
      )}
      {style == 6 && (
        <div aria-hidden="true" className="countdown__timer">
          <span className="countdown__item">
            <span className="countdown__value countdown__value--0 js-countdown__value--0">
              {timeLeft.days}
            </span>
            <span className="countdown__label">Д</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--1 js-countdown__value--1">
              {timeLeft.hours}
            </span>
            <span className="countdown__label">ЧАС</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--2 js-countdown__value--2">
              {timeLeft.minutes}
            </span>
            <span className="countdown__label">М</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--3 js-countdown__value--3">
              {timeLeft.seconds}
            </span>
            <span className="countdown__label">С</span>
          </span>
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
