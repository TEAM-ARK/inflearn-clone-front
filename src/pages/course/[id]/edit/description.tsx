// @ts-nocheck

import React, { useEffect, useRef } from 'react';
import Alert from '@material-ui/lab/Alert';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Editor as TinyEditor } from 'tinymce';
import CourseTitle from '@components/courseEdit/CourseTitle';
import CourseTitleLabel from '@components/courseEdit/CourseTitleLabel';
import SaveButton from '@components/courseEdit/SaveButton';
import CourseLayout from '@layouts/CourseLayout';
import useGetCourseId from 'src/hooks/useGetCourseId';
import { RootState } from 'src/redux/reducers';
import {
  LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST,
  SAVE_EDIT_LECTURE_DESCRIPTION_DONE,
  SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST,
} from 'src/redux/reducers/lecture';
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

const Description = () => {
  // test for editor
  const editorRef = useRef<TinyEditor>();
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  const refTextareaSummary = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  // const idRef = useRef<string>();

  const { courseId } = useGetCourseId();

  useEffect(() => {
    // 초기 데이터 가져오기
    dispatch({
      type: LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST,
    });
  }, []);

  const {
    lectureData: { description: descriptionInitialData },
    saveEditLectureDescriptionDone,
    saveEditLectureDescriptionError,
  } = useSelector((state: RootState) => state.lecture);

  const onClickSaveButton = async () => {
    try {
      if (editorRef.current) {
        console.log('editorRef.current.getContent()', editorRef.current.getContent());

        // summary, editor content 가져와서 전송
        dispatch({
          type: SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST,
          data: {
            summary: refTextareaSummary.current?.value,
            descriptionHTMLString: editorRef.current.getContent(),
            courseId,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 저장 후 다음 페이지로 이동
  useEffect(() => {
    if (saveEditLectureDescriptionDone) {
      // 서버에 전송 성공 후 다음페이지(상세 소개)로 이동
      dispatch({
        type: SAVE_EDIT_LECTURE_DESCRIPTION_DONE,
      });
      router.push(`/course/${courseId}/edit/curriculum`);
    }
  }, [saveEditLectureDescriptionDone]);

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
          ref={refTextareaSummary}
          placeholder="ex) 이 강의를 통해 수강생은 컴퓨터 공학의 기초를 다질 수 있을 것으로 예상합니다."
          defaultValue={descriptionInitialData.summary}
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
            onInit={(_, editor) => {
              editorRef.current = editor;
              return editorRef.current;
            }}
            initialValue={descriptionInitialData.descriptionHTMLString}
            // value={initialHTML} // controlled mode에서 사용
            textareaName="aNameOftextarea"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen paste',
                'insertdatetime media table codesample help wordcount',
              ],
              toolbar:
                'formatselect bold italic forecolor backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'codesample code |' +
                'link image | preview | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              image_title: true,
              paste_data_images: true,
              // automatic_uploads: true,
              file_picker_types: 'image',
              file_picker_callback(cb) {
                // file_picker_callback(cb, value, meta)
                console.log('file_picker_callback');
                console.log('cb', cb);
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                /*
                  Note: In modern browsers input[type="file"] is functional without
                  even adding it to the DOM, but that might not be the case in some older
                  or quirky browsers like IE, so you might want to add it to the DOM
                  just in case, and visually hide it. And do not forget do remove it
                  once you do not need it anymore.
                */

                input.onchange = function () {
                  console.log('input.onchange');
                  const file = this.files[0];

                  const reader = new FileReader();
                  reader.onload = function () {
                    /*
                      Note: Now we need to register the blob in TinyMCEs image blob
                      registry. In the next release this part hopefully won't be
                      necessary, as we are looking to handle it internally.
                    */
                    console.log('reader.onload');
                    const id = `blobid${new Date().getTime()}`;
                    const { blobCache } = tinymce.activeEditor.editorUpload; // typescript에러 잡을 방법을 모르겠음
                    console.log('blobCache', blobCache); // test
                    const base64 = (reader.result as string).split(',')[1]; // typescript에러 잡을 방법을 모르겠음
                    console.log('base64', base64); // test
                    const blobInfo = blobCache.create(id, file, base64);
                    console.log('blobInfo', blobInfo); // test
                    blobCache.add(blobInfo);

                    /* call the callback and populate the Title field with the file name */
                    cb(blobInfo.blobUri(), { title: file.name });
                  };
                  reader.readAsDataURL(file);
                };

                input.click();
              },
            }}
          />
          {/* <button type="button" onClick={log}>
            Log editor content
          </button> */}
        </div>
      </FieldDivMarginTop>
      {saveEditLectureDescriptionError ? <Alert severity="error">{saveEditLectureDescriptionError}</Alert> : ''}
      <SaveButton text="저장 후 다음이동" onClick={onClickSaveButton} />
    </CourseLayout>
  );
};

export default Description;
