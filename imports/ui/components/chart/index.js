import "./chart.html";
import { Template } from "meteor/templating";
import Chart from "chart.js";

Template.chart.onRendered(function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Number of Broadcasts",
        //   backgroundColor: "rgb(85, 199, 132)",
          borderColor: "rgb(1, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'Number of comments',
            data: [10, 20, 15, 2, 25, 20, 55],
            // backgroundColor: "rgb(185, 99, 132)",
            borderColor: "rgb(255, 199, 232)",
            type: 'line'
          },

      ]
    },

    // Configuration options go here
    options: {}
  });
});

