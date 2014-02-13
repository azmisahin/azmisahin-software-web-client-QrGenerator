var app = angular.module('HtmlApp', []);

app.factory('Page', function ()
{
    var title = 'Qr Generator '+' Azmi ŞAHİN';
    var description = 'Google Api Chart Based Qr Generator ' + ' azmisahin.com';
    var author = 'bilgi@azmisahin.com';
    

    return {
        title: function () { return title; },
        setTitle: function (newTitle)
        {
            title = newTitle;
        },
        description: function () { return description; },
        setDescription: function (newDescription) {
            description = newDescription;
        },
        author: function () { return author; },
        setAuthor: function (newAuthor) {
            author = newAuthor;
        }
    };
});

function HtmlCtrl($scope, Page)
{
    $scope.Page = Page;
}