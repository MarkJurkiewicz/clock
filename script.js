var time = {

    displayTime: function () {

        this.currentTime = new Date();
        this.hours = this.currentTime.getHours();
        this.minutes = this.currentTime.getMinutes();
        this.seconds = this.currentTime.getSeconds();
        this.miridiem = "AM";
        this.clockDiv = document.getElementById('clock');

        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds;
        }

        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes;
        }

        if (this.hours > 12) {
            this.hours = this.hours - 12;
            this.miridiem = "PM";
        }

        if (this.hours === 0){
            this.hours = 12;
        }

        this.clockDiv.textContent = this.hours + ":" + this.minutes + ":" + this.seconds + " " + this.miridiem;
    }
};

time.displayTime();
setInterval(time.displayTime, 1000);