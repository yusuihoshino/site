customElements.define('sidebar-comp', class extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="sidebar opened" id="sidebar">
        <div class="sidebar-left" id="sidebar-left">
            <a href="../main/index.html" class="sidebar-title">Yusui<br>Hoshino</a>

            <div class="sidebar-group">
                <a href="../history/index.html">History</a>
                <a href="../request/index.html">Request</a>
                <a href="../portfolio/index.html">Portfolio</a>
                <a href="../product/index.html">Product</a>
                <a href="../poster/index.html">Poster</a>
                <a href="../logo/index.html">Logo</a>
                <a href="../other/index.html">Other</a>
            </div>
            
            <div class="sidebar-group">
                <a href="../photo/index.html">Photo</a>
                <a href="../drawing/index.html">Drawing</a>
                <a href="../thumnail/index.html">Thumnail</a>
                <a href="../modeling/index.html">Modeling</a>
                <a href="../art/index.html">Art</a>
            </div>

            <div class="sidebar-group">
                <input type="color" id="colorPicker" class="color-picker" value="#ffffff">
                <a href="https://note.com/yusuihoshino" target="_blank" class="link-btn">note</a>
                <a href="https://x.com/yusuihoshino" target="_blank" class="link-btn">X</a>
            </div>  
        </div>
        <div class="sidebar-right">
          <button id="toggleSidebarBtn" class="toggleSidebarBtn">
            |||
          </button>
        </div>
      </div>
    `;
  }
})


customElements.define('card-comp', class extends HTMLElement {
  constructor() {
    super();

    // 属性を取得
    const image = this.getAttribute('image') || '';
    const link = this.getAttribute('link'); // nullになる可能性あり
    const title = this.getAttribute('title') || 'no title';
    const date = this.getAttribute('date') || '----/--';

    // 中身を描画（リンクの有無で分岐）
    if (link) {
      // リンクありの場合
      this.innerHTML = `
        <a class="grid-item" href="${link}">
          <img src="${image}" alt="${title}">
          <div class="grid-item-below">
            <div class="grid-item-texts">
              <p>${title}</p>
              <div class="line"></div>    
              <p>${date}</p> 
            </div>
            <p class="arrow">＞</p>
          </div>
        </a>
      `;
    } else {
      // リンクなしの場合（aタグではなくdivタグ）
      this.innerHTML = `
        <div class="grid-item">
          <img src="${image}" alt="${title}">
          <div class="grid-item-below">
            <div class="grid-item-texts">
              <p>${title}</p>
              <div class="line"></div>    
              <p>${date}</p> 
            </div>
          </div>
        </div>
      `;
    }
  }
});

customElements.define('y-card-comp', class extends HTMLElement {
  constructor() {
    super();

    // 属性を取得
    const image = this.getAttribute('image') || '';
    const link = this.getAttribute('link'); // nullになる可能性あり
    const title = this.getAttribute('title') || 'no title';
    const date = this.getAttribute('date') || '----/--';

    // 中身を描画（リンクの有無で分岐）
    if (link) {
      // リンクありの場合
      this.innerHTML = `
        <a class="grid-item" href="${link}">
          <iframe width="560" height="315" src="${image}" allowfullscreen></iframe>
          <div class="grid-item-below">
            <div class="grid-item-texts">
              <p>${title}</p>
              <div class="line"></div>    
              <p>${date}</p> 
            </div>
            <p>detail</p>
          </div>
        </a>
      `;
    } else {
      // リンクなしの場合（aタグではなくdivタグ）
      this.innerHTML = `
        <div class="grid-item">
          <img src="${image}" alt="${title}">
          <div class="grid-item-below">
            <div class="grid-item-texts">
              <p>${title}</p>
              <div class="line"></div>    
              <p>${date}</p> 
            </div>
          </div>
        </div>
      `;
    }
  }
});










customElements.define('title-comp', class extends HTMLElement {
  constructor() {
    super();

    // 属性を取得
    const title1 = this.getAttribute('title1') || '';
    const title2 = this.getAttribute('title2') || '';
    // 中身を描画
    this.innerHTML = `
      <div class="title">
        <h1>${title1}</h1>
        <p>${title2}</p>
      </div>
      
    `;
  }
});







