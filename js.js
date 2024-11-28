let array = [],
    arrayplusX = [],
    arrayplusY = [],
    sumX,sumY,lichilnikY,totalSum,
    minY = [],
    maxY = [],
    avgY = []
document.write("<table>")
document.write("<tr><td colspan = '10'></td><td>min</td><td>avg</td><td>max</td></tr>")
    for(d = 0; d < 10; d++){
        for(j = 0; j < 10; j++){
            arrayplusX.push(Math.floor(Math.random() * 10) + 1)
        }
        array.push(arrayplusX)
        arrayplusX = []
    }
    for(l = 0; l < 10; l++){
        for(k = 0; k < 10; k++){
            array.forEach((array) => {
                arrayplusY.push(array[k]);
              });
            minY.push(Math.min(...arrayplusY))
            sumY = arrayplusY.reduce(
                (accumulator, currentValue) => accumulator + currentValue   
            );
            avgY.push(sumY / arrayplusY.length)
            maxY.push(Math.max(...arrayplusY))
            arrayplusY = []
        }
    }
    console.log(maxY)
    for(h = 0; h < 10; h++){
        document.write("<tr>")
        for(i = 0; i < 10; i++){
            if(array[h][i] == Math.min(...array[h]) || array[h][i] == minY[i]){
                if(array[h][i] == minY[i] && array[h][i] == Math.min(...array[h])){
                    document.write("<td class = 'minY minX'>" + Math.min(...array[h]) + "</td>")
                }else if(array[h][i] == Math.min(...array[h])){
                    document.write("<td class = 'minX'>" + Math.min(...array[h]) + "</td>")
                }else if(array[h][i] == minY[i]){
                    document.write("<td class = 'minY'>" + array[h][i] + "</td>")
                }
            }else if(array[h][i] == Math.max(...array[h]) || array[h][i] == maxY[i]){
                if(array[h][i] == Math.max(...array[h]) && array[h][i] == maxY[i]){
                    document.write("<td class = 'maxY maxX'>" + Math.max(...array[h]) + "</td>")
                }else if(array[h][i] == Math.max(...array[h])){
                    document.write("<td class = 'maxX'>" + Math.max(...array[h]) + "</td>")
                }else if(array[h][i] == maxY[i]){
                    document.write("<td class = 'maxX'>" + array[h][i] + "</td>")
                }
            }else{
                document.write("<td>" + array[h][i] + "</td>")
            }
        }
        document.write("<td>" + Math.min(...array[h]) + "</td>")
        sumX = array[h].reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        document.write("<td>" + sumX / array[h].length + "</td>")
        document.write("<td>" + Math.max(...array[h]) + "</td>")
        document.write("</tr>")
    }
    // for(s = 0; s < 10; )
    // document.write("<td>" + Math.min(...arrayplusX) + "</td>")
    // sumX = arrayplusX.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue   
    //   );
    // document.write("<td>" + sumX / arrayplusX.length + "</td>")
    // document.write("<td>" + Math.max(...arrayplusX) + "</td>")
totalSum = array.reduce((sum, subarray) => 
    sum + subarray.reduce((subSum, num) => subSum + num, 0), 0);
document.write("<tr>")
for(m = 0; m < 10; m++){
    document.write("<td class = 'min'>" + minY[m] + "</td>")
}
document.write("<td rowspan= '3' colspan = '3'>"+ totalSum +"</td>")
document.write("</tr>")
document.write("<tr>")
for(m = 0; m < 10; m++){
    document.write("<td>" + avgY[m] + "</td>")
}
document.write("</tr>")
document.write("<tr>")
for(m = 0; m < 10; m++){
    document.write("<td>" + maxY[m] + "</td>")
}
document.write("</tr>")
document.write("</table>")