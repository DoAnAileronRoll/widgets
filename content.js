(function() {
	let template = document.createElement("template");
	template.innerHTML = `
<head>
</head>
<body/>
`;


	class Content extends HTMLElement {
		constructor() {
			super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			shadowRoot.appendChild(template.content.cloneNode(true));

			this._props = {};
			var _selectedItem;
		}

loadScreen(key, url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.id = key;
	iframe.style = "visibility: hidden; position:absolute; top:0px; left:0px; width:100%; height:100%; border: none; overflow: hidden;"
this.shadowRoot.appendChild(iframe);
 
    return "";
    }	  

setFilter(filter) {
    var iframe = this.shadowRoot.getElementById(this._selectedItem);
		if (iframe)
	{
	iframe.contentWindow.postMessage(filter,"*");
	}
var i, frames;
frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; ++i)
{
	if (this._selectedItem !== frames[i].id)
	{
	frames[i].contentWindow.postMessage(filter,"*");
	}
}	
    return "";
    }	 
		
showScreen(key, filter) {
	var rtn = false;

    var iframe = this.shadowRoot.getElementById(this._selectedItem);
	if (iframe)
	{
		iframe.style.visibility = "hidden";
	}

    iframe = this.shadowRoot.getElementById(key);
	if (iframe)
	{
        this._selectedItem = key;
		rtn = true;
		iframe.style.visibility = "visible";
	//	iframe.contentWindow.postMessage("globalFilter|BBFY=BBFY_2022","*")
	//	iframe.contentWindow.postMessage(filter,"*");
	}
	
    return rtn;
    }	 

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = {
				...this._props,
				...changedProperties
			};
		}
		onCustomWidgetAfterUpdate(changedProperties) {

		}
	}
	customElements.define("com-cbeyondata-content", Content);
})();
