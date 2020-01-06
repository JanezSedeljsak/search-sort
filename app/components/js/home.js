document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: "#root",
    data: () => {
      return {
        iNum: "",
        pArray: []
      };
    },
    methods: {
      doAdd() {
        if(Number.isFinite(Number(this.iNum)) && this.iNum != "") {
            this.pArray.push(Number(this.iNum));
            this.iNum = "";
        } else {
            Methods.fAlert("Input doesn't contain a nubmer!");
        }
      },
      doMin() {
        Methods.fAlert(Methods.gMin(this.pArray));
      },
      doMax() {
        Methods.fAlert(Methods.gMax(this.pArray));
      },
      doSum() {
        Methods.fAlert(Methods.gSum(this.pArray));
      },
      doAvg() {
        Methods.fAlert(Methods.gAvg(this.pArray));
      },
      doIncludes() {
        Methods.fAlert(Methods.gIncludes(this.pArray, Number(this.iNum)));
      },
      doIncludesB() {
        Methods.fAlert(Methods.gIncludesB(this.pArray, Number(this.iNum)));
      },
      doSort() {
        Methods.fAlert(Methods.gSort(this.pArray));
      },
      doSort2() {
        Methods.fAlert(Methods.gSort2(this.pArray));
      },
      doSortB() {
        Methods.fAlert(Methods.gSortB(this.pArray));
      },
      doSortQ() {
        Methods.fAlert(Methods.gSortQ(this.pArray));
      }
    }
  });
});