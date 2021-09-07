chrome.webNavigation.onBeforeNavigate.addListener(
  ({ tabId }) => {
    const date = new Date()

    if (
      date.getTime() < new Date(2021, 8).getTime() ||
      ([(5, 6, 7)].includes(date.getDay()) && date.getHours() === 20)
    )
      return

    chrome.notifications.create(null, {
      type: 'basic',
      title: '网络防沉迷',
      message:
        '根据有关通知，网络企业仅可在周五、周六、周日和法定节假日每日20时至21时向人提供1小时网络服务，请您坐和放宽。',
      iconUrl:
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    })
    chrome.tabs.update(tabId, { url: 'about:blank' })
  },
  { url: [{ schemes: ['http', 'https'] }] }
)
