class Methods {
  static fAlert = _msg => swal(_msg + "");

  static gMin = (_array, _indx) => {
    let min = _array[0];
    for (let i = 1; i < _indx; i++) if (_array[i] < min) min = _array[i];
    return min;
  };

  static gMax = (_array, _indx) => {
    let max = _array[0];
    for (let i = 1; i < _indx; i++) if (_array[i] > max) max = _array[i];
    return max;
  };

  static gSum = (_array, _indx) => {
    let sum = 0;
    for (let i = 0; i < _indx; i++) sum += _array[i];
    return sum;
  };

  static gAvg = (_array, _indx) =>
    Math.round((this.gSum(_array, _indx) / _indx) * 100) / 100;

  static isBinary = (_array, _indx) => {
    for (let i = 1; i < _indx; i++) if (_array[i] < _array[i - 1]) return false;
    return true;
  };

  static gIncludes = (_array, _indx, _num) => {
    for (let i = 0; i < _indx; i++) if (_array[i] == _num) return i;
    return false;
  };

  static recursiveBinarySearch(_array, _start, _end, _search) {
    if (_end > _start) {
      let mid = Math.floor((_start + _end) / 2);
      if (_array[mid] == _search) return mid;
      else if (_array[mid] > _search)
        return this.recursiveBinarySearch(_array, _start, mid - 1, _search);
      else return this.recursiveBinarySearch(_array, mid + 1, _end, _search);
    } else return _array[_start] == _search ? _start : -1;
  }

  static gIncludesB = (_array, _indx, _num) => {
    if (this.isBinary(_array, _indx)) {
      return this.recursiveBinarySearch(_array, 0, _indx - 1, _num);
    } else return "List is not binary!";
  };

  static gSort = (_array, _indx) => {
    return _array.sort();
  };

  static gSort2 = (_array, _indx) => {
    return _array.sort();
  };

  static gSortB = (_array, _indx) => {
    return _array.sort();
  };

  static gSortQ = (_array, _indx) => {

  };
}
