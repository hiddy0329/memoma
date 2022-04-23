const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.memo}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  
  submit.addEventListener("mouseover", function(){
    const memo = document.getElementById("memo");
    memo.setAttribute("style", "display: inline;");
  });

  submit.addEventListener("click", (e) => {
    // preventDefaultメソッドでブラウザとJavaScriptからの二重リクエストを回避
    e.preventDefault();
    const form = document.getElementById("form");
    // FormDataオブジェクトに引数としてformを渡すことでformの中の値を取得する
    const formData = new FormData(form);
    // JavaScriptを用いてサーバーサイドとHTTP通信でやりとりするためのXMLHttpRequestオブジェクトを生成する
    const XHR = new XMLHttpRequest();
    // openメソッドを使いリクエスト内容を指定
    XHR.open("POST", "/posts", true);
    // responseTypeプロパティを使いレスポンスのデータ形式を指定
    XHR.responseType = "json";
    // sendメソッドでフォームの中身を送信
    XHR.send(formData);

    // onloadプロパティでサーバーサイドからレスポンスが正常にきた時の処理を記述
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("memo");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);