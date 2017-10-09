
// document.onreadystatechange = function() {	
// 	if ( document.readyState === 'interactive' ) {
// 		console.log( 'readyState is interactive' );
// 	}
// };

var taskPanel = new Vue( {
	el : '#taskPanel',
	data : {
		newTaskItem : '',
		taskItems : [
			{ id : 0, title : 'Buy milk' },
			{ id : 1, title : 'Buy cheese' }
		],
		nextTaskItemId : 2
	},
	methods : {
		addTask : addTask,
		removeTask : removeTask,
		findIndexFromId : findIndexFromId
	}
});

function addTask() {
	console.log( 'addTask()' );
	console.log( 'addTask() - this.newTaskItem: ', this.newTaskItem );

	if ( this.newTaskItem !== '' ) {
		console.log( 'addTask() - this.taskItems(1): ', this.taskItems );
		
		this.taskItems.push( 
			{ 
				id : this.nextTaskItemId++ , 
				title : this.newTaskItem 
			} 
		);

		console.log( 'addTask() - this.taskItems(2): ', this.taskItems );

		this.newTaskItem = '';
	}
}

function removeTask( id ) {
	console.log( 'removeTask()' );
	console.log( 'removeTask() - id: ', id );

	console.log( 'removeTask() - this.taskItems(1): ', this.taskItems );

	var index = this.findIndexFromId( id );
	this.taskItems.splice( index, 1 );

	console.log( 'removeTask() - this.taskItems(2): ', this.taskItems );	
}

function findIndexFromId( id ) {
	return this.taskItems.findIndex( function( task ) {
		return id === task.id; 
	} );
}