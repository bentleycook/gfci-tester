/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: 'Test Button',
      condition: 'always',
      callback: function(t) {
        console.log('Test board button clicked.')
      },
    }];
  },
  'board-buttons': function(t, options) {
    return [{
      text: 'Test Button',
      condition: 'always',
      callback: function (t) {
        console.log('Test board button clicked.')
      },
    }];
  },
  'card-back-section': function(t, options) {
    return [{
      title: 'Test Section',
      icon: './icon-white.svg',
      content: {
        type: 'iframe',
        url: './section.html',
        height: 100
      },
    }]
  },
  'card-badges': function (t, options) {
    return [{
      text: 'Test Badge ' + (Math.random() * 100).toFixed(0).toString(),
      icon: './icon-white.svg',
      color: 'green',
    }]
  },
  'card-detail-badges': function (t, options) {
    return [{
      title: 'Test Badge',
      text: 'Test: ' + (Math.random() * 100).toFixed(0).toString(),
      icon: './icon-white.svg',
      color: 'blue',
      callback: function (t) {
        console.log('Test card detail badge clicked.')
      },
    }];
  },
  'list-actions': function (t) {
    return [{
      text: "Test List Action",
      callback: function (t) {
        console.log('Test list action clicked.')
      }
    }];
  },
  'list-sorters': function (t, options) {
    return [{
      text: 'Test List Action',
      callback: function(t, opts) {
        return { sortedIds: opts.cards.map(function (c) { return c.id; }) }
      },
    }];
  },
});
