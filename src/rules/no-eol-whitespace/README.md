# no-eol-whitespace

Disallow end-of-line whitespace.

```css
a { color: pink; }···
/**               ↑
 *  This whitespace */
```

## Options

### `true`

The following patterns are considered warnings:

```css
a { color: pink; }·
```

```css
a { color: pink; }····
```

Comment strings are also checked -- so the following is a warning:

```css
/* something····
 * something else */
```

The following patterns are *not* considered warnings:

```css
a { color: pink; }
```

```css
/* something
 * something else */
```

## Optional options

### `ignore: ["empty-lines"]`

#### `"empty-lines"`

Allow end-of-line whitespace for lines that are only whitespace, "empty" lines.

The following patterns are *not* considered warnings:

```css
a {
  color: pink;
··
  background: orange;
}
```

```css
····
```

```css
a { color: pink; }
····
```
