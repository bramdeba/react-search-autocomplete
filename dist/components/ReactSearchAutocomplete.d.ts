import { FocusEventHandler } from 'react';
import { DefaultTheme } from '../config/config';
export declare const DEFAULT_INPUT_DEBOUNCE = 200;
export declare const MAX_RESULTS = 10;
export interface ReactSearchAutocompleteProps<T> {
    items: T[];
    inputDebounce?: number;
    onSearch?: (keyword: string, results: T[]) => void;
    onHover?: (result: T) => void;
    onSelect?: (result: T) => void;
    onChange?: (keyword: string) => void;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onClear?: Function;
    showIcon?: boolean;
    showClear?: boolean;
    maxResults?: number;
    placeholder?: string;
    autoFocus?: boolean;
    styling?: DefaultTheme;
    resultStringKeyName?: string;
    inputSearchString?: string;
    formatResult?: Function;
    showNoResults?: boolean;
    showNoResultsText?: string;
    showItemsOnFocus?: boolean;
}
export default function ReactSearchAutocomplete<T>({ items, inputDebounce, onSearch, onHover, onSelect, onChange, onFocus, onClear, showIcon, showClear, maxResults, placeholder, autoFocus, styling, resultStringKeyName, inputSearchString, formatResult, showNoResults, showNoResultsText, showItemsOnFocus }: ReactSearchAutocompleteProps<T>): JSX.Element;
