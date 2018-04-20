var recipes = {
  key1: 'value1'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  var newObject = Object.assign({}, recipes);
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key;
  return recipes;
}