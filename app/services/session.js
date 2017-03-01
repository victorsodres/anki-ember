import Ember from 'ember';

export default Ember.Service.extend({

  authenticate(data){
    let dataToHash = `${data.username}:${data.password}`
    return Ember.$.ajax({
      url: '/session',
      method: 'POST',
      headers: {
        "Authorization": `Basic ${btoa(dataToHash)}`
      }
    })
    .fail((error) => {
      alert('Usuario/senha inválidos');
    });
  },

  destroySession(){
    Ember.$.ajax('/session', { method: 'DELETE' }).then(() => window.location.reload());
  }

});
