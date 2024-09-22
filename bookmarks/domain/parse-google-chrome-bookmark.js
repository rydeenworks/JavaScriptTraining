import { DOMParser } from "@xmldom/xmldom";

// 以下の書式を与えるとtitleとurlを返す
// <DT><A HREF="https://www.amazon.co.jp/dp/4048931164?tag=kadoofce-22" ADD_DATE="1716536377" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABxklEQVQ4jY2TP2hTURjFf09zM1UbcGmID9xEFEyyCTo1b6uLxuCS1e4Fg4tuIigu5uGWxSG4tOngKHTzH5mCYJLBILTvWQOa59MODXgckqbJe4l44Bvud/nOdw7nXiQlJT2VtKv/x+54JmlJegTcYwrdbpdarcbnXg/Lsri+tka5XGYOniDJn6ZuNps6aYwSkapUKvOU+EgaTHfurK8rYYwKjqN2uz05n7XteQQDS9IAWD7S5Ps+nucRBAE/w5B6vU6j0QBgeHgYtRDEFHQ6HWXz+ZiFhDFzFcQIbpVKShijbD4vz/NUdd1/EpyIajqSWywWSafTtFqtyV0YhvEcogqyudxkY8FxZhKpuu4CC7+9mRgztq2EMcrYtqquq2KppFXHUfjd15/2C+nDxqgmKby6uMzVLUidn/dYjrFzE5bOQTIFnx7AbY1T2HstvUR6vyGFXlTmMX7tSb1N6Udb2jwTeQdfGvDuxmhT6hqsOGBOgwDLgv0d2N+GK1ujfv8NXL4fWJJ8YAWAfhM+PoRv26NBxvMASxcg9wwyBRiO0zCnvlqSHgN3Z7wOOtB/C8NgxJC6BJnVhZ8pKem5pIPF5mM4GM8k/wJxWy/G2xfV+gAAAABJRU5ErkJggg==">Amazon.co.jp: 関数型ドメインモデリング ドメイン駆動設計とF#でソフトウェアの複雑さ…</A>

// Bookmark HTMLの<DT>は閉じタグがないので、入力文字列から削除する仕様である
export function handle(bookmark) {
  // <DT> および </DT> を削除
  const anchorTag = bookmark.replace(/<\/?DT>/g, '');
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(anchorTag, "text/xml");
  const anchorElement = xmlDoc.getElementsByTagName("A")[0];
  const url = anchorElement.getAttribute("HREF");
  const title = anchorElement.textContent;
  return { title: title, url: url };
}