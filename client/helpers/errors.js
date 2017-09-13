/**
 * Created by user on 14.8.17.
 */
// Локальная коллекция, доступна только на клиенте
Errors = new Meteor.Collection(null);

throwError = function(message) {
    Errors.insert({message: message})
};
// clearErrors = function() {
//     Errors.remove({seen: true});
// };
// Template.errors.helpers({
//     errors: function() {
//         return Errors.find();
//     }
// });
// Template.error.rendered = function() {
//     var error = this.data;
//     Meteor.defer(function() {
//         Errors.update(error._id, {$set: {seen: true}});
//     });
// };
