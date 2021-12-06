// ==UserScript==
// @name         网络防沉迷
// @description  防止人沉迷网络，切实保护人身心健康
// @version      2
// @author       kidonng
// @namespace    https://github.com/kidonng/anti-web-addiction
// @match        http://*/*
// @match        https://*/*
// @grant        GM.notification
// @run-at       document-start
// ==/UserScript==

;(() => {
  const date = new Date()

  if (
    date.getTime() < new Date(2021, 8).getTime() ||
    ([(5, 6, 7)].includes(date.getDay()) && date.getHours() === 20)
  )
    return

  GM.notification(
    '根据有关通知，网络企业仅可在周五、周六、周日和法定节假日每日20时至21时向人提供1小时网络服务，请您坐和放宽。',
    '网络防沉迷'
  )
  location.replace('about:blank')
})()
