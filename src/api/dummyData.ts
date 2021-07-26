/**
 * dummy data 만들기
 * length만큼 array를 만들고
 * card에 필요한 데이터를 채워넣기
 */

const arrayLength = 10;
export const data = Array(arrayLength)
  .fill()
  .map((_, index) => {
    return {
      id: index,
      coverImage:
        'https://cdn.inflearn.com/public/courses/326905/cover/739f7b4b-1a9f-478f-a6a8-1a13bf58cae3/326905-eng.png',
      title: '만들면서 학습하는 리액트(react)',
      author: '김정환',
      rating: 4.5,
      commentCount: 8,
      price: 55000,
      studentCount: 215,
    };
  });

export const mainSliderData = [
  {
    id: 1,
    tags: ['얼리버드 20%'],
    title: `NestJS\n요즘 핫해요 🔥`,
    text: `확장성 있고 효율적인 개발을 하고 싶은 \n백엔드 개발자라면.`,
    pcImg: 'https://cdn.inflearn.com/public/main_sliders/24f88d0f-c875-4885-9499-f3abf8274b1f/327273.png',
    mobileImg: 'https://cdn.inflearn.com/public/main_sliders/be6303e8-6126-4037-84d1-46bcf1fd7d14/327273.png',
    btnTitle: 'NestJS',
  },
  {
    id: 2,
    tags: [],
    title: `공부하다 막히면
          커뮤니티에 물어보세요!`,
    text: `#개발지식은 #인프런_커뮤니티 
          #질문하면 #포인트가_차곡차곡`,
    pcImg:
      'https://cdn.inflearn.com/public/main_sliders/c00efd98-3c81-444e-af2e-175f360bd003/%20%5B%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%5D%E1%84%86%E1%85%AE%E1%86%AE%E1%84%80%E1%85%A9%E1%84%83%E1%85%A1%E1%86%B8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5_main_521.png',
    mobileImg:
      'https://cdn.inflearn.com/public/main_sliders/25299b07-75f0-4072-8b65-96859b993397/%20%5B%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%5D%E1%84%86%E1%85%AE%E1%86%AE%E1%84%80%E1%85%A9%E1%84%83%E1%85%A1%E1%86%B8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5main_628.png',
    btnTitle: '묻고 답하기',
  },
  {
    id: 3,
    tags: ['인프런 소개'],
    title: `우리는 성장기회의
          평등을 추구합니다.`,
    text: `누구나 배움의 기회를 누리고 꿈을 이룰 수 있도록!
          인프런과 함께 배우고, 나누고, 성장하세요.`,
    pcImg:
      'https://cdn.inflearn.com/public/main_sliders/04081c01-4aee-40ad-a500-5260f1cfd508/main_521_%EC%9D%B8%ED%94%84%EB%9F%B0%EC%86%8C%EA%B0%9C.png',
    mobileImg:
      'https://cdn.inflearn.com/public/main_sliders/acbe2d29-94b3-46b3-bbea-9ae2dc3337fa/main_628_%EC%9D%B8%ED%94%84%EB%9F%B0%EC%86%8C%EA%B0%9C.png',
    btnTitle: '인프런은 🌱',
  },
];
