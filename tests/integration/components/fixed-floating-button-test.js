import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fixed-floating-button', 'Integration | Component | fixed floating button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fixed-floating-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fixed-floating-button}}
      template block text
    {{/fixed-floating-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
