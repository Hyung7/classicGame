const gameInfo = [{
    id: 'snake',
    name: '贪吃蛇',
    img: 'pic/snake.png',
    href: './snake/index.html'
  },
  {
    id: 'MineSweeping',
    name: '扫雷',
    img: 'pic/MineSweeping.png',
    href: './MineSweeping/index.html'
  }
]

let game = document.getElementsByTagName('ul')[0];

game.addEventListener('click', (e) => {
  id = e.target.tagName === 'LI' ? e.target.id : e.target.parentElement.id;
  const index = gameInfo.findIndex((item) => {return item.id === id});
  window.location.href = gameInfo[index].href; 
}, false);

// 初始化
(function () {
  let fragmeng = document.createDocumentFragment();
  for (item of gameInfo) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const div = document.createElement('div');
    li.id = item.id;
    img.src = item.img;
    img.alt = item.name;
    div.innerHTML = item.name;
    li.appendChild(img);
    li.appendChild(div);
    fragmeng.appendChild(li);
  }
  game.appendChild(fragmeng);
}())