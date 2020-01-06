class QuickSort {
    static sort(_array, _left, _right) {
        let index;
        if (_array.length > 1) {
            index = this.partition(_array, _left, _right); //index returned from partition
            if (_left < index - 1) { //more elements on the _left side of the pivot
                this.sort(_array, _left, index - 1);
            }
            if (index < _right) { //more elements on the _right side of the pivot
                this.sort(_array, index, _right);
            }
        }
        return _array;
    }
    
    static partition(_array, _left, _right) {
        let pivot   = _array[Math.floor((_right + _left) / 2)], //middle element
            i       = _left, //_left pointer
            j       = _right; //_right pointer
        while (i <= j) {
            while (_array[i] < pivot) {
                i++;
            }
            while (_array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                [_array[i], _array[j]] = [_array[j], _array[i]]; 
                i++;
                j--;
            }
        }
        return i;
    }
}