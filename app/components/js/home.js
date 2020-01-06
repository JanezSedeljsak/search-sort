//const Methods = require(__dirname + '\\app\\components\\js\\util.js');
document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: "#root",
    data: () => {
      return {
        iNum: "",
        pArray: [6, 2, 3, 4]
      };
    },
    methods: {
      doAdd() {
        this.pArray.push(Number(this.iNum));
        this.iNum = "";
      },
      doMin() {
        alert(Methods.gMin(this.pArray));
      },
      doMax() {
        alert(Methods.gMax(this.pArray));
      },
      doSum() {
        alert(Methods.gSum(this.pArray));
      },
      doAvg() {
        alert(Methods.gAvg(this.pArray));
      },
      doIncludes() {
        alert(Methods.gIncludes(this.pArray, Number(this.iNum)));
      },
      doIncludesB() {
        alert(Methods.gIncludesB(this.pArray, Number(this.iNum)));
      },
      doSort() {
        alert(Methods.gSort(this.pArray));
      },
      doSort2() {
        alert(Methods.gSort2(this.pArray));
      },
      doSortB() {
        alert(Methods.gSortB(this.pArray));
      },
      doSortQ() {
        alert(Methods.gSortQ(this.pArray));
      }
    }
  });
});

class Methods {
  static gMin = _array => {
    return Math.max(..._array);
  };

  static gMax = _array => {
    return Math.min(...array);
  };

  static gSum = _array => {
    return _array.reduce((a, b) => a + b, 0);
  };

  static gAvg = _array => {
    return this.gSum(_array) / _array.length;
  };

  static gIncludes = (_array, _num) => {
    return _array.includes(_num);
  };

  static gIncludesB = (_array, _num) => {
    return _array.includes(_num);
  };

  static gSort = _array => {
    return _array.sort();
  };

  static gSort2 = _array => {
    return _array.sort();
  };

  static gSortB = _array => {
    return _array.sort();
  };

  static gSortQ = _array => {
    return _array.sort();
  };
}
