import faker from 'faker';
import shortId from 'shortid';
import { ILecture, IMainSliderData, IUser, ISkillData, LectureData } from 'src/redux/reducers/types';

export const dummyUser: IUser = {
  id: 1,
  email: 'team@ark.com',
  nickname: 'ark',
  isInstructor: true,
  lecture: [
    {
      id: 1,
      title: 'Node bird',
      description: 'learning nextjs and express',
      author: 'Zero Cho',
      rating: 4.8,
      commentCount: 52,
      studentCount: 564,
      hashTags: ['nextjs', 'nodejs'],
      categories: ['web', 'front'],
      level: 'intermediate',
      onDiscount: 0,
      isExclusive: true,
      createdAt: new Date('2021-07-11T03:24:00'),
      price: 110000,
      coverImage: 'https://avatars.githubusercontent.com/u/58352248?v=4',
    },
    {
      id: 2,
      title: 'browser 101',
      description: 'learning web basic and browser',
      author: 'Elly',
      rating: 4.5,
      commentCount: 24,
      studentCount: 240,
      hashTags: ['nextjs', 'nodejs'],
      categories: ['web', 'front'],
      level: 'intermediate',
      onDiscount: 0,
      isExclusive: true,
      createdAt: new Date('2021-07-14T03:24:00'),
      price: 99000,
      coverImage: 'https://avatars.githubusercontent.com/u/58352248?v=4',
    },
  ],
  latestLecture: {
    id: 1,
    title: 'Node bird',
    description: 'learning nextjs and express',
    author: 'Zero Cho',
    rating: 4.8,
    commentCount: 52,
    studentCount: 564,
    hashTags: ['nextjs', 'nodejs'],
    categories: ['web', 'front'],
    level: 'intermediate',
    onDiscount: 0,
    isExclusive: true,
    createdAt: new Date('2021-07-11T03:24:00'),
    price: 110000,
    coverImage: 'https://avatars.githubusercontent.com/u/58352248?v=4',
  },
};

export const generateDummyLectureList = (num: number): ILecture[] =>
  Array(num)
    .fill('')
    .map(() => ({
      id: shortId.generate(),
      coverImage: faker.image.image(),
      title: faker.name.title(),
      author: faker.name.findName(),
      rating: +(Math.random() * 5).toFixed(1),
      commentCount: Math.floor(Math.random() * 100 + 1),
      price: +faker.commerce.price() * 1000,
      studentCount: Math.floor(Math.random() * 200 + 1),
      isExclusive: true,
      onDiscount: Math.floor(Math.random() * 5) * 10,
      createdAt: new Date(faker.datatype.datetime()),
      description: faker.lorem.sentences(),
      level: 'intermediate',
      hashTags: ['React', 'Front-end'],
      categories: ['프레임워크 및 라이브러리', '웹 개발'],
    }));

// {
//   id: index,
//   coverImage:
//     'https://cdn.inflearn.com/public/courses/326905/cover/739f7b4b-1a9f-478f-a6a8-1a13bf58cae3/326905-eng.png',
//   title: '만들면서 학습하는 리액트(react)',
//   author: '김정환',
//   rating: 4.5,
//   commentCount: 8,
//   price: 55000,
//   studentCount: 215,
//   isExclusive: true,
//   onDiscount: 20,
//   createdAt: new Date('2021-07-05T03:24:00'),
//   description:
//     '리액트는 실무에서 가장 많이 찾는 인기있는 프론트엔드 기술입니다. 리액트 기술을 이용해 어플리케이션을 빠르게 개발하고 유지 보수 가능한 코드를 만들어 보세요.',
//   level: 'intermediate',
// }

export const mainSliderData: IMainSliderData[] = [
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

export const dummyLectureEditData: LectureData = {
  courseInfo: {
    id: 1,
    title: 'title from server',
    whatYouCanLearn: [
      {
        name: '당신은',
        order: 1,
      },
      {
        name: '이것을',
        order: 2,
      },
      {
        name: '배울 수 있습니다.',
        order: 3,
      },
    ],
    expectedStudents: [
      {
        name: '예상',
        order: 1,
      },
      {
        name: '되는',
        order: 2,
      },
      {
        name: '수강생들',
        order: 3,
      },
    ],
    requiredKnowledge: [
      {
        name: '자신만의',
        order: 1,
      },
      {
        name: '철학',
        order: 2,
      },
      {
        name: '열정',
        order: 3,
      },
    ],
    category: [
      {
        id: shortId(),
        name: '개발, 프로그래밍',
      },
      {
        id: shortId(),
        name: '보안, 네트워크',
      },
      {
        id: shortId(),
        name: '데이터 사이언스',
      },
      {
        id: shortId(),
        name: '크리에이티브',
      },
      {
        id: shortId(),
        name: '직무, 마케팅',
      },
      {
        id: shortId(),
        name: '학문, 외국어',
      },
      {
        id: shortId(),
        name: '커리어',
      },
      {
        id: shortId(),
        name: '교양',
      },
      {
        id: shortId(),
        name: '그 외',
      },
    ],
    level: [
      {
        id: '11',
        name: '입문',
      },
      {
        id: '22',
        name: '초급',
      },
      {
        id: '33',
        name: '중급 이상',
      },
    ],
  },
  description: {
    summary: 'next.js, typescript, redux 를 익힐 수 있습니다.',
    descriptionHTMLString: String.raw`
      <div>
        Javascript 또는 Typescript 파일에서 HTML을 만들어서 넣어야 되는 경우
      </div>
      <div>
        String.raw 메소드와 vscode lit-html extension을 이용하면 자동완성 기능을 이용할 수 있습니다.
      </div>
    `,
    courseId: '1',
  },
};

export const dummySkillTagsData: ISkillData[] = [
  { id: 1, type: 'skill', slug: 'python', name: 'Python' },
  { id: 2, type: 'skill', slug: 'data-analysis', name: '데이터 분석' },
  { id: 3, type: 'skill', slug: 'javascript', name: 'Javascript' },
  { id: 4, type: 'skill', slug: 'ms-office', name: 'MS-Office' },
  { id: 5, type: 'skill', slug: 'html-css', name: 'HTML/CSS' },
  { id: 6, type: 'skill', slug: 'mobile-app-development', name: '모바일 앱 개발' },
  { id: 7, type: 'skill', slug: 'java', name: 'Java' },
  { id: 8, type: 'skill', slug: 'back-end', name: 'Back-end' },
  { id: 9, type: 'skill', slug: '3d-modeling', name: '3D 모델링' },
  { id: 10, type: 'skill', slug: 'information-security', name: '정보보안' },
  { id: 11, type: 'skill', slug: 'game-development', name: '게임개발' },
  { id: 12, type: 'skill', slug: 'front-end', name: 'Front-end' },
  { id: 13, type: 'skill', slug: 'web-developement', name: '웹 개발' },
  { id: 14, type: 'skill', slug: 'data-visualization', name: '데이터 시각화' },
  { id: 15, type: 'skill', slug: 'web-publishing', name: '웹 퍼블리싱' },
  { id: 16, type: 'skill', slug: 'algorithm', name: '알고리즘' },
  { id: 17, type: 'skill', slug: 'excel', name: 'Excel' },
  { id: 18, type: 'skill', slug: 'deep-learning', name: '딥러닝' },
  { id: 19, type: 'skill', slug: 'employment', name: '취업' },
  { id: 20, type: 'skill', slug: 'machine-learning', name: '머신러닝' },
  { id: 21, type: 'skill', slug: 'business-automation', name: '업무자동화' },
  { id: 22, type: 'skill', slug: 'ios', name: 'iOS' },
  { id: 23, type: 'skill', slug: 'knowhow', name: '사무실무' },
  { id: 24, type: 'skill', slug: 'react', name: 'React' },
  { id: 25, type: 'skill', slug: 'nodejs', name: 'Node.js' },
  { id: 26, type: 'skill', slug: 'business-productivity', name: '업무 생산성' },
  { id: 27, type: 'skill', slug: 'digital-marketing', name: '디지털 마케팅' },
  { id: 28, type: 'skill', slug: 'ai', name: '인공지능' },
  { id: 29, type: 'skill', slug: 'r', name: 'R' },
  { id: 30, type: 'skill', slug: 'penetration-testing', name: '모의해킹' },
  { id: 31, type: 'skill', slug: 'c#', name: 'C#' },
  { id: 32, type: 'skill', slug: 'unity', name: 'Unity' },
  { id: 33, type: 'skill', slug: 'english', name: '영어' },
  { id: 34, type: 'skill', slug: 'jquery', name: 'jQuery' },
  { id: 35, type: 'skill', slug: 'video-production', name: '영상제작' },
  { id: 36, type: 'skill', slug: 'web-design', name: '웹 디자인' },
  { id: 37, type: 'skill', slug: 'web-crawling', name: '웹 크롤링' },
  { id: 38, type: 'skill', slug: 'pandas', name: 'Pandas' },
  { id: 39, type: 'skill', slug: 'swift', name: 'Swift' },
  { id: 40, type: 'skill', slug: 'database', name: '데이터베이스' },
  { id: 41, type: 'skill', slug: 'ux-ui', name: 'UX/UI' },
  { id: 42, type: 'skill', slug: 'vuejs', name: 'Vue.js' },
  { id: 43, type: 'skill', slug: 'spring', name: 'Spring' },
  { id: 44, type: 'skill', slug: 'sql', name: 'SQL' },
  { id: 45, type: 'skill', slug: 'web-app', name: '웹앱' },
  { id: 46, type: 'skill', slug: 'kotlin', name: 'Kotlin' },
  { id: 47, type: 'skill', slug: 'powerpoint', name: 'PowerPoint' },
  { id: 48, type: 'skill', slug: 'firebase', name: 'Firebase' },
  { id: 49, type: 'skill', slug: 'blockchain', name: '블록체인' },
  { id: 50, type: 'skill', slug: 'tensorflow', name: 'Tensorflow' },
  { id: 51, type: 'skill', slug: 'c', name: 'C' },
  { id: 52, type: 'skill', slug: 'photoshop', name: 'Photoshop' },
  { id: 53, type: 'skill', slug: 'django', name: 'Django' },
  { id: 54, type: 'skill', slug: 'bigdata', name: '빅데이터' },
  { id: 55, type: 'skill', slug: 'aws', name: 'AWS' },
  { id: 56, type: 'skill', slug: 'establishment', name: '창업' },
  { id: 57, type: 'skill', slug: 'linux', name: 'Linux' },
  { id: 58, type: 'skill', slug: 'mongodb', name: 'MongoDB' },
  { id: 59, type: 'skill', slug: 'after-effects', name: 'After Effects' },
  { id: 60, type: 'skill', slug: 'performance-marketing', name: '퍼포먼스 마케팅' },
  { id: 61, type: 'skill', slug: 'docker', name: 'Docker' },
  { id: 62, type: 'skill', slug: 'financial-technology', name: '재테크' },
  { id: 63, type: 'skill', slug: 'contents-maketing', name: '콘텐츠 마케팅' },
  { id: 64, type: 'skill', slug: 'devops', name: 'DevOps' },
  { id: 65, type: 'skill', slug: 'coding-test', name: '코딩 테스트' },
  { id: 66, type: 'skill', slug: 'spring-boot', name: 'Spring Boot' },
  { id: 67, type: 'skill', slug: 'math', name: '수학' },
  { id: 68, type: 'skill', slug: 'copywriting', name: '카피라이팅' },
  { id: 69, type: 'skill', slug: 'pt', name: 'PT' },
  { id: 70, type: 'skill', slug: 'maketing-theory', name: '마케팅 이론' },
  { id: 71, type: 'skill', slug: 'data-science', name: '데이터 과학' },
  { id: 72, type: 'skill', slug: 'c++', name: 'C++' },
  { id: 73, type: 'skill', slug: 'mysql', name: 'MySQL' },
  { id: 74, type: 'skill', slug: 'express', name: 'Express' },
  { id: 75, type: 'skill', slug: 'typeScript', name: 'TypeScript' },
  { id: 76, type: 'skill', slug: 'cloud', name: '클라우드' },
  { id: 77, type: 'skill', slug: 'interactive-wep', name: '인터랙티브 웹' },
  { id: 78, type: 'skill', slug: 'clone-coding', name: '클론코딩' },
  { id: 79, type: 'skill', slug: 'project-managemant', name: '프로젝트 관리' },
  { id: 80, type: 'skill', slug: 'es6', name: 'ES6' },
  { id: 81, type: 'skill', slug: 'ionic', name: 'IONIC' },
  { id: 82, type: 'skill', slug: 'dapp', name: 'DAPP' },
  { id: 83, type: 'skill', slug: 'management-knowhow', name: '경영노하우' },
  { id: 84, type: 'skill', slug: 'Investment', name: '투자' },
  { id: 85, type: 'skill', slug: 'network', name: '네트워크' },
];
