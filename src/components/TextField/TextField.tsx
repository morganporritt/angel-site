import type { TextFieldProps } from "./types";

export default function TextField({
  id,
  label,
  hint,
  className = "",
  type = "text",
  ...props
}: TextFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 text-left ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className="w-full rounded-lg border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        {...props}
      />
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
