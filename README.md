---

# Lenguaje TreeVisual — Presentación Web

Una landing estática (HTML + CSS + JS) para presentar un **lenguaje de programación visual** donde la sintaxis se expresa mediante **formas geométricas** y **colores**. El sitio explica la traducción desde Python a tu notación visual usando capturas de pantalla y un ejemplo de programa.

## 🧠 Idea general del lenguaje

Este lenguaje propone una notación **icónica**:

* **Tipos básicos** → cada tipo se representa con una **forma**:

  * `int` → ángulo de **30°**
  * `float` → ángulo de **60°**
  * `complex` → ángulo de **45°**
  * `str` → **barra** horizontal
  * `bool` → **tick verde** (`true`) o **tick rojo** (`false`)
* **Variables por color** → cada variable se identifica **exclusivamente por su color** (p. ej., “la roja”, “la azul”).
* **Operadores** → hay 6 grupos (relacionales/asignación, aritméticos y lógicos/pertinencia) con símbolos gráficos propios.
* **Texto (letras)** → se dibuja un **dodecágono**; el número de lados indica la longitud de la palabra (máx. 12, mín. 1). Siempre del **color de la variable** que contiene esa palabra.
* **Números** → **zigzag azul**:

  * cada **esquina** = 1 unidad,
  * **rayas verdes** arriba = **decenas**,
  * **puntos rojos** en esquinas = **decimales**.
  * Ej.: 5 esquinas + 4 puntos rojos = **5.4**. Para **5.9**, se completa lo que falta del zigzag **en rojo**.
* **Control de flujo** → `if`, `elif`, `else`, `while`, `for`, `break`, `continue`, `pass` tienen gestos/figuras dedicadas.
* **Funciones e imports** → formas para `def`, `return`, `lambda`, `*args`, `**kwargs`, `import`, `from … import …`, `as`.
* **Errores e I/O** → `try`, `except`, `finally`, `raise` y nodos de `print`/`input` (círculos naranja/verde).

### 🧩 Ejemplo explicado

El ejemplo incluido (captura “ejemplo”) describe, de arriba a abajo:

1. Define dos variables:

   * **roja** = `5`
   * **azul** = `4.2`
2. Crea un **`if`** que compara si la roja es **menor** que la azul y lo **imprime** (las “c” verdes externas marcan comillas).
3. En la otra rama, **`else`**: si no es menor, la azul es **mayor o igual** que la roja.

Traducción conceptual a Python:

```python
roja = 5
azul = 4.2

if roja < azul:
    print("La variable roja es menor que la azul")
else:
    print("La variable azul es mayor o igual que la roja")
```

---

## 📁 Estructura del proyecto

```
/tu-repo
├─ index.html        # Página principal con secciones y lightbox
├─ styles.css        # Estilos (tema oscuro/claro, diseño responsive)
├─ script.js         # Menú móvil, selector de tema, visor de imágenes
└─ assets/           # Capturas de pantalla (imágenes)
   ├─ tipos.png
   ├─ variable-color.png
   ├─ operadores.png
   ├─ letras-numeros.png
   ├─ control-flujo.png
   ├─ funciones.png
   ├─ errores-io.png
   └─ ejemplo.png
```

> Si usas otros nombres de archivo para tus imágenes, recuerda **actualizar los `src`** correspondientes en `index.html`.

---

## ⚙️ Requisitos

* Cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
* (Opcional) **VS Code** + extensión **Live Server** para previsualizar localmente.

---

## 🚀 Guía rápida de instalación y uso

### 1) Descargar o clonar

```bash
# Clonar
git clone https://github.com/hugomnz/Lenguaje-TreeVisual.git
cd Lenguaje-Treevisual

# O descarga el ZIP desde GitHub y descomprímelo
```

### 2) Añadir las capturas a `assets/`

Coloca las **8 imágenes** en la carpeta `assets/` con estos nombres:

* `tipos.png` — Tipos de datos básicos
* `variable-color.png` — Variables por color
* `operadores.png` — Operadores
* `letras-numeros.png` — Letras y números
* `control-flujo.png` — Control de flujo
* `funciones.png` — Funciones e imports
* `errores-io.png` — Manejo de errores e I/O
* `ejemplo.png` — Programa de ejemplo

> Si tus archivos se llaman distinto, edita los `src="assets/..."` en `index.html`.

### 3) Probar en local

**Opción A — Doble clic:**

* Abre `index.html` directamente en el navegador.

**Opción B — Live Server (recomendado):**

1. Abre la carpeta del proyecto en **VS Code**.
2. Clic derecho en `index.html` → **Open with Live Server**.
3. Se abrirá en `http://127.0.0.1:5500` (o similar) con auto-reload.

---

## 📜 Licencia

Bajo licencia MIT.

---

## 👤 Autoría

Proyecto creado para presentación universitaria del **Lenguaje TreeVisual**, para la asignatura "Lenguajes y Paradigmas".

---
