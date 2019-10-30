export default function (arr, y, x) {
    let divisor = 8;

    if (arr[y-1] !== undefined) {
        if (isFinite(arr[y - 1][x].value)) divisor--;
        if (arr[y-1][x-1] && isFinite(arr[y-1][x-1].value)) divisor--;
        if (arr[y-1][x+1] && isFinite(arr[y-1][x+1].value)) divisor--;
    }
    if (arr[y + 1] !== undefined) {
        if (isFinite(arr[y + 1][x].value)) divisor--;
        if (arr[y+1][x-1] && isFinite(arr[y+1][x-1].value)) divisor--;
        if (arr[y+1][x+1] && isFinite(arr[y+1][x+1].value)) divisor--;
    }
    if (arr[y][x-1] !== undefined) {
        if (isFinite(arr[y][x-1].value)) divisor--;
    }
    if (arr[y][x+1] !== undefined) {
        if (isFinite(arr[y][x+1].value)) divisor--;
    }

    return divisor;
}