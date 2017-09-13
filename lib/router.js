Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('comments'), Meteor.subscribe('notifications')]; }
});
// Router.route('/profile',{
//     waitOn: function () {
//         return Meteor.subscribe('images')
//     },
//     action: function () {
//         if (this.ready())
//             this.render('Profile');
//     else
//         this.render('Loading');
//     }
// });
Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    waitOn: function() {
        return Meteor.subscribe('comments', this.params._id);
    },
    data: function() {
        return Posts.findOne(this.params._id);
    }
});
Router.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});
Router.route('/messageView', {
    name: 'messageView',
    // data: function() {
    //     return Posts.findOne(this.params._id);
    // }
});

Router.route('/submit', {
    name: 'postSubmit'
});
Router.route('/profile', {
    name: 'profile',
    waitOn: function () {
        return Meteor.subscribe('images')},
    action: function () {
        if (this.ready())
            this.render('profile');
        else
            this.render('Loading');
        }
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(requireLogin, {only: 'profile'});


// Router.before(function() { clearErrors() });