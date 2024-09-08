function useArray() {
  // 万能数据生成器
  function createValues<T>(
    creator: (value: T, index: number) => T,
    length: number = 10
  ) {
    return Array.from({ length }, creator);
  }

  // 随机生成多少范围内的数据整数生成器
  function createRandomValues(inside: number, length: number = 10): number[] {
    return createValues((_, index) => (Math.random() * inside) | 0, length);
  }

  // 序列生成器
  function createRange(start: number, end: number, step: number = 1) {
    return createValues(
      (_, index) => start + index * step,
      (end - start) / step + 1
    );
  }

  // 数据去重
  function uniqueArray<T>(arr: T[], key?: string | number) {
    if (key == null) {
      return Array.from(new Set(arr));
    }

    const keyValues = new Set();
    let val: T;
    return arr.filter((obj) => {
      val = obj[key];
      if (keyValues.has(val)) {
        return false;
      }
      keyValues.add(val);
      return true;
    });
  }

  // 求交集
  function intersection<T>(arr1: T[], arr2: T[], key?: string | number): T[] {
    const map = new Map();

    // 基本数据类型
    if (key == null) {
      arr1.forEach((item) => map.set(item, null));
      return arr2.filter((item) => map.has(item));
    }

    // 引用数据类型
    arr1.forEach((item) => map.set(item[key], null));
    return arr2.filter((item) => map.has(item[key]));
  }

  // 求差集
  function difference<T>(arr1: T[], arr2: T[], key?: string | number): T[] {
    const map = new Map();
    if (key == null) {
      arr1.forEach((item) => map.set(item, null));
      return arr2.filter((item) => !map.has(item));
    }

    arr1.forEach((item) => map.set(item[key], null));
    return arr2.filter((item) => !map.has(item[key]));
  }

  // 从数组中删除虚假值
  function removeFalsyValues(arr: any[]) {
    return arr.filter(Boolean);
  }

  // 最大值
  function max(arr: number[]) {
    return Math.max.apply(Math, arr);
  }

  // 最小值
  function min(arr: number[]) {
    return Math.min.apply(Math, arr);
  }

  return {
    createValues,
    createRandomValues,
    createRange,
    uniqueArray,
    intersection,
    difference,
    removeFalsyValues,
    max,
    min,
  };
}

export default useArray;
