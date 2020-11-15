/* import axios from "axios"; */
/* console.log("printing data to the console"); */

const api = {
  base_url: "https://rocqjones.pythonanywhere.com/api/products",
};

//Get fruits data from the api
const getFruits = async () => {
  try {
    await fetch(`${api.base_url}=fruits`)
      .then((data) => {
        return data.json();
      })
      .then(displayFruitData);
  } catch (error) {
    alert("Oops! try again later");
  }
};

const displayFruitData = (data) => {
  let fruits = data.map((item) => item.product_name);
  let fruitsData = data.map((item) => item.demand);

  //render data to the page
  let fruitsBarGraph = document.getElementById("fruit-bar").getContext("2d");
  let label = "fruits";
  let fruitsLineGraph = document
    .getElementById("fruit-line-graph")
    .getContext("2d");

  //call methods to draw the graphs
  drawBarGraph(fruitsBarGraph, fruits, fruitsData, label);
  drawLineGraph(fruitsLineGraph, fruits, fruitsData, label);
  /*  console.log(fruits);
  console.log(fruitsData); */
};

// Get Vegetables from the api
const getVegetables = async () => {
  try {
    await fetch(`${api.base_url}=vegetables`)
      .then((data) => {
        return data.json();
      })
      .then(displayVegData);
  } catch (error) {
    alert("Oops! try again later");
  }
};

const displayVegData = (data) => {
  let vegetables = data.map((item) => item.product_name);
  let vegData = data.map((item) => item.demand);

  //render data to the page
  let vegBarGraph = document.getElementById("veg-bar").getContext("2d");
  let label = "vegetables";
  let vegLineGraph = document.getElementById("veg-line-graph").getContext("2d");

  //call methods to draw the graphs
  drawBarGraph(vegBarGraph, vegetables, vegData, label);
  drawLineGraph(vegLineGraph, vegetables, vegData, label);
  /* console.log(vegetables);
  console.log(vegData); */
};

// Get Cereals from the api
const getCereals = async () => {
  try {
    await fetch(`${api.base_url}=cerials`)
      .then((data) => {
        return data.json();
      })
      .then(displayCerealData);
  } catch (error) {
    alert("Oops! try again later");
  }
};

const displayCerealData = (data) => {
  let cereals = data.map((item) => item.product_name);
  let cerealsData = data.map((item) => item.demand);

  //render data to the page
  let cerealBarGraph = document.getElementById("cereal-bar").getContext("2d");
  let label = "cereals";
  let cerealLineGraph = document
    .getElementById("cereal-line-graph")
    .getContext("2d");

  //call methods to draw the graphs
  drawBarGraph(cerealBarGraph, cereals, cerealsData, label);
  drawLineGraph(cerealLineGraph, cereals, cerealsData, label);
  /*  console.log(cereals);
  console.log(cerealsData); */
};

// draw bar-graph
const drawBarGraph = (graphName, dataName, dataSet, dataLabel) => {
  let bar_graph = new Chart(graphName, {
    type: "bar",
    data: {
      labels: dataName,
      datasets: [
        {
          label: `Statistical demand for individual ${dataLabel}`,
          data: dataSet,
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
};

// draw line graph
const drawLineGraph = (graphName, dataName, dataSet, dataLabel) => {
  let line_graph = new Chart(graphName, {
    type: "line",
    data: {
      labels: dataName,
      datasets: [
        {
          label: `Statistical demand for individual ${dataLabel}`,
          data: dataSet,
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
};
getFruits();
getCereals();
getVegetables();
