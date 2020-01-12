document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: "#root",
        data: () => ({
            iNum: "",
            index: 0,
            pArray: new Array(100).fill(null)
        }),
        filters: {
            // embeded js methods only for display function
            stringify: function (value) {
                let index = value.indexOf(null);
                let dArray = value.slice(0, index).join(", ");
                return dArray ? dArray : "[Currently an empty Array]";
            }
        },
        methods: {
            doAdd() {
                this.iNum.split(",").some(num => {
                    if (Number.isFinite(Number(num))) {
                        this.pArray[this.index] = Math.round(Number(num) * 100) / 100;
                        this.index++;
                    } else {
                        Methods.fAlert("Input is not a valid nubmer!");
                        return true;
                    }
                });
                this.iNum = "";
            },
            emptyArray() {
                this.index = 0;
                this.pArray = new Array(100).fill(null);
            },
            async shuffleArray() {
                let response = await Methods.gShuffle(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$set(this.pArray, response);
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
                let t0 = performance.now();
                Methods.fAlert(
                    Methods.gIncludes(this.pArray, Number(this.index), Number(this.iNum))
                );
                let t1 = performance.now();
                console.log("Call to default Search took " + (t1 - t0) + " milliseconds.");
            },
            doIncludesB() {
                let t0 = performance.now();
                Methods.fAlert(
                    Methods.gIncludesB(this.pArray, Number(this.index), Number(this.iNum))
                );
                let t1 = performance.now();
                console.log("Call to Binary Search took " + (t1 - t0) + " milliseconds.");
            },

            // selective sort
            async doSortS() {
                let t0 = performance.now();
                let response = await Methods.gSortS(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
                let t1 = performance.now();
                console.log("Call to Selective Sort took " + (t1 - t0) + " milliseconds.");
            },

            // bubble sort
            async doSortB() {
                let t0 = performance.now();
                let response = await Methods.gSortB(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
                let t1 = performance.now();
                console.log("Call to Bubble Sort took " + (t1 - t0) + " milliseconds.");
            },

            // quick sort
            async doSortQ() {
                let t0 = performance.now();
                let response = await Methods.gSortQ(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
                let t1 = performance.now();
                console.log("Call to Quick Sort took " + (t1 - t0) + " milliseconds.");
            },

            // insertion sort
            async doSortI() {
                let t0 = performance.now();
                let response = await Methods.gSortI(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
                let t1 = performance.now();
                console.log("Call to Insertion Sort took " + (t1 - t0) + " milliseconds.");
            }
        }
    });
});
