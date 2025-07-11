import type {MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import MotionCardList from '~/components/MotionCardList';
import {jsonLoader} from '~/lib/jsonLoader';
import {ExamListType} from '~/lib/types';

export const meta: MetaFunction = () => {
  return [
    {title: 'test4funs'},
    {
      name: 'description',
      content: 'test4funs',
    },
    {
      name: 'keywords',
      content:
        'test4funs, 퀴즈 맞추기, 국기 맞추기, 국기 퀴즈, k리그 선수 맞추기, k리그 선수 퀴즈, kbl 선수 맞추기, kbl 선수 퀴즈',
    },
  ];
};

export const loader = async () => {
  const examList = await jsonLoader<ExamListType>('examList.json'); // await 추가
  return examList;
};

export default function Index() {
  // loader에서 반환된 데이터 사용
  const examList = useLoaderData<typeof loader>();

  return (
    <div className='w-full h-full'>
      <div className='flex justify-center items-center text-[1.4vw] font-[700] pt-[4vw] text-[#00000f]'>
        남녀노소 모두가 즐길 수 있는 다양한 주제의 퀴즈게임을 즐겨보세요!
      </div>
      <div className='flex justify-center items-center text-[1vw] font-[600] pt-[1vw] text-[#00000f]'>
        원하는 게임을 선택해서 시작하세요!
      </div>
      <div className='px-[2vw]'>
        <MotionCardList data={examList} />
      </div>
    </div>
  );
}
