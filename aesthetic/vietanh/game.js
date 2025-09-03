const questions = [
    { text: "Ai là người khởi xướng phong trào này cùng vua Hàm Nghi?",
      answers: ["Phan Bội Châu", "Tôn Thất Thuyết", "Lương Văn Can", "Nguyễn Thái Học"],
      correct: 1 },
    { text: "Khẩu hiệu của phong trào này là gì?",
      answers: ["“Bình Tây, sát tả”", "“Duy tân đất nước”", "“Không thành công cũng thành nhân”", "“Học tập để cứu nước”"],
      correct: 0 },
    { text: "Tên phong trào xuất phát từ ý nghĩa nào?",
      answers: ["Phụng sự vua, giúp vua khôi phục đất nước", "Kêu gọi học tập ở Nhật", "Mở trường học mới", "Thành lập Việt Nam Quốc Dân Đảng"],
      correct: 0 },
    { text: "Phong trào này kêu gọi thanh niên sang quốc gia nào du học để cứu nước?",
      answers: ["Pháp", "Nhật Bản", "Trung Quốc", "Thái Lan"],
      correct: 1 },
    { text: "Khẩu hiệu nào gắn với phong trào này?",
      answers: ["“Bình Tây, sát tả”", "“Khai dân trí, chấn dân khí”", "“Học tập để cứu nước”", "“Không thành công cũng thành nhân”"],
      correct: 2 },

    // New questions added below:
    { text: "Vị võ quan nào của triều Nguyễn từng lãnh đạo lực lượng tấn công quân Pháp ở kinh thành Huế năm 1885?",
      answers: ["Phan Đình Phùng", "Nguyễn Tri Phương", "Tôn Thất Thuyết", "Trương Công Định"],
      correct: 2 },
    { text: "Khẩu hiệu “Bình Tây, sát tả” có nghĩa là gì?",
      answers: [
        "Đánh đuổi thực dân Pháp và tiêu diệt quân đội triều đình",
        "Đánh đuổi thực dân Pháp và tiêu diệt giáo sĩ, giáo dân Công giáo chống lại phong trào",
        "Đánh dẹp quân Tây Ban Nha và tiêu diệt giặc Tàu",
        "Đánh đuổi phương Tây và tiêu diệt toàn bộ người ngoại quốc"
      ],
      correct: 1 },
    { text: "Tên phong trào bắt nguồn từ lời hiệu triệu 'phụng sự vua'. Đó là phong trào nào?",
      answers: ["Phong trào Đông Du", "Phong trào Cần Vương", "Đông Kinh Nghĩa Thục", "Phong trào Duy Tân"],
      correct: 1 },
    { text: "Ai được mệnh danh là “Ông già Bến Ngự” - người lãnh đạo phong trào Đông Du?",
      answers: ["Phan Bội Châu", "Phan Chu Trinh", "Nguyễn Thái Học", "Tôn Thất Thuyết"],
      correct: 0 },
    { text: "Năm diễn ra phong trào Đông Du là năm nào? (Giải phương trình: 5x−95=18605, năm cần tìm = 5 lần số x trừ đi 50)",
      answers: ["1905", "1885", "1917", "1930"],
      correct: 0 },
    { text: "Quốc gia nào ở châu Á đã tiến hành cải cách toàn diện được gọi là Minh Trị Duy Tân?",
      answers: ["Pháp", "Nhật Bản", "Trung Quốc", "Thái Lan"],
      correct: 1 },
    { text: "Tên phong trào có hai chữ, nghĩa là 'đi về hướng Đông để học' là phong trào gì?",
      answers: ["Phong trào Đông Du", "Đông Kinh Nghĩa Thục", "Duy Tân", "Cần Vương"],
      correct: 0 },
    { text: "Khuynh hướng nào không dùng vũ trang mà đi theo con đường hòa bình để cứu nước?",
      answers: ["Khuynh hướng bạo động", "Khuynh hướng cải cách", "Khuynh hướng phong kiến", "Khuynh hướng vô sản"],
      correct: 1 },
    { text: "Những nhân vật tiêu biểu cho khuynh hướng cải cách hòa bình ở Việt Nam đầu thế kỷ XX là ai?",
      answers: ["Phan Châu Trinh, Lương Văn Can", "Trương Định, Nguyễn Trung Trực", "Hoàng Hoa Thám, Đề Thám", "Tôn Thất Thuyết, Phan Đình Phùng"],
      correct: 0 },
    { text: "Năm diễn ra phong trào Duy Tân là năm nào? (Giải hệ phương trình: 2x+3y=56, 5x−y=89, năm là x0y)",
      answers: ["1906", "1609", "1909", "1907"],
      correct: 0 },
    { text: "Nhà chí sĩ nào là lãnh đạo phong trào Duy Tân và sáng lập báo “Lục Tỉnh Tân Văn”?",
      answers: ["Phan Châu Trinh", "Lương Văn Can", "Nguyễn Thượng Hiền", "Trần Quý Cáp"],
      correct: 1 },
    { text: "Năm diễn ra phong trào Duy Tân là năm nào? (Giải phương trình: 2log(x−900) + log(x−1897) = 7, làm tròn)",
      answers: ["1804", "1907", "2000", "1850"],
      correct: 1 },
    { text: "Di tích quốc gia Mù Cang Chải thuộc tỉnh nào - nơi diễn ra khởi nghĩa do Nguyễn Thái Học lãnh đạo?",
      answers: ["Lào Cai", "Yên Bái", "Hà Giang", "Sơn La"],
      correct: 1 },
    { text: "Tổ chức chính trị nào thành lập năm 1927 với tôn chỉ 'Dân tộc độc lập' và 'Dân quyền tự do', chịu ảnh hưởng Quốc dân Đảng Trung Quốc?",
      answers: ["Tân Việt Cách mệnh Đảng", "Việt Nam Quốc dân Đảng", "Hội Việt Nam Cách mạng Thanh niên", "Đông Kinh Nghĩa Thục"],
      correct: 1 },
    { text: "Ý nghĩa câu nói “Không thành công cũng thành nhân” là gì?",
      answers: [
        "Dù thất bại vẫn giữ trọn nhân cách, phẩm chất cao đẹp",
        "Chỉ cần thành công, không cần nhân cách",
        "Thành công và thành nhân là một",
        "Thất bại thì mất hết tất cả"
      ],
      correct: 0 },
    { text: "Người lãnh đạo nổi bật gắn với câu nói “Không thành công cũng thành nhân” là ai?",
      answers: ["Nguyễn Thái Học", "Phan Bội Châu", "Hồ Chí Minh", "Trần Phú"],
      correct: 0 },
    { text: "Trạng thái của xã hội Việt Nam sau khi các phong trào yêu nước chống Pháp thất bại được mô tả là gì?",
      answers: [
        "Xã hội phát triển rực rỡ",
        "Trời tối đen như mực",
        "Bình yên, ổn định lâu dài",
        "Đầy hy vọng và lạc quan"
      ],
      correct: 1 },
    { text: "‘Trời tối đen như mực’ mô tả trạng thái nào của xã hội Việt Nam sau thất bại các phong trào yêu nước?",
      answers: [
        "Khủng hoảng kinh tế - xã hội nghiêm trọng",
        "Suy thoái tư tưởng và văn hóa dân tộc",
        "Mất hoàn toàn độc lập và chủ quyền quốc gia",
        "Khủng hoảng con đường cứu nước giải phóng dân tộc"
      ],
      correct: 3 }
];


const shapes = [
    [[1]], [[1],[1]], [[1,1]], [[1,1],[1,1]],
    [[1],[1],[1]], [[1,1,1]],
    [[1],[1],[1],[1]], [[1,1,1,1]]
];
let dragOffset = { x: 0, y: 0 };

let grid = [];
let score = 0;
let currentQuestionIndex = 0;
let nextPiece = null;
let gameOver = false;

const gridElement = document.getElementById("grid");
const questionText = document.getElementById("question-text");
const answersElement = document.getElementById("answers");
const nextPieceElement = document.getElementById("next-piece");
const scoreElement = document.getElementById("score");
const overlay = document.getElementById("overlay");
const finalScore = document.getElementById("final-score");

// Initialize the 4x4 grid and render cells
function initGrid() {
    grid = Array.from({length: 4}, () => Array(4).fill(0));
    gridElement.innerHTML = "";
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = r;
            cell.dataset.col = c;
            gridElement.appendChild(cell);
        }
    }
}

// Load current question and answers with buttons
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        gameOver = true;
        endGame();
        return;
    }
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    answersElement.innerHTML = "";

    q.answers.forEach((ans, idx) => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.onclick = () => {
            if (!gameOver) handleAnswer(idx);
        };
        answersElement.appendChild(btn);
    });
}

// Handle answer click: if correct, generate next piece & next question; else disable button
function handleAnswer(index) {
    const q = questions[currentQuestionIndex];
    if (index === q.correct) {
        currentQuestionIndex++;
        nextPiece = shapes[Math.floor(Math.random() * shapes.length)];
        renderNextPiece();
        loadQuestion();
    } else {
        answersElement.children[index].disabled = true;
    }
}

// Render next puzzle piece preview
function renderNextPiece() {
    nextPieceElement.innerHTML = "";
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const cell = document.createElement("div");
            if (nextPiece && nextPiece[r] && nextPiece[r][c]) cell.classList.add("piece-cell");
            nextPieceElement.appendChild(cell);
        }
    }
}

// Rotate piece 90 degrees clockwise
function rotateMatrix(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    let rotated = Array.from({ length: cols }, () => Array(rows).fill(0));
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            rotated[c][rows - 1 - r] = matrix[r][c];
        }
    }
    return rotated;
}

document.getElementById("rotate-btn").addEventListener("click", () => {
    if (nextPiece) {
        nextPiece = rotateMatrix(nextPiece);
        renderNextPiece();
    }
});



let currentPlacement = null; // to remember the last valid placement for drop

gridElement.addEventListener("dragover", e => {
    e.preventDefault();
    const cell = e.target.closest(".cell");
    if (!cell) return;

    const hoveredR = parseInt(cell.dataset.row);
    const hoveredC = parseInt(cell.dataset.col);

    currentPlacement = highlightPlacementFlexible(hoveredR, hoveredC);
});
gridElement.addEventListener("dragleave", () => {
    clearHighlights();
    currentPlacement = null;
});
gridElement.addEventListener("drop", e => {
    e.preventDefault();
    if (!currentPlacement) return;

    if (nextPiece && canPlace(currentPlacement.startR, currentPlacement.startC)) {
        applyPiece(currentPlacement.startR, currentPlacement.startC);
        checkLines();
        nextPiece = null;
        renderNextPiece();
    }
    clearHighlights();
    currentPlacement = null;
});
// Modified highlightPlacement: find any valid placement of nextPiece so that
// *any* of nextPiece's occupied cells can be aligned to (hoveredR, hoveredC)

function highlightPlacementFlexible(hoveredR, hoveredC) {
    clearHighlights();
    if (!nextPiece) return;

    const cells = gridElement.children;

    // Find all piece cells that are occupied (value = 1)
    const occupiedCells = [];
    for (let r = 0; r < nextPiece.length; r++) {
        for (let c = 0; c < nextPiece[r].length; c++) {
            if (nextPiece[r][c]) occupiedCells.push({r, c});
        }
    }

    // Try each occupied cell as the anchor point aligning with hovered cell
    for (const anchor of occupiedCells) {
        const startR = hoveredR - anchor.r;
        const startC = hoveredC - anchor.c;

        if (startR < 0 || startC < 0) continue; // invalid, skip

        if (canPlace(startR, startC)) {
            // Highlight all cells for this placement
            for (let r = 0; r < nextPiece.length; r++) {
                for (let c = 0; c < nextPiece[r].length; c++) {
                    if (nextPiece[r][c]) {
                        const gr = startR + r;
                        const gc = startC + c;
                        if (gr < 4 && gc < 4) {
                            cells[gr * 4 + gc].classList.add("highlight");
                        }
                    }
                }
            }
            // Also store this valid startR and startC somewhere for drop
            // For now just return these coordinates so you can use them in drop
            return {startR, startC};
        }
    }

    // No valid placement found for this hovered cell
    return null;
}

// Highlight cells where piece would be placed
function highlightPlacement(startR, startC) {
    clearHighlights();
    if (!nextPiece) return;
    if (!canPlace(startR, startC)) return;  // Only highlight if piece fits

    const cells = gridElement.children;
    for (let r = 0; r < nextPiece.length; r++) {
        for (let c = 0; c < nextPiece[r].length; c++) {
            if (nextPiece[r][c]) {
                let gr = startR + r, gc = startC + c;
                if (gr < 4 && gc < 4) {
                    cells[gr * 4 + gc].classList.add("highlight");
                }
            }
        }
    }
}


function clearHighlights() {
    gridElement.querySelectorAll(".highlight").forEach(cell => cell.classList.remove("highlight"));
}

// Check if piece can be placed at grid position without overflow or overlap
function canPlace(startR, startC) {
    for (let r = 0; r < nextPiece.length; r++) {
        for (let c = 0; c < nextPiece[r].length; c++) {
            if (nextPiece[r][c]) {
                let gr = startR + r, gc = startC + c;
                if (gr >= 4 || gc >= 4 || grid[gr][gc]) return false;
            }
        }
    }
    return true;
}

// Apply piece to grid (mark occupied)
function applyPiece(startR, startC) {
    for (let r = 0; r < nextPiece.length; r++) {
        for (let c = 0; c < nextPiece[r].length; c++) {
            if (nextPiece[r][c]) {
                grid[startR + r][startC + c] = 1;
            }
        }
    }
    updateGridUI();
}

// Update grid UI based on grid array state
function updateGridUI() {
    const cells = gridElement.children;
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const idx = r * 4 + c;
            cells[idx].classList.toggle("piece-cell", grid[r][c] === 1);
        }
    }
}

// Check and clear full rows/columns, update score accordingly
function checkLines() {
    let fullRows = [], fullCols = [];
    for (let r = 0; r < 4; r++)
        if (grid[r].every(v => v === 1)) fullRows.push(r);
    for (let c = 0; c < 4; c++)
        if (grid.every(row => row[c] === 1)) fullCols.push(c);

    let lines = fullRows.length + fullCols.length;
    if (lines > 0) {
        let points = lines === 1 ? 1 : lines === 2 ? 3 : lines === 3 ? 5 : 10;
        score += points;
        scoreElement.textContent = score;

        // Add pop animation class
        scoreElement.classList.add("pop-effect");

        // Remove the class after animation ends so it can be triggered again later
        scoreElement.addEventListener("animationend", () => {
            scoreElement.classList.remove("pop-effect");
        }, {once: true});

        fullRows.forEach(r => grid[r].fill(0));
        fullCols.forEach(c => grid.forEach(row => row[c] = 0));
        updateGridUI();
    }
}


// End the game and show overlay
function endGame() {
    finalScore.textContent = score;
    overlay.classList.remove("hidden"); // show overlay
    gameOver = true;
}


// Reset the game state & UI
function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    nextPiece = shapes[Math.floor(Math.random() * shapes.length)];
    gameOver = false;

    scoreElement.textContent = score;
    overlay.classList.add("hidden");  // THIS hides the overlay

    initGrid();
    renderNextPiece();
    loadQuestion();
}

function showWrongAnswerPopup() {
  const popup = document.getElementById("wrong-answer-popup");
  popup.classList.remove("hidden");
  popup.style.animation = "none";  // reset animation
  popup.offsetHeight; // trigger reflow
  popup.style.animation = null; // restart animation

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000);
}

function handleAnswer(index) {
  const q = questions[currentQuestionIndex];
  if (index === q.correct) {
    nextPiece = shapes[Math.floor(Math.random() * shapes.length)];
    renderNextPiece();
    currentQuestionIndex++;
    loadQuestion();
  } else {
    answersElement.children[index].disabled = true;
    showWrongAnswerPopup();
  }
}
// Create a 1x1 transparent image to hide default drag preview
const emptyDragImage = new Image();
emptyDragImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==';

nextPieceElement.addEventListener("dragstart", e => {
    // Calculate drag offset inside the piece in terms of cells
    // Make sure to use the same cellSize as in createDragImage (40px)
    const cellSize = 40;
    dragOffset.x = Math.floor(e.offsetX / cellSize);
    dragOffset.y = Math.floor(e.offsetY / cellSize);

    // Set the drag data
    e.dataTransfer.setData("text/plain", JSON.stringify(nextPiece));

    // Create and set drag image (canvas)
    const dragImage = createDragImage(nextPiece);
    dragImage.style.position = "absolute";
    dragImage.style.top = "-1000px"; // hide offscreen
    document.body.appendChild(dragImage);

    // Center drag image on cursor
    e.dataTransfer.setDragImage(dragImage, dragImage.width / 2, dragImage.height / 2);

    // Remove the drag image element after dragstart finishes
    setTimeout(() => {
        document.body.removeChild(dragImage);
    }, 0);
});



function createDragImage(piece) {
    const cellSize = 40; // bigger size now
    const rows = piece.length;
    const cols = piece[0].length;

    const canvas = document.createElement("canvas");
    canvas.width = cellSize * cols;
    canvas.height = cellSize * rows;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffca28";   // color of puzzle block
    ctx.strokeStyle = "#b28500"; // border color
    ctx.lineWidth = 3;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (piece[r][c]) {
                ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
                ctx.strokeRect(c * cellSize, r * cellSize, cellSize, cellSize);
            }
        }
    }
    return canvas;
}





// Initialize the game on page load
resetGame();

// Setup replay button
document.getElementById("replay-btn").addEventListener("click", resetGame);
