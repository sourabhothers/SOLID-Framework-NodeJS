// build new route path with prefix
const prependPathPrefix = (prefix, path) => {
  // remove trailing / from testPrefix
  prefix = prefix.replace(/^(\/+)|(\/+)$/g, '');

  // remove trailing / from testPath
  path = path.replace(/^(\/+)|(\/+)$/g, '');

  // join both parts with /(slash)
  let newPath = `/${prefix}/${path}`;

  // return new path
  return newPath;
};

module.exports = { prependPathPrefix };
