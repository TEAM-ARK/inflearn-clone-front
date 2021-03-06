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
      // ?????? ????????? skill??? ????????? ???

      // url????????? skill ??????????????? ????????? ????????? ??????
      querySkills.current = querySkills.current.filter((val) => val.name !== name);
      // ?????????????????? ???????????? ???????????? ??????(skillTags)??? ????????? ????????? ?????? ????????? ?????? ??????
      setSkillTags(skillTags.concat(skillInfo).sort((a, b) => a.id - b.id));
    } else {
      // ????????? skill??? ???????????? ???

      // url????????? skill ??????????????? ????????? ????????? ??????
      querySkills.current.push(skillInfo);
      // ?????????????????? ???????????? ???????????? ??????(skillTags)?????? ????????? ????????? ??????
      setSkillTags(skillTags.filter((val) => val.name !== name));
    }
  };

  const handleSkillMoreClick = () => {
    if (skillRange === 15) {
      // ?????? ?????? ?????????
      setSkillRange(skillTags.length);
      return;
    }

    // ?????? ?????? 15?????? ??????
    setSkillRange(15);
  };

  const handleSkillSearchClick = () => {
    if (isViewSkillSearchForm) {
      // ?????? ?????? ??? ?????????
      setIsViewSkillSearchForm(false);
      return;
    }

    // ?????? ?????? ??? ????????????
    setIsViewSkillSearchForm(true);
  };

  return (
    <>
      <SkillSearchWrapper>
        {isViewSkillSearchForm ? (
          <>
            <SkillSearchForm>
              <SkillsSearchInput type="text" placeholder="????????????" />
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
          {/* ????????? ????????? */}
          {!querySkills.current.length ||
            React.Children.toArray(
              querySkills.current.map((val) => (
                <SkillTagBtn type="button" selected onClick={() => handleSkillClick(val)}>
                  {val.name}
                  <CloseIcon />
                </SkillTagBtn>
              ))
            )}
          {/* ???????????? ?????? ????????? */}
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
            {skillRange === 15 ? <MoreHorizIcon /> : '??????'}
          </SkillMoreViewBtn>
        </span>
      </SkillSearchWrapper>
    </>
  );
};

export default SkillsSearch;
