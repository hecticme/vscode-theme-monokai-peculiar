import { defaultColors, transparent } from './colors.js'

const defaultTheme = {
  name: 'Monokai Peculiar',
  $schema: 'vscode://schemas/color-theme',
  type: 'dark',
  colors: {
    'activityBar.activeBorder': defaultColors.mainColor.monokaiHaze,
    'activityBar.background': defaultColors.background,
    'activityBar.foreground': defaultColors.mainColor.monokaiHaze,
    'activityBarBadge.background': defaultColors.mainColor.monokaiHaze,
    'activityBarBadge.foreground': defaultColors.background,

    'badge.background': defaultColors.mainColor.monokaiHaze,
    'badge.foreground': defaultColors.background,

    'button.background': defaultColors.mainColor.monokaiHaze,
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
    'editor.foreground': defaultColors.mainColor.monokaiHaze,
    'editor.hoverHighlightBackground': '#689d6a50',
    'editor.lineHighlightBackground': '#3c383660',
    'editor.selectionBackground': '#689d6a40',
    'editor.selectionHighlightBackground': '#fabd2f40',
    'editor.wordHighlightBackground': '#4a4a7680',
    'editor.wordHighlightStrongBackground': '#6a6a9680',
    'editorCursor.foreground': defaultColors.mainColor.monokaiHaze,
    'editorGroup.border': defaultColors.charcoal,
    'editorGroup.dropBackground': '#41433980',
    'editorGroupHeader.noTabsBackground': defaultColors.background,
    'editorGroupHeader.tabsBackground': defaultColors.background,
    'editorHoverWidget.background': defaultColors.background,
    'editorHoverWidget.border': defaultColors.oliveGray,
    'editorIndentGuide.activeBackground1': '#767771',
    'editorIndentGuide.background1': '#464741',
    'editorLineNumber.activeForeground': '#c2c2bf',
    'editorLineNumber.foreground': '#90908a',
    'editorSuggestWidget.background': defaultColors.background,
    'editorSuggestWidget.border': defaultColors.oliveGray,
    'editorSuggestWidget.selectedBackground': '#373c3d',
    'editorWhitespace.foreground': '#464741',
    'editorWidget.background': defaultColors.background,

    focusBorder: defaultColors.charcoalGray,

    'input.background': defaultColors.gunmetal,
    'inputOption.activeBorder': defaultColors.oliveGray,
    'inputValidation.errorBackground': '#90274a',
    'inputValidation.errorBorder': defaultColors.mainColor.razzmatazz,
    'inputValidation.infoBackground': '#546190',
    'inputValidation.infoBorder': '#819aff',
    'inputValidation.warningBackground': '#848528',
    'inputValidation.warningBorder': '#e2e22e',

    'list.activeSelectionBackground': defaultColors.blueGray,
    'list.dropBackground': defaultColors.gunmetal,
    'list.highlightForeground': defaultColors.mainColor.monokaiHaze,
    'list.hoverBackground': defaultColors.blueGray,
    'list.inactiveSelectionBackground': '#47526633',

    'menu.background': defaultColors.background,
    'menu.border': defaultColors.charcoal,
    'menu.foreground': defaultColors.charcoalGray,

    'minimap.selectionHighlight': '#878b9180',

    'panel.border': defaultColors.charcoal,

    'panelTitle.activeBorder': defaultColors.mainColor.monokaiHaze,
    'panelTitle.activeForeground': defaultColors.mainColor.monokaiHaze,
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
    'statusBarItem.remoteForeground': defaultColors.mainColor.monokaiHaze,
    'statusBarItem.remoteHoverForeground': defaultColors.mainColor.monokaiHaze,

    'tab.activeForeground': defaultColors.mainColor.monokaiHaze,
    'tab.activeBackground': defaultColors.background,
    'tab.activeBorder': defaultColors.mainColor.monokaiHaze,
    'tab.border': transparent,
    'tab.hoverBackground': defaultColors.blueGray,
    'tab.inactiveBackground': defaultColors.background,
    'tab.inactiveForeground': defaultColors.charcoalGray,
    'tab.lastPinnedBorder': defaultColors.charcoal,

    'terminal.ansiBlack': defaultColors.background,
    'terminal.ansiBlue': defaultColors.mainColor.monokaiBlue,
    'terminal.ansiBrightBlack': defaultColors.gunmetal,
    'terminal.ansiBrightBlue': defaultColors.mainColor.monokaiBlue,
    'terminal.ansiBrightCyan': defaultColors.mainColor.cyan,
    'terminal.ansiBrightGreen': defaultColors.mainColor.monokaiGreen,
    'terminal.ansiBrightMagenta': defaultColors.mainColor.lavendar,
    'terminal.ansiBrightRed': defaultColors.mainColor.razzmatazz,
    'terminal.ansiBrightWhite': defaultColors.mainColor.monokaiHaze,
    'terminal.ansiBrightYellow': defaultColors.mainColor.straw,
    'terminal.ansiCyan': defaultColors.mainColor.cyan,
    'terminal.ansiGreen': defaultColors.mainColor.monokaiGreen,
    'terminal.ansiMagenta': defaultColors.mainColor.lavendar,
    'terminal.ansiRed': defaultColors.mainColor.razzmatazz,
    'terminal.ansiWhite': defaultColors.mainColor.monokaiHaze,
    'terminal.ansiYellow': defaultColors.mainColor.straw,
    'terminal.background': defaultColors.background,
    'terminal.foreground': defaultColors.mainColor.monokaiHaze,
    'terminalCursor.background': defaultColors.mainColor.monokaiHaze,
    'terminalCursor.foreground': defaultColors.mainColor.monokaiHaze,

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
        foreground: defaultColors.mainColor.monokaiHaze,
      },
    },
    {
      scope: 'comment',
      settings: {
        foreground: '#88846F',
      },
    },
    {
      scope: 'string',
      settings: {
        foreground: defaultColors.mainColor.straw,
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: defaultColors.mainColor.razzmatazz,
      },
    },
    {
      scope: [
        'meta.template.expression',
      ],
      settings: {
        foreground: defaultColors.mainColor.monokaiHaze,
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: defaultColors.mainColor.lavendar,
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: defaultColors.mainColor.lavendar,
      },
    },
    {
      scope: 'constant.character, constant.other',
      settings: {
        foreground: defaultColors.mainColor.lavendar,
      },
    },
    {
      scope: 'variable',
      settings: {
        foreground: defaultColors.mainColor.monokaiHaze,
        fontStyle: '',
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: defaultColors.mainColor.razzmatazz,
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: defaultColors.mainColor.razzmatazz,
        fontStyle: '',
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: defaultColors.mainColor.monokaiBlue,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.type, entity.name.class, entity.name.namespace, entity.name.scope-resolution',
      settings: {
        foreground: defaultColors.mainColor.emerald,
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: defaultColors.mainColor.emerald,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: defaultColors.mainColor.monokaiGreen,
        fontStyle: '',
      },
    },
    {
      scope: 'variable.parameter',
      settings: {
        foreground: defaultColors.mainColor.monokaiOrange,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: defaultColors.mainColor.razzmatazz,
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: defaultColors.mainColor.monokaiGreen,
        fontStyle: '',
      },
    },
    {
      scope: 'support.function',
      settings: {
        foreground: defaultColors.mainColor.monokaiBlue,
        fontStyle: '',
      },
    },
    {
      scope: 'support.constant',
      settings: {
        foreground: defaultColors.mainColor.monokaiBlue,
        fontStyle: '',
      },
    },
    {
      scope: 'support.type, support.class',
      settings: {
        foreground: defaultColors.mainColor.monokaiBlue,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'support.class.component',
      settings: {
        foreground: defaultColors.mainColor.emerald,
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
        foreground: defaultColors.mainColor.monokaiHaze,
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
        foreground: defaultColors.mainColor.razzmatazz,
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: defaultColors.mainColor.monokaiGreen,
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: defaultColors.mainColor.straw,
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
        foreground: defaultColors.mainColor.straw,
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: defaultColors.mainColor.razzmatazz,
      },
    },
    {
      scope: 'markup.list',
      settings: {
        foreground: defaultColors.mainColor.straw,
      },
    },
    {
      scope: 'markup.bold, markup.italic',
      settings: {
        foreground: defaultColors.mainColor.monokaiBlue,
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: defaultColors.mainColor.monokaiOrange,
        fontStyle: '',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: defaultColors.mainColor.monokaiGreen,
      },
    },
    {
      scope: 'markup.heading.setext',
      settings: {
        foreground: defaultColors.mainColor.monokaiGreen,
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
        foreground: defaultColors.mainColor.lavendar,
      },
    },
    {
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: defaultColors.mainColor.straw,
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
        foreground: defaultColors.mainColor.monokaiHaze,
      },
    },
    {
      scope: [
        'punctuation.definition.list.begin.markdown',
      ],
      settings: {
        foreground: defaultColors.mainColor.monokaiGreen,
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
        foreground: defaultColors.mainColor.monokaiOrange,
      },
    },
    {
      scope: 'entity.name.type.instance.jsdoc',
      settings: {
        foreground: defaultColors.mainColor.emerald,
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
