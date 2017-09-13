// Template.message.events({
//     'submit form': function(e) {
//         e.preventDefault();
//
//         var addMessage = {
//             text: $(e.target).find('[name=text]').val()
//         };
//
//         addMessage._id = Posts.insert(addMessage);
//         Router.go('message', addMessage);
//     }
// });


// Template.message_view.helpers({
//     messages() {
//         return Messages.find();
//     },
// });
//
// Template.message_view.events({
//     'submit .new-message'(event) {
//         // Prevent default browser form submit
//         event.preventDefault();
//
//         // Get value from form element
//         const target = event.target;
//         const text = target.text.value;
//
//         // Insert a message into the collection
//         Messages.insert({
//             text,
//             createdAt: new Date(), // current time
//             owner: Meteor.userId(),
//             username: Meteor.user().username,
//         });
//
//         // Clear form
//         target.text.value = '';
//
//         // scroll to last message
//         $('.panel-body').scrollTop($('.media-list').height())
//     },
// });