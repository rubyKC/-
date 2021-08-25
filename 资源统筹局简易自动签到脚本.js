// ==UserScript==
// @name        资源统筹局简易自动签到脚本
// @namespace   Violentmonkey Scripts
// @match       https://gkdworld.xyz/forum.php
// @grant       none
// @icon        https://gkdworld.xyz/source/plugin/ahome_horn/image/smiles/2.png
// @license     GPL-3.0-only
// @version     1.0
// @author      remember
// @description 2021/8/25 下午2:24:30
// ==/UserScript==
(function remember(){
  function gkdqd() {
    var mmm = (document.getElementById('JD_sign')) != null ? document.getElementById('JD_sign') : console.log('[签到脚本]未知错误');
    if (mmm)
      !mmm.textContent.includes('已签到') ? mmm.click() : console.log('[签到脚本]已签到');
    }
    gkdqd();
})()
