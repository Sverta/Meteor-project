// import { Messages } from '../../../lib/collections/message.js';
//
// Template.imageView.helpers({
//     messages() {
//         return Messages.find();
//     },
// });
//
// Template.imageView.events({
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


Template.messageView.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            postId: template.data._id
        };

        Meteor.call('message', message, function(error, commentId) {
            if (error){
                throwError(error.reason);
            } else {
                $body.val('');
            }
        });
    }
});