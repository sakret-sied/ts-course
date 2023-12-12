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
  [key: string | number]: T[];
}

function grouping<T extends Record<string, any>>(
  data: T[],
  key: keyof T
): IGroup<T> {
  return data.reduce<IGroup<T>>(
    (acc: IGroup<T>, item) => ({
      ...acc,
      [item[key]]: [...(acc[item[key]] || []), item],
    }),
    {}
  );
}

console.log(grouping(groupData, 'group'));
