import { Directive } from 'vue';

/**
 * Directive to detect clicks outside of an element
 *
 * @example
 * ```vue
 * <template>
 *   <div v-click-outside="handleClickOutside">
 *     Dropdown content
 *   </div>
 * </template>
 *
 * <script setup>
 * const handleClickOutside = () => {
 *   isOpen.value = false
 * }
 * </script>
 * ```
 */
export declare const vClickOutside: Directive;
export default vClickOutside;
//# sourceMappingURL=clickOutside.d.ts.map