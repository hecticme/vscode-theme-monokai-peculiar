import { defaultColors, transparent } from './colors.js'

const defaultTheme = {
  name: 'Monokai Peculiar',
  $schema: 'vscode://schemas/color-theme',
  type: 'dark',
  colors: {
    'activityBar.activeBorder': defaultColors.haze,
    'activityBar.background': defaultColors.background,
    'activityBar.foreground': defaultColors.haze,
    'activityBarBadge.background': defaultColors.haze,
    'activityBarBadge.foreground': defaultColors.background,

    'badge.background': defaultColors.haze,
    'badge.foreground': defaultColors.background,

    'button.background': defaultColors.haze,
    'button.foreground': defaultColors.background,

    'debugToolBar.background': defaultColors.swamp,

    'diffEditor.insertedTextBackground': defaultColors.diff.inserted,
    'diffEditor.removedTextBackground': defaultColors.diff.removed,

    'dropdown.background': defaultColors.gunmetal,
    'dropdown.listBackground': defaultColors.swamp,

    'editor.background': defaultColors.background,
    'editor.findMatchBackground': '#83a59870',
    'editor.findMatchHighlightBackground': '#fe801930',
    'editor.findRangeHighlightBackground': '#83a59870',
    'editor.foreground': defaultColors.haze,
    'editor.hoverHighlightBackground': '#689d6a50',
    'editor.lineHighlightBackground': '#3c383660',
    'editor.selectionBackground': '#689d6a40',
    'editor.selectionHighlightBackground': '#fabd2f40',
    'editor.wordHighlightBackground': '#4a4a7680',
    'editor.wordHighlightStrongBackground': '#6a6a9680',
    'editorCursor.foreground': defaultColors.haze,
    'editorGroup.border': defaultColors.charcoal,
    'editorGroup.dropBackground': '#41433980',
    'editorGroupHeader.noTabsBackground': defaultColors.background,
    'editorGroupHeader.tabsBackground': defaultColors.background,
    'editorHoverWidget.background': defaultColors.background,
    'editorHoverWidget.border': defaultColors.oliveGray,
    'editorIndentGuide.activeBackground1': '#767771',
    'editorIndentGuide.background1': defaultColors.whitespace,
    'editorLineNumber.activeForeground': '#c2c2bf',
    'editorLineNumber.foreground': '#90908a',
    'editorSuggestWidget.background': defaultColors.background,
    'editorSuggestWidget.border': defaultColors.oliveGray,
    'editorSuggestWidget.selectedBackground': '#373c3d',
    'editorWhitespace.foreground': defaultColors.whitespace,
    'editorWidget.background': defaultColors.background,

    focusBorder: defaultColors.charcoalGray,

    'input.background': defaultColors.gunmetal,
    'inputOption.activeBorder': defaultColors.oliveGray,
    'inputValidation.errorBackground': '#90274a',
    'inputValidation.errorBorder': defaultColors.razzmatazz,
    'inputValidation.infoBackground': '#546190',
    'inputValidation.infoBorder': '#819aff',
    'inputValidation.warningBackground': '#848528',
    'inputValidation.warningBorder': '#e2e22e',

    'list.activeSelectionBackground': defaultColors.blueGray,
    'list.dropBackground': defaultColors.gunmetal,
    'list.highlightForeground': defaultColors.haze,
    'list.hoverBackground': defaultColors.blueGray,
    'list.inactiveSelectionBackground': '#47526633',

    'menu.background': defaultColors.background,
    'menu.border': defaultColors.charcoal,
    'menu.foreground': defaultColors.charcoalGray,

    'minimap.selectionHighlight': '#878b9180',

    'panel.border': defaultColors.charcoal,

    'panelTitle.activeBorder': defaultColors.haze,
    'panelTitle.activeForeground': defaultColors.haze,
    'panelTitle.inactiveForeground': defaultColors.oliveGray,

    'peekView.border': defaultColors.oliveGray,
    'peekViewEditor.background': defaultColors.background,
    'peekViewEditor.matchHighlightBackground': defaultColors.oliveGray,
    'peekViewResult.background': defaultColors.background,
    'peekViewResult.matchHighlightBackground': defaultColors.oliveGray,
    'peekViewResult.selectionBackground': defaultColors.rifleGreen,
    'peekViewTitle.background': defaultColors.background,

    'pickerGroup.foreground': defaultColors.oliveGray,

    'ports.iconRunningProcessForeground': '#ccccc7',

    'progressBar.background': defaultColors.oliveGray,

    'quickInput.background': defaultColors.background,
    'quickInputList.focusBackground': '#373c3d',

    'scrollbar.shadow': transparent,
    'scrollbarSlider.activeBackground': '#565b66b3',
    'scrollbarSlider.background': '#565b6666',
    'scrollbarSlider.hoverBackground': '#565b6699',

    'selection.background': '#878b9180',

    'settings.focusedRowBackground': '#2c2c2b',

    'sideBar.background': defaultColors.background,
    'sideBarSectionHeader.background': defaultColors.background,

    'statusBar.background': defaultColors.background,
    'statusBar.debuggingBackground': defaultColors.background,
    'statusBar.noFolderBackground': defaultColors.background,
    'statusBarItem.remoteBackground': defaultColors.background,
    'statusBarItem.remoteForeground': defaultColors.haze,
    'statusBarItem.remoteHoverForeground': defaultColors.haze,

    'tab.activeForeground': defaultColors.haze,
    'tab.activeBackground': defaultColors.background,
    'tab.activeBorder': defaultColors.haze,
    'tab.border': transparent,
    'tab.hoverBackground': defaultColors.blueGray,
    'tab.inactiveBackground': defaultColors.background,
    'tab.inactiveForeground': defaultColors.charcoalGray,
    'tab.lastPinnedBorder': defaultColors.charcoal,

    'terminal.ansiBlack': defaultColors.background,
    'terminal.ansiBlue': defaultColors.blue,
    'terminal.ansiBrightBlack': defaultColors.gunmetal,
    'terminal.ansiBrightBlue': defaultColors.blue,
    'terminal.ansiBrightCyan': defaultColors.cyan,
    'terminal.ansiBrightGreen': defaultColors.green,
    'terminal.ansiBrightMagenta': defaultColors.lavendar,
    'terminal.ansiBrightRed': defaultColors.razzmatazz,
    'terminal.ansiBrightWhite': defaultColors.haze,
    'terminal.ansiBrightYellow': defaultColors.straw,
    'terminal.ansiCyan': defaultColors.cyan,
    'terminal.ansiGreen': defaultColors.green,
    'terminal.ansiMagenta': defaultColors.lavendar,
    'terminal.ansiRed': defaultColors.razzmatazz,
    'terminal.ansiWhite': defaultColors.haze,
    'terminal.ansiYellow': defaultColors.straw,
    'terminal.background': defaultColors.background,
    'terminal.foreground': defaultColors.haze,
    'terminalCursor.background': defaultColors.haze,
    'terminalCursor.foreground': defaultColors.haze,

    'titleBar.activeBackground': defaultColors.background,
    'titleBar.inactiveBackground': defaultColors.background,

    'widget.border': defaultColors.rifleGreen,
    'widget.shadow': '#00000098',
  },
  tokenColors: [
    {
      scope: [
        'meta.embedded',
        'source.groovy.embedded',
        'string meta.image.inline.markdown',
        'variable.legacy.builtin.python',
      ],
      settings: {
        foreground: defaultColors.haze,
      },
    },
    {
      scope: 'comment',
      settings: {
        foreground: defaultColors.comment,
      },
    },
    {
      scope: 'string',
      settings: {
        foreground: defaultColors.straw,
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: defaultColors.razzmatazz,
      },
    },
    {
      scope: [
        'meta.template.expression',
      ],
      settings: {
        foreground: defaultColors.haze,
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: defaultColors.lavendar,
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: defaultColors.lavendar,
      },
    },
    {
      scope: 'constant.character, constant.other',
      settings: {
        foreground: defaultColors.lavendar,
      },
    },
    {
      scope: 'variable',
      settings: {
        foreground: defaultColors.haze,
        fontStyle: '',
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: defaultColors.razzmatazz,
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: defaultColors.razzmatazz,
        fontStyle: '',
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: defaultColors.blue,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.type, entity.name.class, entity.name.namespace, entity.name.scope-resolution',
      settings: {
        foreground: defaultColors.emerald,
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: defaultColors.emerald,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: defaultColors.green,
        fontStyle: '',
      },
    },
    {
      scope: 'variable.parameter',
      settings: {
        foreground: defaultColors.orange,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: defaultColors.razzmatazz,
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: defaultColors.green,
        fontStyle: '',
      },
    },
    {
      scope: 'support.function',
      settings: {
        foreground: defaultColors.blue,
        fontStyle: '',
      },
    },
    {
      scope: 'support.constant',
      settings: {
        foreground: defaultColors.blue,
        fontStyle: '',
      },
    },
    {
      scope: 'support.type, support.class',
      settings: {
        foreground: defaultColors.blue,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'support.class.component',
      settings: {
        foreground: defaultColors.emerald,
        fontStyle: '',
      },
    },
    {
      scope: 'support.other.variable',
      settings: {
        fontStyle: '',
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: defaultColors.crimson,
        fontStyle: '',
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        foreground: defaultColors.crimson,
      },
    },
    {
      scope: 'meta.structure.dictionary.json string.quoted.double.json',
      settings: {
        foreground: defaultColors.haze,
      },
    },
    {
      scope: 'meta.diff, meta.diff.header',
      settings: {
        foreground: defaultColors.oliveGray,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: defaultColors.razzmatazz,
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: defaultColors.green,
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: defaultColors.straw,
      },
    },
    {
      scope: 'constant.numeric.line-number.find-in-files - match',
      settings: {
        foreground: '#AE81FFA0',
      },
    },
    {
      scope: 'entity.name.filename.find-in-files',
      settings: {
        foreground: defaultColors.straw,
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: defaultColors.razzmatazz,
      },
    },
    {
      scope: 'markup.list',
      settings: {
        foreground: defaultColors.straw,
      },
    },
    {
      scope: 'markup.bold, markup.italic',
      settings: {
        foreground: defaultColors.blue,
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: defaultColors.orange,
        fontStyle: '',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: defaultColors.green,
      },
    },
    {
      scope: 'markup.heading.setext',
      settings: {
        foreground: defaultColors.green,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.heading.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.quote.markdown',
      settings: {
        foreground: defaultColors.oliveGray,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: defaultColors.lavendar,
      },
    },
    {
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: defaultColors.straw,
      },
    },
    {
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.list.unnumbered.markdown, markup.list.numbered.markdown',
      settings: {
        foreground: defaultColors.haze,
      },
    },
    {
      scope: [
        'punctuation.definition.list.begin.markdown',
      ],
      settings: {
        foreground: defaultColors.green,
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796E6',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#CD9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: defaultColors.crimson,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#B267E6',
      },
    },
    {
      scope: 'variable.language',
      settings: {
        foreground: defaultColors.orange,
      },
    },
    {
      scope: 'entity.name.type.instance.jsdoc',
      settings: {
        foreground: defaultColors.emerald,
        fontStyle: '',
      },
    },
    {
      scope: 'support.type.property-name.json.comments, support.type.property-name.json',
      settings: {
        fontStyle: '',
      },
    },
  ],
  semanticHighlighting: true,
}

export {
  defaultTheme,
}
