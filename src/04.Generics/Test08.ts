function toString<T>(data: T): string | undefined {
  if (typeof data === 'object' && !Array.isArray(data)) {
    return JSON.stringify(data);
  }
  return data?.toString();
}

console.log(toString(null));
console.log(toString(true));
console.log(toString(1));
console.log(toString('123'));
console.log(toString({ name: 'Petya' }));
console.log(toString([1, 2, 3]));
