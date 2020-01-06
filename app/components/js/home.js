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
                return dArray ? dArray : "[Currently an empty Array]";
            }
        },
        methods: {
            doAdd() {
                this.iNum.split(",").forEach(num => {
                    if (Number.isFinite(Number(num))) {
                        this.pArray[this.index] = Math.round(Number(num) * 100) / 100;
                        this.index++;
                    } else {
                        Methods.fAlert("Input is not a valid nubmer!");
                        this.iNum = "";
                        return;
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
                Methods.fAlert(
                    Methods.gIncludes(this.pArray, Number(this.index), Number(this.iNum))
                );
            },
            doIncludesB() {
                Methods.fAlert(
                    Methods.gIncludesB(this.pArray, Number(this.index), Number(this.iNum))
                );
            },

            // selective sort
            async doSortS() {
                let response = await Methods.gSortS(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
            },

            // bubble sort
            async doSortB() {
                let response = await Methods.gSortB(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
            },

            // quick sort
            async doSortQ() {
                let response = await Methods.gSortQ(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
            },

            // insertion sort
            async doSortI() {
                let response = await Methods.gSortI(this.pArray, Number(this.index));
                Methods.fAlert(response.slice(0, Number(this.index)));
                this.$nextTick(function () {
                    this.$set(this.pArray, response);
                });
            }
        }
    });
});
