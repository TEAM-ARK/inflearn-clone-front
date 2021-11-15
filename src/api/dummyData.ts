import faker from 'faker';
import shortId from 'shortid';
import { ILecture, IMainSliderData, IUser, LectureData } from 'src/redux/reducers/types';

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

export const dummySkillTagsData: string[] = [
  'Python',
  '데이터 분석',
  'Javascript',
  'MS-Office',
  'HTML/CSS',
  '모바일 앱 개발',
  'Java',
  'Back-end',
  '3D 모델링',
  '정보보안',
  '게임개발',
  'Front-End',
  '웹 개발',
  'Android',
  '데이터 시각화',
  '웹 퍼블리싱',
  '알고리즘',
  '딥러닝',
  'Excel',
  '취업',
  '머신러닝',
  'iOS',
  '업무자동화',
  '사무실무',
  'React',
  'Node.js',
  '업무 생산성',
  '디지털 마케팅',
  '인공지능',
  'R',
  '모의해킹',
  'C#',
  'Unity',
  '영어',
  'jQuery',
  '영상제작',
  '웹 디자인',
  '웹 크롤링',
  'Pandas',
  'Swift',
  '데이터베이스',
  'UX/UI',
  'Vue.js',
  'Spring',
  'SQL',
  '웹앱',
  'Kotlin',
  'PowerPoint',
  'Firebase',
  '블록체인',
  'Tensorflow',
  'C',
  'Photoshop',
  'Django',
  '빅데이터',
  'AWS',
  '창업',
  'Linux',
  'MongoDB',
  'After Effects',
  '퍼포먼스 마케팅',
  'Docker',
  '재테크',
  '콘텐츠 마케팅',
  'DevOps',
  '코딩 테스트',
  'Spring Boot',
  '수학',
  '카피라이팅',
  'PT',
  '마케팅 이론',
  '데이터 과학',
  'C++',
  'MySQL',
  'Express',
  'TypeScript',
  '클라우드',
  '인터렉티브 웹',
  '클론코딩',
  '프로젝트 관리',
  'ES6',
  'IONIC',
  'DAPP',
  '경영노하우',
  '투자',
  '네트워크',
];
