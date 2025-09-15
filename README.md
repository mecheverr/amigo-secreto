# Amigo Secreto

Aplicación web simple para organizar un **sorteo de amigo secreto**.  

## 🌐 Publicación
La aplicación está disponible en GitHub Pages en la siguiente URL:  
👉 [https://mecheverr.github.io/amigo-secreto/](https://mecheverr.github.io/amigo-secreto/)


## ✨ Características
- Agregar nombres a una lista dinámica.
- Resaltar el botón **Añadir** cuando el input tiene texto.
- Sorteo aleatorio y visualización del resultado.
- Limpieza automática de la lista tras el sorteo.
- Accesible mediante teclado (Enter para añadir).

## 🖼️ Vista general
HTML, CSS y JavaScript vanilla. No requiere backend ni frameworks.
``` bash
.
├─ assets/
│ ├─ amigo-secreto.png
│ └─ play_circle_outline.png
├─ app.js
├─ index.html
├─ style.css
└─ .gitignore
```


## 🚀 Demo
**Abrir localmente**: abre `index.html` en tu navegador.  

**GitHub Pages** (opcional):
1. Ve a tu repo en GitHub → **Settings → Pages**.
2. En “Build and deployment”, elige **Deploy from a branch**.
3. Branch: `main` y folder: `/root`.
4. Guarda y se generará una URL pública del proyecto.

## 🛠️ Tecnologías
- **HTML5** para la estructura.
- **CSS3** con variables y estilos responsivos.
- **JavaScript** para la lógica de lista y sorteo.

## 📦 Instalación / Ejecución local
No hay dependencias. Clona el repo y abre el HTML:

```bash
git clone git@github.com:mecheverr/amigo-secreto.git
cd amigo-secreto
open index.html   # macOS
# o doble clic en index.html
```
Si prefieres un servidor local:
``` bash
python3 -m http.server
# abre http://localhost:8000 en tu navegador
```
## 🧠 Cómo funciona

### app.js
- `amigos[]`: array para almacenar los nombres.
- `agregarAmigo()`: valida, agrega el nombre, limpia el input y actualiza la lista.
- `mostrarAmigos()`: renderiza la lista en `#listaAmigos`.
- `sortearAmigo()`: elige un nombre al azar y muestra el resultado.
- **Listeners**:
  - `input`: activa/desactiva el botón **Añadir**.
  - `keydown (Enter)`: añade un amigo con la tecla Enter.

### style.css
- Variables CSS para colores y estilos base.
- `.button-add.activo`: botón verde cuando hay texto en el input.
- `.result-list`: resalta el resultado del sorteo.

### index.html
- Estructura con títulos, input, lista y botón para sortear.

---

## ♿ Accesibilidad
- El botón “Añadir” responde a **Enter**.
- `aria-live="polite"` en el resultado para lectores de pantalla.
- Contraste reforzado en botón activo y resultado.

---

## ✅ Próximas mejoras
- Evitar nombres duplicados.
- Permitir eliminar nombres individuales.
- Guardar lista en `localStorage`.
- Animaciones para el sorteo.
- Tests unitarios básicos.

---

## 🙌 Contribuir
1. Haz un fork del repo.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Commit: `git commit -m "feat: descripción clara"`.
4. Push: `git push -u origin feature/mi-mejora`.
5. Abre un Pull Request.

---

## 📄 Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).  
Puedes usarlo, modificarlo y distribuirlo libremente, siempre que mantengas el aviso de copyright original.




