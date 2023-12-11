interface Data {
  group: number;
  name: string;
}

const groupData: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((result: IGroup<T>, item: T): IGroup<T> => {
    const itemKey = item[key];
    let current = result[itemKey];
    if (Array.isArray(current)) {
      current.push(item);
    } else {
      current = [item];
    }
    result[itemKey] = current;
    return result;
  }, {});
}

console.log(group(groupData, 'group'));
