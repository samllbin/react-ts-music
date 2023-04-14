import React, { memo, useEffect, useReducer } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchRankingDataAction } from './store/index'
import { useDispatch } from 'react-redux'
import { RankingLeft, RankingRight, RankingWrapper } from './styled'
import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'
interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRankingDataAction())
  }, [])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <RankingHeader />
        <RankingList />
      </RankingRight>
    </RankingWrapper>
  )
}

export default memo(Template)
