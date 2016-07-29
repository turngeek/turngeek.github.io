var disqus_shortname = 'turngeekpress';

(function() {
	// create div for disqus thread
	var scripts = document.getElementsByTagName('script');
	var myscript = scripts[scripts.length-1];
	var div = document.createElement("div");
	div.id = 'disqus_thread';
	myscript.parentNode.insertBefore(div, myscript);
	// parse name parameter if given
	var nameParam = myscript.dataset.name;
	if (typeof nameParam !== "undefined" ) {
		disqus_shortname = nameParam;
	}
	// embed disqus widget
	var dsq = document.createElement('script'); 
	dsq.type = 'text/javascript'; 
	dsq.async = true; 
	dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js'; 
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
