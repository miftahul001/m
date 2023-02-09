const el= a =>{
	a.g = [
		document,
		Object,
		'addEventListener',
		'appendChild',
		'createElement',
		'forEach',
		'keys',
		'setAttribute',
		'textContent',
	]
	a.f = a.g[0][a.g[4]](a.a)
	a.c && (a.f[a.g[8]] = a.c)
	a.d && a.g[1][a.g[6]](a.d)[a.g[5]](d => {
			a.f[a.g[7]](d, a.d[d])
		})
	a.e && a.g[1][a.g[6]](a.e)[a.g[5]](e => {
			a.f[a.g[2]](e, a.e[e])
		})
	a.b && a.b[a.g[3]](a.f)
	return a.f
};
const dlg = a => {
	(a = a || {}).a = [
		document,
		window,
		'addEventListener',
		'appendChild',
		'body',
		'clientX',
		'clientY',
		'event',
		'lastElementChild',
		'left',
		'mousemove',
		'mouseup',
		'offsetLeft',
		'offsetTop',
		'parentElement',
		'preventDefault',
		'removeChild',
		'removeEventListener',
		'stopPropagation',
		'style',
		'target',
		'top',
	]
	const b = {
		a: a.a,
		x: 0,
		y: 0,
		b: el({
			a: 'div',
			b: a.a[0][a.a[4]],
			d: {
				style: `top:${a ? a.top || 16 : 16}px;left:${a ? a.left || 32 : 32}px;background:rgba(255,255,255,.6);border-radius:8px;box-shadow:0 0 6px 2px rgba(0,0,0,.1);position:fixed;padding:12px 16px 16px 16px;`,
			},
			e: {
				mousedown: e => {
					e[b.a[18]]()
					b.bt()
				},
			},
		}),
		bt: () => {
			b.a[0][b.a[4]][b.a[8]] !== b.b && b.a[0][b.a[4]][b.a[3]](b.b)
		},
		st: st => {
			st = st || b.a[1][b.a[7]]
			st[b.a[15]]()
			st[b.a[18]]()
			b.x = st[b.a[5]]
			b.y = st[b.a[6]]
			b.bt()
			b.a[0][b.a[2]](b.a[11], b.ed)
			b.a[0][b.a[2]](b.a[10], b.mv)
		},
		mv: mv => {
			mv = mv || b.a[1][b.a[7]]
			mv[b.a[15]]()
			b.b[b.a[19]][b.a[21]] = b.b[b.a[13]] - b.y + mv[b.a[6]] + 'px'
			b.b[b.a[19]][b.a[9]] = b.b[b.a[12]] - b.x + mv[b.a[5]] + 'px'
			b.x = mv[b.a[5]]
			b.y = mv[b.a[6]]
		},
		ed: () => {
			b.a[0][b.a[17]](b.a[11], b.ed)
			b.a[0][b.a[17]](b.a[10], b.mv)
		},
	}
	b.ct = el({
		a: 'div',
		b: el({
			a: 'div',
			b: el({
				a: 'h4',
				c: a ? a.title || 'title' : 'title',
				b: b.b,
				d: {
					style: 'background:rgba(0,0,0,.8);border-radius:6px;color:rgba(255,255,255,.8);cursor:grab;margin:0 0 12px 0;padding:8px 48px 8px 32px;text-align:center;',
				},
				e: { mousedown: b.st },
			})[b.a[14]],
			c: 'x',
			d: {
				style: 'background:rgba(255,255,255,.8);border-radius:4px;cursor:default;font-weight:bold;padding:4px;position:absolute;text-align:center;top:16px;right:22px;',
			},
			e: {
				click: e => {
					e[b.a[18]]()
					b.a[0][b.a[4]][b.a[16]](e[b.a[20]][b.a[14]])
				},
			},
		})[b.a[14]],
		d: {
			style: `width:${a ? a.width || 400 : 400}px;height:${a ? a.height || 320 : 320}px;background:rgba(255,255,255,.8);border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:8px;min-width:80px;min-height:48px;resize:both;overflow:scroll;`,
		},
	})
	return b
}
