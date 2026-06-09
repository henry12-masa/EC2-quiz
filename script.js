const params = new URLSearchParams(location.search);
const type = params.get("type") || "all";

const quizInfo = {
  ec2: {
    title: "EC2クイズ",
    desc: "インスタンス・AMI・EBS・Auto Scaling・ELB"
  },
  s3: {
    title: "S3クイズ",
    desc: "バケット・ストレージクラス・ライフサイクル・暗号化・権限"
  },
  iam: {
    title: "IAMクイズ",
    desc: "ユーザー・ロール・ポリシー・MFA・権限管理"
  },
  vpc: {
    title: "VPCクイズ",
    desc: "サブネット・ルートテーブル・NAT・セキュリティグループ"
  },
  route53: {
    title: "Route 53クイズ",
    desc: "DNS・レコード・ルーティングポリシー・ヘルスチェック"
  }
};

const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");
const quizList = document.getElementById("quizList");

if (type === "all") {
  document.title = "AWSサービス別クイズ";
  pageTitle.textContent = "AWSサービス別クイズ";
  pageDesc.textContent = "EC2・S3・IAM・VPC・Route 53を50問ランダムで学習";
} else {
  const info = quizInfo[type] || quizInfo.ec2;
  document.title = info.title;
  pageTitle.textContent = info.title;
  pageDesc.textContent = info.desc;
}

quizList.innerHTML = `
  <a href="index.html" class="${type === "all" ? "active" : ""}">全カテゴリ50問</a>
  ${Object.keys(quizInfo).map(key => `
    <a href="?type=${key}" class="${type === key ? "active" : ""}">
      ${quizInfo[key].title}
    </a>
  `).join("")}
`;

function normalizeQuestion(q){
  return {
    question: q.question || q.q,
    choices: q.choices || q.c,
    answer: q.answer || q.a,
    explanation: q.explanation || q.e || ""
  };
}

let questions = [];

if (type === "all") {
  Object.keys(quizInfo).forEach(key => {
    if (window.quizData && window.quizData[key]) {
      questions.push(...window.quizData[key].map(normalizeQuestion));
    }
  });
} else {
  questions = window.quizData?.[type]
    ? window.quizData[type].map(normalizeQuestion)
    : [];
}

questions = questions.sort(() => Math.random() - 0.5).slice(0, 50);

let currentIndex = 0;
let score = 0;
let answered = false;

const counter = document.getElementById("counter");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

function showQuestion() {
  answered = false;
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  if (questions.length === 0) {
    questionEl.textContent = "問題データが読み込めませんでした";
    choicesEl.innerHTML = "";
    counter.textContent = "0 / 0";
    scoreEl.textContent = "スコア: 0";
    progressBar.style.width = "0%";
    return;
  }

  if (currentIndex >= questions.length) {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    counter.textContent = `${questions.length} / ${questions.length}`;
    scoreEl.textContent = `スコア: ${score}`;
    resultEl.textContent = `${questions.length}問中 ${score}問正解`;
    progressBar.style.width = "100%";
    return;
  }

  const q = questions[currentIndex];

  counter.textContent = `${currentIndex + 1} / ${questions.length}`;
  scoreEl.textContent = `スコア: ${score}`;
  questionEl.textContent = q.question;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = () => {
      if (answered) return;
      answered = true;

      if (choice === q.answer) {
        score++;
        resultEl.textContent = "正解！";
      } else {
        resultEl.textContent = `不正解。正解は「${q.answer}」`;
      }

      if (q.explanation) {
        resultEl.textContent += ` ${q.explanation}`;
      }

      scoreEl.textContent = `スコア: ${score}`;
      nextBtn.style.display = "block";
    };

    choicesEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentIndex++;
  showQuestion();
};

showQuestion();
