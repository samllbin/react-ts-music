import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  display: block;
  text-align: center;
  margin-top: 80px;

  .link {
    margin-top: 5px;
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }
  }
  .report {
    margin-top: 5px;
  }
  .copyright {
    margin-top: 5px;
    span {
      margin-right: 15px;
    }
  }
  .info {
    margin-top: 5px;
    .police-logo {
      display: inline-block;
      margin-left: 5px;
      font-size: 0px;
      width: 20px;
      height: 20px;
      background-size: cover;
      margin-right: 2px;
      vertical-align: -2px;
      background: url(${require('@/assets/img/police.png')});
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  width: 980px;
  height: 71px;

  flex-direction: row;
  justify-content: center;
  margin-top: 33px;

  .item {
    display: flex;
    width: 100px;
    flex-direction: column;
    flex: 1;
    align-items: center;
    margin-left: 30px;

    .link {
      background-image: url(${require('@/assets/img/foot_enter_new2.png')});
      background-size: 220px 220px;
      display: block;
      float: none;
      width: 45px;
      height: 45px;
      margin: 0 auto;
    }

    :nth-child(1) .link {
      background-position: -170px -5px;
      :hover {
        background-position: -5px -115px;
      }
    }
    :nth-child(2) .link {
      background-position: -5px -170px;
      :hover {
        background-position: -60px -170px;
      }
    }
    :nth-child(3) .link {
      background-position: -5px -60px;
      :hover {
        background-position: -60px --5px;
      }
    }

    :nth-child(4) .link {
      background-position: -60px -60px;
      :hover {
        background-position: -115px -5px;
      }
    }
    :nth-child(5) .link {
      background-position: -115px -115px;
      :hover {
        background-position: -5px -5px;
      }
    }
    :nth-child(6) .link {
      background-position: -170px -115px;
      :hover {
        background-position: -60px -115px;
      }
    }
    :nth-child(7) .link {
      background-position: -170px -60px;
      :hover {
        background-position: -115px -60px;
      }
    }

    .title {
      margin-top: 5px;
      display: flex;
      width: 100px;
      height: 16px;
      align-items: center;
      justify-content: center;
    }
  }
`
