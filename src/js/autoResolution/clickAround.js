import clickSquare from "./clickSquare";

function returnBoolean(elem) {
    return elem.status === 'close' && elem.value !== 'F';
}

export default function (arr, y, x, bombCounter) {
    if (isFinite(arr[y][x].value) && arr[y][x].value != 0 && arr[y][x].value == bombCounter) {
        //top
        if (arr[y-1] !== undefined) {
            //top center
            if (returnBoolean(arr[y-1][x])) {

                clickSquare(x, y-1);
                return;
            }

            //top left
            if (arr[y-1][x-1] && returnBoolean(arr[y-1][x-1])) {

                clickSquare(x-1, y-1);
                return;
            }

            //top rigth
            if (arr[y-1][x+1] && returnBoolean(arr[y-1][x+1])) {

                clickSquare(x+1, y-1);
                return;
            }
        }

        //bottom
        if (arr[y + 1] !== undefined) {
            //bottom center
            if (returnBoolean(arr[y + 1][x])) {

                clickSquare(x, y + 1);
                return;
            }

            //bottom left
            if (arr[y+1][x-1] && returnBoolean(arr[y+1][x-1])) {

                clickSquare(x-1, y+1);
                return;
            }

            //bottom rigth
            if (arr[y+1][x+1] && returnBoolean(arr[y+1][x+1])) {
                clickSquare(x+1, y+1);
                return;
            }
        }

        //left
        if (arr[y][x-1] !== undefined
         && returnBoolean(arr[y][x-1])) {

            clickSquare(x-1, y);
            return;
        }

        //rigth
        if (arr[y][x+1] !== undefined
         && returnBoolean(arr[y][x+1])) {

            clickSquare(x+1, y);
            return;
        }
    }
}