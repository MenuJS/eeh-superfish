(function (angular) {
    'use strict';

    var SuperfishDirective = function () {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                var menuElement = element.find('> nav > ul');
                menuElement.addClass('sf-menu');
                var config = attributes.eehSuperfish !== "" ? angular.fromJson(attributes.eehSuperfish) : {};
                scope.$on('$includeContentLoaded', function () {
                    menuElement.superfish(config);
                });
            }
        };
    };

    angular.module('eehSuperfish', []).directive('eehSuperfish', SuperfishDirective);
})(angular);
