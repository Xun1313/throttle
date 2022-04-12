// 抽離參數
let time = 2000
const test = () => {
  console.log('外部內容');
}


const btn = document.body.querySelector('button')
let lastTime = new Date().getTime()// 上次執行時間
let execuate = false// 是否可執行
let isFirstClick = true// 是否是第一次執行

btn.addEventListener('click', () => {
  const nowTime = new Date().getTime()

  if (isFirstClick) {
    // 第一次必須要直接能執行
    execuate = true
    lastTime = nowTime
    isFirstClick = false
  } else {
    // 第二次之後要開始判斷時間
    if ((nowTime - lastTime) > time) {
      execuate = true
      lastTime = nowTime
    } else {
      execuate = false
    }
  }


  if (execuate) {
    // 可執行的內容
    test()
    console.log('按到了')
  }
})