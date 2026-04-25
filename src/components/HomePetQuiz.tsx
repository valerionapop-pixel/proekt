"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/i18n/translations";

type QuizQuestion = {
  question: string;
  options: { text: string; correct: boolean }[];
};

type HomePetQuizProps = {
  locale: Locale;
};

export function HomePetQuiz({ locale }: HomePetQuizProps) {
  const questionTimeSec = 12;
  const quiz = useMemo(() => {
    if (locale === "ru") {
      return {
        title: "Блиц-опрос о животных",
        subtitle: "Проверьте, насколько хорошо вы знаете кошек и собак.",
        start: "Начать опрос",
        next: "Следующий вопрос",
        timesUp: "Время вышло",
        restart: "Пройти еще раз",
        scoreLabel: "Ваш результат",
        done: "Викторина завершена!",
        questions: [
          {
            question: "Сколько часов в сутки в среднем спит взрослая кошка?",
            options: [
              { text: "6-8 часов", correct: false },
              { text: "12-16 часов", correct: true },
              { text: "18-22 часа", correct: false }
            ]
          },
          {
            question: "Какой сигнал собаки обычно означает дружелюбие?",
            options: [
              { text: "Расслабленная поза и мягко виляющий хвост", correct: true },
              { text: "Сильно прижатые уши и напряженный корпус", correct: false },
              { text: "Непрерывный лай и рывки вперед", correct: false }
            ]
          },
          {
            question: "Почему кошке важно точить когти?",
            options: [
              { text: "Только чтобы шуметь ночью", correct: false },
              { text: "Это уход за когтями и метка территории", correct: true },
              { text: "Потому что ей скучно в любой ситуации", correct: false }
            ]
          },
          {
            question: "Что нельзя давать собаке из человеческой еды?",
            options: [
              { text: "Шоколад", correct: true },
              { text: "Отварную морковь", correct: false },
              { text: "Тыкву без специй", correct: false }
            ]
          },
          {
            question: "Лучший способ познакомить нового питомца с домом:",
            options: [
              { text: "Сразу дать доступ ко всем комнатам", correct: false },
              { text: "Постепенно, с тихой безопасной зоны", correct: true },
              { text: "Оставить одного на весь день", correct: false }
            ]
          }
        ] as QuizQuestion[]
      };
    }

    return {
      title: "Animal Blitz Quiz",
      subtitle: "Check how well you know cats and dogs.",
      start: "Start quiz",
      next: "Next question",
      timesUp: "Time is up",
      restart: "Try again",
      scoreLabel: "Your score",
      done: "Quiz completed!",
      questions: [
        {
          question: "How many hours per day does an adult cat usually sleep?",
          options: [
            { text: "6-8 hours", correct: false },
            { text: "12-16 hours", correct: true },
            { text: "18-22 hours", correct: false }
          ]
        },
        {
          question: "Which dog signal usually means friendliness?",
          options: [
            { text: "Relaxed body and a soft wagging tail", correct: true },
            { text: "Pinned ears and tense posture", correct: false },
            { text: "Constant barking and lunging", correct: false }
          ]
        },
        {
          question: "Why is scratching important for cats?",
          options: [
            { text: "Only to make noise at night", correct: false },
            { text: "It helps claw care and territory marking", correct: true },
            { text: "Because they are always bored", correct: false }
          ]
        },
        {
          question: "Which human food is unsafe for dogs?",
          options: [
            { text: "Chocolate", correct: true },
            { text: "Boiled carrots", correct: false },
            { text: "Plain pumpkin", correct: false }
          ]
        },
        {
          question: "Best way to introduce a rescued pet to a new home:",
          options: [
            { text: "Give instant access to all rooms", correct: false },
            { text: "Start gradually from a calm safe zone", correct: true },
            { text: "Leave the pet alone all day", correct: false }
          ]
        }
      ] as QuizQuestion[]
    };
  }, [locale]);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(questionTimeSec);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const done = idx >= quiz.questions.length;
  const current = quiz.questions[idx];
  const total = quiz.questions.length;
  const progressPercent = Math.round((idx / total) * 100);
  const timePercent = Math.max(0, Math.round((timeLeft / questionTimeSec) * 100));

  const selectedRef = useRef<number | null>(null);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  const advanceQuestion = useCallback(
    (picked: number | null) => {
      const q = quiz.questions[idx];
      if (picked !== null && q.options[picked]?.correct) setScore((s) => s + 1);
      setSelected(null);
      setShowFeedback(false);
      setTimeLeft(questionTimeSec);
      setIdx((i) => i + 1);
    },
    [idx, quiz.questions]
  );

  useEffect(() => {
    if (done || !hasStarted) return;
    if (timeLeft <= 0) return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        if (prev === 1) {
          window.setTimeout(() => {
            setShowFeedback(true);
            const picked = selectedRef.current;
            window.setTimeout(() => advanceQuestion(picked), 700);
          }, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [done, hasStarted, timeLeft, advanceQuestion]);

  const onNext = () => {
    if (showFeedback) return;
    setShowFeedback(true);
    const picked = selected;
    window.setTimeout(() => advanceQuestion(picked), 700);
  };

  const onRestart = () => {
    setHasStarted(false);
    setIdx(0);
    setScore(0);
    setSelected(null);
    setTimeLeft(questionTimeSec);
    setShowFeedback(false);
  };

  return (
    <section className="home-explore">
      <div className="page-shell">
        <div className="home-quiz-card">
          <div className="home-quiz-progress" aria-hidden>
            <span style={{ width: `${progressPercent}%` }} />
          </div>
          {!hasStarted ? (
            <div className="home-quiz-result">
              <h2>{quiz.title}</h2>
              <p>{quiz.subtitle}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setHasStarted(true);
                  setTimeLeft(questionTimeSec);
                }}
              >
                {quiz.start}
              </button>
            </div>
          ) : !done ? (
            <>
              <div className="home-quiz-head">
                <h2>{quiz.title}</h2>
                <p>{quiz.subtitle}</p>
                <small>
                  {idx + 1}/{quiz.questions.length}
                </small>
              </div>
              <div className="home-quiz-timer">
                <span>{timeLeft > 0 ? `${timeLeft}s` : quiz.timesUp}</span>
                <div className="home-quiz-timer-bar" aria-hidden>
                  <span style={{ width: `${timePercent}%` }} />
                </div>
              </div>

              <h3>{current.question}</h3>
              <div className="home-quiz-options">
                {current.options.map((opt, optionIdx) => (
                  <button
                    key={opt.text}
                    type="button"
                    className={`home-quiz-option${selected === optionIdx ? " is-selected" : ""}${
                      showFeedback && opt.correct ? " is-correct" : ""
                    }${
                      showFeedback && selected === optionIdx && !opt.correct ? " is-wrong" : ""
                    }`}
                    onClick={() => {
                      if (showFeedback) return;
                      setSelected(optionIdx);
                    }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onNext}
                disabled={showFeedback}
              >
                {quiz.next}
              </button>
            </>
          ) : (
            <div className="home-quiz-result">
              <h2>{quiz.done}</h2>
              <p>
                {quiz.scoreLabel}: {score}/{quiz.questions.length}
              </p>
              <button type="button" className="btn btn-secondary" onClick={onRestart}>
                {quiz.restart}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
