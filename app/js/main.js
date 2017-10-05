
// document.onreadystatechange = function() {	
// 	if ( document.readyState === 'interactive' ) {
// 		console.log( 'readyState is interactive' );
// 	}
// };

var toDoPanel = new Vue( {
	el : '#toDoPanel',
	data : {
		newToDoItem : '',
		toDoListItems : [ 'Buy milk', 'Buy cheese' ]
	},
	methods : {
		addToToDoItem : addToToDoItem
	}
});

function addToToDoItem( newItem ) {
	console.log( 'addToToDoItem()' );
	console.log( 'addToToDoItem() - this.newToDoItem: ', this.newToDoItem );

	this.toDoListItems.push( this.newToDoItem );

	this.newToDoItem = '';
}