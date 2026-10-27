/**
 * @obsidianId map-collection-20261027122918-pqt8
 * @artifactId js-map-collection-v1
 * @title Map-Collection
 * @type concept-example
 * @see Obsidian Note: [[Map-Collection]]
 * @description Ejemplo básico de Map: set, get, has y size.
 */

const userRoles = new Map();

userRoles.set("ana", "admin");
userRoles.set("luis", "editor");

console.log(userRoles.get("ana"));
console.log(userRoles.has("luis"));
console.log(userRoles.size);
