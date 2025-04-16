function generateListKeys(baseKey, itemCount) {
  return Array.from({ length: itemCount }, (_, i) => `${baseKey}.item${i + 1}`);
}

export default generateListKeys;
