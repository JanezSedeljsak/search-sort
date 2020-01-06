class InsertionSort {
    static sort(_array, _index) {
        let i, key, j;
        for (i = 1; i < _index; i++) {
            key = _array[i];
            j = i - 1;

            while (j >= 0 && _array[j] > key) {
                _array[j + 1] = _array[j];
                j = j - 1;
            }
            _array[j + 1] = key;
        }
        return _array;
    }
}