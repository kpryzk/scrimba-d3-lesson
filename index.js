var data = [30, 86, 168, 281, 303, 465];


//scales graph to fit within a specified space (325 per .css) must list domain that contains highest number and also how much space it should occupy
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
