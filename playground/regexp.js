// const regexp1 = /oo/;

// console.log(regexp1.exec("moon"));

Array.prototype.forEachOne = function (cb) {
  for (let index = 0; index < this.length; index++) {
    const item = this[index];
    cb(item, index);
  }
};

new Array('saurabh', 'pardeshi').forEachOne((el, id) => {
  console.log(`${id} : ${el}`);
});
