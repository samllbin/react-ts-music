import * as actionTypes from './constants'

import { getTopList, getRankingList } from '@/service/ranking'

const changeTopListAction = (res: any) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayListAction = (res: any) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})

export const changeCurrentIndex = (index: any) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
})

export const getTops = () => {
  return (dispatch: any) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res))
    })
  }
}

export const getRanking = (id: any) => {
  return (dispatch: any) => {
    getRankingList(id).then((res) => {
      dispatch(changePlayListAction(res))
    })
  }
}
