import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  background-color: black;
  margin: 0 auto;
  padding: 80px 0 112px;
  height: 764.1px;
  display: flex;
  .left {
    width: 556px;
    display: flex;
    flex-flow: column;
    flex: 1;
    margin-left: 180px;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 22px;
    opacity: 0.8;
    color: #ffffff;
    display: inline-block;
    width: 556px;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .img {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  .big {
    width: 557px;
    height: 328px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .mac {
    margin-left: 15px;
    margin-top: 20px;
    width: 154px;
    height: 44px;
  }
  .win {
    margin-left: 30px;
    margin-top: 20px;
    width: 140px;
    height: 44px;
  }
  .btn {
    width: 300px;
    height: 65px;
    margin: 0 auto;
    border-radius: 65px;
    background-color: #fff;
    color: #d10000;
    font-size: 22px;
    line-height: 65px;
    text-align: center;
    cursor: pointer;
    box-sizing: content-box;
    margin-top: 10px;
    text-align: center;
  }
  .right {
    position: relative;
    margin-left: 220px;
    width: 300px;
    text-align: center;
    top: -583px;
    left: 750px;
    > .title {
      width: 300px;
      height: 25.3px;
    }
    > .btn {
      margin-top: 20px;
    }
  }
  .phone {
    margin-top: 20px;
    width: 299px;
    height: 311px;
  }
  .small {
    width: 120px;
    height: 44px;
    margin-top: 55px;
  }
  .appstore {
    margin-right: 20px;
  }
  .android {
    margin-left: 20px;
  }
`
export const ButtomWrapper = styled.div`
  .one {
    background: #fff;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      font-size: 40px;
      font-weight: normal;
      padding: 45px 0 5px 0;
    }
    .des {
      font-size: 16px;
      color: #666666;
    }
    .imageone {
      width: 408px;
      height: 190px;
      margin-left: 80px;
    }
    .imagethree {
      width: 463px;
      height: 289px;
      margin-left: 100px;
    }
    .imagefour {
      width: 359px;
      height: 355px;
      margin-left: 200px;
    }
  }
  .two {
    background: #fff;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e3e3e3;
    .title {
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      font-size: 40px;
      font-weight: normal;
      padding: 45px 0 5px 0;
    }
    .des {
      font-size: 16px;
      color: #666666;
    }
    .imagetwo {
      width: 447px;
      height: 269px;
      margin-right: 100px;
    }
  }
`
