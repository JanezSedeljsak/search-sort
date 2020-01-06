class Methods {
    
    static fAlert = _msg => {
        swal(_msg + "");
    }

    static gMin = _array => {
      return Math.min(..._array);
    };
  
    static gMax = _array => {
      return Math.max(..._array);
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
  