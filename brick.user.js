// ==UserScript==
// @name        砖石社区
// @namespace   https://github.com/jonymei
// @description 自动屏蔽 JG、特短内容，净化论坛环境
// @match       https://in.iflytek.com/iflyteksns/forum/web/snsDoc/detail/*
// @match       https://in.iflytek.com/fornt/forum/index
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// @version     1.0
// @author      maY
// @license     MIT
// ==/UserScript==

const menu = []
const removeJGId = 'jg'
const removeTDId = 'td'

function updateMenu() {
  for (const item of menu) {
    GM_unregisterMenuCommand(item)
  }

  const removeJG = GM_getValue(removeJGId, true)
  const removeJGItem = `${removeJG ? '✅' : '🔘'} 屏蔽 JG（积告）`
  menu.push(removeJGItem)
  GM_registerMenuCommand(removeJGItem, () => {
    GM_setValue(removeJGId, !GM_getValue(removeJGId, true))
    updateMenu()
  })

  const removeTD = GM_getValue(removeTDId, true)
  const removeTDItem = `${removeTD ? '✅' : '🔘'} 屏蔽 TD（特短）`
  menu.push(removeTDItem)
  GM_registerMenuCommand(removeTDItem, () => {
    GM_setValue(removeTDId, !GM_getValue(removeTDId, true))
    updateMenu()
  })
}

updateMenu()

function removeSpam(document) {
  const tables = document.querySelectorAll('table.plate-table')
  tables.forEach(table => {
    if (table.querySelector('div.title')) {
      return
    }
    const ps = table.querySelectorAll('tbody > tr > td:nth-child(2) > div > p')
    let text = ''
    ps.forEach(p => {
      text = text + p.innerText
    })
    text = text.trim()
    if (GM_getValue(removeJGId, true) && /^jg$/i.test(text)) {
      table.style.display = 'none'
      return
    }
    if (GM_getValue(removeTDId, true) && text.length < 5) {
      table.style.display = 'none'
    }
  })
}


(function () {
  removeSpam(document)
})();