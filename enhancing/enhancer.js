module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement } = item

  return item.enhancement < 20
    ? { ...item, enhancement: enhancement + 1 }
    : { ...item }
}

function fail(item) {
  const { enhancement, durability } = item

  return enhancement > 16
    ? { ...item, enhancement: enhancement - 1 }

    : enhancement >= 15
      ? { ...item, durability: durability - 10 }
      : { ...item, durability: durability - 5 }
}

function repair(item) {
  const { durability } = item

  return durability === 100
    ? { ...item }
    : { ...item, durability: 100 }

}

function get(item) {
  const { enhancement } = item

  return enhancement === 0
    ? { ...item }
    : { ...item, name: `[+${enhancement}] ${item.name}` }
}
