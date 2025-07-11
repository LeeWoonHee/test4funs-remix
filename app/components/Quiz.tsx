import {LazyMotion, domAnimation, m, AnimatePresence} from 'motion/react';
import {useState, useEffect, useCallback} from 'react';
import {Link} from '@remix-run/react';
import {QuizData} from '~/lib/types';

// 타입 정의

interface QuizProps {
  propsData: QuizData[];
  placeholder: string;
}

interface QuizImageProps {
  image: string;
  alt: string;
  onLoad: () => void;
}

interface ResultScreenProps {
  score: number;
  total: number;
}

interface FeedbackMessageProps {
  isCorrect: boolean;
  correctAnswer: string;
}

// 로딩 컴포넌트
const LoadingSpinner = (): JSX.Element => (
  <m.div
    className='absolute inset-0 flex items-center justify-center'
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    }}
  >
    <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
  </m.div>
);

// 퀴즈 이미지 컴포넌트
const QuizImage = ({image, alt, onLoad}: QuizImageProps): JSX.Element => (
  <m.div
    className='relative w-full h-full'
    initial={{opacity: 0, scale: 0.8}}
    animate={{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    }}
  >
    <img
      src={image}
      alt={alt}
      className='w-full h-full border-[2px] border-[#aaa] border-solid object-contain'
      onLoad={onLoad}
      loading='eager'
    />
  </m.div>
);

// 결과 화면 컴포넌트
const ResultScreen = ({score, total}: ResultScreenProps): JSX.Element => (
  <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
    <h2 className='text-2xl font-bold text-center'>게임 종료!</h2>
    <h2 className='text-2xl font-bold text-center mt-4'>
      맞힌 개수: {score} / {total}
    </h2>
    <Link to='/' className='w-full flex justify-center items-center'>
      <m.div
        className='w-[12vw] flex justify-center items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        홈으로 돌아가기
      </m.div>
    </Link>
  </m.div>
);

// 정답 메시지 컴포넌트
const FeedbackMessage = ({isCorrect, correctAnswer}: FeedbackMessageProps): JSX.Element => (
  <m.p
    initial={{opacity: 0, y: 10}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.3}}
    className={`mt-4 text-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
  >
    {isCorrect ? '정답입니다!' : `오답! 정답: ${correctAnswer}`}
  </m.p>
);

export default function Quiz({propsData, placeholder}: QuizProps): JSX.Element {
  // 상태 관리
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  // 데이터 초기화
  useEffect(() => {
    if (!propsData || !Array.isArray(propsData)) {
      console.error('Invalid propsData:', propsData);
      setIsLoading(false);
      return;
    }

    // 문제 데이터 준비
    const shuffledData = [...propsData].sort(() => Math.random() - 0.5).slice(0, 10);

    setQuizData(shuffledData);

    // 이미지 프리로딩
    shuffledData.forEach((data: QuizData) => {
      const img = new window.Image();
      img.src = data.image;
    });

    setIsLoading(false);
  }, [propsData]);

  // 이미지 변경 시 로딩 상태 초기화
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  // 정답 확인 핸들러
  const checkAnswer = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const isAnswerCorrect = userInput.trim() === quizData[currentIndex].answer;
      setIsCorrect(isAnswerCorrect);

      if (isAnswerCorrect) {
        setScore((prev) => prev + 1);
      }

      // 다음 문제로 이동 타이머
      setTimeout(() => {
        if (currentIndex < quizData.length - 1) {
          // 이미지 전환을 위한 상태 설정
          setIsChanging(true);
          setCurrentIndex((prev) => prev + 1);
          setUserInput('');
          setIsCorrect(null);

          // 이미지 전환 완료 설정
          setTimeout(() => setIsChanging(false), 50);
        } else {
          setShowResult(true);
        }
      }, 1500);
    },
    [currentIndex, quizData, userInput]
  );

  // 입력 변경 핸들러
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }, []);

  // 이미지 로드 완료 핸들러
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // 로딩 중 화면
  if (isLoading) {
    return <div className='min-h-screen flex items-center justify-center'>로딩중...</div>;
  }

  // 데이터 없음 화면
  if (!quizData.length) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        데이터를 불러올 수 없습니다.
      </div>
    );
  }

  // 현재 퀴즈 데이터
  const currentQuiz = quizData[currentIndex];

  // 메인 렌더링
  return (
    <LazyMotion features={domAnimation}>
      <div className='min-h-screen flex flex-col items-center justify-center p-4'>
        <div className='w-[50%] bg-white rounded-lg shadow-lg p-6'>
          {!showResult ? (
            <>
              {/* 이미지 영역 */}
              <div className='relative w-full h-[80%] flex items-center justify-center'>
                <AnimatePresence mode='wait' initial={false}>
                  {!isChanging && currentQuiz?.image && (
                    <m.div
                      key={`image-container-${currentIndex}`}
                      className='relative w-full h-full'
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0, transition: {duration: 0}}}
                    >
                      {!imageLoaded && <LoadingSpinner />}
                      {currentQuiz.image && (
                        <QuizImage
                          image={currentQuiz.image}
                          alt={currentQuiz.title}
                          onLoad={handleImageLoad}
                        />
                      )}
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 다음 이미지 프리로드 */}
              {quizData[currentIndex + 1]?.image && (
                <div className='hidden'>
                  <img
                    src={quizData[currentIndex + 1].image}
                    alt='다음 이미지 프리로드'
                    width={1}
                    height={1}
                  />
                </div>
              )}

              {/* 정답 입력 폼 */}
              <form onSubmit={checkAnswer} className='mt-6'>
                <input
                  type='text'
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className='w-full px-4 py-2 border rounded-lg mb-4'
                />
                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                    disabled={userInput.trim() === ''}
                  >
                    정답 확인
                  </button>
                </div>
              </form>

              {/* 정답/오답 피드백 */}
              {isCorrect !== null && (
                <FeedbackMessage isCorrect={isCorrect} correctAnswer={currentQuiz.answer} />
              )}
            </>
          ) : (
            <ResultScreen score={score} total={quizData.length} />
          )}
        </div>
      </div>
    </LazyMotion>
  );
}
