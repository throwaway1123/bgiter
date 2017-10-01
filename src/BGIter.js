class BGIter {
  constructor(interval = 1000, iterations = 10) {
    this.interval = interval;
    this.iterations = iterations;
    this.usedColors = {};
    this.count = 0;
    this.timeout;
  }

  static setBg(color) {
    document.body.style.backgroundColor = color;
  }

  static genColor() {
    const red = Math.random() * 255 >> 0;
    const green = Math.random() * 255 >> 0;
    const blue = Math.random() * 255 >> 0;
    return `rgb(${red},${green},${blue})`;
  }

  run() {
    this.timer();
  }

  bgColor() {
    let color;
    do {
      color = BGIter.genColor();
    } while (color in this.usedColors);
    this.usedColors[color] = true;
    this.count++;
    return color;
  }

  timer() {
    const color = this.bgColor();
    BGIter.setBg(color);
    if (this.count >= this.iterations) return;
    else setTimeout(() => this.timer(this.interval, this.iterations), this.interval);
  }
}

export default BGIter;
