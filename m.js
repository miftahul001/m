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
const dlg=a=>{
	(a=a||{}).a=[document,window,'addEventListener','appendChild','body','clientX','clientY','event','lastElementChild','left','mousemove','mouseup','offsetLeft','offsetTop','parentElement','preventDefault','removeChild','removeEventListener','stopPropagation','style','target','top']
	const b=[
		a.a,0,0,
		el({a:'div', b:a.a[0][a.a[4]], d:{style:`top:${a?a.top||16:16}px;left:${a?a.left||32:32}px;background:rgba(255,255,255,.6);border-radius:8px;box-shadow:0 0 6px 2px rgba(0,0,0,.1);position:fixed;padding:12px 16px 16px 16px;`}, e:{mousedown:e=>{e[b[0][18]]();b[4]()}}}),
		a=>{b[0][0][b[0][4]][b[0][8]]!==b[3]&&b[0][0][b[0][4]][b[0][3]](b[3])},
		a=>{
			a=a||b[0][1][b[0][7]]
			a[b[0][15]]()
			a[b[0][18]]()
			b[1]=a[b[0][5]]
			b[2]=a[b[0][6]]
			b[4]()
			b[0][0][b[0][2]](b[0][11],b[7])
			b[0][0][b[0][2]](b[0][10],b[6])
		},
		a=>{
			a=a||b[0][1][b[0][7]]
			a[b[0][15]]()
			b[3][b[0][19]][b[0][21]]=(b[3][b[0][13]]-b[2]+a[b[0][6]])+"px"
			b[3][b[0][19]][b[0][9]]=(b[3][b[0][12]]-b[1]+a[b[0][5]])+"px"
			b[1]=a[b[0][5]]
			b[2]=a[b[0][6]]
		},
		a=>{b[0][0][b[0][17]](b[0][11],b[7]);b[0][0][b[0][17]](b[0][10],b[6])},
	]
	return {b:b[3],ct:el({a:'div', b:el({a:'div', b:el({a:'h4', c:a?a.title||'title':'title', b:b[3], d:{style:'background:rgba(0,0,0,.8);border-radius:6px;color:rgba(255,255,255,.8);cursor:grab;margin:0 0 12px 0;padding:8px 48px 8px 32px;text-align:center;'}, e:{mousedown:b[5]}})[b[0][14]], c:'x', d:{style:'background:rgba(255,255,255,.8);border-radius:4px;cursor:default;font-weight:bold;padding:4px;position:absolute;text-align:center;top:16px;right:22px;'}, e:{click:e=>{e[b[0][18]]();b[0][0][b[0][4]][b[0][16]](e[b[0][20]][b[0][14]])}}})[b[0][14]], d:{style:`width:${a?a.width||400:400}px;height:${a?a.height||320:320}px;background:rgba(255,255,255,.8);border:1px solid rgba(0,0,0,.1);border-radius:8px;padding:8px;min-width:80px;min-height:48px;resize:both;overflow:scroll;`}})}
}
