# 🧪 JavaScript Mastery Lab

[![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript_ES6+-yellow.svg)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Package Manager: pnpm](https://img.shields.io/badge/PackageManager-pnpm-orange.svg)](https://pnpm.io/)
[![Testing: Jest](https://img.shields.io/badge/Testing-Jest-red.svg)](https://jestjs.io/)
[![Architecture: Monorepo](https://img.shields.io/badge/Architecture-Monorepo-blue.svg)](#)

> Repositorio monorepo para practicar JavaScript, resolver ejercicios de lógica y preparar entrevistas técnicas. Es el laboratorio de código del **Technical Second Brain (Obsidian Vault)**.

---

## 🧠 Relación con Obsidian

El vault es la fuente de verdad del conocimiento. Este repositorio contiene el código ejecutable y los tests que respaldan cada nota.

La trazabilidad se define en el vault con estos campos:

```yaml
artifact_id: js-two-sum-v1
github_repo: js-mastery-lab
github_path: exercises/custom-logic/two-sum.js
related_code:
  - exercises/custom-logic/two-sum.js
related_tests:
  - tests/custom-logic/two-sum.test.js
```

Cada archivo JavaScript debe incluir una cabecera JSDoc:

```js
/**
 * @obsidianId two-sum-20261025202423-kerh
 * @artifactId js-two-sum-v1
 * @title Two-Sum
 * @type exercise-solution
 * @see Obsidian Note: [[Two-Sum]]
 */
```

Los tests usan:

```js
/**
 * @obsidianId two-sum-20261025202423-kerh
 * @artifactId js-two-sum-v1
 * @testFor two-sum.js
 * @see Obsidian Note: [[Two-Sum]]
 */
```

`@obsidianId` debe coincidir con el `id` de la nota y `@artifactId` con su `artifact_id`.

---

## 📁 Estructura

```text
js-mastery-lab/
├── exercises/
│   ├── custom-logic/      # Ejercicios de lógica propia
│   ├── hackerrank/        # Ejercicios de HackerRank
│   └── leetcode/          # Ejercicios de LeetCode
├── interview-prep/        # Implementaciones de referencia para entrevistas
├── snippets/
│   └── concepts/          # Ejemplos de código de notas conceptuales
├── tests/
│   ├── custom-logic/      # Tests de ejercicios de lógica propia
│   ├── hackerrank/
│   └── leetcode/
├── package.json
└── README.md
```

### Convenciones

- Un ejercicio vive en `exercises/<platform>/<slug>.js`.
- Su test vive en `tests/<platform>/<slug>.test.js`.
- Un ejemplo conceptual vive en `snippets/concepts/<slug>.js`.
- El slug usa `kebab-case` y coincide con el nombre de la nota en Obsidian.
- No se duplica código entre la nota y el repositorio: la nota explica y enlaza; el repo ejecuta.

---

## 🚀 Comandos

```bash
pnpm install
pnpm test
pnpm test:watch
```

---

## 🧪 Ejercicios actuales

| Ejercicio | Plataforma | Solución | Test |
|---|---|---|---|
| Two Sum | custom-logic | `exercises/custom-logic/two-sum.js` | `tests/custom-logic/two-sum.test.js` |

---

## 🔗 Repositorios

- Código: [js-mastery-lab](https://github.com/Pelusa29/js-mastery-lab)
- Conocimiento: [SecondBrain](https://github.com/Pelusa29/SecondBrain)
