// ==UserScript==
// @name        资源统筹局简易自动签到脚本
// @namespace   Violentmonkey Scripts
// @include     https://gkdworld.xyz/*
// @grant       none
// @icon        https://gkdworld.xyz/source/plugin/ahome_horn/image/smiles/2.png
// @license     GPL-3.0-only
// @version     1.1.3
// @author      remember
// @description 2021/8/25 下午2:24:30
// ==/UserScript==
(function remember(){
  function gkdqd() {
    var mmm = (document.getElementById('JD_sign')) != null ? document.getElementById('JD_sign') : console.log('[签到脚本]啦啦啦罢工啦，要不去外面试试？目前就是这样了...(*￣０￣)ノ，
                                                                                                              到时候也许搞一个更好的版本');
    if (mmm)
      !mmm.textContent.includes('已签到') ? mmm.click() : console.log('[签到脚本]已签到');
    }
    gkdqd();
})()
