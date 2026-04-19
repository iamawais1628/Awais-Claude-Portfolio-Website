# Awais Tahir — Personal Portfolio Website

**Live URL:** https://iamawaistahir.com  
**GitHub Pages URL:** https://[your-username].github.io/portfolio/

---

## 🚀 How to Host on GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **New repository**
3. Name it exactly: `iamawaistahir.com` *(or any name you prefer)*
4. Set it to **Public**
5. Click **Create repository**

---

### Step 2 — Upload the Files

**Option A — Via GitHub website (easiest):**
1. Open your new repository
2. Click **"uploading an existing file"** link
3. Drag and drop these 3 files:
   - `index.html`
   - `style.css`
   - `script.js`
4. Click **Commit changes**

**Option B — Via Git CLI:**
```bash
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**
6. Wait ~2 minutes, then visit:  
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

### Step 4 — Connect Custom Domain (iamawaistahir.com)

1. In GitHub Pages settings, enter `iamawaistahir.com` in **Custom domain** field
2. Check **Enforce HTTPS**
3. In your domain registrar's DNS settings, add:

| Type  | Name | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | YOUR_USERNAME.github.io   |

4. Wait up to 24–48 hours for DNS propagation

---

## 📁 File Structure

```
portfolio/
├── index.html      ← Main HTML (all sections)
├── style.css       ← All styles (responsive, animations)
├── script.js       ← Canvas, scroll effects, counters
└── README.md       ← This file
```

---

## ✏️ How to Customize

### Update Personal Info
Open `index.html` and search for:
- `hello@iamawaistahir.com` → replace with your email
- `https://wa.me/923001234567` → replace with your WhatsApp number
- `https://linkedin.com` → replace with your LinkedIn URL

### Add Your Photo
Replace the SVG placeholder in the hero section with a real `<img>` tag:
```html
<img src="your-photo.jpg" alt="Awais Tahir" class="hero-photo" />
```
Then add to `style.css`:
```css
.hero-photo {
  width: 260px;
  height: 340px;
  object-fit: cover;
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,0.08);
}
```

### Update Statistics
In `index.html`, find the stats section and change `data-target="200"` values.

### Add Blog Posts
Duplicate a `.blog-card` div and update the content.

---

## 🎨 Design System

| Token         | Value        | Usage              |
|---------------|--------------|--------------------|
| `--navy`      | #060d1a      | Page background    |
| `--blue`      | #1a5cd4      | Primary accent     |
| `--emerald`   | #059669      | Success/growth     |
| `--gold`      | #f59e0b      | Highlights         |
| `--purple`    | #7c3aed      | Secondary accent   |

**Fonts used:**
- **Cormorant Garamond** — Display headings
- **DM Sans** — Body text
- **Space Grotesk** — UI labels, navigation

---

## 📱 Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, Mobile browsers

---

Built with pure HTML, CSS & JavaScript — no frameworks, no dependencies, blazing fast.

© 2025 Awais Tahir · iamawaistahir.com
