import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';
import { todayDateStr } from '../../utils/date';

const initialState = [
  {
    category: todayDateStr.slice(0, 7),
    diaryList: [
      {
        id: nanoid(),
        emotion: '',
        content: '',
        tagList: [],
        createDate: '',
      },
    ],
  },
];

export const addDiary = createAction('ADD_DIARY');
export const viewDiaryDetail = createAction('VIEW_DIARY_DETAIL');

const diaryReducer = createReducer(initialState, {
  [addDiary]: (state, action) => {
    const { emotion, content, tagList, createDate } = action.payload;
    const yearAndMonth = createDate.slice(0, 7);
    const existCate = state.find((section) => section.category === yearAndMonth);
    const newDiary = { id: nanoid(), emotion, content, tagList, createDate };
    if (existCate) {
      existCate.diaryList.push(newDiary);
    } else {
      state.push({ id: nanoid(), category: yearAndMonth, diaryList: [newDiary] });
    }
    state.sort((f, s) => (f.category < s.category ? -1 : f.category > s.category ? 1 : 0));
  },
});

export default diaryReducer;
