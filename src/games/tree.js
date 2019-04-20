export default () => {
  const iter = (tree) => {
    const [name, children] = tree;
    console.log(name);
    if (!children) return null;
    return children.map(iter);
  };


  const tree = ['A', [
    ['B', [['E'], ['F']]],
    ['C'],
    ['D', [['G'], ['J']]],
  ]];

  iter(tree);
};
