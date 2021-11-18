import cloneDeep from 'clone-deep';

// build new route path with prefix
export const prependPathPrefix = (prefix: string, path: string) => {
  // remove trailing / from testPrefix
  prefix = prefix.replace(/(^(\/+))|((\/+)$)/g, '');

  // remove trailing / from testPath
  path = path.replace(/(^(\/+))|((\/+)$)/g, '');

  // join both parts with /(slash)
  let newPath = prefix ? `/${prefix}/${path}` : `/${path}`;

  // return new path
  return newPath;
};

export const deepClone = <IItem>(item: IItem) => {
  return cloneDeep(item);
};
