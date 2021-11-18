const number = Number(prompt('몇 명이 참가하나요?'))
// 버튼 가져오기
const btnEl = document.querySelector('.btn')
// input 가져오기
const inputEl = document.querySelector('input')
// 제시어 word 가져오기
const wordEl = document.querySelector('.word')
// 순서 가져오기
const orderEl = document.querySelector('.order')

// 제시어 변수
let word;
// 입력한 단어 변수
let newWord;

// 단어를 적었을 때 일어날 함수
const onInput = function (event) {
  newWord = event.target.value
}

// 클릭했을 때 일어날 함수
const onClick = function () {
  if (!word) { //제시어 비어있다를 !word로 표현 (불린값은 true)
    word = newWord //입력한 단어가 제시어가 된다
    wordEl.textContent = word // 제시어 자리에 제시어가 들어간다
    inputEl.value = "" // input안의 내용은 없어진다
    inputEl.focus()
    // 순서를 표시하는 데이터를 숫자데이터로 변환해서 변수 order에 넣는다
    const order = parseInt(orderEl.textContent) // 현재 순서
    if (order + 1 > number) {
      orderEl.textContent = 1 // 자동으로 형변환되서 문자열로 바뀜
    } else {
      orderEl.textContent = order + 1
    }
  } else { //제시어 안비어있다
    if (word[word.length - 1] === newWord[0]) {
      word = newWord
      wordEl.textContent = newWord
      inputEl.value = ""
      inputEl.focus()
      // 제시어가 안비어있을 때도 순서는 바뀌어야한다.
      const order = parseInt(orderEl.textContent) // 현재 순서
      if (order + 1 > number) {
        orderEl.textContent = 1 // 자동으로 형변환되서 문자열로 바뀜
      } else {
        orderEl.textContent = order + 1
      }
    } else {
        alert('틀렸습니다')
        inputEl.value = ""
        inputEl.focus()
    }
  }
}

// input했을 때 이벤트
inputEl.addEventListener('input', onInput)
// 버튼 클릭했을 때 이벤트
btnEl.addEventListener('click', onClick)