# m.js consists of two functions
1. function el, DOM manipulation
2. function dlg, dynamic popup for desktop browsers



# function el
| property | type | required | desc |
|---|---|---|---|
| a | tagname | required | html element tag name |
| b | parent | optional | parent of this element |
| c | textContent | optional | the text content of this element |
| d | atttributes | optional | the attributes of this element |
| e | event | optional | all of this element's event listeners |
| |
| return | this element |
| |

examples of use
===============

# 1.
```
const a = el({a:'div', b:document.body})
el({a:'button', b:a, c:'this is button', e:{click: a => { alert(a.target.textContent) } }})
```


# 2.
```
const a = el({a:'select', b:document.body, d:{ style:'border:none; padding:10px;' }, e:{ change: a => { alert(a.target.value) } } })
el({a:'option', b:a, c:'first option', d:{value:1 } })
el({a:'option', b:a, c:'second option', d:{value:2 } })
el({a:'option', b:a, c:'third option', d:{value:'three' } })
```

# 3.
```
el({a:'input', b:document.body, d:{type:'text', id:'textid', name:'textname', placeholder:'write here'}})
```


# 4.
```
el({
	a:'div',
	b:document.body,
	c:'hello world!',
	e:{
		mouseenter: a => { a.target.style.background = 'red' },
		mouseleave: a => { a.target.style.background = 'none' },
	}
})
```


# function dlg
| property | type | required | default value | desc |
|---|---|---|---|---|
| title | text | optional | title | title of this popup |
| left | px | optional | 32 | the left position of this component on the screen |
| top | px | optional | 16 | the left position of this component on the screen |
| width | px | optional | 300 | width of this component |
| height | px | optional | 200 | height of this component |
| |
| return | this component |
| |

examples of use
===============

# 1.
```
dlg()
```


# 2.
```
const a = dlg({title:'my menu'})
el({a:'button', b:a, c:'This button is in the popup' })
```


# 3.
```
const b = dlg({title:'custom popup'})
b.parentElement.style.background = 'blue'		// change pupup style
b.parentElement.children[0].style.background = 'yellow'	// change title style
b.parentElement.removeChild(a.previousElementSibling)	// remove close button
```


# 4.
- Click this popup to bring it to the top
- Click drag the title of this popup to move it
- This popup can be resized, by clicking and dragging the bottom right corner
