// 1から100の中で5の倍数を"fizz" それ以外を"bazz"と表示する

const main = () => {
  for (let i = 1; i <= 100; i++) {
    let text = "bazz"
    if (i % 5 === 0) {
      text = "fizz"
    }

    console.log(text)
  }
}

main()