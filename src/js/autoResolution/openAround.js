<<<<<<< HEAD
function canOpen(elem) {
=======
function canClick(elem) {
>>>>>>> d2a5890... refaktoring
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
<<<<<<< HEAD
            if (canOpen(arr[y-1][x])) {
=======
            if (canClick(arr[y-1][x])) {
>>>>>>> d2a5890... refaktoring
                arrSquares.push({
                    y: y-1,
                    x: x
                });
            }

            //top left
<<<<<<< HEAD
            if (arr[y-1][x-1] && canOpen(arr[y-1][x-1])) {
=======
            if (arr[y-1][x-1] && canClick(arr[y-1][x-1])) {
>>>>>>> d2a5890... refaktoring
                arrSquares.push({
                    y: y-1,
                    x: x-1
                });
            }

            //top rigth
<<<<<<< HEAD
            if (arr[y-1][x+1] && canOpen(arr[y-1][x+1])) {
=======
            if (arr[y-1][x+1] && canClick(arr[y-1][x+1])) {
>>>>>>> d2a5890... refaktoring
                arrSquares.push({
                    y: y-1,
                    x: x+1
                });
            }
        }

        //bottom
        if (arr[y + 1] !== undefined) {
            //bottom center
<<<<<<< HEAD
            if (canOpen(arr[y + 1][x])) {
=======
            if (canClick(arr[y + 1][x])) {
>>>>>>> d2a5890... refaktoring
                arrSquares.push({
                    y: y+1,
                    x: x
                });
            }

            //bottom left
<<<<<<< HEAD
            if (arr[y+1][x-1] && canOpen(arr[y+1][x-1])) {
=======
            if (arr[y+1][x-1] && canClick(arr[y+1][x-1])) {
>>>>>>> d2a5890... refaktoring
                arrSquares.push({
                    y: y+1,
                    x: x-1
                });
            }

            //bottom rigth
<<<<<<< HEAD
            if (arr[y+1][x+1] && canOpen(arr[y+1][x+1])) {
=======
            if (arr[y+1][x+1] && canClick(arr[y+1][x+1])) {
>>>>>>> d2a5890... refaktoring
                arrSquares.push({
                    y: y+1,
                    x: x+1
                });
            }
        }

        //left
        if (arr[y][x-1] !== undefined
<<<<<<< HEAD
         && canOpen(arr[y][x-1])) {
=======
         && canClick(arr[y][x-1])) {
>>>>>>> d2a5890... refaktoring
            arrSquares.push({
                y: y,
                x: x-1
            });
        }

        //rigth
        if (arr[y][x+1] !== undefined
<<<<<<< HEAD
         && canOpen(arr[y][x+1])) {
=======
         && canClick(arr[y][x+1])) {
>>>>>>> d2a5890... refaktoring
            arrSquares.push({
                y: y,
                x: x+1
            });
        }

        arrSquares.length && getNewMap(arrSquares, ws);
    }
}