import {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData, useParams} from '@remix-run/react';
import quizConfig from 'data/quizConfig.json';
import Quiz from '~/components/Quiz';
import {jsonLoader} from '~/lib/jsonLoader';
import {QuizListType} from '~/lib/types';
export const meta: MetaFunction = ({params}) => {
  const type = params.type as keyof typeof quizConfig;
  const config = quizConfig[type];

  if (!config) {
    return [{title: 'test4funs - 퀴즈'}];
  }

  return [
    {title: config.title},
    {name: 'description', content: config.description},
    {name: 'keywords', content: config.keywords},
  ];
};

export const loader: LoaderFunction = async ({params}) => {
  const type = params.type as keyof typeof quizConfig;
  const config = quizConfig[type];

  if (!config) {
    throw new Response('Not Found', {status: 404});
  }

  try {
    const quizList = await jsonLoader<QuizListType>(config.jsonFile);

    return {
      allData: quizList,
      quizData: quizList[0]?.quiz || [],
      placeholder: quizList[0]?.placeholder || '정답을 입력해주세요',
      quizType: type,
      config,
    };
  } catch (error) {
    throw new Response('Quiz data not found', {status: 404});
  }
};
const QuizPage = () => {
  const {quizData, placeholder} = useLoaderData<typeof loader>();
  const params = useParams();
  params;

  return <Quiz propsData={quizData} placeholder={placeholder} />;
};

export default QuizPage;
