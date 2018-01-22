var data = [30, 86, 168, 281, 303, 465];

var scale = d3.scale.linear()
  .domain([0, 465])
  .range([0, 310])

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return scale(d) + 'px' })
    .text(function(d) { return '$ ' + d; });
