import React, { useState, useRef } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { ISkillData } from 'src/redux/reducers/types';
import { dummySkillTagsData } from '../api/dummyData';

const SkillSearchWrapper = styled.div`
  margin-top: 8px;
`;

const SkillSearchForm = styled.div`
  width: 11rem;
  display: inline-flex;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SkillsSearchInput = styled.input`
  height: 31px;
  border-radius: 3px;
  box-shadow: none;
  background: #f6f6f6;
  color: #5f5f5f;
  border: 1px solid transparent;
  padding: 5px 9px;
  width: 100%;
  font-size: 0.9rem;

  &:focus {
    outline: 0.04rem auto #1dc078;
    box-shadow: 0 0 0 0.125em rgb(29 192 120 / 25%);
  }

  &&::placeholder {
    color: #b8b8b8db;
  }
`;

type SkillSearchBtnProps = {
  isSearchable: boolean;
};

const SkillsSearchBtn = styled.button<SkillSearchBtnProps>`
  color: white;
  background-color: #1dc078;
  border-color: transparent;
  border-width: 1px;
  border-radius: 3px;
  padding: calc(0.375em - 1px) 0.75em;
  height: 31px;
  font-size: 0.9rem;

  ${(props) =>
    props.isSearchable
      ? `border-bottom-left-radius: 0;
  border-top-left-radius: 0;`
      : `margin-right: 0.5rem;
      margin-bottom: 0.5rem;`}

  & > svg {
    font-size: 1rem;
    stroke: white;
    stroke-width: 2;
  }
`;

type SkillTagBtnProps = {
  selected: boolean;
};

const SkillTagBtn = styled.button<SkillTagBtnProps>`
  background: ${(props) => (props.selected ? '#1dc078' : '#b8b8b8')};
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  padding: 1px 0.6rem 2px 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  height: 31px;

  & > svg {
    font-size: 0.7rem;
    margin-left: 8px;
  }
`;

const SkillMoreViewBtn = styled.button`
  position: absolute;
  background: #3298dc;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  height: 31px;
  border-radius: 4px;
  padding: 1px 0.6rem;
`;

const SkillsSearch = () => {
  const [skillTags, setSkillTags] = useState<ISkillData[]>([...dummySkillTagsData]);
  const [skillRange, setSkillRange] = useState<number>(15);
  const [isViewSkillSearchForm, setIsViewSkillSearchForm] = useState<boolean>(true);
  const querySkills = useRef<ISkillData[]>([]);

  const handleSkillClick = (skillInfo: ISkillData): void => {
    const { name } = skillInfo;

    if (querySkills.current.map((val) => val.name).indexOf(name) > -1) {
      // 이미 선택된 skill을 취소할 때

      // url쿼리의 skill 파라미터에 저장된 기술을 제거
      querySkills.current = querySkills.current.filter((val) => val.name !== name);
      // 선택되지않은 기술들이 모여있는 배열(skillTags)에 선택한 기술을 원래 자리에 다시 추가
      setSkillTags(skillTags.concat(skillInfo).sort((a, b) => a.id - b.id));
    } else {
      // 새로운 skill을 선택했을 때

      // url쿼리의 skill 파라미터에 선택한 기술을 추가
      querySkills.current.push(skillInfo);
      // 선택되지않은 기술들이 모여있는 배열(skillTags)에서 선택한 기술을 제거
      setSkillTags(skillTags.filter((val) => val.name !== name));
    }
  };

  const handleSkillMoreClick = () => {
    if (skillRange === 15) {
      // 기술 태그 더보기
      setSkillRange(skillTags.length);
      return;
    }

    // 기술 태그 15개만 보기
    setSkillRange(15);
  };

  const handleSkillSearchClick = () => {
    if (isViewSkillSearchForm) {
      // 기술 검색 폼 숨기기
      setIsViewSkillSearchForm(false);
      return;
    }

    // 기술 검색 폼 나타내기
    setIsViewSkillSearchForm(true);
  };

  return (
    <>
      <SkillSearchWrapper>
        {isViewSkillSearchForm ? (
          <>
            <SkillSearchForm>
              <SkillsSearchInput type="text" placeholder="기술검색" />
              <SkillsSearchBtn type="button" onClick={handleSkillSearchClick} isSearchable>
                <CloseIcon />
              </SkillsSearchBtn>
            </SkillSearchForm>
          </>
        ) : (
          <>
            <SkillsSearchBtn type="button" onClick={handleSkillSearchClick} isSearchable={false}>
              <SearchIcon />
            </SkillsSearchBtn>
          </>
        )}
        <span id="skill-tags">
          {/* 선택한 기술들 */}
          {!querySkills.current.length ||
            React.Children.toArray(
              querySkills.current.map((val) => (
                <SkillTagBtn type="button" selected onClick={() => handleSkillClick(val)}>
                  {val.name}
                  <CloseIcon />
                </SkillTagBtn>
              ))
            )}
          {/* 선택하지 않은 기술들 */}
          {React.Children.toArray(
            skillTags
              .map((val) => (
                <SkillTagBtn type="button" selected={false} onClick={() => handleSkillClick(val)}>
                  {val.name}
                </SkillTagBtn>
              ))
              .splice(0, skillRange)
          )}
          <SkillMoreViewBtn type="button" onClick={handleSkillMoreClick}>
            {skillRange === 15 ? <MoreHorizIcon /> : '접기'}
          </SkillMoreViewBtn>
        </span>
      </SkillSearchWrapper>
    </>
  );
};

export default SkillsSearch;
