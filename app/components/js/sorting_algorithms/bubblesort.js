class BubbleSort {
    static sort(_array, _len) {
        for (let j = _len - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (_array[i] > _array[i + 1]) {
                    let temp = _array[i];
                    _array[i] = _array[i + 1];
                    _array[i + 1] = temp;
                }
            }
        }
        return _array;
    }
}
