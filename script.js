const quotes = [
  "你的命像貓的睡姿：扭曲卻可愛。",
  "爆肝加班不補眠，是拿生命賭未來。",
  "人生就像八字排盤，隱藏驚喜也隱藏地雷。",
  "星座不是藉口，但常常是藉口。",
  "MBTI 分析只是開始，真正的療癒靠自嘲。",
  "創傷只會更深，除非你學會笑著崩潰。"
];
const quoteEl = document.getElementById("quote");
const btn = document.getElementById("new-quote");
function showQuote() {
  quoteEl.textContent = quotes[Math.floor(Math.random()*quotes.length)];
}
btn.addEventListener("click", showQuote);
window.addEventListener("load", () => {
  showQuote();
  let deferred;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferred = e;
    document.getElementById("install-btn").hidden = false;
  });
  document.getElementById("install-btn").addEventListener("click", () => {
    if (deferred) {
      deferred.prompt();
      deferred = null;
      document.getElementById("install-btn").hidden = true;
    }
  });
});