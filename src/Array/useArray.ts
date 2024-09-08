function useArray() {
  // 万能数据生成器
  function createValues<T>(
    creator: (value: T, index: number) => T,
    length: number = 10
  ) {
    return Array.from({ length }, creator);
  }

  // 随机生成多少范围内的数据整数生成器
  function createRandomValues(inside: number, length: number = 10) {
    return createValues((_, index) => (Math.random() * inside) | 0, length);
  }

  // 序列生成器
  function createRange(start: number, end: number, step: number = 1) {
    return createValues(
      (_, index) => start + index * step,
      (end - start) / step + 1
    );
  }

  return {
    createValues,
    createRandomValues,
    createRange,
  };
}

export default useArray;
