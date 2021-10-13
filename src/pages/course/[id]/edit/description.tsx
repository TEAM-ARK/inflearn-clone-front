import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import CourseTitle from '@components/courseEdit/CourseTitle';
import CourseTitleLabel from '@components/courseEdit/CourseTitleLabel';
import CourseLayout from '@layouts/CourseLayout';
import { FieldDiv, FieldDivMarginTop, Label } from './course_info';

const LabelSubText = styled.span`
  color: #fb6351;
  font-weight: 400;
`;

const CourseDescriptionSummary = styled.textarea`
  width: 100%;
  min-height: 80px;
  color: #5f5f5f;
  border-radius: 3px;
  box-shadow: none;
  padding: 0.625em;
  font-size: 1rem;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  outline: none;

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    border: 1px solid var(--color-light-green);
  }
`;

const FieldDivLine = styled.div`
  margin-top: 1rem;
  margin-bottom: 24px;
  height: 1px;
  border-bottom: 1px solid #efefef;
`;

const Notification = styled.div`
  background-color: #f6f6f6;
  font-size: 0.875rem;
  border-radius: 4px;
  padding: 1.25rem 1rem 1.25rem 1.5rem;
  position: relative;
  h3 {
    font-size: 1.08rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    > span {
      text-decoration: underline;
      color: rgb(0, 196, 113);
      cursor: pointer;
    }
  }
`;

const initialHTML = String.raw`
  <div>
    Javascript 또는 Typescript 파일에서 HTML을 만들어서 넣어야 되는 경우
  </div>
`;

const Description = () => {
  // test for editor
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  useEffect(() => {
    console.log('tiny key', process.env.NEXT_PUBLIC_TINYMCE_KEY); // undefined ? dev mode에서 인식을 못하나?
  }, []);

  return (
    <CourseLayout>
      <CourseTitleLabel title="강의 제작" />
      <CourseTitle title="상세소개" />
      <FieldDiv>
        <Label>
          강의 두줄 요약&nbsp;
          <LabelSubText>
            (강의소개 상단에 보여집니다. 잠재 수강생들이 매력을 느낄만한 글을 짧게 남겨주세요.)
          </LabelSubText>
        </Label>
        <CourseDescriptionSummary
          className="textarea"
          name="description"
          data-kv="description"
          placeholder="ex) 이 강의를 통해 수강생은 컴퓨터 공학의 기초를 다질 수 있을 것으로 예상합니다."
        />
      </FieldDiv>
      <FieldDivLine />
      <FieldDiv>
        <Notification>
          <h3>매력적인 소개글</h3>
          <p>
            강의 소개글은 수강신청 및 강의 판매에 결정적인 영향을 미칩니다.
            <br />
            강의를 어떻게 소개해야 할지 막막한 분들을 위한{' '}
            <span>
              <strong>가이드</strong>
            </span>
            를 준비했어요. <br />
            꼭 들어가야 하는 내용은 물론, 어떻게 쓰면 효과적인지도 함께 알려드립니다.
            <br />
            소개글 작성 전 꼭 읽어주세요!
          </p>
          <br />
          <h3>소개글을 꼼꼼히 작성해 주세요</h3>
          <p>
            수강생을 설득할 수 있도록 내 강의의 매력을 마음껏 드러내보세요!
            <br />
            만약, 글이 모자라거나 꼭 들어가야 할 내용을 빠뜨리면
            <br />
            강의 오픈이 지연되거나 반려될 수 있어요.
            <br />
            <em>(Enter: 문단 나눔, Shift+Enter: 줄바꿈)</em>
          </p>
        </Notification>
      </FieldDiv>
      <FieldDivMarginTop>
        <Label>
          강의 상세 내용&nbsp;
          <LabelSubText>(해당 내용은 강의소개에서 보여집니다.)</LabelSubText>
        </Label>
        <div>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={initialHTML}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
          <button type="button" onClick={log}>
            Log editor content
          </button>
        </div>
      </FieldDivMarginTop>
    </CourseLayout>
  );
};

export default Description;
