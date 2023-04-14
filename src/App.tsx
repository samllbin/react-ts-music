import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'
import { PlayerBarWrapper } from './views/player/app-player-bar/style'

function App() {
  // 获取某一首喜欢的歌曲
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1340439829))
  }, [])
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      {/* 播放器工具栏 */}
      {/* <PlayerBarWrapper>
        <div className="playbar">

        </div>
      </PlayerBarWrapper> */}
      <AppPlayerBar />
    </div>
  )
}

export default App
