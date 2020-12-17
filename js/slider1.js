var slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.querySelector(".show-prev"),
    showNextBtn: document.querySelector(".show-next"),
    slideImage: document.querySelector(".slide-img"),

    start: function () {

        var that = this

        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });

        this.imagesUrls.push("https://im0-tub-ru.yandex.net/i?id=ba02ca667d4d98c49a60bd9ec049b750-sr&n=13");
        this.imagesUrls.push("https://carsdb.ru/super/cars/mp4-12c_hamann_memor-1407/photo/mp4-12c_hamann_memor-1407-5_small.jpg");
        this.imagesUrls.push("https://im0-tub-ru.yandex.net/i?id=c97bf0c9f7330af294ab148664ebee1e-sr&n=13");
        this.imagesUrls.push("https://poster.nicefon.ru/2016_07/30/350x220/126654984d2caad4cefef8.jpg");
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },
    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }

    },
    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }

    },
}