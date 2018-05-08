import "./chart.html";
import { Template } from "meteor/templating";
import Chart from "chart.js";

Template.chart.onRendered(function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  this.autorun(() => {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Number of Broadcasts",
        //   backgroundColor: "rgb(85, 199, 132)",
          borderColor: "rgb(1, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
          type: 'line',
        },
        {
            label: 'Number of comments',
            data: [10, 20, 15, 2, 25, 20, 55],
            // backgroundColor: "rgb(185, 99, 132)",
            borderColor: "rgb(255, 199, 232)",
            type: 'line'
          },
          {
            label: "Reads",
            type: "bar",
            backgroundColor: "rgba(0,90,20,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133,221,83,278]
          },
          

      ]
    },

    // Configuration options go here
    options: {}
  });
});
});

