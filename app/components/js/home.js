document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: "#root",
        data: () => {
            return {
                iNum: "",
                index: 0,
                pArray: new Array(100).fill(null)
            };
        },
        filters: {
            // embeded js methods only for display function
            stringify: function (value) {
                let index = value.indexOf(null);
                let dArray = value.slice(0, index).join(", ");
                return dArray ? dArray : "Empty Array";
            }
        },
        methods: {
            doAdd() {
                if (Number.isFinite(Number(this.iNum))) {
                    this.pArray[this.index] = Math.round(Number(this.iNum) * 100) / 100;
                    this.index++;
                    this.iNum = "";
                } else {
                    Methods.fAlert("Input is not a valid nubmer!");
                }
            },
            emptyArray() {
                this.index = 0;
                this.pArray = new Array(100).fill(null);
            },
            doMin() {
                Methods.fAlert(Methods.gMin(this.pArray, Number(this.index)));
            },
            doMax() {
                Methods.fAlert(Methods.gMax(this.pArray, Number(this.index)));
            },
            doSum() {
                Methods.fAlert(Methods.gSum(this.pArray, Number(this.index)));
            },
            doAvg() {
                Methods.fAlert(Methods.gAvg(this.pArray, Number(this.index)));
            },
            doIncludes() {
                Methods.fAlert(Methods.gIncludes(this.pArray, Number(this.index), Number(this.iNum)));
            },
            doIncludesB() {
                Methods.fAlert(Methods.gIncludesB(this.pArray, Number(this.index), Number(this.iNum)));
            },
            // selective sort
            async doSortS() {
                let response = await Methods.gSortS(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
            },
            doSort2() {
                alert("inactive function");
                //Methods.fAlert(Methods.gSort(this.pArray, Number(this.index)));
            },
            // bubble sort
            async doSortB() {
                let response = await Methods.gSortB(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
            },
            // quick sort
            async doSortQ() {
                let response = await Methods.gSortQ(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
            }
        }
    });
});
