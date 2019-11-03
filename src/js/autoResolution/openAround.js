function canOpen(elem) {
    return elem.status === 'close' && elem.value !== 'F';
}

function getNewMap (arr, ws) {
    arr.forEach((elem) => {
        let command = 'open ' + elem.x + ' ' + elem.y;
        ws.send(command);
    });

    ws.send('map');
}

export default function (arr, y, x, bombCounter, ws) {
    if (isFinite(arr[y][x].value) && arr[y][x].value != 0 && arr[y][x].value == bombCounter) {
        let arrSquares = [];

        //top
        if (arr[y-1] !== undefined) {
            //top center
            if (canOpen(arr[y-1][x])) {
                arrSquares.push({
                    y: y-1,
                    x: x
                });
            }

            //top left
            if (arr[y-1][x-1] && canOpen(arr[y-1][x-1])) {
                arrSquares.push({
                    y: y-1,
                    x: x-1
                });
            }

            //top rigth
            if (arr[y-1][x+1] && canOpen(arr[y-1][x+1])) {
                arrSquares.push({
                    y: y-1,
                    x: x+1
                });
            }
        }

        //bottom
        if (arr[y + 1] !== undefined) {
            //bottom center
            if (canOpen(arr[y + 1][x])) {
                arrSquares.push({
                    y: y+1,
                    x: x
                });
            }

            //bottom left
            if (arr[y+1][x-1] && canOpen(arr[y+1][x-1])) {
                arrSquares.push({
                    y: y+1,
                    x: x-1
                });
            }

            //bottom rigth
            if (arr[y+1][x+1] && canOpen(arr[y+1][x+1])) {
                arrSquares.push({
                    y: y+1,
                    x: x+1
                });
            }
        }

        //left
        if (arr[y][x-1] !== undefined
         && canOpen(arr[y][x-1])) {
            arrSquares.push({
                y: y,
                x: x-1
            });
        }

        //rigth
        if (arr[y][x+1] !== undefined
         && canOpen(arr[y][x+1])) {
            arrSquares.push({
                y: y,
                x: x+1
            });
        }

        arrSquares.length && getNewMap(arrSquares, ws);
    }
}