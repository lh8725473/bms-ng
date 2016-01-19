angular.module('App.Resources').factory('User', [
    '$resource',
    'CONFIG',
    function(
        $resource,
        CONFIG
    ) {
        return $resource(CONFIG.API_ROOT + '/api/v1/accounts', {}, {
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