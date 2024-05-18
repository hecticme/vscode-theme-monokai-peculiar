import { defaultColors } from './colors.js'

const defaultTheme = {
  name: 'Monokai Peculiar',
  $schema: 'vscode://schemas/color-theme',
  type: 'dark',
  colors: {
    'activityBar.activeBorder': defaultColors.mainColor.monokaiHaze,
    'activityBar.background': defaultColors.eerieBlack,
    'activityBar.foreground': defaultColors.mainColor.monokaiHaze,
    'activityBarBadge.background': defaultColors.mainColor.monokaiHaze,
    'activityBarBadge.foreground': defaultColors.eerieBlack,

    'badge.background': defaultColors.mainColor.monokaiHaze,
    'badge.foreground': defaultColors.eerieBlack,

    'button.background': defaultColors.mainColor.monokaiHaze,
    'button.foreground': defaultColors.eerieBlack,

    'debugToolBar.background': '#1e1f1c',

    'diffEditor.insertedTextBackground': '#4b661680',
    'diffEditor.removedTextBackground': '#90274a70',

    'dropdown.background': '#282b2b',
    'dropdown.listBackground': '#1e1f1c',

    'editor.background': defaultColors.eerieBlack,
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
    'editorCursor.foreground': '#f8f8f0',
    'editorGroup.border': '#414339',
    'editorGroup.dropBackground': '#41433980',
    'editorGroupHeader.noTabsBackground': defaultColors.eerieBlack,
    'editorGroupHeader.tabsBackground': defaultColors.eerieBlack,
    'editorHoverWidget.background': defaultColors.eerieBlack,
    'editorHoverWidget.border': '#75715e',
    'editorIndentGuide.activeBackground1': '#767771',
    'editorIndentGuide.background1': '#464741',
    'editorLineNumber.activeForeground': '#c2c2bf',
    'editorLineNumber.foreground': '#90908a',
    'editorSuggestWidget.background': defaultColors.eerieBlack,
    'editorSuggestWidget.border': '#75715e',
    'editorSuggestWidget.selectedBackground': '#373c3d',
    'editorWhitespace.foreground': '#464741',
    'editorWidget.background': defaultColors.eerieBlack,

    focusBorder: '#75715e',

    'input.background': '#282b2b',
    'inputOption.activeBorder': '#75715e',
    'inputValidation.errorBackground': '#90274a',
    'inputValidation.errorBorder': '#f92672',
    'inputValidation.infoBackground': '#546190',
    'inputValidation.infoBorder': '#819aff',
    'inputValidation.warningBackground': '#848528',
    'inputValidation.warningBorder': '#e2e22e',

    'list.activeSelectionBackground': '#47526640',
    'list.dropBackground': '#282b2b',
    'list.highlightForeground': defaultColors.mainColor.monokaiHaze,
    'list.hoverBackground': '#47526640',
    'list.inactiveSelectionBackground': '#47526633',

    'menu.background': defaultColors.eerieBlack,
    'menu.border': '#414339',
    'menu.foreground': '#cccccc',

    'minimap.selectionHighlight': '#878b9180',

    'panel.border': '#414339',

    'panelTitle.activeBorder': defaultColors.mainColor.monokaiHaze,
    'panelTitle.activeForeground': defaultColors.mainColor.monokaiHaze,
    'panelTitle.inactiveForeground': '#75715e',

    'peekView.border': '#75715e',
    'peekViewEditor.background': defaultColors.eerieBlack,
    'peekViewEditor.matchHighlightBackground': '#75715e',
    'peekViewResult.background': defaultColors.eerieBlack,
    'peekViewResult.matchHighlightBackground': '#75715e',
    'peekViewResult.selectionBackground': '#414339',
    'peekViewTitle.background': defaultColors.eerieBlack,

    'pickerGroup.foreground': '#75715e',

    'ports.iconRunningProcessForeground': '#ccccc7',

    'progressBar.background': '#75715e',

    'quickInput.background': defaultColors.eerieBlack,
    'quickInputList.focusBackground': '#373c3d',

    'scrollbar.shadow': '#00000000',
    'scrollbarSlider.activeBackground': '#565b66b3',
    'scrollbarSlider.background': '#565b6666',
    'scrollbarSlider.hoverBackground': '#565b6699',

    'selection.background': '#878b9180',

    'settings.focusedRowBackground': '#2c2c2b',

    'sideBar.background': defaultColors.eerieBlack,
    'sideBarSectionHeader.background': defaultColors.eerieBlack,

    'statusBar.background': defaultColors.eerieBlack,
    'statusBar.debuggingBackground': defaultColors.eerieBlack,
    'statusBar.noFolderBackground': defaultColors.eerieBlack,
    'statusBarItem.remoteBackground': defaultColors.eerieBlack,
    'statusBarItem.remoteForeground': defaultColors.mainColor.monokaiHaze,
    'statusBarItem.remoteHoverForeground': defaultColors.mainColor.monokaiHaze,

    'tab.activeBackground': defaultColors.eerieBlack,
    'tab.activeBorder': defaultColors.mainColor.monokaiHaze,
    'tab.border': '#00000000',
    'tab.hoverBackground': '#47526640',
    'tab.inactiveBackground': defaultColors.eerieBlack,
    'tab.inactiveForeground': '#ccccc7',
    'tab.lastPinnedBorder': '#414339',

    'terminal.ansiBlack': defaultColors.eerieBlack,
    'terminal.ansiBlue': defaultColors.mainColor.monokaiBlue,
    'terminal.ansiBrightBlack': '#282b2b',
    'terminal.ansiBrightBlue': defaultColors.mainColor.monokaiBlue,
    'terminal.ansiBrightCyan': '#a1efe4',
    'terminal.ansiBrightGreen': defaultColors.mainColor.monokaiGreen,
    'terminal.ansiBrightMagenta': '#ae81ff',
    'terminal.ansiBrightRed': '#f92672',
    'terminal.ansiBrightWhite': '#f9f8f5',
    'terminal.ansiBrightYellow': '#ffd866',
    'terminal.ansiCyan': '#a1efe4',
    'terminal.ansiGreen': defaultColors.mainColor.monokaiGreen,
    'terminal.ansiMagenta': '#ae81ff',
    'terminal.ansiRed': '#f92672',
    'terminal.ansiWhite': defaultColors.mainColor.monokaiHaze,
    'terminal.ansiYellow': '#ffd866',
    'terminal.background': defaultColors.eerieBlack,
    'terminal.foreground': defaultColors.mainColor.monokaiHaze,
    'terminalCursor.background': defaultColors.mainColor.monokaiHaze,
    'terminalCursor.foreground': defaultColors.mainColor.monokaiHaze,

    'titleBar.activeBackground': defaultColors.eerieBlack,
    'titleBar.inactiveBackground': defaultColors.eerieBlack,

    'widget.border': '#414339',
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
        foreground: '#E6DB74',
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: '#F92672',
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
        foreground: '#AE81FF',
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: '#AE81FF',
      },
    },
    {
      scope: 'constant.character, constant.other',
      settings: {
        foreground: '#AE81FF',
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
        foreground: '#F92672',
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: '#F92672',
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
        foreground: '#34D399',
        fontStyle: '',
      },
    },
    {
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: '#34D399',
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
        foreground: '#F92672',
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
        foreground: '#34D399',
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
        foreground: '#F44747',
        fontStyle: '',
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        foreground: '#F44747',
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
        foreground: '#75715E',
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: '#F92672',
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
        foreground: '#E6DB74',
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
        foreground: '#E6DB74',
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: '#F92672',
      },
    },
    {
      scope: 'markup.list',
      settings: {
        foreground: '#E6DB74',
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
        foreground: '#75715E',
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
        foreground: '#AE81FF',
      },
    },
    {
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: '#E6DB74',
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
        foreground: '#F44747',
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
        foreground: '#34D399',
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
