'use strict';

angular.module('marta-on-m2x').directive('barsInCircle', function(){
  return {
    restrict: 'E',
    template: '',
    scope: {
      dataset: '='
    },
    link: function(scope, iElement, iAttrs){
      var vis_canvas, vis_frame, enclosure = 200, deg0_pt = { x: 0, y: enclosure * -0.48 }, step_count = 20,
      min_rot = ((2*Math.PI)/step_count) * -1, min_bar_length = (step_count*4)/Math.PI+10,
      min_deg0_y_cord = min_bar_length * -1, max_bar_intercept = deg0_pt.y-min_deg0_y_cord;

      vis_frame = d3.select(iElement[0]);
      vis_canvas = vis_frame.append('svg')
        .attr('width', enclosure+100)
        .attr('height', enclosure+100)
        .append('g')
        .attr('transform', 'translate(' + (enclosure+100)/2.5 + ',' + (enclosure+100)/2.5 + ')');

      var render = function(dataset){
        dataset = dataset.slice(iAttrs.startix, parseInt(iAttrs.startix)+step_count);
        var dataset_values = dataset.map(function(d){ return d.doc_count; });
        var outlier_limit = science.stats.quantiles(dataset_values, [0.75])[0] + (1.5 * science.stats.iqr(dataset_values));
        var tooltip = document.getElementById("tooltip");

        var bars = vis_canvas.selectAll('line.bar').data(dataset);
        bars
          .enter()
          .append('line')
          .attr('class', 'bar')
          .attr('x1', 0)
          .attr('y1', 0)
          .attr('x2', function(d,i) {
            var rot = min_rot * i;
            var scale_factor = d.doc_count/outlier_limit; scale_factor = scale_factor > 1 ? 1 : scale_factor;
            var deg0_pt_y_coord = min_deg0_y_cord + (max_bar_intercept * scale_factor);
            var x2 = rot == 0 ? deg0_pt.x : deg0_pt_y_coord*Math.sin(rot) + deg0_pt.x*Math.cos(rot);
            return x2;
          })
          .attr('y2', function(d,i) {
            var rot = min_rot * i;
            var scale_factor = d.doc_count/outlier_limit; scale_factor = scale_factor > 1 ? 1 : scale_factor;
            var deg0_pt_y_coord = min_deg0_y_cord + (max_bar_intercept * scale_factor);
            var y2 = rot == 0 ? deg0_pt.y : deg0_pt_y_coord*Math.cos(rot) + deg0_pt.x*Math.sin(rot);
            return y2;
          })
          .attr('stroke', function(d,i){
            if(d.doc_count > outlier_limit) { return "#6F8070"; } else { return "#E9BBAE"; }
          })
          .attr('fill', "transparent")
          .attr('stroke-width', "8")
          .on('mouseover', function(d,i){
            var x, y
	    if (d3.event.pageX != undefined && d3.event.pageY != undefined) {
	      x = d3.event.pageX
	      y = d3.event.pageY
	    } else {
	      x = d3.event.clientX + document.body.scrollLeft +
		document.documentElement.scrollLeft
	      y = d3.event.clientY + document.body.scrollTop +
		document.documentElement.scrollTop
	    }
	    x = x + 20, y = y - 20
            tooltip.style.top = y + 'px'
            tooltip.style.left = x + 'px'
            tooltip.innerHTML = d.key + ", " + d.doc_count;
            tooltip.style.display = "block";
            console.log(d);
          })
          .on('moouseout', function(d,i){
            tooltip.innerHTML = "";
            tooltip.style.display = "none";
          });
        bars
          .exit()
          .remove();

        var filler_bars = vis_canvas.selectAll('line.filler').data(dataset);
        filler_bars
          .enter()
          .append('line')
          .attr('class', 'filler')
          .attr('x1', function(d,i){
            var rot = min_rot * i;
            var scale_factor = d.doc_count/outlier_limit; scale_factor = scale_factor > 1 ? 1 : scale_factor;
            var deg0_pt_y_coord = min_deg0_y_cord + (max_bar_intercept * scale_factor);
            var x1 = rot == 0 ? deg0_pt.x : deg0_pt_y_coord*Math.sin(rot) + deg0_pt.x*Math.cos(rot);
            return x1;
          })
          .attr('y1', function(d,i){
            var rot = min_rot * i;
            var scale_factor = d.doc_count/outlier_limit; scale_factor = scale_factor > 1 ? 1 : scale_factor;
            var deg0_pt_y_coord = min_deg0_y_cord + (max_bar_intercept * scale_factor);
            var y1 = rot == 0 ? deg0_pt.y : deg0_pt_y_coord*Math.cos(rot) + deg0_pt.x*Math.sin(rot);
            return y1;
          })
          .attr('x2', function(d,i) {
            var rot = min_rot * i;
            var x2 = rot == 0 ? deg0_pt.x : deg0_pt.y*Math.sin(rot) + deg0_pt.x*Math.cos(rot);
            return x2;
          })
          .attr('y2', function(d,i) {
            var rot = min_rot * i;
            var y2 = rot == 0 ? deg0_pt.y : deg0_pt.y*Math.cos(rot) + deg0_pt.x*Math.sin(rot);
            return y2;
          })
          .attr('stroke', function(d,i){
            if(d.doc_count > outlier_limit) { return "#fff"; } else { return "#d6e9c6"; }
          })
          .attr('stroke-opacity', '0.5')
          .attr('stroke-width', 8)
          .on('mouseenter', function(d,i){
            tooltip.innerHTML = d.key + ", " + d.doc_count;
            console.log(d);
          })
          .on('moouseout', function(d,i){
            tooltip.innerHTML = "";
            tooltip.style.display = "none";
          });
        filler_bars
          .exit()
          .remove();

        var labels = vis_canvas.selectAll('text.label').data(dataset);
        labels
          .enter()
          .append('text')
          .attr('class', 'label')
          .attr('x', function(d, i){
            var rot = min_rot * i;
            var x2 = rot == 0 ? deg0_pt.x : deg0_pt.y*Math.sin(rot) + deg0_pt.x*Math.cos(rot);
            return x2;
          })
          .attr('y', function(d, i){
            var rot = min_rot * i;
            var y2 = rot == 0 ? deg0_pt.y : deg0_pt.y*Math.cos(rot) + deg0_pt.x*Math.sin(rot);
            return y2;
          })
          .text(function(d){ return d.key; });
        labels
          .exit()
          .remove();

        vis_canvas
          .append('circle')
          .attr('cx', 0).attr('cy', 0).attr('r', (step_count*4)/Math.PI+5)
          .attr('fill', '#428bca');

        /*
        vis_canvas.selectAll('circle')
          .data([1])
          .enter()
          .append('circle')
          .attr('cx', function(d, i){
            var rot = ((2*Math.PI)/20)*i;
            return deg0_pt_x;
          })
          .attr('cy', function(d, i){
            var rot = ((2*Math.PI)/20)*i;
            return deg0_pt_y;
          })
          .attr('r', 2)
          .attr('fill', '#428bca');
        */
      };

      scope.$watch('dataset', function(value){
        if(value) { render(value); }
      });
    }
  };
});