function TodoCtrl($scope) {
	$scope.todos = [
		{text:'learn angular', done:true},
		{text:'build an angular Chrome packaged app', done:false}]

	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.todoText, done:false});
	}
}