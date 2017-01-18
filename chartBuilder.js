// function harvardGraph() {
//   var ctx = document.getElementById("secondChart").getContext('2d');
//   var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ["2014", "2015", "2016"],
//       datasets: [{
//         label: 'Total Applicants',
//         data: [88, 95, 99],
//         backgroundColor: "rgba(153,255,51,1)"
//       }, {
//         label: 'Students accepted',
//         data: [17, 14, 14],
//         backgroundColor: "rgba(255,153,0,1)"
//       }]
//     }
//   });
// };

function ivyGraph(name, t1, t2, t3, a1, a2, a3) {
  var name = name
  var t1 = t1
  var t2 = t2
  var t3 = t3
  var a1 = a1
  var a2 = a2
  var a3 = a3
  document.getElementById("ivyName").innerHTML = name;
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2014", "2015", "2016"],
      datasets: [{
        label: 'Total Applicants',
        data: [t1, t2, t3],
        backgroundColor: "rgba(0,255,51,1)"
      }, {
        label: 'Admitted Students',
        data: [a1, a2, a3],
        backgroundColor: "rgba(255,0,180,1)"
      }]
    }
  });
};

function stanfordGraph() {
  var ctx = document.getElementById("secondChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2014", "2015", "2016"],
      datasets: [{
        label: 'Total Applicants',
        data: [32, 41, 60],
        backgroundColor: "rgba(0,255,51,1)"
      }, {
        label: 'Admitted Students',
        data: [5,2, 1],
        backgroundColor: "rgba(255,0,180,1)"
      }]
    }
  });
};
