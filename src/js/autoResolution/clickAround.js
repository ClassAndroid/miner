import clickSquare from "./clickSquare";

export default function (arr, y, x, bombCounter) {
    if (isFinite(arr[y][x].value) && arr[y][x].value != 0 && arr[y][x].value == bombCounter) {
        //top
        if (arr[y-1] !== undefined) {
            //top center
            if (arr[y-1][x].status === 'close'
             && arr[y-1][x].value !== 'F') {

                clickSquare(x, y-1);
            }

            //top left
            if (arr[y-1][x-1]
             && arr[y-1][x-1].status === 'close'
             && arr[y-1][x-1].value !== 'F') {

                clickSquare(x-1, y-1);
            }

            //top rigth
            if (arr[y-1][x+1]
             && arr[y-1][x+1].status === 'close'
             && arr[y-1][x+1].value !== 'F') {

                clickSquare(x+1, y-1);
            }
        }

        //bottom
        if (arr[y + 1] !== undefined) {
            //bottom center
            if (arr[y + 1][x].status === 'close'
             && arr[y + 1][x].value !== 'F') {

                clickSquare(x, y + 1);
            }

            //bottom left
            if (arr[y+1][x-1] && arr[y+1][x-1].status === 'close'
             && arr[y+1][x-1].value !== 'F') {

                clickSquare(x-1, y+1);
            }

            //bottom rigth
            if (arr[y+1][x+1] && arr[y+1][x+1].status === 'close'
             && arr[y+1][x+1].value !== 'F') {
                clickSquare(x+1, y+1);
            }
        }

        //left
        if (arr[y][x-1] !== undefined
         && arr[y][x-1].status === 'close'
         && arr[y][x-1].value !== 'F') {

            clickSquare(x-1, y);
        }

        //rigth
        if (arr[y][x+1] !== undefined
         && arr[y][x+1].status === 'close'
         && arr[y][x+1].value !== 'F') {

            clickSquare(x+1, y);
        }
    }
}