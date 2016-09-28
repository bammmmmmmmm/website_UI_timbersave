
angular.module("angular_scripts", [])
    .controller("mainCtrl", ["$scope", function($scope) {



        $scope.sortType = "id";
        $scope.sortReverse = false;
        $scope.searchBox ="";
        $scope.retrievedCases = [{"id":1,"solnName":"soln2","locn": {"city":"dallas","state":"texas","country":"usa","region":"usa"}},
                                                    {"id":2,"solnName":"soln3","locn": {"city":"dallas","state":"texas","country":"usa","region":"usa"}},
                                                    {"id":3,"solnName":"soln3","locn": {"city":"dallas","state":"texas","country":"usa","region":"usa"}},
                                                    {"id":4,"solnName":"soln3","locn": {"city":"huston","state":"texas","country":"usa","region":"usa"}},
                                                    {"id":5,"solnName":"soln8","locn": {"city":"huston","state":"texas","country":"usa","region":"usa"}},
                                                    {"id":6,"solnName":"soln6","locn": {"city":"atlanta","state":"georgia","country":"usa","region":"usa"}},
                                                    {"id":7,"solnName":"soln8","locn": {"city":"boston","state":"massachusetts","country":"usa","region":"usa"}},
                                                    {"id":8,"solnName":"soln1","locn": {"city":"boston","state":"massachusetts","country":"usa","region":"usa"}},
                                                    {"id":9,"solnName":"soln9","locn": {"city":"galway","state":"galway","country":"ireland","region":"emea"}},
                                                    {"id":10,"solnName":"soln8","locn": {"city":"galway","state":"galway","country":"ireland","region":"emea"}},
                                                    {"id":11,"solnName":"soln1","locn": {"city":"galway","state":"galway","country":"ireland","region":"emea"}},
                                                    {"id":12,"solnName":"soln8","locn": {"city":"galway","state":"galway","country":"ireland","region":"emea"}},
                                                    {"id":13,"solnName":"soln9","locn": {"city":"galway","state":"galway","country":"ireland","region":"emea"}},
                                                    {"id":14,"solnName":"soln1","locn": {"city":"chennai","state":"chennai","country":"india","region":"apj"}}
                                                ];

     }]);