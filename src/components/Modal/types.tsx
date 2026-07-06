import type { ReactNode } from "react";

export interface ModalProps {
  /** Whether the modal is currently visible. */
  open: boolean;
  /** Called when the user requests to close (backdrop click, Esc, or the ✕). */
  onClose: () => void;
  /** Optional heading shown at the top of the modal. */
  title?: string;
  /** Modal body content. */
  children: ReactNode;
}
