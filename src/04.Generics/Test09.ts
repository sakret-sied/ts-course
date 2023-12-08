function sort<T extends { id: number }>(
  data: T[],
  type: 'asc' | 'desc' = 'asc'
): T[] {
  return data.sort((a: T, b: T) => {
    switch (type) {
      case 'asc':
        return a.id - b.id;
      case 'desc':
        return b.id - a.id;
    }
  });
}

const dataSort = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];
console.log(sort(dataSort));
