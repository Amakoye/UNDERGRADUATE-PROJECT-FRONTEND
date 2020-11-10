// labels on the x-axis
cereals = ["Maize", "Beans", "Soya", "Millet", "Sorghum"];
cerealsData = [12, 19, 3, 5, 2];
vegs = ["Spinach", "Cabbages", "Tomatoes", "Onions", "Capsicum"];
vegData = [10, 12, 5, 8, 13];

var cerealBar_gragh = document.getElementById("cereal-bar").getContext("2d");
var cereal_bar = new Chart(cerealBar_gragh, {
  type: "bar",
  data: {
    labels: cereals,
    datasets: [
      {
        label: "Statistical demand for individual cereals",
        data: cerealsData,
        backgroundColor: "#def",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

var vegBar_gragh = document.getElementById("veg-bar").getContext("2d");
var veg_bar = new Chart(vegBar_gragh, {
  type: "bar",
  data: {
    labels: vegs,
    datasets: [
      {
        label: "Statistical demand for individual cereals",
        data: vegData,
        backgroundColor: "#def",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// line-graphs

/* Cereals */
var cerealLine_gragh = document
  .getElementById("cereal-line-graph")
  .getContext("2d");
var cereal_line = new Chart(cerealLine_gragh, {
  type: "line",
  data: {
    labels: cereals,
    datasets: [
      {
        label: "General Statistical demand for all cereals",
        data: cerealsData,
        backgroundColor: "#def",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

/* Vegetables */
var vegLine_gragh = document.getElementById("veg-line-graph").getContext("2d");
var cereal_line = new Chart(vegLine_gragh, {
  type: "line",
  data: {
    labels: vegs,
    datasets: [
      {
        label: "General Statistical demand for all cereals",
        data: vegData,
        backgroundColor: "#def",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
