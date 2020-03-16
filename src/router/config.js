// 图标
const homeIcon = require('../assets/images/tab_home.png');
const homeSelectIcon = require('../assets/images/tab_home_act.png');
const mineIcon = require('../assets/images/tab_mine.png');
const mineSelectIcon = require('../assets/images/tab_mine_act.png');
const scanIcon = require('../assets/images/tab_scan.png');
const scanSelectIcon = require('../assets/images/tab_scan.png');

const Tab = {
  Home: {
    iconPath: homeIcon,
    iconSelectPath: homeSelectIcon,
    text: '首页',
  },
  Scanner: {
    iconPath: scanIcon,
    iconSelectPath: scanSelectIcon,
    text: '扫码',
  },
  Mine: {
    iconPath: mineIcon,
    iconSelectPath: mineSelectIcon,
    text: '我的',
  },
};

export {Tab};
