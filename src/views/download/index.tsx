import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ButtomWrapper, HeaderWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return (
    <div className="item">
      <HeaderWrapper>
        <div className="header">
          <div className="left">
            <div className="title">在电脑上听</div>
            <div className="img">
              <img
                src={require('@/assets/img/left.png')}
                alt=""
                className="big"
              />
              <img
                className="mac"
                src={require('@/assets/img/icon_mac_black_new.bbaa33f484108e702bc365c250b74e79.png')}
                alt=""
              />
              <img
                className="win"
                src={require('@/assets/img/windows.3e335fd6d5078918ef80f7e54d0bd4b8.png')}
                alt=""
              />
            </div>
            <button className="btn">下载电脑端</button>
          </div>
          <div className="right">
            <div className="title">在手机上听</div>
            <div className="picture">
              <img
                className="phone"
                src={require('@/assets/img/right.png')}
                alt=""
              />
              <img
                className="small appstore"
                src={require('@/assets/img/icon_iphone_black_new.3c51a3730124d2d8d662aa4393572914.png')}
                alt=""
              />
              <img
                className="small android"
                src={require('@/assets/img/android.f73995b4ecd8636ecb3819906598ec13.png')}
                alt=""
              />
            </div>
            <button className="btn">下载手机端</button>
          </div>
        </div>
        <div className="buttom"></div>
      </HeaderWrapper>
      <ButtomWrapper>
        <div className="buttom">
          <div className="one">
            <div className="text">
              <h3 className="title">千万曲库 首首CD音质</h3>
              <p className="des">
                囊括百万无损SQ音乐，你在用手机听歌时,
                <br />
                也能感受到纤毫毕现的CD音质，更能免费离线收听
              </p>
            </div>
            <img
              className="imageone"
              src={require('@/assets/img/1.jpg')}
              alt=""
            />
          </div>
          <div className="two">
            <img
              className="imagetwo"
              src={require('@/assets/img/2.jpg')}
              alt=""
            />
            <div className="text">
              <h3 className="title">千位明星 亲自推荐音乐</h3>
              <p className="des">
                韩红，戴佩妮等<strong>千位明星已入驻</strong>
                ，亲自创建私房歌单，录制独
                <br />
                家DJ节目，推荐他们心中的好音乐
              </p>
            </div>
          </div>
          <div className="one">
            <div className="text">
              <h3 className="title">社交关系 发现全新音乐</h3>
              <p className="des">
                你可以<strong>关注明星</strong>
                、DJ和好友，通过浏览他们的动态、收藏和
                <br />
                分享，发现更多全新好音乐
              </p>
            </div>
            <img
              className="imagethree"
              src={require('@/assets/img/3.jpg')}
              alt=""
            />
          </div>
          <div className="two">
            <img
              className="imagetwo"
              src={require('@/assets/img/4.jpg')}
              alt=""
            />
            <div className="text">
              <h3 className="title">手机电脑 歌单实时同步</h3>
              <p className="des">
                只要一个帐号，你就可以同步在手机、电脑上创建、收藏
                <br />
                的歌单，<strong>随时随地畅享好音乐</strong>
              </p>
            </div>
          </div>
          <div className="one">
            <div className="text">
              <h3 className="title">听歌识曲 助你疯狂猜歌</h3>
              <p className="des">
                歌曲很动听却不知道歌名，歌名在嘴边却想不起来……
                <br />用<strong>听歌识曲</strong>功能，几秒钟就知道歌名
              </p>
            </div>
            <img
              className="imagefour"
              src={require('@/assets/img/5.jpg')}
              alt=""
            />
          </div>
        </div>
      </ButtomWrapper>
    </div>
  )
}

export default memo(Download)
