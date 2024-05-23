import { defaultColors, transparent } from './colors.js'
import { hexWithAlpha } from './utils.js'

const defaultTheme = {
  name: 'Monokai Peculiar',
  $schema: 'vscode://schemas/color-theme',
  type: 'dark',
  colors: {
    'activityBar.border': defaultColors.border[0],
    'activityBar.activeBorder': defaultColors.haze,
    'activityBar.background': defaultColors.background[0],
    'activityBar.foreground': defaultColors.haze,
    'activityBarBadge.background': defaultColors.haze,
    'activityBarBadge.foreground': defaultColors.background[0],

    'badge.background': defaultColors.haze,
    'badge.foreground': defaultColors.background[0],

    'button.background': defaultColors.haze,
    'button.foreground': defaultColors.background[0],

    'debugToolBar.background': defaultColors.background[0],

    'diffEditor.insertedTextBackground': defaultColors.diff.inserted,
    'diffEditor.removedTextBackground': defaultColors.diff.removed,

    'dropdown.background': defaultColors.background[1],
    'dropdown.listBackground': defaultColors.background[0],

    'editor.background': defaultColors.background[0],
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
    'editorGroup.border': defaultColors.border[0],
    'editorGroup.dropBackground': '#41433980',
    'editorGroupHeader.tabsBorder': defaultColors.border[0],
    'editorGroupHeader.noTabsBackground': defaultColors.background[0],
    'editorGroupHeader.tabsBackground': defaultColors.background[0],
    'editorHoverWidget.background': defaultColors.background[0],
    'editorHoverWidget.border': defaultColors.border[1],
    'editorIndentGuide.activeBackground1': '#767771',
    'editorIndentGuide.background1': defaultColors.whitespace,
    'editorLineNumber.activeForeground': defaultColors.foreground[0],
    'editorLineNumber.foreground': defaultColors.foreground[2],
    'editorSuggestWidget.background': defaultColors.background[0],
    'editorSuggestWidget.border': defaultColors.border[1],
    'editorSuggestWidget.selectedBackground': defaultColors.selection[0],
    'editorWhitespace.foreground': defaultColors.whitespace,
    'editorWidget.background': defaultColors.background[0],

    focusBorder: defaultColors.border[1],

    'input.background': defaultColors.background[1],
    'inputOption.activeBorder': defaultColors.border[1],
    'inputValidation.errorBackground': '#90274a',
    'inputValidation.errorBorder': defaultColors.razzmatazz,
    'inputValidation.infoBackground': '#546190',
    'inputValidation.infoBorder': '#819aff',
    'inputValidation.warningBackground': '#848528',
    'inputValidation.warningBorder': '#e2e22e',

    'list.activeSelectionBackground': hexWithAlpha(defaultColors.selection[1], 0.25),
    'list.dropBackground': defaultColors.background[1],
    'list.highlightForeground': defaultColors.haze,
    'list.hoverBackground': hexWithAlpha(defaultColors.selection[1], 0.25),
    'list.inactiveSelectionBackground': hexWithAlpha(defaultColors.selection[1], 0.2),

    'menu.background': defaultColors.background[0],
    'menu.border': defaultColors.border[0],
    'menu.foreground': defaultColors.foreground[0],

    'minimap.selectionHighlight': '#878b9180',

    'panel.border': defaultColors.border[0],

    'panelTitle.activeBorder': defaultColors.haze,
    'panelTitle.activeForeground': defaultColors.haze,
    'panelTitle.inactiveForeground': defaultColors.foreground[1],

    'peekView.border': defaultColors.border[1],
    'peekViewEditor.background': defaultColors.background[0],
    'peekViewEditor.matchHighlightBackground': defaultColors.oliveGray,
    'peekViewResult.background': defaultColors.background[0],
    'peekViewResult.matchHighlightBackground': defaultColors.oliveGray,
    'peekViewResult.selectionBackground': defaultColors.selection[0],
    'peekViewTitle.background': defaultColors.background[0],

    'pickerGroup.foreground': defaultColors.oliveGray,

    'ports.iconRunningProcessForeground': defaultColors.foreground[0],

    'progressBar.background': defaultColors.oliveGray,

    'quickInput.background': defaultColors.background[0],
    'quickInputList.focusBackground': defaultColors.selection[0],

    'scrollbar.shadow': transparent,
    'scrollbarSlider.activeBackground': hexWithAlpha(defaultColors.selection[1], 0.7),
    'scrollbarSlider.background': hexWithAlpha(defaultColors.selection[1], 0.4),
    'scrollbarSlider.hoverBackground': hexWithAlpha(defaultColors.selection[1], 0.6),

    'selection.background': '#878b9180',

    'settings.focusedRowBackground': defaultColors.selection[0],

    'sideBar.border': defaultColors.border[0],
    'sideBar.background': defaultColors.background[0],
    'sideBarSectionHeader.border': defaultColors.border[0],
    'sideBarSectionHeader.background': defaultColors.background[0],

    'statusBar.background': defaultColors.background[0],
    'statusBar.border': defaultColors.border[0],
    'statusBar.debuggingBackground': defaultColors.background[0],
    'statusBar.noFolderBackground': defaultColors.background[0],
    'statusBarItem.remoteBackground': defaultColors.background[0],
    'statusBarItem.remoteForeground': defaultColors.haze,
    'statusBarItem.remoteHoverForeground': defaultColors.haze,

    'tab.activeForeground': defaultColors.haze,
    'tab.activeBackground': defaultColors.background[0],
    'tab.activeBorder': defaultColors.haze,
    'tab.border': defaultColors.border[0],
    'tab.hoverBackground': hexWithAlpha(defaultColors.selection[1], 0.25),
    'tab.inactiveBackground': defaultColors.background[0],
    'tab.inactiveForeground': defaultColors.foreground[0],
    'tab.lastPinnedBorder': defaultColors.border[0],

    'terminal.ansiBlack': defaultColors.background[0],
    'terminal.ansiBlue': defaultColors.blue,
    'terminal.ansiBrightBlack': defaultColors.background[1],
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
    'terminal.background': defaultColors.background[0],
    'terminal.foreground': defaultColors.haze,
    'terminalCursor.background': defaultColors.haze,
    'terminalCursor.foreground': defaultColors.haze,

    'titleBar.border': defaultColors.border[0],
    'titleBar.activeBackground': defaultColors.background[0],
    'titleBar.inactiveBackground': defaultColors.background[0],

    'widget.border': defaultColors.border[0],
    'widget.shadow': defaultColors.shadow,
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
