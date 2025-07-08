// Object destructure
const x = {
  key1: "value1",
  key2: "value2",
  key3: {
    insideKey1: undefined,
    "inside-key-2": "insideValue 2",
  },
};

// const key1 = x.key1;
// const key2 = x.key2;
// const insideKey1 = x.key3.insideKey1;
// const insideKey2 = x.key3.insideKey2;

const {
  key1,
  key2,
  key3: { insideKey1 = "not null", "inside-key-2": insideKey2 },
  key3,
} = x;

console.log(key1, key2, insideKey1, insideKey2, key3);

// Array destructure
const y = [
  "value1",
  "value2",
  {
    insideKey1: "insideValue 1",
    insideKey2: "insideValue 2",
  },
];

const [y1, y2, y3] = y;

console.log(y1, y2, y3);

// Object spread
const a = {
  key1: "value1",
  key2: "value2",
};
const b = {
  key2: "value22",
  key3: "value3",
};
const c = {
  ...a,
  ...b,
};

// c = {
//   key1: 'value1',
//   key2: 'value2',
//   key2: 'value22',
//   key3: 'value3',
// }
console.log(c);

// Object rest
const aa = {
  key11: "value1",
  key22: "value2",
  key33: "value3",
  key44: "value4",
};
const { key11, key22, ...key34 } = aa;

console.log(key11, key22, key34);

// Array spread

const dd = [1, 2, 3];

const ee = [3, 4, 5, 6];

const ff = [...dd, ...ee];

console.log(ff);

// Array rest
const gg = [1, 2, undefined, 3, 4, 5];

const [hh, , ii = "not null", ...jj] = gg;

console.log(hh, ii, jj);

// const BlogList = ({ blogs, title, ...props}) => {
//   const { key1, key2 } = props;
// }
