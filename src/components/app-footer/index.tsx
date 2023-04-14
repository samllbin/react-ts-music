import React, { Fragment, memo } from 'react'

import { footerLinks, footerImages } from '@/assets/data/footer'

import { AppFooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function HYAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterRight className="right">
          {footerImages.map((item) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                ></a>
                <span className="title">{item.title}</span>
              </li>
            )
          })}
        </FooterRight>
        <FooterLeft className="left">
          <div className="link">
            {footerLinks.map((item) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              )
            })}
          </div>
          <div className="report">
            <a href="https://jubao.163.com/">廉政举报 &emsp;</a>
            <span>违法和不良信息举报电话：0571-89853516 &emsp;</span>
            <span>
              举报邮箱：
              <a
                href="mailto:ncm5990@163.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="copyright">
            <span>
              互联网宗教信息服务许可证：浙（2022）0000120
              增值电信业务经营许可证：浙B2-20150198
            </span>
            <span>
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                rel="noopener noreferrer"
                target="_blank"
              >
                粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
              </a>
            </span>
          </div>
          <div className="info">
            <span>网易公司版权所有©1997-2023杭州乐读科技有限公司运营：</span>
            <a
              href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24498695788/9de7/9e78/fc8d/35d33543c69c9f4c5ac8aeb937217597.png"
              rel="noopener noreferrer"
              target="_blank"
            >
              浙文网[2021] 1186-054号
            </a>
            <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
              <span className="police-logo"></span>
              <span className="text">浙公网安备 33010902002564</span>
            </a>
          </div>
        </FooterLeft>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </AppFooterWrapper>
  )
})
