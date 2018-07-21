'use babel';

import ExpectView from './expect-view';
import { CompositeDisposable } from 'atom';

export default {

  expectView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.expectView = new ExpectView(state.expectViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.expectView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'expect:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.expectView.destroy();
  },

  serialize() {
    return {
      expectViewState: this.expectView.serialize()
    };
  },

  toggle() {
  let editor
  if (editor = atom.workspace.getActiveTextEditor()) {
    let selection = editor.getSelectedText()
    let reversed = selection.split('').reverse().join('')
    editor.insertText(reversed)
  }
}

};
