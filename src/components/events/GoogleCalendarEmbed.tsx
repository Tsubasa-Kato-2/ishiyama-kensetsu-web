// GoogleカレンダーのパブリックURL（src属性の値）を CALENDAR_SRC に設定してください
// 取得方法: Googleカレンダー → カレンダー設定 → カレンダーの統合 → 埋め込みコードのsrc値
const CALENDAR_SRC = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&title=OH%E4%BA%88%E7%B4%84%E7%8A%B6%E6%B3%81&src=ODdmNmU2Yjc4YTgyMjA2NTAyN2NhMzQyOGNiZWQ1MDIyOWEwMTM0OTgyNDJkMjE1NzNmYmI5MjAwMzM3MjdiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ef6c00&color=%230b8043";

export default function GoogleCalendarEmbed() {
  return (
    <div className="w-full overflow-hidden border border-border shadow-sm">
      <iframe
        src={CALENDAR_SRC}
        style={{ border: "solid 1px #777" }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="イベント予約状況カレンダー"
      />
    </div>
  );
}
