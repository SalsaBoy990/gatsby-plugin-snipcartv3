import React from 'react'

let warning = false
var linkToLangFile = null;

exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
	options = Object.assign({
		apiKey: process.env.GATSBY_SNIPCART_API_KEY,
		autopop: false,
		js: 'https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.js',
		styles: 'https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.css',
		lang: '' + linkToLangFile
	}, options)

	if(!options.apiKey){
		if (!warning) {
			warning = true
			console.log('No Snipcart API key found')
		}
		return
	}

	const components = [
		<script key='snipcartJs' src={options.js} id="snipcart" data-api-key={options.apiKey} data-autopop={options.autopop}></script>
	]
	}
	if (options.styles){
		components.push(<link key='snipcartStyle' href={options.styles} type="text/css" rel="stylesheet" />)
	}
	if (options.lang){
		components.push(_react2.default.createElement('script', { key: 'snipcartLanguage', src: options.lang }));
	}

	return setPostBodyComponents(components)
}
