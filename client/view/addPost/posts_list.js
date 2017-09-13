
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});
Template._loginButtonsLoggedOutDropdown.rendered = function() {
    $('.dropdown-toggle').dropdown()
}

Template._loginButtonsLoggedInDropdown.rendered = function() {
    $('.dropdown-toggle').dropdown()
}