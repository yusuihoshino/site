$(document).ready(function () {
    // サイドバーの内容を直接HTMLとして定義
    const sidebarHTML = `
        <!-- サイドバー -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3><a href="index.html#home">Yusui Hoshino</a></h3>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <a href="history.html">History</a>
                </li>
                <li>
                    <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                    <a href="request.html">Request</a>
                </li>
                <li>
                    <a href="product.html">Product</a>
                </li>
                <li>
                    <a href="poster.html">Poster</a>
                </li>
                <li>
                    <a href="thumbnail.html">Thumbnail</a>
                </li>
                <li>
                    <a href="logo.html">Logo</a>
                </li>
                <li>
                    <a href="photo.html">Photo</a>
                </li>
                <li>
                    <a href="drawing.html">Drawing</a>
                </li>
                <li>
                    <a href="modeling.html">Modeling</a>
                </li>
                <li>
                    <a href="art.html">Art</a>
                </li>
                <li>
                    <a href="other.html">Other</a>
                </li>
            </ul>
        </nav>
    `;

    // サイドバーを挿入
    $("#sidebarContainer").html(sidebarHTML);

    // サイドバートグルの機能
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
    
    // 現在のページをアクティブにする
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $(`#sidebar a[href="${currentPage}"]`).parent('li').addClass('active');
}); 