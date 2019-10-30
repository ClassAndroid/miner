import findDivisor from "./findDivisor";
import findPossibility from "./findPossibility";
import markBomb from "./markBomb";
import clickAround from "./clickAround";

export default function (arr) {
    return arr.map((row, y) =>
        row.map((elem, x) => {
            let divisor = findDivisor(arr, y, x);
            let interim = isFinite(arr[y][x].value) ? arr[y][x].value/divisor * 100 : null;
            let bombCounter = 0;

            //top
            if (arr[y-1] !== undefined) {
                //top center
                if (!isFinite(arr[y - 1][x].value)) {
                    if (arr[y - 1][x].value === 'F') bombCounter++;

                    findPossibility (arr[y - 1][x], interim);
                    markBomb(interim, arr[y - 1][x]);
                }

                //top left
                if (arr[y-1][x-1] !== undefined) {
                    if (!isFinite(arr[y-1][x-1].value)) {
                        if (arr[y-1][x-1].value === 'F') bombCounter++;

                        findPossibility(arr[y-1][x-1], interim);
                        markBomb(interim, arr[y-1][x-1]);
                    }
                }

                //top rigth
                if (arr[y-1][x+1] !== undefined) {
                    if (!isFinite(arr[y-1][x+1].value)) {
                        if (arr[y-1][x+1].value === 'F') bombCounter++;

                        findPossibility(arr[y - 1][x + 1], interim);
                        markBomb(interim, arr[y - 1][x + 1]);
                    }
                }
            }

            //bottom
            if (arr[y + 1] !== undefined) {
                //bottom center
                if (!isFinite(arr[y + 1][x].value)) {
                    if (arr[y + 1][x].value === 'F') bombCounter++;
                    findPossibility(arr[y + 1][x], interim);
                    markBomb(interim, arr[y + 1][x]);
                }

                //bottom left
                if (arr[y+1][x-1] !== undefined) {
                    if (!isFinite(arr[y+1][x-1].value)) {
                        if (arr[y+1][x-1].value === 'F') bombCounter++;
                        findPossibility(arr[y + 1][x - 1], interim);
                        markBomb(interim, arr[y + 1][x - 1]);
                    }
                }

                //bottom rigth
                if (arr[y+1][x+1] !== undefined) {
                    if (!isFinite(arr[y+1][x+1].value)) {
                        if (arr[y+1][x+1].value === 'F') bombCounter++;
                        findPossibility(arr[y+1][x+1], interim);
                        markBomb(interim, arr[y + 1][x+1]);
                    }
                }
            }

            //left
            if (arr[y][x-1] !== undefined) {
                if (!isFinite(arr[y][x-1].value)) {
                    if (arr[y][x-1].value === 'F') bombCounter++;
                    findPossibility(arr[y][x - 1], interim);
                    markBomb(interim, arr[y][x - 1]);
                }
            }

            //rigth
            if (arr[y][x+1] !== undefined) {
                if (!isFinite(arr[y][x+1].value)) {
                    if (arr[y][x+1].value === 'F') bombCounter++;
                    findPossibility(arr[y][x + 1], interim);
                    markBomb(interim, arr[y][x + 1]);
                }
            }

            clickAround (arr, y, x, bombCounter);

            return elem;
        })
    );
}