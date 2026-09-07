/* @ds-bundle: {"format":4,"namespace":"RosenDesignSystem_99eac3","components":[{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/PriceTag.jsx":"614e406e1e0a","components/commerce/ProductCard.jsx":"946690bc19b0","components/core/Badge.jsx":"8403723e11cb","components/core/Button.jsx":"bfb311c71f1c","components/core/Card.jsx":"00e2b98de6e6","components/core/Icon.jsx":"c4c03626aec4","components/core/IconButton.jsx":"31bd83aa5712","components/core/Logo.jsx":"0dcb68016aa6","components/core/Tag.jsx":"e99aa1ecfca0","components/feedback/Dialog.jsx":"d2cf02f17a8c","components/feedback/Toast.jsx":"28765f9a393d","components/feedback/Tooltip.jsx":"269d2f5f8471","components/forms/Checkbox.jsx":"32ad8ce2affd","components/forms/Input.jsx":"56d894f66c2a","components/forms/Radio.jsx":"c8c0770596fb","components/forms/Select.jsx":"c48cbfdfcaf4","components/forms/Switch.jsx":"251fab5e5e6c","components/forms/Textarea.jsx":"7ead7fe8c397","components/navigation/Breadcrumb.jsx":"3eb5fa66f9a9","components/navigation/Tabs.jsx":"725b417a1b4d","ui_kits/b2b/Dashboard.jsx":"eb2ec38ed2fb","ui_kits/b2b/Login.jsx":"33ae2653323e","ui_kits/b2b/OrderDetail.jsx":"c088f2483bb3","ui_kits/b2b/PriceList.jsx":"d18465b82895","ui_kits/b2b/Shell.jsx":"a37139b22fca","ui_kits/ecommerce/Cart.jsx":"34e1e9c65e4c","ui_kits/ecommerce/Catalog.jsx":"0225a9d5bc7c","ui_kits/ecommerce/Chrome.jsx":"dfd96e0a52f8","ui_kits/ecommerce/Home.jsx":"83b3a4f3bf0c","ui_kits/ecommerce/Product.jsx":"8eb559cee595"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RosenDesignSystem_99eac3 = window.RosenDesignSystem_99eac3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PriceTag.jsx
try { (() => {
const fmt = n => '$' + Number(n).toLocaleString('es-CL');
function PriceTag({
  price,
  listPrice,
  size = 'md',
  style,
  ...rest
}) {
  const s = {
    sm: {
      now: 16,
      was: 12
    },
    md: {
      now: 20,
      was: 13
    },
    lg: {
      now: 28,
      was: 15
    }
  }[size];
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      ...style
    },
    ...rest
  }, React.createElement('span', {
    style: {
      fontSize: s.now,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-price)'
    }
  }, fmt(price)), listPrice ? React.createElement('span', {
    style: {
      fontSize: s.was,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, fmt(listPrice)) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  sale: {
    background: 'var(--rosen-red)',
    color: 'var(--white)'
  },
  slate: {
    background: 'var(--rosen-slate)',
    color: 'var(--white)'
  },
  neutral: {
    background: 'var(--gray-40)',
    color: 'var(--gray-rosen)'
  },
  outline: {
    background: 'var(--white)',
    color: 'var(--rosen-slate)',
    border: '1px solid var(--border-default)'
  }
};
function Badge({
  tone = 'sale',
  style,
  children,
  ...rest
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      fontSize: 11,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  category,
  price,
  listPrice,
  image,
  badge,
  imageSlot,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const off = listPrice ? Math.round((1 - price / listPrice) * 100) : 0;
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      background: 'var(--white)',
      border: '1px solid ' + (h ? 'var(--border-default)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'var(--transition-base)',
      boxShadow: h ? 'var(--shadow-sm)' : 'none',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--gray-10)',
      overflow: 'hidden'
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  }) : imageSlot, badge || off > 0 ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, badge ?? React.createElement(__ds_scope.Badge, {
    tone: 'sale'
  }, '-' + off + '%')) : null), React.createElement('div', {
    style: {
      padding: 'var(--space-4)'
    }
  }, category ? React.createElement('div', {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, category) : null, React.createElement('div', {
    style: {
      fontSize: 16,
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: 'var(--space-3)'
    }
  }, name), React.createElement(__ds_scope.PriceTag, {
    price,
    listPrice
  })));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-medium)',
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--transition-base)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 11
  },
  md: {
    height: 46,
    padding: '0 28px',
    fontSize: 12
  },
  lg: {
    height: 56,
    padding: '0 40px',
    fontSize: 13
  }
};
const variants = {
  primary: {
    background: 'var(--rosen-slate)',
    color: 'var(--white)'
  },
  accent: {
    background: 'var(--rosen-red)',
    color: 'var(--white)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--rosen-slate)',
    borderColor: 'var(--rosen-slate)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--rosen-slate)',
    borderColor: 'var(--border-default)'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--rosen-slate)'
  },
  link: {
    background: 'transparent',
    color: 'var(--rosen-slate)',
    padding: 0,
    height: 'auto',
    textTransform: 'none',
    letterSpacing: 0,
    borderBottom: '1px solid var(--border-default)',
    borderRadius: 0
  }
};
const hovers = {
  primary: {
    background: 'var(--rosen-slate-hover)'
  },
  accent: {
    background: 'var(--rosen-red-hover)'
  },
  secondary: {
    background: 'var(--rosen-slate)',
    color: 'var(--white)'
  },
  ghost: {
    borderColor: 'var(--rosen-slate)'
  },
  inverse: {
    background: 'var(--gray-10)'
  },
  link: {
    color: 'var(--rosen-red)',
    borderBottomColor: 'var(--rosen-red)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  onClick,
  style,
  children,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(h && !disabled ? hovers[variant] : null),
    ...(variant === 'link' ? {
      padding: 0,
      height: 'auto'
    } : null),
    width: full ? '100%' : undefined,
    transform: p && !disabled ? 'translateY(1px)' : 'none',
    opacity: disabled ? .4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  return React.createElement(Tag, {
    href,
    onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    ...rest
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'flat',
  padding = 'var(--space-5)',
  hoverable = false,
  as = 'div',
  style,
  children,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const v = {
    flat: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid transparent',
      color: 'var(--white)'
    }
  }[variant];
  return React.createElement(as, {
    style: {
      borderRadius: 'var(--radius-md)',
      padding,
      transition: 'var(--transition-base)',
      ...v,
      ...(hoverable && h ? {
        boxShadow: 'var(--shadow-md)',
        borderColor: 'transparent',
        transform: 'translateY(-2px)'
      } : null),
      ...style
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = {};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(cache[name] || null);
  React.useEffect(() => {
    if (cache[name]) {
      setSvg(cache[name]);
      return;
    }
    let live = true;
    fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      cache[name] = t;
      if (live) setSvg(t);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  const inner = svg ? svg.replace(/width="24"/, 'width="' + size + '"').replace(/height="24"/, 'height="' + size + '"').replace(/stroke-width="2"/, 'stroke-width="' + strokeWidth + '"') : '';
  return React.createElement('span', {
    'aria-hidden': true,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  onClick,
  style,
  children,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = sizes[size];
  const v = {
    ghost: {
      background: 'transparent',
      color: 'var(--rosen-slate)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--rosen-slate)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--rosen-slate)',
      color: 'var(--white)',
      border: '1px solid var(--rosen-slate)'
    },
    inverse: {
      background: 'var(--white)',
      color: 'var(--rosen-slate)',
      border: '1px solid var(--white)'
    }
  }[variant];
  const hv = {
    ghost: {
      background: 'var(--rosen-slate-08)'
    },
    outline: {
      borderColor: 'var(--rosen-slate)'
    },
    solid: {
      background: 'var(--rosen-slate-hover)'
    },
    inverse: {
      background: 'var(--gray-10)'
    }
  }[variant];
  return React.createElement('button', {
    'aria-label': label,
    onClick,
    disabled,
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'var(--transition-base)',
      opacity: disabled ? .4 : 1,
      ...v,
      ...(h && !disabled ? hv : null),
      ...style
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  dark: 'assets/logo-rosen-slate.png',
  white: 'assets/logo-rosen-white.png'
};
function Logo({
  tone = 'dark',
  width = 140,
  base = '',
  style,
  ...rest
}) {
  return React.createElement('img', {
    src: (base ? base.replace(/\/$/, '') + '/' : '') + SRC[tone],
    alt: 'rosen',
    style: {
      width,
      height: 'auto',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  removable = false,
  onRemove,
  onClick,
  style,
  children,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('span', {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 32,
      padding: '0 14px',
      fontSize: 13,
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-base)',
      border: '1px solid ' + (selected ? 'var(--rosen-slate)' : 'var(--border-default)'),
      background: selected ? 'var(--rosen-slate)' : 'transparent',
      color: selected ? 'var(--white)' : 'var(--text-body)',
      borderColor: !selected && h ? 'var(--rosen-slate)' : undefined,
      ...style
    },
    ...rest
  }, children, removable ? React.createElement('span', {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      cursor: 'pointer',
      opacity: .7,
      fontSize: 15,
      lineHeight: 1
    }
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(2px)',
      padding: 'var(--space-5)'
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-5) 0'
    }
  }, React.createElement('h4', {
    style: {
      margin: 0,
      fontSize: 'var(--title-4)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-heading)'
    }
  }, title), React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Cerrar',
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 22,
      lineHeight: 1,
      color: 'var(--text-muted)'
    }
  }, '\u00d7')), React.createElement('div', {
    style: {
      padding: 'var(--space-4) var(--space-5) var(--space-5)',
      color: 'var(--text-body)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    border: 'var(--rosen-slate)'
  },
  sale: {
    border: 'var(--rosen-red)'
  },
  neutral: {
    border: 'var(--border-default)'
  }
};
function Toast({
  tone = 'info',
  title,
  description,
  onClose,
  icon,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 300,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderTop: '2px solid ' + tones[tone].border,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      ...style
    },
    ...rest
  }, icon, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, title), description ? React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description) : null), onClose ? React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Cerrar',
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 18,
      lineHeight: 1
    }
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === 'top' ? {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    ...rest
  }, children, on ? React.createElement('span', {
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      fontSize: 12,
      color: 'var(--white)',
      background: 'var(--rosen-slate)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontSize: 15,
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'var(--rosen-slate)' : 'var(--border-default)'),
      background: checked ? 'var(--rosen-slate)' : 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--transition-base)'
    }
  }, checked ? React.createElement('svg', {
    width: 11,
    height: 11,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 2.5
  }, React.createElement('path', {
    d: 'M20 6L9 17l-5-5'
  })) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  iconRight,
  style,
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  const border = error ? 'var(--rosen-red)' : foc ? 'var(--rosen-slate)' : 'var(--border-default)';
  return React.createElement('label', {
    style: {
      display: 'block',
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 46,
      padding: '0 14px',
      background: disabled ? 'var(--gray-10)' : 'var(--white)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--transition-base)'
    }
  }, React.createElement('input', {
    type,
    value,
    onChange,
    placeholder,
    disabled,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 15,
      color: 'var(--text-body)'
    },
    ...rest
  }), iconRight), error ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--rosen-red)',
      marginTop: 'var(--space-2)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontSize: 15,
      ...style
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'var(--rosen-slate)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-pill)',
      transition: 'var(--transition-base)'
    }
  }, checked ? React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--rosen-slate)'
    }
  }) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'block',
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('select', {
    value,
    onChange,
    disabled,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      width: '100%',
      height: 46,
      padding: '0 40px 0 14px',
      font: 'inherit',
      fontSize: 15,
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--gray-10)' : 'var(--white)',
      border: '1px solid ' + (foc ? 'var(--rosen-slate)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      transition: 'var(--transition-base)'
    },
    ...rest
  }, options.map(o => React.createElement('option', {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), React.createElement('svg', {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--rosen-slate)',
    strokeWidth: 1.5,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, React.createElement('path', {
    d: 'M6 9l6 6 6-6'
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontSize: 15,
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    style: {
      width: 40,
      height: 22,
      flex: '0 0 auto',
      padding: 2,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--rosen-slate)' : 'var(--gray-60)',
      transition: 'var(--transition-base)'
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      transform: 'translateX(' + (checked ? 18 : 0) + 'px)',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  })), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  hint,
  rows = 4,
  value,
  onChange,
  placeholder,
  disabled = false,
  style,
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'block',
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, React.createElement('textarea', {
    rows,
    value,
    onChange,
    placeholder,
    disabled,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      font: 'inherit',
      fontSize: 15,
      color: 'var(--text-body)',
      background: disabled ? 'var(--gray-10)' : 'var(--white)',
      border: '1px solid ' + (foc ? 'var(--rosen-slate)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      resize: 'vertical',
      transition: 'var(--transition-base)'
    },
    ...rest
  }), hint ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 13,
      color: 'var(--text-muted)',
      ...style
    },
    ...rest
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? React.createElement('span', {
    style: {
      opacity: .6
    }
  }, '/') : null, i === items.length - 1 ? React.createElement('span', {
    style: {
      color: 'var(--text-body)'
    }
  }, it.label ?? it) : React.createElement('a', {
    href: it.href ?? '#',
    style: {
      color: 'var(--text-muted)'
    }
  }, it.label ?? it))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value ?? (tabs[0] && (tabs[0].value ?? tabs[0]));
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    },
    ...rest
  }, tabs.map(t => {
    const v = t.value ?? t,
      l = t.label ?? t,
      on = v === active;
    return React.createElement('button', {
      key: v,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 14px',
        cursor: 'pointer',
        font: 'inherit',
        fontSize: 14,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: on ? 'var(--rosen-slate)' : 'var(--text-muted)',
        fontWeight: on ? 'var(--weight-medium)' : 'var(--weight-light)',
        borderBottom: '1px solid ' + (on ? 'var(--rosen-slate)' : 'transparent'),
        marginBottom: -1,
        transition: 'var(--transition-base)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b/Dashboard.jsx
try { (() => {
(function () {
  const {
    Button,
    Badge,
    Icon,
    Card,
    Tabs
  } = window.RosenDesignSystem_99eac3;
  const KPIS = [['Pedidos del mes', '14', '+3 vs. mayo'], ['Facturado junio', '$18.420.000', '86% de la meta'], ['Línea de crédito', '$6.100.000', 'de $25.000.000'], ['Pedidos en tránsito', '3', '1 con retraso']];
  const ORDERS = [['#R-48210', '12 jun 2026', 'Colchones Élite · 24 u.', '$8.640.000', 'En tránsito', 'slate'], ['#R-48174', '04 jun 2026', 'Plumones Nórdicos · 60 u.', '$3.240.000', 'Entregado', 'neutral'], ['#R-48090', '28 may 2026', 'Sofás Milán · 6 u.', '$4.140.000', 'Entregado', 'neutral'], ['#R-48012', '19 may 2026', 'Sábanas percal · 120 u.', '$2.400.000', 'Facturado', 'neutral']];
  function Dashboard({
    onNav
  }) {
    const [tab, setTab] = React.useState('Todos');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-5)',
        padding: 'var(--space-6)',
        background: 'var(--gray-10)',
        minHeight: 'calc(100vh - 89px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, KPIS.map(([l, v, d]) => /*#__PURE__*/React.createElement(Card, {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        marginBottom: 12
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        color: 'var(--text-heading)',
        lineHeight: 1.1
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 16,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Pedidos recientes",
      pad: "0",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        style: {
          fontSize: 13
        },
        onClick: () => onNav('order')
      }, "Ver todos")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-4) var(--space-5) 0'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Todos', 'En tránsito', 'Entregados'],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Pedido', 'Fecha', 'Contenido', 'Total', 'Estado'].map(h => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        textAlign: h === 'Total' ? 'right' : 'left',
        padding: '14px var(--space-5)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontWeight: 'var(--weight-light)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, ORDERS.map(([id, date, content, total, st, tone]) => /*#__PURE__*/React.createElement("tr", {
      key: id,
      onClick: () => onNav('order'),
      style: {
        cursor: 'pointer',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        color: 'var(--rosen-slate)'
      }
    }, id), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        color: 'var(--text-muted)'
      }
    }, date), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)'
      }
    }, content), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        textAlign: 'right',
        fontWeight: 'var(--weight-medium)'
      }
    }, total), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, st))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Alertas"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, [['triangle-alert', 'Pedido #R-48210 con 2 días de retraso', 'var(--rosen-red)'], ['package', 'Colchón Nordic King sin stock en planta Temuco', 'var(--rosen-slate)'], ['file-text', 'Factura 8842 vence en 5 días', 'var(--rosen-slate)']].map(([ic, t, c]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: c
    }), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement(Panel, {
      title: "Carga r\xE1pida"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "Sube tu orden de compra en CSV y la convertimos en pedido."), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px dashed var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-5)',
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginBottom: 16
      }
    }, "Arrastra tu archivo aqu\xED"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      full: true
    }, "Seleccionar archivo")))));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b/Login.jsx
try { (() => {
(function () {
  const {
    Logo,
    Button,
    Input,
    Checkbox
  } = window.RosenDesignSystem_99eac3;
  function Login({
    onEnter
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--rosen-slate)',
        color: 'var(--white)',
        padding: 'var(--space-8)',
        display: 'grid',
        alignContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "white",
      width: 128,
      base: "../.."
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        opacity: .6,
        marginBottom: 20
      }
    }, "Portal mayorista"), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: 'var(--white)',
        fontSize: 'var(--title-2)',
        marginBottom: 20
      }
    }, "Tu cuenta", /*#__PURE__*/React.createElement("br", null), "mayorista Rosen"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        opacity: .75,
        maxWidth: 400
      }
    }, "Lista de precios vigente, stock por planta y seguimiento de pedidos en un solo lugar.")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        opacity: .5
      }
    }, "Chile \xB7 Per\xFA \xB7 Argentina \xB7 Bolivia \xB7 Colombia")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        onEnter();
      },
      style: {
        width: '100%',
        maxWidth: 380,
        display: 'grid',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        marginBottom: 8
      }
    }, "Ingresa a tu cuenta"), /*#__PURE__*/React.createElement(Input, {
      label: "RUT de empresa",
      placeholder: "76.543.210-K"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Contrase\xF1a",
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Recordarme"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      style: {
        fontSize: 13
      }
    }, "Olvid\xE9 mi contrase\xF1a")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true
    }, "Ingresar"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        textAlign: 'center'
      }
    }, "\xBFA\xFAn no eres cliente mayorista? ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Solicita tu cuenta")))));
  }
  Object.assign(window, {
    Login
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b/OrderDetail.jsx
try { (() => {
(function () {
  const {
    Button,
    Badge,
    Icon,
    Tabs
  } = window.RosenDesignSystem_99eac3;
  const clp = n => '$' + n.toLocaleString('es-CL');
  const LINES = [['COL-EP-2P', 'Colchón Élite Pocket 2 plazas', 24, 329990], ['PLU-NK-70', 'Plumón Nórdico King 700g', 30, 64990]];
  const STEPS = [['Pedido recibido', '12 jun · 09:14', true], ['Producción confirmada', '12 jun · 16:40', true], ['Despachado desde Temuco', '15 jun · 07:20', true], ['En ruta a Puerto Varas', 'Estimado 18 jun', false], ['Entregado', '—', false]];
  function OrderDetail() {
    const [tab, setTab] = React.useState('Detalle');
    const net = LINES.reduce((a, [,, q, p]) => a + q * p, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        background: 'var(--gray-10)',
        minHeight: 'calc(100vh - 89px)',
        display: 'grid',
        gap: 'var(--space-4)',
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--title-4)',
        color: 'var(--text-heading)'
      }
    }, "Pedido #R-48210"), /*#__PURE__*/React.createElement(Badge, {
      tone: "slate"
    }, "En tr\xE1nsito"), /*#__PURE__*/React.createElement(Badge, null, "2 d\xEDas de retraso"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 15
      })
    }, "Factura"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Contactar ejecutivo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 16,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      pad: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-4) var(--space-5) 0'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Detalle', 'Documentos', 'Historial'],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['SKU', 'Producto', 'Cantidad', 'Precio unitario', 'Subtotal'].map((h, i) => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        textAlign: i > 1 ? 'right' : 'left',
        padding: '14px var(--space-5)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontWeight: 'var(--weight-light)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, LINES.map(([sku, name, q, p]) => /*#__PURE__*/React.createElement("tr", {
      key: sku,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        color: 'var(--text-muted)'
      }
    }, sku), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        color: 'var(--text-heading)'
      }
    }, name), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        textAlign: 'right'
      }
    }, q), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        textAlign: 'right'
      }
    }, clp(p)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '16px var(--space-5)',
        textAlign: 'right',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-heading)'
      }
    }, clp(q * p)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8,
        padding: 'var(--space-5)',
        justifyItems: 'end',
        fontSize: 14
      }
    }, [['Neto', net], ['IVA 19%', Math.round(net * .19)], ['Total', Math.round(net * 1.19)]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        gap: 32,
        minWidth: 300,
        justifyContent: 'space-between',
        paddingTop: i === 2 ? 12 : 0,
        borderTop: i === 2 ? '1px solid var(--border-default)' : 'none',
        fontSize: i === 2 ? 17 : 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-heading)'
      }
    }, clp(v)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Seguimiento"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 0
      }
    }, STEPS.map(([t, d, done], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'grid',
        gridTemplateColumns: '20px 1fr',
        gap: 14,
        paddingBottom: i < STEPS.length - 1 ? 20 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        justifyItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 'var(--radius-pill)',
        background: done ? 'var(--rosen-slate)' : 'var(--gray-60)'
      }
    }), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        flex: 1,
        minHeight: 28,
        background: done ? 'var(--rosen-slate)' : 'var(--border-default)'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: done ? 'var(--text-heading)' : 'var(--text-muted)'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, d)))))), /*#__PURE__*/React.createElement(Panel, {
      title: "Entrega"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: 1.9
      }
    }, "Hotel Patagonia", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "Av. Costanera 1240, Puerto Varas", /*#__PURE__*/React.createElement("br", null), "Contacto: Rodrigo Silva \xB7 +56 9 5544 3322"))))));
  }
  Object.assign(window, {
    OrderDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b/OrderDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b/PriceList.jsx
try { (() => {
(function () {
  const {
    Button,
    Select,
    Checkbox,
    Tag,
    Icon,
    IconButton,
    Badge
  } = window.RosenDesignSystem_99eac3;
  const ROWS = [['COL-EP-2P', 'Colchón Élite Pocket 2 plazas', 'Colchones', 329990, 399990, 'Temuco', 'Disponible'], ['COL-EP-KG', 'Colchón Élite Pocket King', 'Colchones', 489990, 599990, 'Temuco', 'Disponible'], ['COL-NP-KG', 'Colchón Nordic Pocket King', 'Colchones', 629990, 749990, 'Temuco', 'Sin stock'], ['SOF-ML-3C', 'Sofá Milán 3 cuerpos', 'Muebles tapizados', 719990, 899990, 'Santiago', 'Disponible'], ['PLU-NK-70', 'Plumón Nórdico King 700g', 'Ropa de cama', 64990, 89990, 'Santiago', 'Disponible'], ['SAB-PC-200', 'Set sábanas percal 200 hilos', 'Textil hogar', 27990, 39990, 'Santiago', 'Bajo stock']];
  const tone = s => s === 'Sin stock' ? 'sale' : s === 'Bajo stock' ? 'outline' : 'neutral';
  const clp = n => '$' + n.toLocaleString('es-CL');
  function PriceList() {
    const [sel, setSel] = React.useState(['COL-EP-2P']);
    const toggle = id => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        background: 'var(--gray-10)',
        minHeight: 'calc(100vh - 89px)',
        display: 'grid',
        gap: 'var(--space-4)',
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: ['Todas las categorías', 'Colchones', 'Muebles tapizados', 'Ropa de cama', 'Textil hogar'],
      style: {
        width: 230
      }
    }), /*#__PURE__*/React.createElement(Select, {
      options: ['Todas las plantas', 'Temuco', 'Santiago'],
      style: {
        width: 190
      }
    }), /*#__PURE__*/React.createElement(Tag, {
      selected: true
    }, "Lista vigente \xB7 junio 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 15
      })
    }, "Descargar CSV"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      disabled: sel.length === 0
    }, "Agregar ", sel.length > 0 ? sel.length + ' al pedido' : 'al pedido'))), /*#__PURE__*/React.createElement(Panel, {
      pad: "0"
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['', 'SKU', 'Producto', 'Categoría', 'Precio mayorista', 'Precio sugerido', 'Planta', 'Stock', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
      key: i,
      style: {
        textAlign: h.includes('Precio') ? 'right' : 'left',
        padding: '14px var(--space-4)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        fontWeight: 'var(--weight-light)',
        borderBottom: '1px solid var(--border-subtle)',
        whiteSpace: 'nowrap'
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map(([sku, name, cat, wholesale, retail, plant, stock]) => {
      const on = sel.includes(sku);
      return /*#__PURE__*/React.createElement("tr", {
        key: sku,
        style: {
          borderBottom: '1px solid var(--border-subtle)',
          background: on ? 'var(--rosen-slate-08)' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: on,
        onChange: () => toggle(sku)
      })), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)',
          color: 'var(--text-muted)',
          whiteSpace: 'nowrap'
        }
      }, sku), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)',
          color: 'var(--text-heading)'
        }
      }, name), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)',
          color: 'var(--text-muted)'
        }
      }, cat), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)',
          textAlign: 'right',
          fontWeight: 'var(--weight-medium)',
          color: 'var(--text-heading)'
        }
      }, clp(wholesale)), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)',
          textAlign: 'right',
          color: 'var(--text-muted)'
        }
      }, clp(retail)), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)',
          color: 'var(--text-muted)'
        }
      }, plant), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: tone(stock)
      }, stock)), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px var(--space-4)'
        }
      }, /*#__PURE__*/React.createElement(IconButton, {
        label: "Ver ficha",
        size: "sm"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 16
      }))));
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Precios netos por unidad, sin IVA. Pedido m\xEDnimo mayorista: 6 unidades por SKU."));
  }
  Object.assign(window, {
    PriceList
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b/PriceList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b/Shell.jsx
try { (() => {
(function () {
  const {
    Logo,
    Icon,
    IconButton,
    Input,
    Badge
  } = window.RosenDesignSystem_99eac3;
  const NAVI = [['layout-dashboard', 'Resumen', 'dashboard'], ['list', 'Lista de precios', 'prices'], ['package', 'Pedidos', 'order'], ['file-text', 'Documentos', 'docs'], ['users', 'Mi equipo', 'team']];
  function Sidebar({
    view,
    onNav
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 248,
        flex: '0 0 auto',
        background: 'var(--rosen-slate)',
        color: 'var(--white)',
        minHeight: '100vh',
        padding: 'var(--space-5) 0',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-5) var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "white",
      width: 104,
      base: "../.."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        opacity: .55,
        marginTop: 12
      }
    }, "Portal mayorista")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'grid',
        gap: 2,
        padding: '0 var(--space-3)'
      }
    }, NAVI.map(([ic, label, key]) => {
      const on = view === key;
      return /*#__PURE__*/React.createElement("a", {
        key: key,
        href: "#",
        onClick: e => {
          e.preventDefault();
          onNav(key);
        },
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '11px 14px',
          borderRadius: 'var(--radius-sm)',
          fontSize: 14,
          color: 'var(--white)',
          background: on ? 'rgba(255,255,255,.12)' : 'transparent',
          opacity: on ? 1 : .75
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 18
      }), label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: 'var(--space-5)',
        fontSize: 12,
        opacity: .55,
        lineHeight: 1.8
      }
    }, "Ejecutivo asignado", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 1,
        color: 'var(--white)',
        fontSize: 13
      }
    }, "Carolina Mu\xF1oz"), /*#__PURE__*/React.createElement("br", null), "+56 9 8765 4321"));
  }
  function Topbar({
    title,
    crumb
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        padding: 'var(--space-4) var(--space-6)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--white)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, crumb), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--title-4)',
        color: 'var(--text-heading)'
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Buscar SKU o pedido",
      style: {
        width: 280
      },
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 16
      })
    }), /*#__PURE__*/React.createElement(IconButton, {
      label: "Notificaciones",
      variant: "outline"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 16,
        borderLeft: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--gray-40)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 13,
        color: 'var(--rosen-slate)'
      }
    }, "HP"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: 1.3
      }
    }, "Hotel Patagonia", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 12
      }
    }, "76.543.210-K")))));
  }
  const Panel = ({
    title,
    action,
    children,
    pad = 'var(--space-5)'
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-heading)'
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
  Object.assign(window, {
    Sidebar,
    Topbar,
    Panel
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecommerce/Cart.jsx
try { (() => {
(function () {
  const {
    Button,
    Card,
    Input,
    Radio,
    PriceTag,
    Icon,
    IconButton
  } = window.RosenDesignSystem_99eac3;
  function Cart({
    onNav,
    items
  }) {
    const [ship, setShip] = React.useState('domicilio');
    const lines = [{
      name: 'Colchón Élite Pocket 2 plazas',
      variant: '2 plazas · Firmeza media-alta',
      price: 399990,
      listPrice: 569990,
      qty: 1
    }, {
      name: 'Plumón Nórdico King 700g',
      variant: 'King · Blanco',
      price: 89990,
      qty: 1
    }];
    const sub = lines.reduce((a, l) => a + l.price * l.qty, 0);
    const envio = ship === 'domicilio' ? 9990 : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: 'var(--space-7) var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 'var(--space-6)'
      }
    }, "Tu carro ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 20
      }
    }, "(", lines.length, " productos)")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: 40,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, lines.map(l => /*#__PURE__*/React.createElement("div", {
      key: l.name,
      style: {
        display: 'grid',
        gridTemplateColumns: '140px 1fr auto',
        gap: 20,
        padding: 'var(--space-5) 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      label: "4:3",
      ratio: "4 / 3"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        color: 'var(--text-heading)',
        marginBottom: 6
      }
    }, l.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginBottom: 14
      }
    }, l.variant), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-sm)'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Quitar uno",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        textAlign: 'center',
        fontSize: 14
      }
    }, l.qty), /*#__PURE__*/React.createElement(IconButton, {
      label: "Agregar uno",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      style: {
        fontSize: 13
      }
    }, "Eliminar"))), /*#__PURE__*/React.createElement(PriceTag, {
      price: l.price,
      listPrice: l.listPrice
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        marginBottom: 14
      }
    }, "Entrega"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "s",
      label: "Despacho a domicilio \u2014 $9.990 \xB7 3 a 5 d\xEDas h\xE1biles",
      checked: ship === 'domicilio',
      onChange: () => setShip('domicilio')
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "s",
      label: "Retiro en tienda \u2014 sin costo \xB7 24 h h\xE1biles",
      checked: ship === 'retiro',
      onChange: () => setShip('retiro')
    })))), /*#__PURE__*/React.createElement(Card, {
      variant: "subtle",
      padding: "var(--space-5)",
      style: {
        display: 'grid',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline"
    }, "Resumen"), [['Subtotal', sub], ['Despacho', envio]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", null, v === 0 ? 'Sin costo' : '$' + v.toLocaleString('es-CL')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingTop: 16,
        borderTop: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, "Total"), /*#__PURE__*/React.createElement(PriceTag, {
      price: sub + envio,
      size: "lg"
    })), /*#__PURE__*/React.createElement(Input, {
      placeholder: "C\xF3digo de descuento",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "tag",
        size: 16
      })
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true
    }, "Ir a pagar"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => onNav('catalog'),
      style: {
        justifySelf: 'center'
      }
    }, "Seguir comprando"))));
  }
  Object.assign(window, {
    Cart
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecommerce/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecommerce/Catalog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    ProductCard,
    Tag,
    Checkbox,
    Select,
    Breadcrumb,
    Button,
    Switch
  } = window.RosenDesignSystem_99eac3;
  const ITEMS = [{
    category: 'Colchones',
    name: 'Colchón Élite Pocket 2 plazas',
    price: 399990,
    listPrice: 569990
  }, {
    category: 'Colchones',
    name: 'Colchón Essence Firme 1.5 plazas',
    price: 229990
  }, {
    category: 'Colchones',
    name: 'Colchón Premium Latex King',
    price: 1099990,
    listPrice: 1399990
  }, {
    category: 'Colchones',
    name: 'Colchón Base Confort 1 plaza',
    price: 149990
  }, {
    category: 'Colchones',
    name: 'Colchón Élite Soft 2 plazas',
    price: 429990,
    listPrice: 539990
  }, {
    category: 'Colchones',
    name: 'Colchón Nordic Pocket King',
    price: 749990
  }];
  const FILTERS = [['Medida', ['1 plaza (8)', '1.5 plazas (12)', '2 plazas (24)', 'King (9)']], ['Firmeza', ['Suave (6)', 'Media (18)', 'Alta (14)']], ['Precio', ['Hasta $200.000', '$200.000 – $500.000', 'Sobre $500.000']]];
  function Catalog({
    onNav
  }) {
    const [chips, setChips] = React.useState(['2 plazas', 'Firmeza media']);
    const [stock, setStock] = React.useState(true);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-5) var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: ['Inicio', 'Colchones']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        margin: 'var(--space-5) 0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 6
      }
    }, "Colchones"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "53 productos")), /*#__PURE__*/React.createElement(Select, {
      options: ['Recomendados', 'Menor precio', 'Mayor precio', 'Más nuevos'],
      style: {
        width: 230
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gap: 48,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        display: 'grid',
        gap: 'var(--space-6)',
        position: 'sticky',
        top: 150
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Solo con stock",
      checked: stock,
      onChange: () => setStock(!stock)
    }), FILTERS.map(([t, opts]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        marginBottom: 14
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, opts.map(o => /*#__PURE__*/React.createElement(Checkbox, {
      key: o,
      label: o,
      checked: chips.some(c => o.startsWith(c)),
      onChange: () => {}
    }))))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setChips([])
    }, "Limpiar filtros")), /*#__PURE__*/React.createElement("div", null, chips.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 'var(--space-5)'
      }
    }, chips.map(c => /*#__PURE__*/React.createElement(Tag, {
      key: c,
      removable: true,
      onRemove: () => setChips(chips.filter(x => x !== c))
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, ITEMS.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: p.name
    }, p, {
      imageSlot: /*#__PURE__*/React.createElement(Slot, {
        label: "Producto \xB7 4:3"
      }),
      onClick: () => onNav('product')
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        placeItems: 'center',
        marginTop: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Cargar m\xE1s productos")))));
  }
  Object.assign(window, {
    Catalog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecommerce/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecommerce/Chrome.jsx
try { (() => {
(function () {
  const {
    Logo,
    Icon,
    IconButton,
    Input,
    Button
  } = window.RosenDesignSystem_99eac3;
  const NAV = ['Colchones', 'Camas', 'Muebles', 'Ropa de cama', 'Textil hogar', 'Outlet'];
  function Announce() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--rosen-slate)',
        color: 'var(--white)',
        fontSize: 12,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '10px 16px'
      }
    }, "Despacho a todo Chile \xB7 Retiro sin costo en 36 tiendas");
  }
  function Header({
    onNav,
    cart
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'var(--white)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Announce, null), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px var(--gutter)',
        display: 'flex',
        alignItems: 'center',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('home');
      },
      style: {
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      tone: "dark",
      width: 132,
      base: "../.."
    })), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Buscar colchones, sof\xE1s, plumones\u2026",
      style: {
        flex: 1,
        maxWidth: 520
      },
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 17
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Tiendas"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin"
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Mi cuenta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Carro",
      onClick: () => onNav('cart')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag"
    })), cart > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 2,
        right: 0,
        minWidth: 16,
        height: 16,
        padding: '0 4px',
        display: 'grid',
        placeItems: 'center',
        fontSize: 10,
        fontWeight: 'var(--weight-medium)',
        color: 'var(--white)',
        background: 'var(--rosen-red)',
        borderRadius: 'var(--radius-pill)'
      }
    }, cart)))), /*#__PURE__*/React.createElement("nav", {
      style: {
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        display: 'flex',
        gap: 36
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('catalog');
      },
      style: {
        padding: '14px 0',
        fontSize: 13,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: n === 'Outlet' ? 'var(--rosen-red)' : 'var(--text-body)'
      }
    }, n)))));
  }
  function Footer() {
    const cols = [['Productos', ['Colchones', 'Camas y bases', 'Sofás', 'Ropa de cama', 'Outlet']], ['Ayuda', ['Estado de mi pedido', 'Despacho y retiro', 'Garantía', 'Cambios y devoluciones']], ['Rosen', ['Nuestra historia', 'Tiendas', 'Venta mayorista', 'Trabaja con nosotros']]];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--rosen-slate)',
        color: 'var(--white)',
        marginTop: 'var(--space-9)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-8) var(--gutter)',
        display: 'grid',
        gridTemplateColumns: '1.4fr repeat(3,1fr)',
        gap: 48
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      tone: "white",
      width: 120,
      base: "../.."
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 20,
        fontSize: 14,
        opacity: .75,
        maxWidth: 280
      }
    }, "Fabricamos descanso en Chile desde 1958. Producci\xF3n, log\xEDstica y postventa propias en Chile, Per\xFA, Argentina, Bolivia y Colombia.")), cols.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        opacity: .6,
        marginBottom: 16
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      style: {
        color: 'var(--white)',
        fontSize: 14,
        opacity: .85
      }
    }, i)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,.15)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px var(--gutter)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        opacity: .6
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 1958\u20132026 Rosen S.A."), /*#__PURE__*/React.createElement("span", null, "Precios en pesos chilenos, IVA incluido."))));
  }
  const Slot = ({
    label,
    ratio = '4 / 3',
    dark = false
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      background: dark ? 'var(--rosen-stone)' : 'var(--gray-10)',
      display: 'grid',
      placeItems: 'center',
      color: dark ? 'var(--white)' : 'var(--text-muted)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: 16
    }
  }, label);
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)',
      ...style
    }
  }, children);
  const SectionTitle = ({
    over,
    title,
    action
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, over && /*#__PURE__*/React.createElement("div", {
    className: "rosen-overline",
    style: {
      marginBottom: 10
    }
  }, over), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--title-3)'
    }
  }, title)), action);
  Object.assign(window, {
    Header,
    Footer,
    Slot,
    Section,
    SectionTitle,
    Announce
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecommerce/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecommerce/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    ProductCard,
    Icon,
    Card
  } = window.RosenDesignSystem_99eac3;
  const FEATURED = [{
    category: 'Colchones',
    name: 'Colchón Élite Pocket 2 plazas',
    price: 399990,
    listPrice: 569990
  }, {
    category: 'Camas',
    name: 'Cama Europea Nordic 1.5 plazas',
    price: 289990
  }, {
    category: 'Muebles',
    name: 'Sofá Milán 3 cuerpos tapiz gris',
    price: 899990,
    listPrice: 1149990
  }, {
    category: 'Ropa de cama',
    name: 'Plumón Nórdico King 700g',
    price: 89990,
    listPrice: 119990
  }];
  const CATS = [['Colchones', '1 / 1'], ['Camas y bases', '1 / 1'], ['Sofás', '1 / 1'], ['Ropa de cama', '1 / 1'], ['Textil hogar', '1 / 1']];
  const SERVICES = [['truck', 'Despacho a todo Chile', 'Coordina el día en el checkout'], ['store', 'Retiro en 36 tiendas', 'Sin costo, en 24 horas hábiles'], ['shield-check', 'Garantía de fábrica', 'Hasta 10 años en colchones'], ['wrench', 'Postventa propia', 'Servicio técnico Rosen']];
  function Home({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: 'var(--rosen-slate)',
        color: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: 64,
        minHeight: 520
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-8) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        color: 'rgba(255,255,255,.6)',
        marginBottom: 20
      }
    }, "Nueva colecci\xF3n de descanso"), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: 'var(--white)',
        fontSize: 'var(--title-1)',
        marginBottom: 24
      }
    }, "Dormir bien", /*#__PURE__*/React.createElement("br", null), "no es un lujo"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        opacity: .8,
        maxWidth: 420,
        marginBottom: 36
      }
    }, "Colchones fabricados en nuestra planta de Temuco, con garant\xEDa de f\xE1brica y despacho a todo Chile."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      onClick: () => onNav('catalog')
    }, "Ver colchones"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      style: {
        background: 'transparent',
        color: 'var(--white)',
        borderColor: 'rgba(255,255,255,.5)'
      }
    }, "Encuentra tu firmeza"))), /*#__PURE__*/React.createElement(Slot, {
      label: "Hero \xB7 ambiente de dormitorio \xB7 4:3",
      ratio: "4 / 3",
      dark: true
    }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionTitle, {
      over: "Categor\xEDas",
      title: "Todo para el hogar"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: 16
      }
    }, CATS.map(([n, r]) => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('catalog');
      },
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      label: n + ' · 1:1',
      ratio: r
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontSize: 16,
        color: 'var(--text-heading)',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, n, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15
    })))))), /*#__PURE__*/React.createElement(Section, {
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      over: "Destacados",
      title: "Los m\xE1s vendidos",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        onClick: () => onNav('catalog')
      }, "Ver todo el cat\xE1logo")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, FEATURED.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: p.name
    }, p, {
      imageSlot: /*#__PURE__*/React.createElement(Slot, {
        label: "Producto \xB7 4:3"
      }),
      onClick: () => onNav('product')
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gray-10)'
      }
    }, /*#__PURE__*/React.createElement(Section, {
      style: {
        padding: 'var(--space-7) var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 32
      }
    }, SERVICES.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 26,
      color: "var(--rosen-slate)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        color: 'var(--text-heading)'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, d))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      label: "Tienda Rosen \xB7 full-bleed 4:3"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gray-10)',
        padding: 'var(--space-8)',
        display: 'grid',
        alignContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        marginBottom: 16
      }
    }, "Desde 1958"), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 20
      }
    }, "Fabricamos lo que vendemos"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        maxWidth: 420
      }
    }, "Producci\xF3n propia en Temuco, log\xEDstica y postventa integradas, y presencia en cinco pa\xEDses. Cada pieza pasa por nuestras manos antes de llegar a tu casa."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Conoce nuestra historia"))))));
  }
  Object.assign(window, {
    Home
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecommerce/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ecommerce/Product.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    Button,
    Badge,
    Tag,
    Tabs,
    PriceTag,
    Breadcrumb,
    Icon,
    Card,
    Tooltip,
    ProductCard
  } = window.RosenDesignSystem_99eac3;
  const SIZES = ['1 plaza', '1.5 plazas', '2 plazas', 'King'];
  const SPECS = [['Tecnología', 'Resortes pocket individuales'], ['Firmeza', 'Media-alta'], ['Alto', '30 cm'], ['Garantía', '10 años de fábrica'], ['Origen', 'Planta Rosen, Temuco']];
  function Product({
    onNav,
    addToCart
  }) {
    const [size, setSize] = React.useState('2 plazas');
    const [tab, setTab] = React.useState('Ficha técnica');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--space-5) var(--gutter) 0'
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: ['Inicio', 'Colchones', 'Colchón Élite Pocket 2 plazas']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gap: 56,
        marginTop: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Slot, {
      label: "Imagen principal \xB7 4:3"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 16,
        left: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, null, "-30%"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 12,
        marginTop: 12
      }
    }, ['1:1', '1:1', '1:1', '1:1'].map((r, i) => /*#__PURE__*/React.createElement(Slot, {
      key: i,
      label: 'Vista ' + (i + 1),
      ratio: "1 / 1"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        marginBottom: 12
      }
    }, "Colchones \xB7 L\xEDnea \xC9lite"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--title-3)',
        marginBottom: 16
      }
    }, "Colch\xF3n \xC9lite Pocket ", size), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 24,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--rosen-slate)'
      }
    }, "\u2605\u2605\u2605\u2605\u2605"), " 4,7 \xB7 218 evaluaciones"), /*#__PURE__*/React.createElement(PriceTag, {
      price: 399990,
      listPrice: 569990,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        margin: '10px 0 var(--space-6)'
      }
    }, "o 6 cuotas precio contado de $66.665"), /*#__PURE__*/React.createElement("div", {
      className: "rosen-overline",
      style: {
        marginBottom: 12
      }
    }, "Medida"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 'var(--space-6)'
      }
    }, SIZES.map(s => /*#__PURE__*/React.createElement(Tag, {
      key: s,
      selected: s === size,
      onClick: () => setSize(s)
    }, s))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginBottom: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      full: true,
      onClick: addToCart
    }, "Agregar al carro"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      style: {
        flex: '0 0 auto'
      }
    }, "Comprar ahora")), /*#__PURE__*/React.createElement(Card, {
      variant: "subtle",
      padding: "var(--space-4)",
      style: {
        display: 'grid',
        gap: 12
      }
    }, [['truck', 'Despacho a domicilio desde $9.990'], ['store', 'Retiro sin costo en tienda Temuco'], ['shield-check', '10 años de garantía de fábrica']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19,
      color: "var(--rosen-slate)"
    }), t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Descripción', 'Ficha técnica', 'Garantía', 'Evaluaciones'],
      value: tab,
      onChange: setTab
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6) 0',
        maxWidth: 760
      }
    }, tab === 'Ficha técnica' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 0
      }
    }, SPECS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: 24,
        padding: '14px 0',
        borderBottom: '1px solid var(--border-subtle)',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-heading)'
      }
    }, v)))) : /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16
      }
    }, "El Colch\xF3n \xC9lite Pocket combina resortes pocket individuales con capas de espuma de alta densidad para una firmeza media-alta que acompa\xF1a la columna sin ceder. Fabricado en nuestra planta de Temuco."))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-7)'
      }
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      over: "Tambi\xE9n te puede interesar",
      title: "Completa tu descanso"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, [{
      category: 'Camas',
      name: 'Base Europea Nordic 2 plazas',
      price: 189990
    }, {
      category: 'Ropa de cama',
      name: 'Plumón Nórdico 2 plazas',
      price: 79990,
      listPrice: 99990
    }, {
      category: 'Textil hogar',
      name: 'Set sábanas percal 200 hilos',
      price: 39990
    }, {
      category: 'Colchones',
      name: 'Protector impermeable 2 plazas',
      price: 29990
    }].map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: p.name
    }, p, {
      imageSlot: /*#__PURE__*/React.createElement(Slot, {
        label: "Producto \xB7 4:3"
      })
    }))))));
  }
  Object.assign(window, {
    Product
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ecommerce/Product.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
