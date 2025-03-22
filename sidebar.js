customElements.define('sidebar-comp', class extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="sidebar">
        <a href="../main/" class="title">Yusui<br>Hoshino</a>

        <div class="../sidebar-group">
            <a href="../history/index.html">History</a>
            <a href="../portfolio/index.html">Portfolio</a>
            <a href="../request/index.html">Request</a>
        </div>
        
        <div class="sidebar-group">
            <a href="../podroduct/index.html"></a>
            <a href="../poster/index.html">Poster</a>
            <a href="../thumnail/index.html">Thumnail</a>
            <a href="../logo/index.html">Logo</a>
            <a href="../photo/index.html">Photo</a>
            <a href="../drawing/index.html">Drawing</a>
            <a href="../modeling/index.html">Modeling</a>
            <a href="../art/index.html">Art</a>
            <a href="../other/index.html">Other</a>
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

