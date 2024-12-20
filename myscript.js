document.addEventListener("DOMContentLoaded", () => {
    const innerSliderBox = document.querySelector('.Inner_Slider_Box');
    const slides = document.querySelectorAll('.Inner_Slider_Box img');
    const contentImages = [
        document.querySelector('.Content1 .MainContents1 img'),
        document.querySelector('.Content2 .MainContents1 img'),
        document.querySelector('.Content3 .MainContents1 img'),
        document.querySelector('.Content4 .MainContents1 img'),
    ];
    const contentTexts = [
        document.querySelector('.Content1 .MainContents2'),
        document.querySelector('.Content2 .MainContents2'),
        document.querySelector('.Content3 .MainContents2'),
        document.querySelector('.Content4 .MainContents2'),
    ];
    const buttons = document.querySelectorAll('.topTab li a');

    const categoryMap = {
        '팔': { html: 'index.html', category: 'arm' },
        '다리': { html: 'index2.html', category: 'leg' },
        '눈': { html: 'index3.html', category: 'eyes' },
        '장기': { html: 'index4.html', category: 'organs' },
    };

    const contentsImages = {
        arm: [
            "/image/arm/Applearm.png",
            "/image/arm/Lockheed Martin arm.png",
            "/image/arm/Samsung arm.png",
            "/image/arm/Xiaomi arm.png",
        ],
        leg: [
            "/image/leg/Doosanleg.png",
            "/image/leg/xiomi_leg.png",
            "/image/leg/Hyundaileg.png",
            "/image/leg/Lockleg.png",
        ],
        eyes: [
            "/image/eyes/안구-08.png",
            "/image/eyes/안구-09.png",
            "/image/eyes/안구-10.png",
            "/image/eyes/안구-11.png",
        ],
        organs: [
            "/image/organs/Backbone.png",
            "/image/organs/Heart.png",
            "/image/organs/Pye.png",
            "/image/organs/Teeth.png",
        ],
    };

    const contentsTextsData = {
        arm: [
            ["Arm Text 1", "Arm Detail 1", "Arm Info 1"],
            ["Arm Text 2", "Arm Detail 2", "Arm Info 2"],
            ["Arm Text 3", "Arm Detail 3", "Arm Info 3"],
            ["Arm Text 4", "Arm Detail 4", "Arm Info 4"],
        ],
        leg: [
            ["Leg Text 1", "Leg Detail 1"],
            ["Leg Text 2", "Leg Detail 2"],
            ["Leg Text 3", "Leg Detail 3"],
            ["Leg Text 4", "Leg Detail 4"],
        ],
        eyes: [
            ["Eye Text 1", "Eye Detail 1"],
            ["Eye Text 2", "Eye Detail 2"],
            ["Eye Text 3", "Eye Detail 3"],
            ["Eye Text 4", "Eye Detail 4"],
        ],
        organs: [
            ["Organ Text 1", "Organ Detail 1"],
            ["Organ Text 2", "Organ Detail 2"],
            ["Organ Text 3", "Organ Detail 3"],
            ["Organ Text 4", "Organ Detail 4"],
        ],
    };

    let currentIndex = 0;

    // 슬라이드 이미지 업데이트 함수
    function updateSliderImages() {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const newImages = isMobile
            ? ["image/adver/1.png", "image/adver/2.png", "image/adver/3.png"]
            : ["image/adver/Pye_V02.png", "image/adver/Teeth_V02.png", "image/adver/Brain_V02.png"];

        slides.forEach((slide, index) => {
            slide.src = newImages[index] || ""; // 새로운 이미지 경로 설정
        });

        updateSliderWidth();
    }

    // 슬라이드 이동 함수
    function moveSlider() {
        const slideWidth = slides[currentIndex].getBoundingClientRect().width;
        const offset = -currentIndex * slideWidth;
        innerSliderBox.style.transform = `translateX(${offset}px)`;
        currentIndex = (currentIndex + 1) % slides.length;
    }

    // 슬라이더 너비 업데이트 함수
    function updateSliderWidth() {
        const totalWidth = [...slides].reduce((total, slide) => {
            return total + slide.getBoundingClientRect().width;
        }, 0);
        innerSliderBox.style.width = `${totalWidth}px`;
    }

    // 버튼 클릭 이벤트 추가
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const text = button.textContent.trim();
            const config = categoryMap[text];

            if (config) {
                // HTML 파일로 이동
                window.location.href = config.html;
            }
        });
    });

    // 초기화 작업
    updateSliderImages();
    updateSliderWidth();
    setInterval(moveSlider, 3000); // 슬라이더 자동 이동

    // 화면 크기 변경 이벤트
    window.addEventListener('resize', updateSliderImages);
});
