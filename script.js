/*
    Chart1 to show sum of sales in various countries
*/
let chart1Data = [
    {
      "Country": "Argentina",
      "SumofSales": 85489
    },
    {
      "Country": "Australia",
      "SumofSales": 854851
    },
    {
      "Country": "Austria",
      "SumofSales": 611130
    },
    {
      "Country": "Belgium",
      "SumofSales": 1072679
    },
    {
      "Country": "Bermuda",
      "SumofSales": 99667
    },
    {
      "Country": "Brazil",
      "SumofSales": 1517841
    },
    {
      "Country": "Canada",
      "SumofSales": 999279
    },
    {
      "Country": "Cayman Islands",
      "SumofSales": 147565
    },
    {
      "Country": "China",
      "SumofSales": 23413203
    },
    {
      "Country": "Colombia",
      "SumofSales": 38921
    },
    {
      "Country": "Czech Republic",
      "SumofSales": 33460
    },
    {
      "Country": "Denmark",
      "SumofSales": 863142
    },
    {
      "Country": "Finland",
      "SumofSales": 1149026
    },
    {
      "Country": "France",
      "SumofSales": 11726498
    },
    {
      "Country": "Germany",
      "SumofSales": 18413130
    },
    {
      "Country": "Greece",
      "SumofSales": 17878
    },
    {
      "Country": "Hong Kong",
      "SumofSales": 270611
    },
    {
      "Country": "Hungary",
      "SumofSales": 14561
    },
    {
      "Country": "Iceland",
      "SumofSales": 9904
    },
    {
      "Country": "India",
      "SumofSales": 2339311
    },
    {
      "Country": "Iraq",
      "SumofSales": 500000
    },
    {
      "Country": "Ireland",
      "SumofSales": 1592270
    },
    {
      "Country": "Israel",
      "SumofSales": 436401
    },
    {
      "Country": "Italy",
      "SumofSales": 3727633
    },
    {
      "Country": "Japan",
      "SumofSales": 31601001
    },
    {
      "Country": "Liechtenstein",
      "SumofSales": 42036
    },
    {
      "Country": "Luxembourg",
      "SumofSales": 816736
    },
    {
      "Country": "Malaysia",
      "SumofSales": 297552
    },
    {
      "Country": "Malta",
      "SumofSales": 5183
    },
    {
      "Country": "Mexico",
      "SumofSales": 123692
    },
    {
      "Country": "Netherlands",
      "SumofSales": 4278455
    },
    {
      "Country": "New Zealand",
      "SumofSales": 125569
    },
    {
      "Country": "Norway",
      "SumofSales": 1224368
    },
    {
      "Country": "Poland",
      "SumofSales": 2201
    },
    {
      "Country": "Portugal",
      "SumofSales": 193891
    },
    {
      "Country": "Russia",
      "SumofSales": 1331979
    },
    {
      "Country": "Saudi Arabia",
      "SumofSales": 1177240
    },
    {
      "Country": "Singapore",
      "SumofSales": 146377
    },
    {
      "Country": "Slovenia",
      "SumofSales": 14833
    },
    {
      "Country": "South Africa",
      "SumofSales": 143317
    },
    {
      "Country": "South Korea",
      "SumofSales": 9108190
    },
    {
      "Country": "Spain",
      "SumofSales": 2708606
    },
    {
      "Country": "Sweden",
      "SumofSales": 2116491
    },
    {
      "Country": "Switzerland",
      "SumofSales": 3966512
    },
    {
      "Country": "Taiwan",
      "SumofSales": 5125375
    },
    {
      "Country": "Thailand",
      "SumofSales": 8535
    },
    {
      "Country": "Turkey",
      "SumofSales": 429871
    },
    {
      "Country": "UK",
      "SumofSales": 13637030
    },
    {
      "Country": "Ukraine",
      "SumofSales": 2461
    },
    {
      "Country": "United Arab Emirates",
      "SumofSales": 59761
    },
    {
      "Country": "USA",
      "SumofSales": 46973283
    },
    {
      "Country": "Venezuela",
      "SumofSales": 504837
    }
]
let chart1DataArray = []
chart1Data.forEach(ele => {
    let values = Object.values(ele)
    chart1DataArray.push(values)
});
google.charts.load('current', {
    'packages':['geochart'],
  });
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
var data = google.visualization.arrayToDataTable([
    ['Country', 'Sum of Sales (€million)'],
    ...chart1DataArray
]);

var options = {};

var chart = new google.visualization.GeoChart(document.getElementById('chart1'));

chart.draw(data, options);
}



/*
    Chart2 to show line chart 
*/
var chartTwoElement = document.getElementById("chart2");
var chartTwoLabelsArray = [0, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
var chartTwoDataArray = [0, 13894163, 15710758, 16854413, 16723019, 17972595, 17686790, 17910320, 18448033, 20351620, 21018395, 18952091]
var config = {
    type : 'line',
    data : { 
        labels : chartTwoLabelsArray, 
        datasets : [{
            label : "Sum of Sales (€million)",
            data : chartTwoDataArray
        }]
    },
    options: {
        legend: {
            display : false,
            position: 'bottom'
        }
    }
}
var chart2 = new Chart(chartTwoElement, config);



/*
    Chart3 to show 3D map 
*/
let chart3Data = [
    {
      "IndustrialSector": "Aerospace & Defence",
      "SumOfProfits": 387409.19
    },
    {
      "IndustrialSector": "Alternative Energy",
      "SumOfProfits": 7448.61
    },
    {
      "IndustrialSector": "Automobiles & Parts",
      "SumOfProfits": 1272000.78
    },
    {
      "IndustrialSector": "Banks",
      "SumOfProfits": 734744.65
    },
    {
      "IndustrialSector": "Beverages",
      "SumOfProfits": 270453.22
    },
    {
      "IndustrialSector": "Biotechnology",
      "SumOfProfits": -192361.37
    },
    {
      "IndustrialSector": "Chemicals",
      "SumOfProfits": 831481.68
    },
    {
      "IndustrialSector": "Commercial Vehicles & Trucks",
      "SumOfProfits": 176.12
    },
    {
      "IndustrialSector": "Computer Hardware",
      "SumOfProfits": 278.72
    },
    {
      "IndustrialSector": "Computer Services",
      "SumOfProfits": 186.04
    },
    {
      "IndustrialSector": "Construction & Materials",
      "SumOfProfits": 547897.81
    },
    {
      "IndustrialSector": "Electrical equipment",
      "SumOfProfits": -8536.47
    },
    {
      "IndustrialSector": "Electricity",
      "SumOfProfits": 375453.87
    },
    {
      "IndustrialSector": "Electronic & Electrical equipment",
      "SumOfProfits": 87839.7
    },
    {
      "IndustrialSector": "Electronic Equipment",
      "SumOfProfits": 881345
    },
    {
      "IndustrialSector": "Equity Investment Instruments",
      "SumOfProfits": 501.16
    },
    {
      "IndustrialSector": "Financial Services",
      "SumOfProfits": 121156.6
    },
    {
      "IndustrialSector": "Fixed Line Telecommunications",
      "SumOfProfits": 634079.03
    },
    {
      "IndustrialSector": "Food & Drug Retailers",
      "SumOfProfits": 34696.08
    },
    {
      "IndustrialSector": "Food Producers",
      "SumOfProfits": 520213.44
    },
    {
      "IndustrialSector": "Forestry & Paper",
      "SumOfProfits": 44341.52
    },
    {
      "IndustrialSector": "Gas & Water",
      "SumOfProfits": 148021.42
    },
    {
      "IndustrialSector": "General Industrials",
      "SumOfProfits": 492844.22
    },
    {
      "IndustrialSector": "General Retailers",
      "SumOfProfits": 96992.93
    },
    {
      "IndustrialSector": "Health care equipment & services",
      "SumOfProfits": 349139.78
    },
    {
      "IndustrialSector": "Household Goods & Home Construction",
      "SumOfProfits": 312967.42
    },
    {
      "IndustrialSector": "Industrial Machinery",
      "SumOfProfits": 474.68
    },
    {
      "IndustrialSector": "Industrial Metals & Mining",
      "SumOfProfits": 204347.11
    },
    {
      "IndustrialSector": "Industrial Transportation",
      "SumOfProfits": 47529.18
    },
    {
      "IndustrialSector": "Internet",
      "SumOfProfits": 330.98
    },
    {
      "IndustrialSector": "Leisure goods",
      "SumOfProfits": 169787.6
    },
    {
      "IndustrialSector": "Life Insurance",
      "SumOfProfits": -101948.58
    },
    {
      "IndustrialSector": "Media",
      "SumOfProfits": 69243.33
    },
    {
      "IndustrialSector": "Mining",
      "SumOfProfits": 348291.4
    },
    {
      "IndustrialSector": "Mobile Telecommunications",
      "SumOfProfits": 74370.11
    },
    {
      "IndustrialSector": "Nonequity Investment Instruments",
      "SumOfProfits": 381.3
    },
    {
      "IndustrialSector": "Nonlife Insurance",
      "SumOfProfits": 854.51
    },
    {
      "IndustrialSector": "Oil & Gas Producers",
      "SumOfProfits": 24612.27
    },
    {
      "IndustrialSector": "Oil Equipment, Services & Distribution",
      "SumOfProfits": 189720.33
    },
    {
      "IndustrialSector": "Other Financials",
      "SumOfProfits": 5651.47
    },
    {
      "IndustrialSector": "Personal & Household Goods",
      "SumOfProfits": 708
    },
    {
      "IndustrialSector": "Personal Goods",
      "SumOfProfits": 311169.28
    },
    {
      "IndustrialSector": "Pharmaceuticals",
      "SumOfProfits": 1407476.6
    },
    {
      "IndustrialSector": "Real Estate Investment & Services",
      "SumOfProfits": 55731.2
    },
    {
      "IndustrialSector": "Semiconductors",
      "SumOfProfits": 1333.28
    },
    {
      "IndustrialSector": "Software & Computer Services",
      "SumOfProfits": 1381336.74
    },
    {
      "IndustrialSector": "Support Services",
      "SumOfProfits": 125623.88
    },
    {
      "IndustrialSector": "Technology Hardware & Equipment",
      "SumOfProfits": 1704326.66
    },
    {
      "IndustrialSector": "Telecommunications",
      "SumOfProfits": 73.86
    },
    {
      "IndustrialSector": "Telecommunications equipment",
      "SumOfProfits": -78.41
    },
    {
      "IndustrialSector": "Tobacco",
      "SumOfProfits": 296930.9
    },
    {
      "IndustrialSector": "Toys",
      "SumOfProfits": 105.49
    },
    {
      "IndustrialSector": "Travel & Leisure",
      "SumOfProfits": 162434.04
    }
]
let industrialSectorArray = chart3Data.map(ele => ele.IndustrialSector)
let SumOfProfitsArray = chart3Data.map(ele => ele.SumOfProfits)
const chart3 = new Highcharts.Chart({
    chart: {
      renderTo: 'container-for-chart-three',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 11,
        beta: 24,
        depth: 100,
        viewDistance: 25
      }
    },
    xAxis: {
      categories: industrialSectorArray
    },
    yAxis: {
      title: {
        enabled: false
      }
    },
    tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Sum of Profits: {point.y} (€million)'
    },
    title: {
      text: 'Industrial sector and sum of profits in (€million)',
      align: 'left'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      data: SumOfProfitsArray,
      colorByPoint: true
    }]
});



/*
    Chart4 to show table
*/
let tableData = [
    {
      "index": 1,  
      "Year": 2010,
      "SumofSales": 13894163,
      "SumCapex": 764435.7498,
      "SumofProfits": -6576872.37,
      "SumofMarketcap": 14001791.78
    },
    {
      "index": 2,  
      "Year": 2011,
      "SumofSales": 15710758,
      "SumCapex": 892720.585,
      "SumofProfits": 1702982.03,
      "SumofMarketcap": 0
    },
    {
      "index": 3,  
      "Year": 2012,
      "SumofSales": 16854413,
      "SumCapex": 1109092.789,
      "SumofProfits": 1549539.65,
      "SumofMarketcap": 0
    },
    {
      "index": 4,  
      "Year": 2013,
      "SumofSales": 16723019,
      "SumCapex": 1087703.811,
      "SumofProfits": 1555429.22,
      "SumofMarketcap": 0
    },
    {
      "index": 5,  
      "Year": 2014,
      "SumofSales": 17972595,
      "SumCapex": 1131195.571,
      "SumofProfits": 1735387.21,
      "SumofMarketcap": 0
    },
    {
      "index": 6,
      "Year": 2015,
      "SumofSales": 17686790,
      "SumCapex": 1127502.322,
      "SumofProfits": 1518669.57,
      "SumofMarketcap": 0
    },
    {
      "index": 7,
      "Year": 2016,
      "SumofSales": 17910320,
      "SumCapex": 1167878.202,
      "SumofProfits": 1671173.01,
      "SumofMarketcap": 23081916.37
    },
    {
      "index": 8,
      "Year": 2017,
      "SumofSales": 18448033,
      "SumCapex": 1151303.479,
      "SumofProfits": 1909324.19,
      "SumofMarketcap": 24538463.37
    },
    {
      "index": 9,
      "Year": 2018,
      "SumofSales": 20351620,
      "SumCapex": 1317342.829,
      "SumofProfits": 2275661.44,
      "SumofMarketcap": 27163043.76
    },
    {
      "index": 10,
      "Year": 2019,
      "SumofSales": 21018395,
      "SumCapex": 1404746.798,
      "SumofProfits": 2077564.89,
      "SumofMarketcap": 27269822.28
    },
    {
      "index": 11,
      "Year": 2020,
      "SumofSales": 18952091,
      "SumCapex": 1293241.058,
      "SumofProfits": 1553985.01,
      "SumofMarketcap": 33855136.24
    }
]
var tbody = document.getElementById("mytablebody");

tableData.map((item, index) => {
    // Create the first row and cells
    var row = document.createElement("tr");

    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");

    // Set the text alignment to center on the cells
    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";
    cell3.style.textAlign = "center";
    cell4.style.textAlign = "center";
    cell5.style.textAlign = "center";
    cell6.style.textAlign = "center";
    
    // Add some content to the cells
    cell1.textContent = index + 1;
    cell2.textContent = item.Year;
    cell3.textContent = item.SumofSales;
    cell4.textContent = item.SumCapex;
    cell5.textContent = item.SumofProfits;
    cell6.textContent = item.SumofMarketcap;
    
    // Add the cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    
    tbody.appendChild(row);
})

var cells = document.querySelectorAll("#myTable td");
const tableDataColors = ["#78ADD2", "#0072AA", "#A4D0A0", "#21AA47"];
for (var i = 0; i < cells.length; i++) {
    if(i % 6 === 0)
        continue;
    const randomIndex = Math.floor(Math.random() * tableDataColors.length);
    const randomColor = tableDataColors[randomIndex];
    cells[i].style.backgroundColor = randomColor;
}

