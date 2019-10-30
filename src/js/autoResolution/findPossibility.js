export default function (neighbour, interim) {
    if (neighbour.possibility < interim) {
        neighbour.possibility = interim;
    }
}