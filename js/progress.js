function drawCircle() {
  const svg = d3.select('#circleSvg')
    .append('svg')
    .attr('height', 160)
    .attr('width', 160);

  svg.append('circle')
    .attr('r', 70)
    .attr('cx', 80)
    .attr('cy', 80);

  const lg = svg.append('defs')
    .append('linearGradient')
    .attr('id', 'GradientColor');

  lg.append('stop')
    .attr('offset', '0%')
    .style('stop-color', '#DA22FF');

  lg.append('stop')
    .attr('offset', '100%')
    .style('stop-color', '#9733EE');

}

drawCircle();

const num = document.getElementById('number');
let counter = 0;

setInterval(() => {
  if( counter == 65) {
    clearInterval;
  } else {
    counter += 1;
    number.innerHTML = `${counter}%`
  }

}, 30)


