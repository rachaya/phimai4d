/* Hassadee Pimsuwan | http://hassadee.com */

/* =========================================================================================================
 This method is called once the system initialized and is ready to render the first time.
 It is therefore possible to execute custom action by overriding this method in your code.
 ========================================================================================================= */
window.onload = function() {
	var id = "x3dElement";
	var configure = document.getElementById(id);
	
	configure.runtime.showAll();
	configure.runtime.debug(false);
	configure.runtime.statistics(false);
	configure.runtime.processIndicator(true);
	configure.runtime.lightView(false);
}