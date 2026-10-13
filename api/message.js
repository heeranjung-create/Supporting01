// Vercel 서버리스 함수: GET /api/message?name=닉네임
// 응원 문장 15개 중 하나를 서버에서 골라 이름과 함께 돌려준다.

const MESSAGES = [
  "오늘도 여기까지 온 것만으로 충분히 잘하고 있어요.",
  "작은 한 걸음이 모여 큰 길이 됩니다. 오늘의 한 걸음을 응원해요!",
  "완벽하지 않아도 괜찮아요. 꾸준함이 결국 이깁니다.",
  "지금의 고민은 더 단단해지는 과정이에요.",
  "어제보다 조금 나아졌다면 그걸로 멋진 하루예요.",
  "당신의 노력은 생각보다 많은 사람에게 힘이 되고 있어요.",
  "잠깐 쉬어가도 괜찮아요. 다시 출발하면 되니까요.",
  "오늘 하루도 스스로를 믿어 주세요. 해낼 수 있어요!",
  "실수는 배움의 다른 이름이에요. 두려워하지 마세요.",
  "당신이 웃으면 주변도 함께 밝아져요. 오늘도 미소 한 번!",
  "포기하지 않는 마음이 가장 큰 재능이에요.",
  "천천히 가도 멈추지만 않으면 반드시 도착해요.",
  "오늘의 당신은 어제의 당신이 바라던 모습이에요.",
  "힘든 순간도 지나가요. 그리고 당신은 더 강해질 거예요.",
  "당신은 생각보다 훨씬 멋진 사람이에요. 오늘도 파이팅!",
];

module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "GET 요청만 사용할 수 있어요." }));
    return;
  }

  const raw = req.query && typeof req.query.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, 20) || "여러분";
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.statusCode = 200;
  res.end(JSON.stringify({ name, message }));
};
