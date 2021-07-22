/**
 * dummy data 만들기
 * length만큼 array를 만들고
 * card에 필요한 데이터를 채워넣기
 */

const arrayLength = 10;
const data = Array(arrayLength)
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

export default data;
