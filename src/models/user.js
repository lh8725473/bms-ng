angular.module('App.Models').factory('User', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('/api/v1/accounts', {}, {
            query: {
                method: "GET",
                params: {
                    action: 'list'
                },
                isArray: true
            },
            getUser: {
                method: "GET",
                params: {

                }
            },
            'delete': {
                method: "DELETE",
                params: {
                    action: 'delete',
                    id: ''
                }
            }

        })
    }
])