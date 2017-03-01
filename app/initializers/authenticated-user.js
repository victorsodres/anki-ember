
export function initialize(application) {

  application.deferReadiness();

  Ember.$.get(`/session`).then(user => {
    application.register('user:logged', user, { instantiate: false, singleton: true });
    application.inject('route', 'logged', 'user:logged');
    application.inject('component', 'logged', 'user:logged');
  }).fail(() => {
    if(window.location.pathname != "/") window.location.pathname = ""
    application.advanceReadiness();
  }).done(() => {
    application.advanceReadiness();
  });
}

export default {
  name: 'authenticated-user',
  initialize
};
