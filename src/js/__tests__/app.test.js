import sortObjProps from '../app';

const testObj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test.each([
  [
    testObj,
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    testObj,
    ['level', 'attack', 'health'],
    [
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
    ],
  ],
])('should return a sorted array of object properties, given the second argument',
  (obj, sortOrder, result) => {
    expect(sortObjProps(obj, sortOrder)).toEqual(result);
  });

test('should return a sorted array of object properties, without the second argument', () => {
  expect(sortObjProps(testObj)).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('should return a sorted array of object properties, without inherited properties', () => {
  const parentObject = {
    experience: 50,
  };

  Object.setPrototypeOf(testObj, parentObject);

  expect(sortObjProps(testObj, ['level'])).toEqual([
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ]);
});
