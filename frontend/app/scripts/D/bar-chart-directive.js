'use strict';

angular.module('marta-on-m2x').directive('barChart', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="bar-chart" ng-transclude></div>',
    scope: {
      dataset: '='
    },
    link: function(scope, iElement, iAttrs){

      var render = function(data){

        var bar_height_scale = d3.scale.linear()
          .domain([0, d3.max(data, function(d){ return d.doc_count; })])
          .range([0,300]);

        var svg_canvas = d3.select(iElement[0])
          .append('svg')
          .attr('width', '100%')
          .attr('height', 320);

        svg_canvas.selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('height', function(d) { return bar_height_scale(d.doc_count); })
          .attr('width', 30)
          .attr('fill', '#d6e9c6')
          .attr('x', function(d, i){ return i*35; })
          .attr('y', 0)
          .on('mouseover', function(d){
            console.log(d);
          });
      };

      scope.$watch('dataset', function(val){
        if( val ) { render(val); }
      });
    }
  };
});