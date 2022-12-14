import './style/style.css';

const file={
    take: 1,
    seed: 3,
    tangle: 4
}
const file1={
    ...file,
    taken: 10,
    taker: 123
}

console.log(file);
console.log(file1);