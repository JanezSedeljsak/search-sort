class SelectionSort {
    static sort(_array, _indx) {
        let i, j, min_idx;

        // One by one move boundary of unsorted subarray  
        for (i = 0; i < _indx - 1; i++) {
            // Find the minimum element in unsorted array  
            min_idx = i;
            for (j = i + 1; j < _indx; j++)
                if (_array[j] < _array[min_idx])
                    min_idx = j;

            // Swap the found minimum element with the first element  
            let temp = _array[min_idx];
            _array[min_idx] = _array[i];
            _array[i] = temp;
        }

        return _array;
    }
}