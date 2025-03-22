customElements.define('sidebar-comp', class extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="sidebar">
        <a href="index.html" class="title">Yusui<br>Hoshino</a>

        <div class="sidebar-group">
            <a href="history.html">History</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="request.html">Request</a>
        </div>
        
        <div class="sidebar-group">
            <a href="podroduct.html"></a>
            <a href="poster.html">Poster</a>
            <a href="thumnail.html">Thumnail</a>
            <a href="logo.html">Logo</a>
            <a href="photo.html">Photo</a>
            <a href="drawing.html">Drawing</a>
            <a href="modeing.html">Modeling</a>
            <a href="art.html">Art</a>
            <a href="other.html">Other</a>
        </div>

        <div class="sidebar-group">
            <input>colrchange</input>
            <a href="" class="link-btn">note</a>
            <a href="" class="link-btn">X</a>
        </div>  
      </div>
    `;
  }
})

