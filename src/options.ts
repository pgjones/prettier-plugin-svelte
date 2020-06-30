import { SupportOption } from 'prettier';
import { TagName, allElements, preformattedElements, inlineElements } from './lib/elements';

declare module 'prettier' {
    interface RequiredOptions extends PluginOptions {}
}

export interface PluginOptions {
    svelteSortOrder: SortOrder;
    svelteStrictMode: boolean;
    svelteBracketNewLine: boolean;
    svelteAllowShorthand: boolean;
    inlineElements: TagName[],
    preformattedElements: TagName[];
}

export const options: Record<keyof PluginOptions, SupportOption> = {
    svelteSortOrder: {
        type: 'choice',
        default: 'scripts-styles-markup',
        description: 'Sort order for scripts, styles, and markup',
        choices: [
            { value: 'scripts-styles-markup' },
            { value: 'scripts-markup-styles' },
            { value: 'markup-styles-scripts' },
            { value: 'markup-scripts-styles' },
            { value: 'styles-markup-scripts' },
            { value: 'styles-scripts-markup' },
        ],
    },
    svelteStrictMode: {
        type: 'boolean',
        default: false,
        description: 'More strict HTML syntax: self-closed tags, quotes in attributes',
    },
    svelteBracketNewLine: {
        type: 'boolean',
        default: false,
        description: 'Put the `>` of a multiline element on a new line',
    },
<<<<<<< HEAD
    svelteAllowShorthand: {
        type: 'boolean',
        default: true,
        description: 'Option to enable/disable component attribute shorthand if attribute name and expressions are same',
    },
=======
    inlineElements: {
        type: 'choice',
        // @ts-ignore -- typings for `SupportOption` doesn't support arrays even though that's a valid type
        // https://github.com/prettier/prettier/blob/3654108ebe028fbc3063ceccb3c4ce0d4164510a/src/main/core-options.js#L167-L178
        default: [{ value: inlineElements }],
        description: 'In Svelte templates, elements whose tags will be treated as part of inline node sequences that will not be hard-wrapped.',
        array: true,
        choices: allElements.map(value => ({ value }))
    },
    preformattedElements: {
        type: 'choice',
        // @ts-ignore -- typings for `SupportOption` doesn't support arrays even though that's a valid type
        // https://github.com/prettier/prettier/blob/3654108ebe028fbc3063ceccb3c4ce0d4164510a/src/main/core-options.js#L167-L178
        default: [{ value: preformattedElements }],
        description: 'In Svelte templates, elements whose tag contents will be treated as preformatted, preventing whitespace sequences from being collapsed.',
        array: true,
        choices: allElements.map(value => ({ value }))
    }
>>>>>>> Configure options for tag handling
};

export type SortOrder =
    | 'scripts-styles-markup'
    | 'scripts-markup-styles'
    | 'markup-styles-scripts'
    | 'markup-scripts-styles'
    | 'styles-markup-scripts'
    | 'styles-scripts-markup';

export type SortOrderPart = 'scripts' | 'markup' | 'styles';

const sortOrderSeparator = '-';

export function parseSortOrder(sortOrder: SortOrder): SortOrderPart[] {
    return sortOrder.split(sortOrderSeparator) as SortOrderPart[];
}
