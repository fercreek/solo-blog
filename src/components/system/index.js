// System design-language primitives — single import surface.
// Canonical source of truth. Docs + rollout: /DESIGN.md
export { default as SystemPanel } from './SystemPanel';
export { default as SystemBadge } from './SystemBadge';
export { default as SystemNotice } from './SystemNotice';
export { default as SystemButton } from '../SystemButton';
export { sys } from '../../styles/systemTokens';
