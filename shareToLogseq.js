const
  d = document,
  w = window,
  f = 'logseq://x-callback-url/quickCapture',
  l = d.location,
  e = encodeURIComponent,
  s = `?url=${e(l.href)}&title=${e(d.title)}&content=${e(
    w.getSelection
      ? w.getSelection().toString()
      : d.getSelection
        ? d.getSelection()
        : d.selection.createRange().text
  )}&x-source=bm`;

const a = () => { l.href = f + s };

if (/Firefox/.test(navigator.userAgent)) {
  setTimeout(a, 0)
} else {
  a()
}

void (0)
