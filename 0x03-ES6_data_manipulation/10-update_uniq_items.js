export default function updateUniqueItems(_map) {
  try {
    for (const [key, val] of _map.entries()) {
      if (val === 1) { _map.set(key, 100); }
    }
  } catch (e) {
    throw new Error('Cannot process');
  }
  return _map;
}
