import DataInterface from './interfaces/data-interface.js';
import GroupInterface from './interfaces/group-interface.js';

const groupData: DataInterface[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

function grouping<T extends Record<string, any>>(
  data: T[],
  key: keyof T
): GroupInterface<T> {
  return data.reduce<GroupInterface<T>>(
    (acc: GroupInterface<T>, item) => ({
      ...acc,
      [item[key]]: [...(acc[item[key]] || []), item],
    }),
    {}
  );
}

console.log(grouping(groupData, 'group'));
